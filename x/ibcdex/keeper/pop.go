package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kingtiger0221/interchange/x/ibcdex/types"
	"strconv"
)

// GetPopCount get the total number of TypeName.LowerCamel
func (k Keeper) GetPopCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopCountKey))
	byteKey := types.KeyPrefix(types.PopCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetPopCount set the total number of pop
func (k Keeper) SetPopCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopCountKey))
	byteKey := types.KeyPrefix(types.PopCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPop appends a pop in the store with a new id and update the count
func (k Keeper) AppendPop(
	ctx sdk.Context,
	pop types.Pop,
) uint64 {
	// Create the pop
	count := k.GetPopCount(ctx)

	// Set the ID of the appended value
	pop.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&pop)
	store.Set(GetPopIDBytes(pop.Id), appendedValue)

	// Update pop count
	k.SetPopCount(ctx, count+1)

	return count
}

// SetPop set a specific pop in the store
func (k Keeper) SetPop(ctx sdk.Context, pop types.Pop) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	b := k.cdc.MustMarshalBinaryBare(&pop)
	store.Set(GetPopIDBytes(pop.Id), b)
}

// GetPop returns a pop from its id
func (k Keeper) GetPop(ctx sdk.Context, id uint64) types.Pop {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	var pop types.Pop
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPopIDBytes(id)), &pop)
	return pop
}

// HasPop checks if the pop exists in the store
func (k Keeper) HasPop(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	return store.Has(GetPopIDBytes(id))
}

// GetPopOwner returns the creator of the
func (k Keeper) GetPopOwner(ctx sdk.Context, id uint64) string {
	return k.GetPop(ctx, id).Creator
}

// RemovePop removes a pop from the store
func (k Keeper) RemovePop(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	store.Delete(GetPopIDBytes(id))
}

// GetAllPop returns all pop
func (k Keeper) GetAllPop(ctx sdk.Context) (list []types.Pop) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PopKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pop
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPopIDBytes returns the byte representation of the ID
func GetPopIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPopIDFromBytes returns ID in uint64 format from a byte array
func GetPopIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
