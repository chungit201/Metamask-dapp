/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SCE, SCEInterface } from "../SCE";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "BurnForReason",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "itx",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BP",
    outputs: [
      {
        internalType: "contract BPContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SIGNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "burnFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "itx",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expire",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInPreventBotMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bp",
        type: "address",
      },
    ],
    name: "setBPContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "togglePreventBotMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252601a81527f536c696d6520526f79616c6520437570696420457373656e636500000000000060208083019182528351808501909452600384526253434560e81b908401528151919291620000729160049162000247565b5080516200008890600590602084019062000247565b505050620000cc7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66000805160206200224c8339815191526200014360201b60201c565b620001077fe2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f706000805160206200224c83398151915262000143565b620001226000805160206200224c8339815191528062000143565b6200013d6000805160206200224c8339815191523362000197565b6200032a565b600082815260208190526040902060010154819060405184907fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff90600090a460009182526020829052604090912060010155565b620001a38282620001a7565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620001a3576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002033390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200025590620002ed565b90600052602060002090601f016020900481019282620002795760008555620002c4565b82601f106200029457805160ff1916838001178555620002c4565b82800160010185558215620002c4579182015b82811115620002c4578251825591602001919060010190620002a7565b50620002d2929150620002d6565b5090565b5b80821115620002d25760008155600101620002d7565b600181811c908216806200030257607f821691505b602082108114156200032457634e487b7160e01b600052602260045260246000fd5b50919050565b611f12806200033a6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806372b85a1d1161010f578063a457c2d7116100a2578063d539139311610071578063d53913931461046b578063d547741f14610492578063dd62ed3e146104a5578063e58378bb146104de57600080fd5b8063a457c2d71461040d578063a9059cbb14610420578063b71570ad14610433578063b89456701461044057600080fd5b806395d89b41116100de57806395d89b41146103a65780639cfdbd5e146103ae578063a1ebf35d146103de578063a217fddf1461040557600080fd5b806372b85a1d1461033657806378f745601461034957806379cc67901461035c57806391d148541461036f57600080fd5b8063313ce5671161018757806342966c681161015657806342966c68146102df57806350657bad146102f257806362f850d5146102fa57806370a082311461030d57600080fd5b8063313ce5671461029757806336568abe146102a657806339509351146102b957806340c10f19146102cc57600080fd5b806318160ddd116101c357806318160ddd1461023a57806323b872dd1461024c578063248a9ca31461025f5780632f2ff15d1461028257600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063095ea7b314610227575b600080fd5b6101fd6101f8366004611bd6565b610505565b60405190151581526020015b60405180910390f35b61021a61053c565b6040516102099190611dbc565b6101fd610235366004611b73565b6105ce565b6003545b604051908152602001610209565b6101fd61025a366004611a9c565b6105e4565b61023e61026d366004611b9c565b60009081526020819052604090206001015490565b610295610290366004611bb4565b6106af565b005b60405160128152602001610209565b6102956102b4366004611bb4565b6106da565b6101fd6102c7366004611b73565b610766565b6102956102da366004611b73565b61079d565b6102956102ed366004611b9c565b6107d2565b6102956107df565b610295610308366004611c4c565b61081f565b61023e61031b366004611a50565b6001600160a01b031660009081526001602052604090205490565b610295610344366004611ad7565b610869565b610295610357366004611a50565b6109fd565b61029561036a366004611b73565b610abf565b6101fd61037d366004611bb4565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61021a610b42565b6007546103c69061010090046001600160a01b031681565b6040516001600160a01b039091168152602001610209565b61023e7fe2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f7081565b61023e600081565b6101fd61041b366004611b73565b610b51565b6101fd61042e366004611b73565b610c04565b6007546101fd9060ff1681565b61023e61044e366004611bfe565b805160208183018101805160068252928201919093012091525481565b61023e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102956104a0366004611bb4565b610c11565b61023e6104b3366004611a6a565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61023e7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b60006001600160e01b03198216637965db0b60e01b148061053657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606004805461054b90611e9e565b80601f016020809104026020016040519081016040528092919081815260200182805461057790611e9e565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b5050505050905090565b60006105db338484610c37565b50600192915050565b60006105f1848484610d5c565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156106905760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106a4853361069f8685611e40565b610c37565b506001949350505050565b6000828152602081905260409020600101546106cb8133610f6e565b6106d58383610fec565b505050565b6001600160a01b03811633146107585760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610687565b610762828261108a565b5050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916105db91859061069f908690611e09565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66107c88133610f6e565b6106d58383611109565b6107dc33826111f4565b50565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e61080a8133610f6e565b506007805460ff19811660ff90911615179055565b61082933846111f4565b7f32574fc019df48df87cf4dd00367bd1fd7fd7296d4e675c3f00484bd5ea43d2983838360405161085c93929190611def565b60405180910390a1505050565b600083116108b95760405162461bcd60e51b815260206004820152600e60248201527f696e76616c696420616d6f756e740000000000000000000000000000000000006044820152606401610687565b600685856040516108cb929190611d07565b9081526020016040518091039020546000146109295760405162461bcd60e51b815260206004820152600f60248201527f6974782077617320636c61696d656400000000000000000000000000000000006044820152606401610687565b61093786868686868661134f565b6109835760405162461bcd60e51b815260206004820152600f60248201527f77726f6e67207369676e617475726500000000000000000000000000000000006044820152606401610687565b8260068686604051610996929190611d07565b908152604051908190036020019020556109b08684611109565b856001600160a01b03167f4817f9bf3452f714053dae9894906f8f5fcc0498fa6296c49613657534abb2018686866040516109ed93929190611d98565b60405180910390a2505050505050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e610a288133610f6e565b6001600160a01b03821615610a7f5760405162461bcd60e51b815260206004820152600f60248201527f696e76616c6964206164647265737300000000000000000000000000000000006044820152606401610687565b50600780546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b6000610acb83336104b3565b905081811015610b295760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b6064820152608401610687565b610b38833361069f8585611e40565b6106d583836111f4565b60606005805461054b90611e9e565b3360009081526002602090815260408083206001600160a01b038616845290915281205482811015610beb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610687565b610bfa338561069f8685611e40565b5060019392505050565b60006105db338484610d5c565b600082815260208190526040902060010154610c2d8133610f6e565b6106d5838361108a565b6001600160a01b038316610c995760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610687565b6001600160a01b038216610cfa5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610687565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610dd85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610687565b6001600160a01b038216610e3a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610687565b610e45838383611485565b6001600160a01b03831660009081526001602052604090205481811015610ed45760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610687565b610ede8282611e40565b6001600160a01b038086166000908152600160205260408082209390935590851681529081208054849290610f14908490611e09565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f6091815260200190565b60405180910390a350505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661076257610faa816001600160a01b03166014611509565b610fb5836020611509565b604051602001610fc6929190611d17565b60408051601f198184030181529082905262461bcd60e51b825261068791600401611dbc565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610762576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556110463390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610762576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b03821661115f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610687565b61116b60008383611485565b806003600082825461117d9190611e09565b90915550506001600160a01b038216600090815260016020526040812080548392906111aa908490611e09565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166112545760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610687565b61126082600083611485565b6001600160a01b038216600090815260016020526040902054818110156112d45760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610687565b6112de8282611e40565b6001600160a01b0384166000908152600160205260408120919091556003805484929061130c908490611e40565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d4f565b6000824211156113a15760405162461bcd60e51b815260206004820152601060248201527f7369676e617475726520657870697265000000000000000000000000000000006044820152606401610687565b60008787878787306040516020016113be96959493929190611cbf565b604051602081830303815290604052805190602001209050600061142f826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050600061143d82866116ff565b6001600160a01b031660009081527f059f08e7d7ba1c82eddc57afae67f80df851baf38a099607a779825038c3ce5b602052604090205460ff169a9950505050505050505050565b60075460ff16156106d557600754604051637e2f3afd60e01b81526001600160a01b03858116600483015284811660248301526044820184905261010090920490911690637e2f3afd90606401600060405180830381600087803b1580156114ec57600080fd5b505af1158015611500573d6000803e3d6000fd5b50505050505050565b60606000611518836002611e21565b611523906002611e09565b67ffffffffffffffff81111561154957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611573576020820181803683370190505b509050600360fc1b8160008151811061159c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106115d957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006115fd846002611e21565b611608906001611e09565b90505b60018111156116a9577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061165757634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061167b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936116a281611e87565b905061160b565b5083156116f85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610687565b9392505050565b6000806000808451604114156117295750505060208201516040830151606084015160001a6117b8565b8451604014156117705750505060408201516020830151907f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060ff1c601b016117b8565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610687565b6117c4868285856117ce565b9695505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561184b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610687565b8360ff16601b148061186057508360ff16601c145b6118b75760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610687565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa15801561190b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661196e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610687565b95945050505050565b600067ffffffffffffffff8084111561199257611992611eef565b604051601f8501601f19908116603f011681019082821181831017156119ba576119ba611eef565b816040528093508581528686860111156119d357600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611a0457600080fd5b919050565b60008083601f840112611a1a578182fd5b50813567ffffffffffffffff811115611a31578182fd5b602083019150836020828501011115611a4957600080fd5b9250929050565b600060208284031215611a61578081fd5b6116f8826119ed565b60008060408385031215611a7c578081fd5b611a85836119ed565b9150611a93602084016119ed565b90509250929050565b600080600060608486031215611ab0578081fd5b611ab9846119ed565b9250611ac7602085016119ed565b9150604084013590509250925092565b60008060008060008060a08789031215611aef578182fd5b611af8876119ed565b9550602087013567ffffffffffffffff80821115611b14578384fd5b611b208a838b01611a09565b909750955060408901359450606089013593506080890135915080821115611b46578283fd5b508701601f81018913611b57578182fd5b611b6689823560208401611977565b9150509295509295509295565b60008060408385031215611b85578182fd5b611b8e836119ed565b946020939093013593505050565b600060208284031215611bad578081fd5b5035919050565b60008060408385031215611bc6578182fd5b82359150611a93602084016119ed565b600060208284031215611be7578081fd5b81356001600160e01b0319811681146116f8578182fd5b600060208284031215611c0f578081fd5b813567ffffffffffffffff811115611c25578182fd5b8201601f81018413611c35578182fd5b611c4484823560208401611977565b949350505050565b600080600060408486031215611c60578283fd5b83359250602084013567ffffffffffffffff811115611c7d578283fd5b611c8986828701611a09565b9497909650939450505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60006bffffffffffffffffffffffff19808960601b1683528688601485013795909101601481019490945250603483019190915260601b909116605482015260680192915050565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d4f816017850160208801611e57565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611d8c816028840160208801611e57565b01602801949350505050565b604081526000611dac604083018587611c96565b9050826020830152949350505050565b6020815260008251806020840152611ddb816040850160208701611e57565b601f01601f19169190910160400192915050565b83815260406020820152600061196e604083018486611c96565b60008219821115611e1c57611e1c611ed9565b500190565b6000816000190483118215151615611e3b57611e3b611ed9565b500290565b600082821015611e5257611e52611ed9565b500390565b60005b83811015611e72578181015183820152602001611e5a565b83811115611e81576000848401525b50505050565b600081611e9657611e96611ed9565b506000190190565b600181811c90821680611eb257607f821691505b60208210811415611ed357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000ab19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e";

export class SCE__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SCE> {
    return super.deploy(overrides || {}) as Promise<SCE>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SCE {
    return super.attach(address) as SCE;
  }
  connect(signer: Signer): SCE__factory {
    return super.connect(signer) as SCE__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCEInterface {
    return new utils.Interface(_abi) as SCEInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SCE {
    return new Contract(address, _abi, signerOrProvider) as SCE;
  }
}
