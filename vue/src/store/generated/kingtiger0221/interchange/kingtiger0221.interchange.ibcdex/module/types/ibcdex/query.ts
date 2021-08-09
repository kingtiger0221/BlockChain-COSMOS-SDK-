/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Pop } from '../ibcdex/pop'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { DenomTrace } from '../ibcdex/denom_trace'
import { SellOrderBook } from '../ibcdex/sell_order_book'
import { BuyOrderBook } from '../ibcdex/buy_order_book'

export const protobufPackage = 'kingtiger0221.interchange.ibcdex'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPopRequest {
  id: number
}

export interface QueryGetPopResponse {
  Pop: Pop | undefined
}

export interface QueryAllPopRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPopResponse {
  Pop: Pop[]
  pagination: PageResponse | undefined
}

export interface QueryGetDenomTraceRequest {
  index: string
}

export interface QueryGetDenomTraceResponse {
  DenomTrace: DenomTrace | undefined
}

export interface QueryAllDenomTraceRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllDenomTraceResponse {
  DenomTrace: DenomTrace[]
  pagination: PageResponse | undefined
}

export interface QueryGetSellOrderBookRequest {
  index: string
}

export interface QueryGetSellOrderBookResponse {
  SellOrderBook: SellOrderBook | undefined
}

export interface QueryAllSellOrderBookRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSellOrderBookResponse {
  SellOrderBook: SellOrderBook[]
  pagination: PageResponse | undefined
}

export interface QueryGetBuyOrderBookRequest {
  index: string
}

export interface QueryGetBuyOrderBookResponse {
  BuyOrderBook: BuyOrderBook | undefined
}

export interface QueryAllBuyOrderBookRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBuyOrderBookResponse {
  BuyOrderBook: BuyOrderBook[]
  pagination: PageResponse | undefined
}

const baseQueryGetPopRequest: object = { id: 0 }

export const QueryGetPopRequest = {
  encode(message: QueryGetPopRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPopRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPopRequest } as QueryGetPopRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPopRequest {
    const message = { ...baseQueryGetPopRequest } as QueryGetPopRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetPopRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPopRequest>): QueryGetPopRequest {
    const message = { ...baseQueryGetPopRequest } as QueryGetPopRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetPopResponse: object = {}

export const QueryGetPopResponse = {
  encode(message: QueryGetPopResponse, writer: Writer = Writer.create()): Writer {
    if (message.Pop !== undefined) {
      Pop.encode(message.Pop, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPopResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPopResponse } as QueryGetPopResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Pop = Pop.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPopResponse {
    const message = { ...baseQueryGetPopResponse } as QueryGetPopResponse
    if (object.Pop !== undefined && object.Pop !== null) {
      message.Pop = Pop.fromJSON(object.Pop)
    } else {
      message.Pop = undefined
    }
    return message
  },

  toJSON(message: QueryGetPopResponse): unknown {
    const obj: any = {}
    message.Pop !== undefined && (obj.Pop = message.Pop ? Pop.toJSON(message.Pop) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPopResponse>): QueryGetPopResponse {
    const message = { ...baseQueryGetPopResponse } as QueryGetPopResponse
    if (object.Pop !== undefined && object.Pop !== null) {
      message.Pop = Pop.fromPartial(object.Pop)
    } else {
      message.Pop = undefined
    }
    return message
  }
}

const baseQueryAllPopRequest: object = {}

export const QueryAllPopRequest = {
  encode(message: QueryAllPopRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPopRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPopRequest } as QueryAllPopRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPopRequest {
    const message = { ...baseQueryAllPopRequest } as QueryAllPopRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPopRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPopRequest>): QueryAllPopRequest {
    const message = { ...baseQueryAllPopRequest } as QueryAllPopRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPopResponse: object = {}

export const QueryAllPopResponse = {
  encode(message: QueryAllPopResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Pop) {
      Pop.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPopResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPopResponse } as QueryAllPopResponse
    message.Pop = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Pop.push(Pop.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPopResponse {
    const message = { ...baseQueryAllPopResponse } as QueryAllPopResponse
    message.Pop = []
    if (object.Pop !== undefined && object.Pop !== null) {
      for (const e of object.Pop) {
        message.Pop.push(Pop.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPopResponse): unknown {
    const obj: any = {}
    if (message.Pop) {
      obj.Pop = message.Pop.map((e) => (e ? Pop.toJSON(e) : undefined))
    } else {
      obj.Pop = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPopResponse>): QueryAllPopResponse {
    const message = { ...baseQueryAllPopResponse } as QueryAllPopResponse
    message.Pop = []
    if (object.Pop !== undefined && object.Pop !== null) {
      for (const e of object.Pop) {
        message.Pop.push(Pop.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetDenomTraceRequest: object = { index: '' }

export const QueryGetDenomTraceRequest = {
  encode(message: QueryGetDenomTraceRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDenomTraceRequest } as QueryGetDenomTraceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDenomTraceRequest {
    const message = { ...baseQueryGetDenomTraceRequest } as QueryGetDenomTraceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetDenomTraceRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDenomTraceRequest>): QueryGetDenomTraceRequest {
    const message = { ...baseQueryGetDenomTraceRequest } as QueryGetDenomTraceRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetDenomTraceResponse: object = {}

export const QueryGetDenomTraceResponse = {
  encode(message: QueryGetDenomTraceResponse, writer: Writer = Writer.create()): Writer {
    if (message.DenomTrace !== undefined) {
      DenomTrace.encode(message.DenomTrace, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDenomTraceResponse } as QueryGetDenomTraceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DenomTrace = DenomTrace.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDenomTraceResponse {
    const message = { ...baseQueryGetDenomTraceResponse } as QueryGetDenomTraceResponse
    if (object.DenomTrace !== undefined && object.DenomTrace !== null) {
      message.DenomTrace = DenomTrace.fromJSON(object.DenomTrace)
    } else {
      message.DenomTrace = undefined
    }
    return message
  },

  toJSON(message: QueryGetDenomTraceResponse): unknown {
    const obj: any = {}
    message.DenomTrace !== undefined && (obj.DenomTrace = message.DenomTrace ? DenomTrace.toJSON(message.DenomTrace) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDenomTraceResponse>): QueryGetDenomTraceResponse {
    const message = { ...baseQueryGetDenomTraceResponse } as QueryGetDenomTraceResponse
    if (object.DenomTrace !== undefined && object.DenomTrace !== null) {
      message.DenomTrace = DenomTrace.fromPartial(object.DenomTrace)
    } else {
      message.DenomTrace = undefined
    }
    return message
  }
}

const baseQueryAllDenomTraceRequest: object = {}

export const QueryAllDenomTraceRequest = {
  encode(message: QueryAllDenomTraceRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDenomTraceRequest } as QueryAllDenomTraceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDenomTraceRequest {
    const message = { ...baseQueryAllDenomTraceRequest } as QueryAllDenomTraceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDenomTraceRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDenomTraceRequest>): QueryAllDenomTraceRequest {
    const message = { ...baseQueryAllDenomTraceRequest } as QueryAllDenomTraceRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllDenomTraceResponse: object = {}

export const QueryAllDenomTraceResponse = {
  encode(message: QueryAllDenomTraceResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.DenomTrace) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDenomTraceResponse } as QueryAllDenomTraceResponse
    message.DenomTrace = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DenomTrace.push(DenomTrace.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDenomTraceResponse {
    const message = { ...baseQueryAllDenomTraceResponse } as QueryAllDenomTraceResponse
    message.DenomTrace = []
    if (object.DenomTrace !== undefined && object.DenomTrace !== null) {
      for (const e of object.DenomTrace) {
        message.DenomTrace.push(DenomTrace.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDenomTraceResponse): unknown {
    const obj: any = {}
    if (message.DenomTrace) {
      obj.DenomTrace = message.DenomTrace.map((e) => (e ? DenomTrace.toJSON(e) : undefined))
    } else {
      obj.DenomTrace = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDenomTraceResponse>): QueryAllDenomTraceResponse {
    const message = { ...baseQueryAllDenomTraceResponse } as QueryAllDenomTraceResponse
    message.DenomTrace = []
    if (object.DenomTrace !== undefined && object.DenomTrace !== null) {
      for (const e of object.DenomTrace) {
        message.DenomTrace.push(DenomTrace.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSellOrderBookRequest: object = { index: '' }

export const QueryGetSellOrderBookRequest = {
  encode(message: QueryGetSellOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSellOrderBookRequest {
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSellOrderBookRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSellOrderBookRequest>): QueryGetSellOrderBookRequest {
    const message = { ...baseQueryGetSellOrderBookRequest } as QueryGetSellOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSellOrderBookResponse: object = {}

export const QueryGetSellOrderBookResponse = {
  encode(message: QueryGetSellOrderBookResponse, writer: Writer = Writer.create()): Writer {
    if (message.SellOrderBook !== undefined) {
      SellOrderBook.encode(message.SellOrderBook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SellOrderBook = SellOrderBook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSellOrderBookResponse {
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      message.SellOrderBook = SellOrderBook.fromJSON(object.SellOrderBook)
    } else {
      message.SellOrderBook = undefined
    }
    return message
  },

  toJSON(message: QueryGetSellOrderBookResponse): unknown {
    const obj: any = {}
    message.SellOrderBook !== undefined && (obj.SellOrderBook = message.SellOrderBook ? SellOrderBook.toJSON(message.SellOrderBook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSellOrderBookResponse>): QueryGetSellOrderBookResponse {
    const message = { ...baseQueryGetSellOrderBookResponse } as QueryGetSellOrderBookResponse
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      message.SellOrderBook = SellOrderBook.fromPartial(object.SellOrderBook)
    } else {
      message.SellOrderBook = undefined
    }
    return message
  }
}

const baseQueryAllSellOrderBookRequest: object = {}

export const QueryAllSellOrderBookRequest = {
  encode(message: QueryAllSellOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSellOrderBookRequest {
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSellOrderBookRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSellOrderBookRequest>): QueryAllSellOrderBookRequest {
    const message = { ...baseQueryAllSellOrderBookRequest } as QueryAllSellOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSellOrderBookResponse: object = {}

export const QueryAllSellOrderBookResponse = {
  encode(message: QueryAllSellOrderBookResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SellOrderBook) {
      SellOrderBook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SellOrderBook.push(SellOrderBook.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSellOrderBookResponse {
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      for (const e of object.SellOrderBook) {
        message.SellOrderBook.push(SellOrderBook.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSellOrderBookResponse): unknown {
    const obj: any = {}
    if (message.SellOrderBook) {
      obj.SellOrderBook = message.SellOrderBook.map((e) => (e ? SellOrderBook.toJSON(e) : undefined))
    } else {
      obj.SellOrderBook = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSellOrderBookResponse>): QueryAllSellOrderBookResponse {
    const message = { ...baseQueryAllSellOrderBookResponse } as QueryAllSellOrderBookResponse
    message.SellOrderBook = []
    if (object.SellOrderBook !== undefined && object.SellOrderBook !== null) {
      for (const e of object.SellOrderBook) {
        message.SellOrderBook.push(SellOrderBook.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetBuyOrderBookRequest: object = { index: '' }

export const QueryGetBuyOrderBookRequest = {
  encode(message: QueryGetBuyOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBuyOrderBookRequest {
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetBuyOrderBookRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBuyOrderBookRequest>): QueryGetBuyOrderBookRequest {
    const message = { ...baseQueryGetBuyOrderBookRequest } as QueryGetBuyOrderBookRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetBuyOrderBookResponse: object = {}

export const QueryGetBuyOrderBookResponse = {
  encode(message: QueryGetBuyOrderBookResponse, writer: Writer = Writer.create()): Writer {
    if (message.BuyOrderBook !== undefined) {
      BuyOrderBook.encode(message.BuyOrderBook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BuyOrderBook = BuyOrderBook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBuyOrderBookResponse {
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      message.BuyOrderBook = BuyOrderBook.fromJSON(object.BuyOrderBook)
    } else {
      message.BuyOrderBook = undefined
    }
    return message
  },

  toJSON(message: QueryGetBuyOrderBookResponse): unknown {
    const obj: any = {}
    message.BuyOrderBook !== undefined && (obj.BuyOrderBook = message.BuyOrderBook ? BuyOrderBook.toJSON(message.BuyOrderBook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBuyOrderBookResponse>): QueryGetBuyOrderBookResponse {
    const message = { ...baseQueryGetBuyOrderBookResponse } as QueryGetBuyOrderBookResponse
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      message.BuyOrderBook = BuyOrderBook.fromPartial(object.BuyOrderBook)
    } else {
      message.BuyOrderBook = undefined
    }
    return message
  }
}

const baseQueryAllBuyOrderBookRequest: object = {}

export const QueryAllBuyOrderBookRequest = {
  encode(message: QueryAllBuyOrderBookRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBuyOrderBookRequest {
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBuyOrderBookRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBuyOrderBookRequest>): QueryAllBuyOrderBookRequest {
    const message = { ...baseQueryAllBuyOrderBookRequest } as QueryAllBuyOrderBookRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBuyOrderBookResponse: object = {}

export const QueryAllBuyOrderBookResponse = {
  encode(message: QueryAllBuyOrderBookResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BuyOrderBook) {
      BuyOrderBook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BuyOrderBook.push(BuyOrderBook.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBuyOrderBookResponse {
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      for (const e of object.BuyOrderBook) {
        message.BuyOrderBook.push(BuyOrderBook.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBuyOrderBookResponse): unknown {
    const obj: any = {}
    if (message.BuyOrderBook) {
      obj.BuyOrderBook = message.BuyOrderBook.map((e) => (e ? BuyOrderBook.toJSON(e) : undefined))
    } else {
      obj.BuyOrderBook = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBuyOrderBookResponse>): QueryAllBuyOrderBookResponse {
    const message = { ...baseQueryAllBuyOrderBookResponse } as QueryAllBuyOrderBookResponse
    message.BuyOrderBook = []
    if (object.BuyOrderBook !== undefined && object.BuyOrderBook !== null) {
      for (const e of object.BuyOrderBook) {
        message.BuyOrderBook.push(BuyOrderBook.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a pop by id. */
  Pop(request: QueryGetPopRequest): Promise<QueryGetPopResponse>
  /** Queries a list of pop items. */
  PopAll(request: QueryAllPopRequest): Promise<QueryAllPopResponse>
  /** Queries a denomTrace by index. */
  DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>
  /** Queries a list of denomTrace items. */
  DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>
  /** Queries a sellOrderBook by index. */
  SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>
  /** Queries a list of sellOrderBook items. */
  SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>
  /** Queries a buyOrderBook by index. */
  BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>
  /** Queries a list of buyOrderBook items. */
  BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Pop(request: QueryGetPopRequest): Promise<QueryGetPopResponse> {
    const data = QueryGetPopRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'Pop', data)
    return promise.then((data) => QueryGetPopResponse.decode(new Reader(data)))
  }

  PopAll(request: QueryAllPopRequest): Promise<QueryAllPopResponse> {
    const data = QueryAllPopRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'PopAll', data)
    return promise.then((data) => QueryAllPopResponse.decode(new Reader(data)))
  }

  DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse> {
    const data = QueryGetDenomTraceRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'DenomTrace', data)
    return promise.then((data) => QueryGetDenomTraceResponse.decode(new Reader(data)))
  }

  DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse> {
    const data = QueryAllDenomTraceRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'DenomTraceAll', data)
    return promise.then((data) => QueryAllDenomTraceResponse.decode(new Reader(data)))
  }

  SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse> {
    const data = QueryGetSellOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'SellOrderBook', data)
    return promise.then((data) => QueryGetSellOrderBookResponse.decode(new Reader(data)))
  }

  SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse> {
    const data = QueryAllSellOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'SellOrderBookAll', data)
    return promise.then((data) => QueryAllSellOrderBookResponse.decode(new Reader(data)))
  }

  BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse> {
    const data = QueryGetBuyOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'BuyOrderBook', data)
    return promise.then((data) => QueryGetBuyOrderBookResponse.decode(new Reader(data)))
  }

  BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse> {
    const data = QueryAllBuyOrderBookRequest.encode(request).finish()
    const promise = this.rpc.request('kingtiger0221.interchange.ibcdex.Query', 'BuyOrderBookAll', data)
    return promise.then((data) => QueryAllBuyOrderBookResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
