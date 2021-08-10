// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelSellOrder } from "./types/ibcdex/tx";
import { MsgDeletePop } from "./types/ibcdex/tx";
import { MsgSendCreatePair } from "./types/ibcdex/tx";
import { MsgSendBuyOrder } from "./types/ibcdex/tx";
import { MsgSendSellOrder } from "./types/ibcdex/tx";
import { MsgCancelBuyOrder } from "./types/ibcdex/tx";
import { MsgUpdatePop } from "./types/ibcdex/tx";
import { MsgCreatePop } from "./types/ibcdex/tx";
const types = [
    ["/kingtiger0221.interchange.ibcdex.MsgCancelSellOrder", MsgCancelSellOrder],
    ["/kingtiger0221.interchange.ibcdex.MsgDeletePop", MsgDeletePop],
    ["/kingtiger0221.interchange.ibcdex.MsgSendCreatePair", MsgSendCreatePair],
    ["/kingtiger0221.interchange.ibcdex.MsgSendBuyOrder", MsgSendBuyOrder],
    ["/kingtiger0221.interchange.ibcdex.MsgSendSellOrder", MsgSendSellOrder],
    ["/kingtiger0221.interchange.ibcdex.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/kingtiger0221.interchange.ibcdex.MsgUpdatePop", MsgUpdatePop],
    ["/kingtiger0221.interchange.ibcdex.MsgCreatePop", MsgCreatePop],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCancelSellOrder: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCancelSellOrder", value: data }),
        msgDeletePop: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgDeletePop", value: data }),
        msgSendCreatePair: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendCreatePair", value: data }),
        msgSendBuyOrder: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendBuyOrder", value: data }),
        msgSendSellOrder: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgSendSellOrder", value: data }),
        msgCancelBuyOrder: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCancelBuyOrder", value: data }),
        msgUpdatePop: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgUpdatePop", value: data }),
        msgCreatePop: (data) => ({ typeUrl: "/kingtiger0221.interchange.ibcdex.MsgCreatePop", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
