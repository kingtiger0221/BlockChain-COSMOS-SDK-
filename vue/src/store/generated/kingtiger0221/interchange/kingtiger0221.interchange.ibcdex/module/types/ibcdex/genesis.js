/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Order } from '../ibcdex/order';
import { Pop } from '../ibcdex/pop';
import { DenomTrace } from '../ibcdex/denom_trace';
import { SellOrderBook } from '../ibcdex/sell_order_book';
import { BuyOrderBook } from '../ibcdex/buy_order_book';
export const protobufPackage = 'kingtiger0221.interchange.ibcdex';
const baseGenesisState = { popCount: 0, portId: '' };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.orderList) {
            Order.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.popList) {
            Pop.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.popCount !== 0) {
            writer.uint32(48).uint64(message.popCount);
        }
        for (const v of message.denomTraceList) {
            DenomTrace.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sellOrderBookList) {
            SellOrderBook.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.buyOrderBookList) {
            BuyOrderBook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.popList = [];
        message.denomTraceList = [];
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 7:
                    message.orderList.push(Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.popList.push(Pop.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.popCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.denomTraceList.push(DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sellOrderBookList.push(SellOrderBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.buyOrderBookList.push(BuyOrderBook.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.popList = [];
        message.denomTraceList = [];
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        if (object.orderList !== undefined && object.orderList !== null) {
            for (const e of object.orderList) {
                message.orderList.push(Order.fromJSON(e));
            }
        }
        if (object.popList !== undefined && object.popList !== null) {
            for (const e of object.popList) {
                message.popList.push(Pop.fromJSON(e));
            }
        }
        if (object.popCount !== undefined && object.popCount !== null) {
            message.popCount = Number(object.popCount);
        }
        else {
            message.popCount = 0;
        }
        if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
            for (const e of object.denomTraceList) {
                message.denomTraceList.push(DenomTrace.fromJSON(e));
            }
        }
        if (object.sellOrderBookList !== undefined && object.sellOrderBookList !== null) {
            for (const e of object.sellOrderBookList) {
                message.sellOrderBookList.push(SellOrderBook.fromJSON(e));
            }
        }
        if (object.buyOrderBookList !== undefined && object.buyOrderBookList !== null) {
            for (const e of object.buyOrderBookList) {
                message.buyOrderBookList.push(BuyOrderBook.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.orderList) {
            obj.orderList = message.orderList.map((e) => (e ? Order.toJSON(e) : undefined));
        }
        else {
            obj.orderList = [];
        }
        if (message.popList) {
            obj.popList = message.popList.map((e) => (e ? Pop.toJSON(e) : undefined));
        }
        else {
            obj.popList = [];
        }
        message.popCount !== undefined && (obj.popCount = message.popCount);
        if (message.denomTraceList) {
            obj.denomTraceList = message.denomTraceList.map((e) => (e ? DenomTrace.toJSON(e) : undefined));
        }
        else {
            obj.denomTraceList = [];
        }
        if (message.sellOrderBookList) {
            obj.sellOrderBookList = message.sellOrderBookList.map((e) => (e ? SellOrderBook.toJSON(e) : undefined));
        }
        else {
            obj.sellOrderBookList = [];
        }
        if (message.buyOrderBookList) {
            obj.buyOrderBookList = message.buyOrderBookList.map((e) => (e ? BuyOrderBook.toJSON(e) : undefined));
        }
        else {
            obj.buyOrderBookList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.popList = [];
        message.denomTraceList = [];
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        if (object.orderList !== undefined && object.orderList !== null) {
            for (const e of object.orderList) {
                message.orderList.push(Order.fromPartial(e));
            }
        }
        if (object.popList !== undefined && object.popList !== null) {
            for (const e of object.popList) {
                message.popList.push(Pop.fromPartial(e));
            }
        }
        if (object.popCount !== undefined && object.popCount !== null) {
            message.popCount = object.popCount;
        }
        else {
            message.popCount = 0;
        }
        if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
            for (const e of object.denomTraceList) {
                message.denomTraceList.push(DenomTrace.fromPartial(e));
            }
        }
        if (object.sellOrderBookList !== undefined && object.sellOrderBookList !== null) {
            for (const e of object.sellOrderBookList) {
                message.sellOrderBookList.push(SellOrderBook.fromPartial(e));
            }
        }
        if (object.buyOrderBookList !== undefined && object.buyOrderBookList !== null) {
            for (const e of object.buyOrderBookList) {
                message.buyOrderBookList.push(BuyOrderBook.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
