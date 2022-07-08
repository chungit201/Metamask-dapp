/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IMarketServiceV1, IMarketServiceV1Interface } from '../IMarketServiceV1';

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'AddNFT',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Bid',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'Currency',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
		],
		name: 'EndAuction',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool',
				name: 'force',
				type: 'bool',
			},
		],
		name: 'ForceReturn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'auction',
				type: 'bool',
			},
		],
		name: 'Listed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'chainverseTeam',
				type: 'address',
			},
		],
		name: 'SetChainVerseTeam',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'communityTeam',
				type: 'address',
			},
		],
		name: 'SetCommunityTeam',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isSupport',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'listingFee',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'auctionFee',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'nftTeam',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'percentNFTTeam',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IMarketServiceV1.NFT',
				name: 'listingFee',
				type: 'tuple',
			},
		],
		name: 'SetNFT',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'percentChainVerseTeam',
				type: 'uint256',
			},
		],
		name: 'SetPercentProfit',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'buyer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'auction',
				type: 'bool',
			},
		],
		name: 'Sold',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
		],
		name: 'Unlisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		name: 'UpdatePrice',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bid',
				type: 'uint256',
			},
		],
		name: 'Withdraw',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'WithdrawProfit',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'bidPrice',
				type: 'uint256',
			},
		],
		name: 'bid',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		name: 'buy',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'initValue',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
		],
		name: 'createAuction',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'initValue',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'createAuctionBySig',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
		],
		name: 'endAuction',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'endAuctionBySig',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
		],
		name: 'getCurrentBid',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
		],
		name: 'list',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'listBySig',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
		],
		name: 'unList',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'unListBySig',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'listingId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		name: 'updatePrice',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'auctionId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'bidder',
				type: 'address',
			},
		],
		name: 'withdraw',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export class IMarketServiceV1__factory {
	static readonly abi = _abi;
	static createInterface(): IMarketServiceV1Interface {
		return new utils.Interface(_abi) as IMarketServiceV1Interface;
	}
	static connect(address: string, signerOrProvider: Signer | Provider): IMarketServiceV1 {
		return new Contract(address, _abi, signerOrProvider) as IMarketServiceV1;
	}
}