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
    PayableOverrides,
    CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IIGOPoolInterface extends ethers.utils.Interface {
    functions: {
        "buy(address,uint256,uint256,bytes32[])": FunctionFragment;
        "countOfs(uint8[])": FunctionFragment;
        "getBought(address)": FunctionFragment;
        "getCurrentPercent()": FunctionFragment;
        "getInfo()": FunctionFragment;
        "getLastBoughtTime()": FunctionFragment;
        "getListing(uint256)": FunctionFragment;
        "getListingByNFT(address,uint256)": FunctionFragment;
        "getReverseConfig()": FunctionFragment;
        "getTotal()": FunctionFragment;
        "isPreTypeSoldOut()": FunctionFragment;
    };

    encodeFunctionData(
        functionFragment: "buy",
        values: [string, BigNumberish, BigNumberish, BytesLike[]]
    ): string;
    encodeFunctionData(
        functionFragment: "countOfs",
        values: [BigNumberish[]]
    ): string;
    encodeFunctionData(functionFragment: "getBought", values: [string]): string;
    encodeFunctionData(
        functionFragment: "getCurrentPercent",
        values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "getInfo", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "getLastBoughtTime",
        values?: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "getListing",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "getListingByNFT",
        values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "getReverseConfig",
        values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "getTotal", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "isPreTypeSoldOut",
        values?: undefined
    ): string;

    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countOfs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBought", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "getCurrentPercent",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getInfo", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "getLastBoughtTime",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "getListingByNFT",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "getReverseConfig",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getTotal", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "isPreTypeSoldOut",
        data: BytesLike
    ): Result;

    events: {};
}

export class IIGOPool extends BaseContract {
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

    interface: IIGOPoolInterface;

    functions: {
        buy(
            agency: string,
            listingId: BigNumberish,
            price: BigNumberish,
            merkleProof: BytesLike[],
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        countOfs(
            itemType: BigNumberish[],
            overrides?: CallOverrides
        ): Promise<
            [BigNumber[], BigNumber] & { countOf: BigNumber[]; total: BigNumber }
            >;

        getBought(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        getCurrentPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

        getInfo(
            overrides?: CallOverrides
        ): Promise<
            [
                    [
                        boolean,
                        boolean,
                        number,
                        string,
                        string,
                        string,
                        string,
                        string,
                        BigNumber,
                        BigNumber
                    ] & {
                    isBox: boolean;
                    isReverse: boolean;
                    maxBought: number;
                    merkleRoot: string;
                    CID: string;
                    nft: string;
                    owner: string;
                    currency: string;
                    startTimestamp: BigNumber;
                    endTimestamp: BigNumber;
                }
            ] & {
            _info: [
                boolean,
                boolean,
                number,
                string,
                string,
                string,
                string,
                string,
                BigNumber,
                BigNumber
            ] & {
                isBox: boolean;
                isReverse: boolean;
                maxBought: number;
                merkleRoot: string;
                CID: string;
                nft: string;
                owner: string;
                currency: string;
                startTimestamp: BigNumber;
                endTimestamp: BigNumber;
            };
        }
            >;

        getLastBoughtTime(overrides?: CallOverrides): Promise<[BigNumber]>;

        getListing(
            listingId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<
            [
                    [
                        boolean,
                        boolean,
                        string,
                        string,
                        string,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber
                    ] & {
                    isEnded: boolean;
                    canBuy: boolean;
                    nft: string;
                    currency: string;
                    owner: string;
                    itemType: BigNumber;
                    tokenId: BigNumber;
                    fee: BigNumber;
                    price: BigNumber;
                    currentPrice: BigNumber;
                    id: BigNumber;
                }
            ] & {
            listing: [
                boolean,
                boolean,
                string,
                string,
                string,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ] & {
                isEnded: boolean;
                canBuy: boolean;
                nft: string;
                currency: string;
                owner: string;
                itemType: BigNumber;
                tokenId: BigNumber;
                fee: BigNumber;
                price: BigNumber;
                currentPrice: BigNumber;
                id: BigNumber;
            };
        }
            >;

        getListingByNFT(
            nft: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<
            [
                    [
                        boolean,
                        boolean,
                        string,
                        string,
                        string,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber
                    ] & {
                    isEnded: boolean;
                    canBuy: boolean;
                    nft: string;
                    currency: string;
                    owner: string;
                    itemType: BigNumber;
                    tokenId: BigNumber;
                    fee: BigNumber;
                    price: BigNumber;
                    currentPrice: BigNumber;
                    id: BigNumber;
                }
            ] & {
            listing: [
                boolean,
                boolean,
                string,
                string,
                string,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ] & {
                isEnded: boolean;
                canBuy: boolean;
                nft: string;
                currency: string;
                owner: string;
                itemType: BigNumber;
                tokenId: BigNumber;
                fee: BigNumber;
                price: BigNumber;
                currentPrice: BigNumber;
                id: BigNumber;
            };
        }
            >;

        getReverseConfig(
            overrides?: CallOverrides
        ): Promise<
            [
                    [BigNumber, BigNumber, BigNumber] & {
                    startPercent: BigNumber;
                    minPercent: BigNumber;
                    increasePercent: BigNumber;
                }
            ]
            >;

        getTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

        isPreTypeSoldOut(overrides?: CallOverrides): Promise<[boolean]>;
    };

    buy(
        agency: string,
        listingId: BigNumberish,
        price: BigNumberish,
        merkleProof: BytesLike[],
        overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countOfs(
        itemType: BigNumberish[],
        overrides?: CallOverrides
    ): Promise<
        [BigNumber[], BigNumber] & { countOf: BigNumber[]; total: BigNumber }
        >;

    getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentPercent(overrides?: CallOverrides): Promise<BigNumber>;

    getInfo(
        overrides?: CallOverrides
    ): Promise<
        [
            boolean,
            boolean,
            number,
            string,
            string,
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
        isBox: boolean;
        isReverse: boolean;
        maxBought: number;
        merkleRoot: string;
        CID: string;
        nft: string;
        owner: string;
        currency: string;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
    }
        >;

    getLastBoughtTime(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
        listingId: BigNumberish,
        overrides?: CallOverrides
    ): Promise<
        [
            boolean,
            boolean,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
        isEnded: boolean;
        canBuy: boolean;
        nft: string;
        currency: string;
        owner: string;
        itemType: BigNumber;
        tokenId: BigNumber;
        fee: BigNumber;
        price: BigNumber;
        currentPrice: BigNumber;
        id: BigNumber;
    }
        >;

    getListingByNFT(
        nft: string,
        tokenId: BigNumberish,
        overrides?: CallOverrides
    ): Promise<
        [
            boolean,
            boolean,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
        isEnded: boolean;
        canBuy: boolean;
        nft: string;
        currency: string;
        owner: string;
        itemType: BigNumber;
        tokenId: BigNumber;
        fee: BigNumber;
        price: BigNumber;
        currentPrice: BigNumber;
        id: BigNumber;
    }
        >;

    getReverseConfig(
        overrides?: CallOverrides
    ): Promise<
        [BigNumber, BigNumber, BigNumber] & {
        startPercent: BigNumber;
        minPercent: BigNumber;
        increasePercent: BigNumber;
    }
        >;

    getTotal(overrides?: CallOverrides): Promise<BigNumber>;

    isPreTypeSoldOut(overrides?: CallOverrides): Promise<boolean>;

    callStatic: {
        buy(
            agency: string,
            listingId: BigNumberish,
            price: BigNumberish,
            merkleProof: BytesLike[],
            overrides?: CallOverrides
        ): Promise<boolean>;

        countOfs(
            itemType: BigNumberish[],
            overrides?: CallOverrides
        ): Promise<
            [BigNumber[], BigNumber] & { countOf: BigNumber[]; total: BigNumber }
            >;

        getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

        getCurrentPercent(overrides?: CallOverrides): Promise<BigNumber>;

        getInfo(
            overrides?: CallOverrides
        ): Promise<
            [
                boolean,
                boolean,
                number,
                string,
                string,
                string,
                string,
                string,
                BigNumber,
                BigNumber
            ] & {
            isBox: boolean;
            isReverse: boolean;
            maxBought: number;
            merkleRoot: string;
            CID: string;
            nft: string;
            owner: string;
            currency: string;
            startTimestamp: BigNumber;
            endTimestamp: BigNumber;
        }
            >;

        getLastBoughtTime(overrides?: CallOverrides): Promise<BigNumber>;

        getListing(
            listingId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<
            [
                boolean,
                boolean,
                string,
                string,
                string,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ] & {
            isEnded: boolean;
            canBuy: boolean;
            nft: string;
            currency: string;
            owner: string;
            itemType: BigNumber;
            tokenId: BigNumber;
            fee: BigNumber;
            price: BigNumber;
            currentPrice: BigNumber;
            id: BigNumber;
        }
            >;

        getListingByNFT(
            nft: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<
            [
                boolean,
                boolean,
                string,
                string,
                string,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ] & {
            isEnded: boolean;
            canBuy: boolean;
            nft: string;
            currency: string;
            owner: string;
            itemType: BigNumber;
            tokenId: BigNumber;
            fee: BigNumber;
            price: BigNumber;
            currentPrice: BigNumber;
            id: BigNumber;
        }
            >;

        getReverseConfig(
            overrides?: CallOverrides
        ): Promise<
            [BigNumber, BigNumber, BigNumber] & {
            startPercent: BigNumber;
            minPercent: BigNumber;
            increasePercent: BigNumber;
        }
            >;

        getTotal(overrides?: CallOverrides): Promise<BigNumber>;

        isPreTypeSoldOut(overrides?: CallOverrides): Promise<boolean>;
    };

    filters: {};

    estimateGas: {
        buy(
            agency: string,
            listingId: BigNumberish,
            price: BigNumberish,
            merkleProof: BytesLike[],
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        countOfs(
            itemType: BigNumberish[],
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

        getCurrentPercent(overrides?: CallOverrides): Promise<BigNumber>;

        getInfo(overrides?: CallOverrides): Promise<BigNumber>;

        getLastBoughtTime(overrides?: CallOverrides): Promise<BigNumber>;

        getListing(
            listingId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        getListingByNFT(
            nft: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        getReverseConfig(overrides?: CallOverrides): Promise<BigNumber>;

        getTotal(overrides?: CallOverrides): Promise<BigNumber>;

        isPreTypeSoldOut(overrides?: CallOverrides): Promise<BigNumber>;
    };

    populateTransaction: {
        buy(
            agency: string,
            listingId: BigNumberish,
            price: BigNumberish,
            merkleProof: BytesLike[],
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        countOfs(
            itemType: BigNumberish[],
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getBought(
            user: string,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getCurrentPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getLastBoughtTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getListing(
            listingId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getListingByNFT(
            nft: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getReverseConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        isPreTypeSoldOut(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
