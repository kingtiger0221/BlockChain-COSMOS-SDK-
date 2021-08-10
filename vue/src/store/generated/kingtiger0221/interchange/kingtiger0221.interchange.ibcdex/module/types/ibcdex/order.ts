/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'kingtiger0221.interchange.ibcdex'

export interface Order {
  creator: string
  index: string
  amount: string
  price: string
}

const baseOrder: object = { creator: '', index: '', amount: '', price: '' }

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseOrder } as Order
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.amount = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    return message
  },

  toJSON(message: Order): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.amount !== undefined && (obj.amount = message.amount)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>