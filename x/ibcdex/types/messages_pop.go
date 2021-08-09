package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePop{}

func NewMsgCreatePop(creator string, title string, options string) *MsgCreatePop {
	return &MsgCreatePop{
		Creator: creator,
		Title:   title,
		Options: options,
	}
}

func (msg *MsgCreatePop) Route() string {
	return RouterKey
}

func (msg *MsgCreatePop) Type() string {
	return "CreatePop"
}

func (msg *MsgCreatePop) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePop) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePop) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePop{}

func NewMsgUpdatePop(creator string, id uint64, title string, options string) *MsgUpdatePop {
	return &MsgUpdatePop{
		Id:      id,
		Creator: creator,
		Title:   title,
		Options: options,
	}
}

func (msg *MsgUpdatePop) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePop) Type() string {
	return "UpdatePop"
}

func (msg *MsgUpdatePop) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePop) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePop) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePop{}

func NewMsgDeletePop(creator string, id uint64) *MsgDeletePop {
	return &MsgDeletePop{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePop) Route() string {
	return RouterKey
}

func (msg *MsgDeletePop) Type() string {
	return "DeletePop"
}

func (msg *MsgDeletePop) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePop) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePop) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
