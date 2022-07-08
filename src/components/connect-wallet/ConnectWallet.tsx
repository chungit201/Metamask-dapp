import React, {useEffect, useState} from "react";
import {Button, Modal} from "antd";
import metamaskPng from "../../assets/images/image.psd.png";
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from '@ethersproject/providers';
import {injected} from "../../connect/wallet/connectors";
import {DEFAULT_CHAIN_ID, ENV, LIST_RPC_MAINNET, LIST_RPC_TESTNET} from "../../consts";
import {setWalletData} from "../../store/accountWallet";
import {ethers} from "ethers";

let isClickConnect = false;
const ConnectWallet: React.FunctionComponent = () => {
  const myAccount = useSelector((state: any) => state.wallet)
  const [error, setError] = useState<string>();
  const [isReady, setIsReady] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const {connector, account, library, error: web3Error, activate, chainId} = useWeb3React<Web3Provider>();
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      isClickConnect = true;
    };
  }, []);
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);

    }
  }, [activatingConnector, connector]);

  const connectInjectedWallet = () => {
    isClickConnect = true;
    setActivatingConnector(injected);
    activate(injected);
    setIsReady(!isReady);
  };

  // Activating - the wallet is attempting to open.
  const activating = injected === activatingConnector;

  // Connected - the account is connected.
  const connected = injected === connector;


  useEffect(() => {
    if (connected) {
      (async () => {
        if (chainId === DEFAULT_CHAIN_ID) {
          setIsReady(true);
          return;
        }

        if ((window as any).ethereum) {
          const ethereum = (window as any).ethereum;

          try {
            await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId: ENV === 'dev' ? '0x61' : '0x38'}], // chainId must be in hexadecimal numbers
            });

            setIsReady(true);
          } catch (e: any) {
            if (e.code === 4902 || e.code === -32603) {
              try {
                await ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: ENV === 'dev' ? '0x61' : '0x38', // Hexadecimal version of 80001, prefixed with 0x
                      chainName: `Binance Smart Chain ${ENV === 'dev' ? 'Testnet' : ''}`,
                      nativeCurrency: {
                        name: `BINANCE SMARTCHAIN ${ENV === 'dev' ? 'TESTNET' : ''}`,
                        symbol: `${ENV === 'dev' ? 'tBNB' : 'BNB'}`,
                        decimals: 18,
                      },
                      rpcUrls: ENV === 'dev' ? LIST_RPC_TESTNET : LIST_RPC_MAINNET,
                      blockExplorerUrls:
                        ENV === 'dev'
                          ? ['https://testnet.bscscan.com/']
                          : ['https://bscscan.com'],
                      iconUrls: [''],
                    },
                  ],
                });
              } catch (e) {
                setError('Add network error, please reload!');
              }
            }
          }
        } else {
          // CustomizeToast(
          // 	"error",
          // 	"Login Error",

          // 	() => {
          // 		window.location.reload();
          // 	}
          // );
          setError('Please install MetaMask browser extension and reload!');
          console.log('NotOk');
        }
      })();
    }
  }, [connected, account, isReady]);

  const {ethereum} = window as any

  const handleSignMessage = async () => {
    dispatch(setWalletData({address: account}))
    let message = `Chung đẹp trai không?`
    const provider = await new ethers.providers.Web3Provider(ethereum);
    await provider.getSigner(account as string).signMessage(message);
    const connected = await ethereum.isConnected();
    dispatch(setWalletData({isConnected: connected}));
  }

  useEffect(() => {
    if (isClickConnect) {
      if (isReady && library && account) {
        handleSignMessage()
      } else {
        // dispatch(updateState("NOT_LOGIN"));
      }
    }
  }, [isReady]);

  return (
    <div>
      <Modal className={"metamask-modal"} visible={!myAccount.isConnected} footer={null}>
        <div>
          <img width={"100%"} src={metamaskPng} alt=""/>
          <div className={"text-center"}>
            <Button size={"large"} onClick={connectInjectedWallet}>Connect</Button>
          </div>
        </div>
      </Modal>

    </div>
  )
}
export default ConnectWallet
