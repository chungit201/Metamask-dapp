import './App.css';
import {useEffect, useState} from 'react';
import {ethers} from "ethers";
import {Button, Input, Row, Col, notification} from "antd";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from '@ethersproject/providers';
import {Container, Navbar} from "react-bootstrap";
import {injected} from "./connect/wallet/connectors";
import {DEFAULT_CHAIN_ID, ENV, LIST_RPC_MAINNET, LIST_RPC_TESTNET} from "./consts";
import Web3 from "web3";


let isClickConnect = false;

function App() {
  const [address, setAddress] = useState("")
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const {ethereum, web3} = window as any
  const [isConnected, setIsConnected] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const [userInfo, setUserInfo] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [balance,setBalance] = useState()
  const {
    connector,
    account,
    library,
    deactivate,
    error: web3Error,
    activate,
    chainId
  }: any = useWeb3React<Web3Provider>();

  console.log(Web3.providers)
  const startPayment = async ({setError, setTxs, ether, addr}: any) => {
    try {
      await ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ether, addr});
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err: any) {
      setError(err.message)
    }
  };
  const connected = injected === connector;


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    const data = new FormData(e.target);
    console.log(data.get("addr"))
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    })
    setLoading(false)
  };

  const distConnect = async () => {
    deactivate();
    setAddress("")
    notification.success({message: "Disconnect success fully"})
  }

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

    const chain_id = web3.utils.hexToNumber(chainId);
    console.log("handleChainChanged", chain_id)
    if (DEFAULT_CHAIN_ID !== chain_id) {

    }
    console.log("Handling 'chainChanged' event with payload", web3.utils.isHex(chainId));
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
    } else if (accounts[0] !== address) {
      setAddress(accounts[0])
    }
  };

  useEffect(() => {
    console.log(chainId)
    setAddress(account)
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
                console.log(e)
              }
            }
          }
        } else {
          console.log('NotOk');
        }
      })();
    }
  }, [connected, account, isReady]);


  const connectInjectedWallet = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts)
    setAddress(accounts[0]);
    let message = `Chung đẹp trai không?`
    const provider = await new ethers.providers.Web3Provider(ethereum);
    await provider.getSigner(accounts[0]).signMessage(message)

  };
  console.log(address)


  useEffect(() => {
    getBalanceAccount();
  }, [address]);

  const getBalanceAccount = async ()=>{
   const provider = new ethers.providers.Web3Provider(ethereum)
    if(address){
     await provider.getBalance(address)
        .then((balanceResult:any) => {
          setBalance(ethers.utils.formatEther(balanceResult) as any)
        })
    };
  }

  function ellipseAddress(address: string = '', width: number = 10): string {
    return `${address.slice(0, width)}...${address.slice(-width)}`;
  }
  return (
    <div className="App" style={{height: "100vh"}}>
      <Navbar style={{backgroundColor: "#6c757d"}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight: "bold", color: "#FFFFFF"}}>REACT-DAPP</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            {!address ? (
              <Navbar.Text>
                <div className="text-center"><Button onClick={connectInjectedWallet}>Connect now</Button></div>
              </Navbar.Text>
            ) : (
              <Navbar.Text>
                <div className="d-flex">
                  <Button  shape="round"  style={{lineHeight: "20px",color:"#000000"}}>BSB: {balance? balance :"0.0"} </Button>
                  <Button type={"dashed"} className={"text-center mx-2"} onClick={distConnect}>Disconnect</Button>
                </div>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className={"d-flex justify-content-center align-items-center h-100"}>
        <Col xl={8} xs={18}>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div
              className="p-4 credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
              <main className="mt-4">
                <h4 className="text-xl font-semibold text-gray-700 text-center">
                  SEND BSB PAYMENT
                </h4>
                {address && <div>My account: {ellipseAddress(address,5)}</div>}
                <div className="">
                  <div className="my-3">
                    <Input
                      type="text"
                      name="addr"
                      className="input input-bordered block w-full focus:ring focus:outline-none"
                      placeholder="Recipient Address"
                    />
                  </div>
                  <div className="my-3">
                    <Input
                      name="ether"
                      type="text"
                      className="input input-bordered block w-full focus:ring focus:outline-none"
                      placeholder="Amount in ETH"
                    />
                  </div>
                </div>
              </main>
              <footer>
                <div className={"text-center"}>
                  <Button
                    loading={loading}
                    htmlType="submit"
                    style={{backgroundColor: "#000000", color: "#FFFFFF"}}
                    className="mt-2"
                    size={"large"}
                  >
                    Pay now
                  </Button>
                </div>
              </footer>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
