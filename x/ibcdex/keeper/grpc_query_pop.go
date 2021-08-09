package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/kingtiger0221/interchange/x/ibcdex/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PopAll(c context.Context, req *types.QueryAllPopRequest) (*types.QueryAllPopResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var pops []*types.Pop
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	popStore := prefix.NewStore(store, types.KeyPrefix(types.PopKey))

	pageRes, err := query.Paginate(popStore, req.Pagination, func(key []byte, value []byte) error {
		var pop types.Pop
		if err := k.cdc.UnmarshalBinaryBare(value, &pop); err != nil {
			return err
		}

		pops = append(pops, &pop)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPopResponse{Pop: pops, Pagination: pageRes}, nil
}

func (k Keeper) Pop(c context.Context, req *types.QueryGetPopRequest) (*types.QueryGetPopResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var pop types.Pop
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPop(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPopIDBytes(req.Id)), &pop)

	return &types.QueryGetPopResponse{Pop: &pop}, nil
}
