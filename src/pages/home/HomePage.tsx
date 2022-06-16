import React, {useEffect, useState} from "react";
import {Button, Card, Col, Input, Modal, notification, Row, Table} from "antd";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from "web3";
import {ethers} from "ethers";
import {injected} from "../../connect/wallet/connectors";
import {useSelector} from "react-redux";
import {Tabs} from 'antd';
import metamaskPng from "../../assets/images/image.psd.png"
import {connectInjectedWallet} from "../../wallet";

const {TabPane} = Tabs;

const HomePage: React.FunctionComponent = () => {
  const [address, setAddress] = useState("")
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const {ethereum, web3} = window as any
  // const [isConnected, setIsConnected] = useState(false);
  // const [activatingConnector, setActivatingConnector] = useState<any>();
  // const [userInfo, setUserInfo] = useState({});
  // const [isReady, setIsReady] = useState(false);
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
  const sendERC20Transaction = async (receiver: any, amount: any) => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
    let contractAbi: any = [{
      'constant': false,
      'inputs': [{
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address',
      }, {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      }],
      'name': 'transfer',
      'outputs': [{
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      }],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function',
    }];
    let tokenAddress = '0xe1Df8B289794a9e795141C3dE09a2fF4F3295e69'
    let fromAddress = myAccount.address;
    let tokenInst = new web3.eth.Contract(contractAbi, tokenAddress);
    tokenInst.methods.transfer(receiver, amount).send({
      from: fromAddress,
      gas: 300000
    }, function (error: any, result: any) {
      if (!error) {
        console.log(result);
      } else {
        console.log("errrrrr", error)
        setLoading(false)
        web3.eth.getBalance(fromAddress, (err: Error, bal: string) => {
        });
      }
      console.log("okokokkok")
    }).then((res: any) => {
      if (res) {
        setLoading(false)
      }
    })
    // tokenInst.methods.balanceOf(user.wallet_address).call().then((result:any) => {
    //   console.log(result)
    // }).catch(console.error);
  }
  const connected = injected === connector;


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    const data = new FormData(e.target);
    console.log(data.get("addr"))
    await sendERC20Transaction(myAccount.address, ethers.utils.parseEther("323"))
  }


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
      <Modal className={"metamask-modal"} visible={!myAccount.isConnected} footer={null}>
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
                <Button type={"primary"} className={"mx-1"} onClick={() => {
                  setIsModalVisible(true)
                }}>TRANSFER ETH</Button>
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
                <Button type={"dashed"}>API Documentation</Button>
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
