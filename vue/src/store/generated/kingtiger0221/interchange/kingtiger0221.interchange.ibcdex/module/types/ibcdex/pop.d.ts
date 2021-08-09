import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "kingtiger0221.interchange.ibcdex";
export interface Pop {
    creator: string;
    id: number;
    title: string;
    options: string;
}
export declare const Pop: {
    encode(message: Pop, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pop;
    fromJSON(object: any): Pop;
    toJSON(message: Pop): unknown;
    fromPartial(object: DeepPartial<Pop>): Pop;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
