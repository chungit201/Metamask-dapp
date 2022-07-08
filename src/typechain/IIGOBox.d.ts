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

interface IIGOBoxInterface extends ethers.utils.Interface {
    functions: {
        "buy(uint256,bytes32[],address)": FunctionFragment;
        "getBought(address)": FunctionFragment;
        "getBoxTypes()": FunctionFragment;
        "getInfo()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "typeOf(uint256)": FunctionFragment;
    };

    encodeFunctionData(
        functionFragment: "buy",
        values: [BigNumberish, BytesLike[], string]
    ): string;
    encodeFunctionData(functionFragment: "getBought", values: [string]): string;
    encodeFunctionData(
        functionFragment: "getBoxTypes",
        values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "getInfo", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "tokenURI",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "typeOf",
        values: [BigNumberish]
    ): string;

    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBought", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "getBoxTypes",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "typeOf", data: BytesLike): Result;

    events: {
        "Burned(uint256,address,uint256)": EventFragment;
        "Minted(uint256,address,string)": EventFragment;
        "NewBoxType(uint256,string,uint256,uint256,string)": EventFragment;
        "SetInfo(address,uint256,uint256,uint256,uint256,bool)": EventFragment;
        "SetSlime(address)": EventFragment;
        "SetWhitelist(bytes32,string)": EventFragment;
        "Sold(uint256,uint256,uint256,address,address)": EventFragment;
        "UpdateTokenUri(uint256,string)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewBoxType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInfo"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetSlime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWhitelist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sold"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTokenUri"): EventFragment;
}

export class IIGOBox extends BaseContract {
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

    interface: IIGOBoxInterface;

    functions: {
        buy(
            boxTypeId: BigNumberish,
            merkleProof: BytesLike[],
            agency: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        getBought(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

        getBoxTypes(
            overrides?: CallOverrides
        ): Promise<
            [
                ([
                    boolean,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    BigNumber,
                    string,
                    string
                ] & {
                    isActive: boolean;
                    boxTypeId: BigNumber;
                    sellLimit: BigNumber;
                    sold: BigNumber;
                    price: BigNumber;
                    name: string;
                    prefixUri: string;
                })[]
            ] & {
            types: ([
                boolean,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                string,
                string
            ] & {
                isActive: boolean;
                boxTypeId: BigNumber;
                sellLimit: BigNumber;
                sold: BigNumber;
                price: BigNumber;
                name: string;
                prefixUri: string;
            })[];
        }
            >;

        getInfo(
            overrides?: CallOverrides
        ): Promise<
            [
                    [
                        boolean,
                        string,
                        string,
                        string,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber,
                        BigNumber
                    ] & {
                    checkWhitelist: boolean;
                    merkleRoot: string;
                    CID: string;
                    currency: string;
                    limitPerUser: BigNumber;
                    startTime: BigNumber;
                    endTime: BigNumber;
                    sellLimit: BigNumber;
                    sold: BigNumber;
                }
            ]
            >;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string]>;

        typeOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>;
    };

    buy(
        boxTypeId: BigNumberish,
        merkleProof: BytesLike[],
        agency: string,
        overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getBoxTypes(
        overrides?: CallOverrides
    ): Promise<
        ([boolean, BigNumber, BigNumber, BigNumber, BigNumber, string, string] & {
            isActive: boolean;
            boxTypeId: BigNumber;
            sellLimit: BigNumber;
            sold: BigNumber;
            price: BigNumber;
            name: string;
            prefixUri: string;
        })[]
        >;

    getInfo(
        overrides?: CallOverrides
    ): Promise<
        [
            boolean,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
        checkWhitelist: boolean;
        merkleRoot: string;
        CID: string;
        currency: string;
        limitPerUser: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        sellLimit: BigNumber;
        sold: BigNumber;
    }
        >;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    typeOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    callStatic: {
        buy(
            boxTypeId: BigNumberish,
            merkleProof: BytesLike[],
            agency: string,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

        getBoxTypes(
            overrides?: CallOverrides
        ): Promise<
            ([boolean, BigNumber, BigNumber, BigNumber, BigNumber, string, string] & {
                isActive: boolean;
                boxTypeId: BigNumber;
                sellLimit: BigNumber;
                sold: BigNumber;
                price: BigNumber;
                name: string;
                prefixUri: string;
            })[]
            >;

        getInfo(
            overrides?: CallOverrides
        ): Promise<
            [
                boolean,
                string,
                string,
                string,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber,
                BigNumber
            ] & {
            checkWhitelist: boolean;
            merkleRoot: string;
            CID: string;
            currency: string;
            limitPerUser: BigNumber;
            startTime: BigNumber;
            endTime: BigNumber;
            sellLimit: BigNumber;
            sold: BigNumber;
        }
            >;

        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

        typeOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;
    };

    filters: {
        Burned(
            boxId?: null,
            player?: null,
            slimeItemId?: null
        ): TypedEventFilter<
            [BigNumber, string, BigNumber],
            { boxId: BigNumber; player: string; slimeItemId: BigNumber }
            >;

        Minted(
            itemId?: null,
            recipient?: null,
            tokenURI?: null
        ): TypedEventFilter<
            [BigNumber, string, string],
            { itemId: BigNumber; recipient: string; tokenURI: string }
            >;

        NewBoxType(
            boxTypeId?: null,
            name?: null,
            limit?: null,
            price?: null,
            prefixUri?: null
        ): TypedEventFilter<
            [BigNumber, string, BigNumber, BigNumber, string],
            {
                boxTypeId: BigNumber;
                name: string;
                limit: BigNumber;
                price: BigNumber;
                prefixUri: string;
            }
            >;

        SetInfo(
            currency?: null,
            sellLimit?: null,
            limitPerUser?: null,
            startTime?: null,
            endTime?: null,
            checkWhitelist?: null
        ): TypedEventFilter<
            [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean],
            {
                currency: string;
                sellLimit: BigNumber;
                limitPerUser: BigNumber;
                startTime: BigNumber;
                endTime: BigNumber;
                checkWhitelist: boolean;
            }
            >;

        SetSlime(slimeNft?: null): TypedEventFilter<[string], { slimeNft: string }>;

        SetWhitelist(
            merkleRoot?: null,
            CID?: null
        ): TypedEventFilter<[string, string], { merkleRoot: string; CID: string }>;

        Sold(
            newItemId?: null,
            boxTypeId?: null,
            price?: null,
            user?: null,
            agency?: null
        ): TypedEventFilter<
            [BigNumber, BigNumber, BigNumber, string, string],
            {
                newItemId: BigNumber;
                boxTypeId: BigNumber;
                price: BigNumber;
                user: string;
                agency: string;
            }
            >;

        UpdateTokenUri(
            itemType?: null,
            uri?: null
        ): TypedEventFilter<
            [BigNumber, string],
            { itemType: BigNumber; uri: string }
            >;
    };

    estimateGas: {
        buy(
            boxTypeId: BigNumberish,
            merkleProof: BytesLike[],
            agency: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        getBought(user: string, overrides?: CallOverrides): Promise<BigNumber>;

        getBoxTypes(overrides?: CallOverrides): Promise<BigNumber>;

        getInfo(overrides?: CallOverrides): Promise<BigNumber>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        typeOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        buy(
            boxTypeId: BigNumberish,
            merkleProof: BytesLike[],
            agency: string,
            overrides?: PayableOverrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        getBought(
            user: string,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getBoxTypes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        typeOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;
    };
}
