import {ethers} from "ethers";
import store from "../store";
import {setWalletData} from "../store/accountWallet";
import {notification} from "antd";

const {ethereum} = window as any

export const connectInjectedWallet = async () => {
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  store.dispatch(setWalletData({address: accounts[0]}))
  let message = `Chung đẹp trai không?`
  const provider = await new ethers.providers.Web3Provider(ethereum);
  await provider.getSigner(accounts[0]).signMessage(message)
  const connected = await ethereum.isConnected();
  console.log(connected)
  store.dispatch(setWalletData({isConnected: connected}));
};


