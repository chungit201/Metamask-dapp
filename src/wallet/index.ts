import {ethers} from "ethers";
import store from "../store";
import {setWalletData} from "../store/accountWallet";
import {notification} from "antd";
import Web3 from "web3";
const {ethereum} = window as any

//
// export const connectInjectedWallet = async () => {
//   const accounts = await ethereum.request({method: 'eth_requestAccounts'});
//   store.dispatch(setWalletData({address: accounts[0]}))
//   let message = `Chung đẹp trai không?`
//   const provider = await new ethers.providers.Web3Provider(ethereum);
//   await provider.getSigner(accounts[0]).signMessage(message)
//   const connected = await ethereum.isConnected();
//   console.log(connected)
//   store.dispatch(setWalletData({isConnected: connected}));
// };

export const sendERC20Transaction = async (receiver: any, amount: any, address: any) => {
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
  let fromAddress = address;
  let tokenInst = new web3.eth.Contract(contractAbi, tokenAddress);
  tokenInst.methods.transfer(receiver, amount).send({
    from: fromAddress,
    gas: 300000
  }, function (error: any, result: any) {
    if (!error) {
      console.log(result);
    } else {
      console.log("errrrrr", error)
      web3.eth.getBalance(fromAddress, (err: Error, bal: string) => {
      });
    }
    console.log("okokokkok")
  }).then((res: any) => {
    if (res) {
    }
  })
  // tokenInst.methods.balanceOf(user.wallet_address).call().then((result:any) => {
  //   console.log(result)
  // }).catch(console.error);
}


export const startPayment = async ({setError, setTxs, ether, addr}: any) => {
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
    console.log("rrre", err)
    setError(err.message)
    if (err.message === "Internal JSON-RPC error.") {
      notification.error({message: "Not enough BNB!"})
    }
  }
};

export const dataTest = {
  categories: [],
  game_info: {
    name: 'Slime',
    logo: 'https://e89d8b6f30bd225.kcdn.vn/chainverse/market/…5Z-332737611-435b397275c3d6786cf7a823e3b6401f.png',
    id: 3
  },

  image: "slime://B3C2E3H6SH5M5T1W5",
  image_preview: null,
  name: "Test",
  network: {
    network: 'BSCTESTNET',
    chain_id: 97,
    name: 'Binance Smart Chain Testnet'
  }
  ,
  nft: "0x62833F47FE1a9ea1537379161fCb82fe93B6B758",
  nft_supported: true, owner: "0xf0E56985fFFb7C15F95479b845917a1707a2B355",
  status: "PRE_PUBLISH",
  token_id: 156,
  type: null
}
