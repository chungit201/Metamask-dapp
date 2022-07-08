import React, {useEffect, useMemo, useState} from "react";
import {Button, Card, Col, Input, Modal, notification, Row, Table} from "antd";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from "web3";
import {ethers,BigNumber} from "ethers";
import {injected} from "../../connect/wallet/connectors";
import {useSelector} from "react-redux";
import {Tabs} from 'antd';
import metamaskPng from "../../assets/images/image.psd.png"
import {startPayment} from "../../wallet";
import useClaimSCE from "../../service/nft/useClaimToken";
import ConnectWallet from "../../components/connect-wallet/ConnectWallet";

const {TabPane} = Tabs;

const HomePage: React.FunctionComponent = () => {
  const [address, setAddress] = useState("")
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const {ethereum, web3} = window as any
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const myAccount = useSelector((state: any) => state.wallet)
  const {
    connector,
    error: web3Error,
    account,
    library
  }: any = useWeb3React<Web3Provider>();
  const { claim, loading: loading_claim, } = useClaimSCE();
  console.log(Web3.providers)
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
  }

  const claimToken = async () =>{
    try {
        await claim(
          {
            user: address,
            itx: "ClaimSCE.215f38a4-d85a-4aa1-8df5-51dbb8cad91c",
            amount: ethers.utils.parseEther("12000"),
            expire: BigNumber.from(16233242342),
            signature: "0xf5a8621ebbb5428eab3fc558e0f781660f643eeb82b36d8240d85acafef5560a7bdda62bf7c905462142e27226b2820d5f03dff5986e07d342853370d199905b1b",
          },
          {
            onError: (message) => {

            },
            onSuccess: () => {

            },
          }
        );
    } catch (e) {
    }
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
  let listing_id = 0;

  return (
    <div>
      <ConnectWallet/>
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
                <Button onClick={claimToken} type={"primary"} className={"mx-1"} target={"_blank"}>Claim token</Button>
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
