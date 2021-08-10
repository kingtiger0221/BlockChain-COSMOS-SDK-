package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/kingtiger0221/interchange/x/ibcdex/types"
)

func createNOrder(keeper *Keeper, ctx sdk.Context, n int) []types.Order {
	items := make([]types.Order, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetOrder(ctx, items[i])
	}
	return items
}

func TestOrderGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetOrder(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestOrderRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveOrder(ctx, item.Index)
		_, found := keeper.GetOrder(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestOrderGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllOrder(ctx))
}
