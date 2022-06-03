import {DEFAULT_CHAIN_ID, ENV, LIST_RPC_MAINNET, LIST_RPC_TESTNET} from "../../../consts";
import {injected} from "../../../connect/wallet/connectors";


import React, {useEffect, useState} from 'react';
import useLoadUserData from "../LoadAccountData";
import Web3 from "web3";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";

const {ethereum} = window as any
const LoadData = ({children}: any) => {
  const {user, loading} = useLoadUserData();
  const {
    connector,
    account,
    library,
    deactivate,
    error: web3Error,
    activate,
    chainId
  }: any = useWeb3React<Web3Provider>();

  useEffect(() => {
    ethereum?.on("accountsChanged", handleAccountChange);
    ethereum?.on('networkChanged', handleNetworkChanged)
    ethereum?.on('chainChanged', handleChainChanged)
    return () => {
      ethereum?.removeListener("accountsChanged", handleAccountChange);
      ethereum?.removeListener("networkChanged", handleNetworkChanged);
      ethereum?.removeListener("chainChanged", handleChainChanged);

    };
  }, []);

  const handleChainChanged = (chainId: string | number) => {
    console.log("Handling 'handleChainChanged' event");

    const chain_id = Web3.utils.hexToNumber(chainId);
    console.log("handleChainChanged", chain_id)
    if (DEFAULT_CHAIN_ID !== chain_id) {

    }
    console.log("Handling 'chainChanged' event with payload", Web3.utils.isHex(chainId));
    activate(injected);
  };


  const handleNetworkChanged = (networkId: string | number) => {
    console.log("Handling 'handleNetworkChanged' event");
    console.log("net-word", networkId)
    if (DEFAULT_CHAIN_ID !== networkId) {

    }
    // console.log("Handling 'networkChanged' event with payload", networkId);
    activate(injected);
  };


  const handleAccountChange = (accounts: any) => {
    if (accounts.length === 0) {
      console.log("Please connect to metamask");
    }
    console.log("changAccount")
  };
  const connected = injected === connector;
  useEffect(() => {
    if (connected) {
      (async () => {
        if (chainId === DEFAULT_CHAIN_ID) {
          return;
        }
        if ((window as any).ethereum) {
          const ethereum = (window as any).ethereum;
          try {
            await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId: ENV === 'dev' ? '0x61' : '0x38'}], // chainId must be in hexadecimal numbers
            });
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
                console.log(e)
              }
            }
          }
        } else {
          console.log('NotOk');
        }
      })();
    }
  }, [connected, account,]);


  return (<>
    {children}
  </>);
}

export default LoadData;


