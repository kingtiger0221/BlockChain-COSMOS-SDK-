package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kingtiger0221/interchange/x/ibcdex/types"
)

func (k msgServer) CreatePop(goCtx context.Context, msg *types.MsgCreatePop) (*types.MsgCreatePopResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var pop = types.Pop{
		Creator: msg.Creator,
		Title:   msg.Title,
		Options: msg.Options,
	}

	id := k.AppendPop(
		ctx,
		pop,
	)

	return &types.MsgCreatePopResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePop(goCtx context.Context, msg *types.MsgUpdatePop) (*types.MsgUpdatePopResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var pop = types.Pop{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Options: msg.Options,
	}

	// Checks that the element exists
	if !k.HasPop(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPopOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPop(ctx, pop)

	return &types.MsgUpdatePopResponse{}, nil
}

func (k msgServer) DeletePop(goCtx context.Context, msg *types.MsgDeletePop) (*types.MsgDeletePopResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPop(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPopOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePop(ctx, msg.Id)

	return &types.MsgDeletePopResponse{}, nil
}
