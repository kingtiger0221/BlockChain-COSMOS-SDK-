import { Reader, Writer } from 'protobufjs/minimal';
import { Pop } from '../ibcdex/pop';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { DenomTrace } from '../ibcdex/denom_trace';
import { SellOrderBook } from '../ibcdex/sell_order_book';
import { BuyOrderBook } from '../ibcdex/buy_order_book';
export declare const protobufPackage = "kingtiger0221.interchange.ibcdex";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetPopRequest {
    id: number;
}
export interface QueryGetPopResponse {
    Pop: Pop | undefined;
}
export interface QueryAllPopRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPopResponse {
    Pop: Pop[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDenomTraceRequest {
    index: string;
}
export interface QueryGetDenomTraceResponse {
    DenomTrace: DenomTrace | undefined;
}
export interface QueryAllDenomTraceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDenomTraceResponse {
    DenomTrace: DenomTrace[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSellOrderBookRequest {
    index: string;
}
export interface QueryGetSellOrderBookResponse {
    SellOrderBook: SellOrderBook | undefined;
}
export interface QueryAllSellOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSellOrderBookResponse {
    SellOrderBook: SellOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBuyOrderBookRequest {
    index: string;
}
export interface QueryGetBuyOrderBookResponse {
    BuyOrderBook: BuyOrderBook | undefined;
}
export interface QueryAllBuyOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBuyOrderBookResponse {
    BuyOrderBook: BuyOrderBook[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetPopRequest: {
    encode(message: QueryGetPopRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPopRequest;
    fromJSON(object: any): QueryGetPopRequest;
    toJSON(message: QueryGetPopRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPopRequest>): QueryGetPopRequest;
};
export declare const QueryGetPopResponse: {
    encode(message: QueryGetPopResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPopResponse;
    fromJSON(object: any): QueryGetPopResponse;
    toJSON(message: QueryGetPopResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPopResponse>): QueryGetPopResponse;
};
export declare const QueryAllPopRequest: {
    encode(message: QueryAllPopRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPopRequest;
    fromJSON(object: any): QueryAllPopRequest;
    toJSON(message: QueryAllPopRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPopRequest>): QueryAllPopRequest;
};
export declare const QueryAllPopResponse: {
    encode(message: QueryAllPopResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPopResponse;
    fromJSON(object: any): QueryAllPopResponse;
    toJSON(message: QueryAllPopResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPopResponse>): QueryAllPopResponse;
};
export declare const QueryGetDenomTraceRequest: {
    encode(message: QueryGetDenomTraceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceRequest;
    fromJSON(object: any): QueryGetDenomTraceRequest;
    toJSON(message: QueryGetDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomTraceRequest>): QueryGetDenomTraceRequest;
};
export declare const QueryGetDenomTraceResponse: {
    encode(message: QueryGetDenomTraceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceResponse;
    fromJSON(object: any): QueryGetDenomTraceResponse;
    toJSON(message: QueryGetDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomTraceResponse>): QueryGetDenomTraceResponse;
};
export declare const QueryAllDenomTraceRequest: {
    encode(message: QueryAllDenomTraceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceRequest;
    fromJSON(object: any): QueryAllDenomTraceRequest;
    toJSON(message: QueryAllDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomTraceRequest>): QueryAllDenomTraceRequest;
};
export declare const QueryAllDenomTraceResponse: {
    encode(message: QueryAllDenomTraceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceResponse;
    fromJSON(object: any): QueryAllDenomTraceResponse;
    toJSON(message: QueryAllDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomTraceResponse>): QueryAllDenomTraceResponse;
};
export declare const QueryGetSellOrderBookRequest: {
    encode(message: QueryGetSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest;
    fromJSON(object: any): QueryGetSellOrderBookRequest;
    toJSON(message: QueryGetSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookRequest>): QueryGetSellOrderBookRequest;
};
export declare const QueryGetSellOrderBookResponse: {
    encode(message: QueryGetSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse;
    fromJSON(object: any): QueryGetSellOrderBookResponse;
    toJSON(message: QueryGetSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookResponse>): QueryGetSellOrderBookResponse;
};
export declare const QueryAllSellOrderBookRequest: {
    encode(message: QueryAllSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest;
    fromJSON(object: any): QueryAllSellOrderBookRequest;
    toJSON(message: QueryAllSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookRequest>): QueryAllSellOrderBookRequest;
};
export declare const QueryAllSellOrderBookResponse: {
    encode(message: QueryAllSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse;
    fromJSON(object: any): QueryAllSellOrderBookResponse;
    toJSON(message: QueryAllSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookResponse>): QueryAllSellOrderBookResponse;
};
export declare const QueryGetBuyOrderBookRequest: {
    encode(message: QueryGetBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest;
    fromJSON(object: any): QueryGetBuyOrderBookRequest;
    toJSON(message: QueryGetBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookRequest>): QueryGetBuyOrderBookRequest;
};
export declare const QueryGetBuyOrderBookResponse: {
    encode(message: QueryGetBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse;
    fromJSON(object: any): QueryGetBuyOrderBookResponse;
    toJSON(message: QueryGetBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookResponse>): QueryGetBuyOrderBookResponse;
};
export declare const QueryAllBuyOrderBookRequest: {
    encode(message: QueryAllBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest;
    fromJSON(object: any): QueryAllBuyOrderBookRequest;
    toJSON(message: QueryAllBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookRequest>): QueryAllBuyOrderBookRequest;
};
export declare const QueryAllBuyOrderBookResponse: {
    encode(message: QueryAllBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse;
    fromJSON(object: any): QueryAllBuyOrderBookResponse;
    toJSON(message: QueryAllBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookResponse>): QueryAllBuyOrderBookResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a pop by id. */
    Pop(request: QueryGetPopRequest): Promise<QueryGetPopResponse>;
    /** Queries a list of pop items. */
    PopAll(request: QueryAllPopRequest): Promise<QueryAllPopResponse>;
    /** Queries a denomTrace by index. */
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    /** Queries a list of denomTrace items. */
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
    /** Queries a sellOrderBook by index. */
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    /** Queries a list of sellOrderBook items. */
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    /** Queries a buyOrderBook by index. */
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    /** Queries a list of buyOrderBook items. */
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Pop(request: QueryGetPopRequest): Promise<QueryGetPopResponse>;
    PopAll(request: QueryAllPopRequest): Promise<QueryAllPopResponse>;
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
