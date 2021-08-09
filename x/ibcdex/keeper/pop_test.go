package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kingtiger0221/interchange/x/ibcdex/types"
	"github.com/stretchr/testify/assert"
)

func createNPop(keeper *Keeper, ctx sdk.Context, n int) []types.Pop {
	items := make([]types.Pop, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendPop(ctx, items[i])
	}
	return items
}

func TestPopGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPop(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetPop(ctx, item.Id))
	}
}

func TestPopExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPop(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasPop(ctx, item.Id))
	}
}

func TestPopRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPop(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePop(ctx, item.Id)
		assert.False(t, keeper.HasPop(ctx, item.Id))
	}
}

func TestPopGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPop(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllPop(ctx))
}

func TestPopCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPop(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetPopCount(ctx))
}
