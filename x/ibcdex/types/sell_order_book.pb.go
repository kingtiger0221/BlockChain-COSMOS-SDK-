// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibcdex/sell_order_book.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type SellOrderBook struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Index       string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	AmountDenom string `protobuf:"bytes,3,opt,name=amountDenom,proto3" json:"amountDenom,omitempty"`
	PriceDenom  string `protobuf:"bytes,4,opt,name=priceDenom,proto3" json:"priceDenom,omitempty"`
}

func (m *SellOrderBook) Reset()         { *m = SellOrderBook{} }
func (m *SellOrderBook) String() string { return proto.CompactTextString(m) }
func (*SellOrderBook) ProtoMessage()    {}
func (*SellOrderBook) Descriptor() ([]byte, []int) {
	return fileDescriptor_e1cfec8ad1959141, []int{0}
}
func (m *SellOrderBook) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SellOrderBook) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SellOrderBook.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SellOrderBook) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SellOrderBook.Merge(m, src)
}
func (m *SellOrderBook) XXX_Size() int {
	return m.Size()
}
func (m *SellOrderBook) XXX_DiscardUnknown() {
	xxx_messageInfo_SellOrderBook.DiscardUnknown(m)
}

var xxx_messageInfo_SellOrderBook proto.InternalMessageInfo

func (m *SellOrderBook) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *SellOrderBook) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *SellOrderBook) GetAmountDenom() string {
	if m != nil {
		return m.AmountDenom
	}
	return ""
}

func (m *SellOrderBook) GetPriceDenom() string {
	if m != nil {
		return m.PriceDenom
	}
	return ""
}

func init() {
	proto.RegisterType((*SellOrderBook)(nil), "kingtiger0221.interchange.ibcdex.SellOrderBook")
}

func init() { proto.RegisterFile("ibcdex/sell_order_book.proto", fileDescriptor_e1cfec8ad1959141) }

var fileDescriptor_e1cfec8ad1959141 = []byte{
	// 245 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xbf, 0x4a, 0xc4, 0x40,
	0x10, 0xc6, 0xb3, 0xfe, 0xc5, 0x15, 0x9b, 0xe5, 0x8a, 0x20, 0xb2, 0x04, 0x2b, 0xab, 0xac, 0xde,
	0xbd, 0xc1, 0x61, 0x2b, 0x82, 0x76, 0x36, 0x47, 0xb2, 0x19, 0xf6, 0x96, 0x24, 0x3b, 0x61, 0x6e,
	0x0f, 0x62, 0xe9, 0x1b, 0xf8, 0x58, 0x96, 0x57, 0x5a, 0x4a, 0xf2, 0x22, 0x72, 0xbb, 0x0a, 0xb9,
	0x6e, 0xbe, 0x6f, 0xbe, 0x6f, 0xe0, 0x37, 0xfc, 0xc6, 0x96, 0xba, 0x82, 0x5e, 0x6d, 0xa0, 0x69,
	0x56, 0x48, 0x15, 0xd0, 0xaa, 0x44, 0xac, 0xf3, 0x8e, 0xd0, 0xa3, 0xc8, 0x6a, 0xeb, 0x8c, 0xb7,
	0x06, 0xe8, 0x7e, 0x3e, 0x7f, 0xc8, 0xad, 0xf3, 0x40, 0x7a, 0x5d, 0x38, 0x03, 0x79, 0xec, 0x5d,
	0xcf, 0x0c, 0x1a, 0x0c, 0x61, 0xb5, 0x9f, 0x62, 0xef, 0xf6, 0x83, 0xf1, 0xab, 0x57, 0x68, 0x9a,
	0xe7, 0xfd, 0xc1, 0x25, 0x62, 0x2d, 0x52, 0x7e, 0xae, 0x09, 0x0a, 0x8f, 0x94, 0xb2, 0x8c, 0xdd,
	0x5d, 0xbc, 0xfc, 0x4b, 0x31, 0xe3, 0xa7, 0xd6, 0x55, 0xd0, 0xa7, 0x47, 0xc1, 0x8f, 0x42, 0x64,
	0xfc, 0xb2, 0x68, 0x71, 0xeb, 0xfc, 0x23, 0x38, 0x6c, 0xd3, 0xe3, 0xb0, 0x9b, 0x5a, 0x42, 0x72,
	0xde, 0x91, 0xd5, 0x10, 0x03, 0x27, 0x21, 0x30, 0x71, 0x96, 0x4f, 0x5f, 0x83, 0x64, 0xbb, 0x41,
	0xb2, 0x9f, 0x41, 0xb2, 0xcf, 0x51, 0x26, 0xbb, 0x51, 0x26, 0xdf, 0xa3, 0x4c, 0xde, 0x16, 0xc6,
	0xfa, 0xf5, 0xb6, 0xcc, 0x35, 0xb6, 0xea, 0x00, 0x50, 0x4d, 0x00, 0x55, 0xaf, 0xfe, 0x5e, 0xe3,
	0xdf, 0x3b, 0xd8, 0x94, 0x67, 0x81, 0x6c, 0xf1, 0x1b, 0x00, 0x00, 0xff, 0xff, 0xcb, 0x10, 0x07,
	0x2b, 0x31, 0x01, 0x00, 0x00,
}

func (m *SellOrderBook) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SellOrderBook) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SellOrderBook) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PriceDenom) > 0 {
		i -= len(m.PriceDenom)
		copy(dAtA[i:], m.PriceDenom)
		i = encodeVarintSellOrderBook(dAtA, i, uint64(len(m.PriceDenom)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AmountDenom) > 0 {
		i -= len(m.AmountDenom)
		copy(dAtA[i:], m.AmountDenom)
		i = encodeVarintSellOrderBook(dAtA, i, uint64(len(m.AmountDenom)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintSellOrderBook(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintSellOrderBook(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintSellOrderBook(dAtA []byte, offset int, v uint64) int {
	offset -= sovSellOrderBook(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *SellOrderBook) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovSellOrderBook(uint64(l))
	}
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovSellOrderBook(uint64(l))
	}
	l = len(m.AmountDenom)
	if l > 0 {
		n += 1 + l + sovSellOrderBook(uint64(l))
	}
	l = len(m.PriceDenom)
	if l > 0 {
		n += 1 + l + sovSellOrderBook(uint64(l))
	}
	return n
}

func sovSellOrderBook(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSellOrderBook(x uint64) (n int) {
	return sovSellOrderBook(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *SellOrderBook) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSellOrderBook
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: SellOrderBook: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SellOrderBook: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AmountDenom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AmountDenom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDenom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDenom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSellOrderBook(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSellOrderBook
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipSellOrderBook(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSellOrderBook
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSellOrderBook
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthSellOrderBook
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSellOrderBook
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSellOrderBook
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSellOrderBook        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSellOrderBook          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSellOrderBook = fmt.Errorf("proto: unexpected end of group")
)
