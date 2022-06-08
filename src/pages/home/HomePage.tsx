import React, {useEffect, useState} from "react";
import {Button, Card, Col, Input, Modal, notification, Row, Table} from "antd";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from "web3";
import {ethers} from "ethers";
import {injected} from "../../connect/wallet/connectors";
import {useSelector} from "react-redux";
import {Tabs} from 'antd';
import metamaskPng from  "../../assets/images/image.psd.png"
import {connectInjectedWallet} from "../../wallet";
const {TabPane} = Tabs;

const HomePage: React.FunctionComponent = () => {
  const [address, setAddress] = useState("")
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const {ethereum, web3} = window as any
  const [isConnected, setIsConnected] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const [userInfo, setUserInfo] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const myAccount = useSelector((state: any) => state.wallet)
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
      console.log("rrre",error)
      setError(err.message)
      if(err.message == "Internal JSON-RPC error."){
        notification.error({message:"Not enough money!"})
      }
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


  useEffect(() => {
    getBalanceAccount();
  }, [myAccount.address]);

  const getBalanceAccount = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    if (myAccount.address) {
      await provider.getBalance(myAccount.address)
        .then((balanceResult: any) => {
          setBalance(ethers.utils.formatEther(balanceResult) as any)
        })
    }
    ;
  }

  function ellipseAddress(address: string = '', width: number = 10): string {
    return `${myAccount.address.slice(0, width)}...${myAccount.address.slice(-width)}`;
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <Modal  className={"metamask-modal"}  visible={!myAccount.isConnected}  footer={null} >
        <div>
          <img width={"100%"} src={metamaskPng} alt=""/>
         <div className={"text-center"}>
           <Button size={"large"} onClick={connectInjectedWallet}>Connect</Button>
         </div>
        </div>
      </Modal>
      <Modal footer={null} title="SEND_REQUEST" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div>
                <main className="mt-4">
                  <h4 className="text-xl font-semibold text-gray-700 text-center">
                    SEND BSB PAYMENT
                  </h4>
                  {myAccount.address && <div>My account: {ellipseAddress(myAccount.address, 5)}</div>}
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
      </Modal>
      <div>
        <img
          src="http://images.ctfassets.net/sdlntm3tthp6/58h3dCoRir6G3Ou3hxC8A0/c84322ade8e6724f9a33f0013f6430cf/BNB-Analysis-banner__1_.jpg"
          alt=""
          style={{width: "100%"}}
        />
      </div>
      <div className={"container"} style={{marginTop: "-66px"}}>
        <Row gutter={16}>
          <Col xl={12} xs={24} className={"py-2"}>
            <Card title={"Overview"}
                  className={"credit-card w-full lg:w-1/2 sm:w-auto shadow-sm mx-auto rounded-xl bg-white"}>
              <div className={"py-1"}>Address: <span
                style={{color: "rgb(147,147,147)", fontWeight: "600"}}>{myAccount.address} </span></div>
              <div className={"py-1"}>Balance: {balance ? balance : "0.0"} BNB</div>
              <div className={"py-1"}>Token: BEP-20 Token Txns</div>
              <div className={"d-flex py-1"}>
                <Button type={"primary"} className={"mx-1"} onClick={()=>{setIsModalVisible(true)}}>TRANSFER ETH</Button>
                <a href="https://testnet.binance.org/faucet-smart">
                  <Button type={"primary"} className={"mx-1"} target={"_blank"}>GET ETH</Button>
                </a>
              </div>
            </Card>
          </Col>

          <Col xl={12} xs={24} className={"p-2"}>
            <Card title={"More Info"}
                  className={"credit-card w-full lg:w-1/2 sm:w-auto shadow-sm mx-auto rounded-xl bg-white"}>
              <div className={"py-1"}>Address: <span
                style={{color: "rgb(147,147,147)", fontWeight: "600"}}>{myAccount.address} </span></div>
              <div className={"py-1"}>Balance: {balance ? balance : "0.0"} BNB</div>
              <div className={"py-1"}>Token: BEP-20 Token Txns</div>
              <div className={"py-1"}>
                <Button type={"dashed"}  >API Documentation</Button>
              </div>
            </Card>
          </Col>

        </Row>
        <Row gutter={16}>
          <Col span={24} className={"py-2"}>
            <Tabs style={{padding: "24px"}}
                  className={"credit-card w-full lg:w-1/2 sm:w-auto shadow-sm mx-auto rounded-xl bg-white"}
                  defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Transactions" key="1">
                <Table dataSource={dataSource} columns={columns}/>
              </TabPane>
              <TabPane tab="BEP-20 Token Txns" key="2">
                <Table dataSource={dataSource} columns={columns}/>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default HomePage
