import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Button, notification} from "antd";
import {connectInjectedWallet} from "../wallet";
import {useDispatch, useSelector} from "react-redux";
import {ethers} from "ethers";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {Outlet} from "react-router-dom";
import {setWalletData} from "../store/accountWallet";
import logo from "../assets/images/logo-bnb.png"

const LayoutWeb: React.FunctionComponent = () => {
  const myAccount = useSelector((state: any) => state.wallet);
  console.log("mmmm", myAccount)
  const [balance, setBalance] = useState("")
  const {ethereum} = window as any;
  const dispatch = useDispatch();
  const {
    connector,
    library,
    deactivate,
    error: web3Error,
    activate,
    chainId
  }: any = useWeb3React<Web3Provider>();
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

  useEffect(() => {
    getBalanceAccount().then(() => {
    })
  }, [myAccount.address])

  const distConnect = async () => {
    deactivate();
    dispatch(setWalletData({isConnected: false}))
    notification.success({message: "Disconnect success fully"})
  }
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor: "#6c757d"}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight: "bold", color: "#FFFFFF"}}>
            <div>
              <img style={{marginBottom: "5px"}} className={"mx-1"} width={"25px"} src={logo} alt=""/>
              <span>BNB SCAN</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home" className={"text-light"}>HOME</Nav.Link>*/}
              {/*<Nav.Link href="#" className={"text-light"}>TRANSFER ETH</Nav.Link>*/}
              {/*<Nav.Link href="#link" className={"text-light"}>GET ETH</Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {!myAccount.isConnected ? (
              <Navbar.Text>
                {/*<div><Button onClick={connectInjectedWallet}>Connect now</Button></div>*/}
              </Navbar.Text>
            ) : (
              <Navbar.Text>
                <div className="d-flex">
                  <Button shape="round"
                          style={{lineHeight: "20px", color: "#000000"}}>BSB: {balance ? balance : "0.0"} </Button>
                  <Button type={"dashed"} className={"text-center mx-2"} onClick={distConnect}>Disconnect</Button>
                </div>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet/>
      </div>
      <div>
      </div>
    </div>
  )
}
export default LayoutWeb
