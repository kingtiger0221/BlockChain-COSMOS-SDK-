// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendCreatePair } from "./types/ibcdex/tx";
import { MsgSendBuyOrder } from "./types/ibcdex/tx";
import { MsgSendSellOrder } from "./types/ibcdex/tx";
import { MsgDeletePop } from "./types/ibcdex/tx";
import { MsgCancelBuyOrder } from "./types/ibcdex/tx";
import { MsgCancelSellOrder } from "./types/ibcdex/tx";
import { MsgUpdatePop } from "./types/ibcdex/tx";
import { MsgCreatePop } from "./types/ibcdex/tx";


const types = [
  ["/kingtiger0221.interchange.ibcdex.MsgSendCreatePair", MsgSendCreatePair],
  ["/kingtiger0221.interchange.ibcdex.MsgSendBuyOrder", MsgSendBuyOrder],
  ["/kingtiger0221.interchange.ibcdex.MsgSendSellOrder", MsgSendSellOrder],
  ["/kingtiger0221.interchange.ibcdex.MsgDeletePop", MsgDeletePop],
  ["/kingtiger0221.interchange.ibcdex.MsgCancelBuyOrder", MsgCancelBuyOrder],
  ["/kingtiger0221.interchange.ibcdex.MsgCancelSellOrder", MsgCancelSellOrder],
  ["/kingtiger0221.interchange.ibcdex.MsgUpdatePop", MsgUpdatePop],
  ["/kingtiger0221.interchange.ibcdex.MsgCreatePop", MsgCreatePop],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendCreatePair: (data: MsgSendCreatePair): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendCreatePair", value: data }),
    msgSendBuyOrder: (data: MsgSendBuyOrder): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendBuyOrder", value: data }),
    msgSendSellOrder: (data: MsgSendSellOrder): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendSellOrder", value: data }),
    msgDeletePop: (data: MsgDeletePop): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgDeletePop", value: data }),
    msgCancelBuyOrder: (data: MsgCancelBuyOrder): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCancelBuyOrder", value: data }),
    msgCancelSellOrder: (data: MsgCancelSellOrder): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCancelSellOrder", value: data }),
    msgUpdatePop: (data: MsgUpdatePop): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgUpdatePop", value: data }),
    msgCreatePop: (data: MsgCreatePop): EncodeObject => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCreatePop", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
