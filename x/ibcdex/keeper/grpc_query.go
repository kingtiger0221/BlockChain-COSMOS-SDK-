package keeper

import (
	"github.com/kingtiger0221/interchange/x/ibcdex/types"
)

var _ types.QueryServer = Keeper{}
