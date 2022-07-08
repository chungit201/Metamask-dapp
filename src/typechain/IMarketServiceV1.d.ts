/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
	ethers,
	EventFilter,
	Signer,
	BigNumber,
	BigNumberish,
	PopulatedTransaction,
	BaseContract,
	ContractTransaction,
	Overrides,
	PayableOverrides,
	CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface IMarketServiceV1Interface extends ethers.utils.Interface {
	functions: {
		'bid(uint256,uint256)': FunctionFragment;
		'buy(uint256,uint256)': FunctionFragment;
		'createAuction(address,uint256,uint256,address,uint256)': FunctionFragment;
		'createAuctionBySig(address,uint256,uint256,address,uint256,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
		'endAuction(uint256)': FunctionFragment;
		'endAuctionBySig(uint256,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
		'getCurrentBid(uint256,address)': FunctionFragment;
		'list(address,uint256,uint256,address)': FunctionFragment;
		'listBySig(address,uint256,uint256,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
		'unList(uint256)': FunctionFragment;
		'unListBySig(uint256,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
		'updatePrice(uint256,uint256)': FunctionFragment;
		'withdraw(uint256,address)': FunctionFragment;
	};

	encodeFunctionData(functionFragment: 'bid', values: [BigNumberish, BigNumberish]): string;
	encodeFunctionData(functionFragment: 'buy', values: [BigNumberish, BigNumberish]): string;
	encodeFunctionData(
		functionFragment: 'createAuction',
		values: [string, BigNumberish, BigNumberish, string, BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: 'createAuctionBySig',
		values: [
			string,
			BigNumberish,
			BigNumberish,
			string,
			BigNumberish,
			BigNumberish,
			BigNumberish,
			BigNumberish,
			BytesLike,
			BytesLike
		]
	): string;
	encodeFunctionData(functionFragment: 'endAuction', values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: 'endAuctionBySig',
		values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
	): string;
	encodeFunctionData(functionFragment: 'getCurrentBid', values: [BigNumberish, string]): string;
	encodeFunctionData(functionFragment: 'list', values: [string, BigNumberish, BigNumberish, string]): string;
	encodeFunctionData(
		functionFragment: 'listBySig',
		values: [
			string,
			BigNumberish,
			BigNumberish,
			string,
			BigNumberish,
			BigNumberish,
			BigNumberish,
			BytesLike,
			BytesLike
		]
	): string;
	encodeFunctionData(functionFragment: 'unList', values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: 'unListBySig',
		values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
	): string;
	encodeFunctionData(functionFragment: 'updatePrice', values: [BigNumberish, BigNumberish]): string;
	encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, string]): string;

	decodeFunctionResult(functionFragment: 'bid', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'buy', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'createAuction', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'createAuctionBySig', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'endAuction', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'endAuctionBySig', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'getCurrentBid', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'list', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'listBySig', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'unList', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'unListBySig', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'updatePrice', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

	events: {
		'AddNFT(address,bool)': EventFragment;
		'Bid(uint256,address,uint256)': EventFragment;
		'Currency(address,bool)': EventFragment;
		'EndAuction(uint256)': EventFragment;
		'ForceReturn(bool)': EventFragment;
		'Listed(uint256,address,uint256,bool)': EventFragment;
		'SetChainVerseTeam(address)': EventFragment;
		'SetCommunityTeam(address)': EventFragment;
		'SetNFT(address,tuple)': EventFragment;
		'SetPercentProfit(uint256)': EventFragment;
		'Sold(uint256,address,uint256,address,bool)': EventFragment;
		'Unlisted(uint256)': EventFragment;
		'UpdatePrice(uint256,uint256)': EventFragment;
		'Withdraw(uint256,address,address,uint256)': EventFragment;
		'WithdrawProfit(address,address,uint256,address)': EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: 'AddNFT'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Bid'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Currency'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'EndAuction'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'ForceReturn'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Listed'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'SetChainVerseTeam'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'SetCommunityTeam'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'SetNFT'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'SetPercentProfit'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Sold'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Unlisted'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'UpdatePrice'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'WithdrawProfit'): EventFragment;
}

export class IMarketServiceV1 extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this;
	attach(addressOrName: string): this;
	deployed(): Promise<this>;

	listeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
	): Array<TypedListener<EventArgsArray, EventArgsObject>>;
	off<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	on<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	once<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
	): this;

	listeners(eventName?: string): Array<Listener>;
	off(eventName: string, listener: Listener): this;
	on(eventName: string, listener: Listener): this;
	once(eventName: string, listener: Listener): this;
	removeListener(eventName: string, listener: Listener): this;
	removeAllListeners(eventName?: string): this;

	queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
		event: TypedEventFilter<EventArgsArray, EventArgsObject>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

	interface: IMarketServiceV1Interface;

	functions: {
		bid(
			auctionId: BigNumberish,
			bidPrice: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		buy(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		createAuction(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		createAuctionBySig(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		endAuction(
			auctionId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		endAuctionBySig(
			auctionId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		getCurrentBid(auctionId: BigNumberish, bidder: string, overrides?: CallOverrides): Promise<[BigNumber]>;

		list(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		listBySig(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		unList(
			listingId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		unListBySig(
			listingId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		updatePrice(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		withdraw(
			auctionId: BigNumberish,
			bidder: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;
	};

	bid(
		auctionId: BigNumberish,
		bidPrice: BigNumberish,
		overrides?: PayableOverrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	buy(
		listingId: BigNumberish,
		price: BigNumberish,
		overrides?: PayableOverrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	createAuction(
		nft: string,
		tokenId: BigNumberish,
		initValue: BigNumberish,
		currency: string,
		duration: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	createAuctionBySig(
		nft: string,
		tokenId: BigNumberish,
		initValue: BigNumberish,
		currency: string,
		duration: BigNumberish,
		nonce: BigNumberish,
		expiry: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	endAuction(
		auctionId: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	endAuctionBySig(
		auctionId: BigNumberish,
		nonce: BigNumberish,
		expiry: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	getCurrentBid(auctionId: BigNumberish, bidder: string, overrides?: CallOverrides): Promise<BigNumber>;

	list(
		nft: string,
		tokenId: BigNumberish,
		price: BigNumberish,
		currency: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	listBySig(
		nft: string,
		tokenId: BigNumberish,
		price: BigNumberish,
		currency: string,
		nonce: BigNumberish,
		expiry: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	unList(
		listingId: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	unListBySig(
		listingId: BigNumberish,
		nonce: BigNumberish,
		expiry: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	updatePrice(
		listingId: BigNumberish,
		price: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	withdraw(
		auctionId: BigNumberish,
		bidder: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	callStatic: {
		bid(auctionId: BigNumberish, bidPrice: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		buy(listingId: BigNumberish, price: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		createAuction(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		createAuctionBySig(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		endAuction(auctionId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		endAuctionBySig(
			auctionId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: CallOverrides
		): Promise<boolean>;

		getCurrentBid(auctionId: BigNumberish, bidder: string, overrides?: CallOverrides): Promise<BigNumber>;

		list(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		listBySig(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		unList(listingId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		unListBySig(
			listingId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: CallOverrides
		): Promise<boolean>;

		updatePrice(listingId: BigNumberish, price: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		withdraw(auctionId: BigNumberish, bidder: string, overrides?: CallOverrides): Promise<boolean>;
	};

	filters: {
		AddNFT(nft?: null, status?: null): TypedEventFilter<[string, boolean], { nft: string; status: boolean }>;

		Bid(
			auctionId?: null,
			bidder?: null,
			amount?: null
		): TypedEventFilter<
			[BigNumber, string, BigNumber],
			{ auctionId: BigNumber; bidder: string; amount: BigNumber }
		>;

		Currency(
			currency?: null,
			status?: null
		): TypedEventFilter<[string, boolean], { currency: string; status: boolean }>;

		EndAuction(auctionId?: null): TypedEventFilter<[BigNumber], { auctionId: BigNumber }>;

		ForceReturn(force?: null): TypedEventFilter<[boolean], { force: boolean }>;

		Listed(
			listingId?: null,
			nft?: string | null,
			tokenId?: null,
			auction?: null
		): TypedEventFilter<
			[BigNumber, string, BigNumber, boolean],
			{
				listingId: BigNumber;
				nft: string;
				tokenId: BigNumber;
				auction: boolean;
			}
		>;

		SetChainVerseTeam(chainverseTeam?: null): TypedEventFilter<[string], { chainverseTeam: string }>;

		SetCommunityTeam(communityTeam?: null): TypedEventFilter<[string], { communityTeam: string }>;

		SetNFT(
			nft?: null,
			listingFee?: null
		): TypedEventFilter<
			[
				string,
				[boolean, BigNumber, BigNumber, string, BigNumber] & {
					isSupport: boolean;
					listingFee: BigNumber;
					auctionFee: BigNumber;
					nftTeam: string;
					percentNFTTeam: BigNumber;
				}
			],
			{
				nft: string;
				listingFee: [boolean, BigNumber, BigNumber, string, BigNumber] & {
					isSupport: boolean;
					listingFee: BigNumber;
					auctionFee: BigNumber;
					nftTeam: string;
					percentNFTTeam: BigNumber;
				};
			}
		>;

		SetPercentProfit(
			percentChainVerseTeam?: null
		): TypedEventFilter<[BigNumber], { percentChainVerseTeam: BigNumber }>;

		Sold(
			listingId?: null,
			nft?: string | null,
			tokenId?: null,
			buyer?: null,
			auction?: null
		): TypedEventFilter<
			[BigNumber, string, BigNumber, string, boolean],
			{
				listingId: BigNumber;
				nft: string;
				tokenId: BigNumber;
				buyer: string;
				auction: boolean;
			}
		>;

		Unlisted(listingId?: null): TypedEventFilter<[BigNumber], { listingId: BigNumber }>;

		UpdatePrice(
			listingId?: null,
			price?: null
		): TypedEventFilter<[BigNumber, BigNumber], { listingId: BigNumber; price: BigNumber }>;

		Withdraw(
			auctionId?: null,
			bidder?: null,
			currency?: null,
			bid?: null
		): TypedEventFilter<
			[BigNumber, string, string, BigNumber],
			{ auctionId: BigNumber; bidder: string; currency: string; bid: BigNumber }
		>;

		WithdrawProfit(
			nft?: null,
			currency?: null,
			amount?: null,
			receiver?: null
		): TypedEventFilter<
			[string, string, BigNumber, string],
			{ nft: string; currency: string; amount: BigNumber; receiver: string }
		>;
	};

	estimateGas: {
		bid(
			auctionId: BigNumberish,
			bidPrice: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		buy(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		createAuction(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		createAuctionBySig(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		endAuction(
			auctionId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		endAuctionBySig(
			auctionId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		getCurrentBid(auctionId: BigNumberish, bidder: string, overrides?: CallOverrides): Promise<BigNumber>;

		list(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		listBySig(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		unList(
			listingId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		unListBySig(
			listingId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		updatePrice(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		withdraw(
			auctionId: BigNumberish,
			bidder: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;
	};

	populateTransaction: {
		bid(
			auctionId: BigNumberish,
			bidPrice: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		buy(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: PayableOverrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		createAuction(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		createAuctionBySig(
			nft: string,
			tokenId: BigNumberish,
			initValue: BigNumberish,
			currency: string,
			duration: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		endAuction(
			auctionId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		endAuctionBySig(
			auctionId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		getCurrentBid(
			auctionId: BigNumberish,
			bidder: string,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		list(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		listBySig(
			nft: string,
			tokenId: BigNumberish,
			price: BigNumberish,
			currency: string,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		unList(
			listingId: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		unListBySig(
			listingId: BigNumberish,
			nonce: BigNumberish,
			expiry: BigNumberish,
			v: BigNumberish,
			r: BytesLike,
			s: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		updatePrice(
			listingId: BigNumberish,
			price: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		withdraw(
			auctionId: BigNumberish,
			bidder: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;
	};
}
