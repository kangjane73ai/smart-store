import React, { useState } from 'react';
import { X, Search, PackageCheck, Truck, Clock, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Order } from '../types';

interface OrderLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
}

export const OrderLookupModal: React.FC<OrderLookupModalProps> = ({
  isOpen,
  onClose,
  orders,
}) => {
  const [query, setQuery] = useState<string>('010-3841-9920'); // Pre-fill with sample for instant lookup
  const [matchedOrder, setMatchedOrder] = useState<Order | null>(orders[0] || null);
  const [searched, setSearched] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.replace(/-/g, '').trim();
    const found = orders.find(
      (o) =>
        o.orderNumber.toLowerCase().includes(cleanQuery.toLowerCase()) ||
        o.phone.replace(/-/g, '').includes(cleanQuery) ||
        o.customerName.includes(cleanQuery)
    );
    setMatchedOrder(found || null);
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#DFD6C7] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7A7263] hover:text-[#1E3B1A] p-1.5 rounded-full hover:bg-[#F3EFE7] cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A27] mb-1">
          <Truck className="w-4 h-4 text-[#2D5A27]" />
          <span>강희농장 실시간 배송조회</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1E3B1A] mb-4">
          주문 및 배송 현황 조회
        </h3>

        {/* Search Input Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="주문자 휴대폰 번호 또는 주문번호 (예: 010-3841-9920)"
              className="flex-1 text-xs sm:text-sm p-3 rounded-xl border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
            />
            <button
              type="submit"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              <span>조회</span>
            </button>
          </div>
          <p className="text-[11px] text-[#7A7263] mt-1.5">
            * 예시 번호 <code className="text-[#2D5A27] font-mono">010-3841-9920</code> 로 바로 조회해보실 수 있습니다.
          </p>
        </form>

        {/* Result Area */}
        {searched && (
          <div>
            {matchedOrder ? (
              <div className="space-y-5">
                {/* Status Timeline */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#DFD6C7]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[11px] font-mono text-[#7A7263] block">
                        주문번호: {matchedOrder.orderNumber}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#1E3B1A]">
                        {matchedOrder.customerName} 고객님의 주문건
                      </h4>
                    </div>
                    <span className="bg-[#EAF2E9] text-[#2D5A27] font-bold text-xs px-2.5 py-1 rounded-md">
                      {matchedOrder.status === 'shipping'
                        ? '배송중 (당일도착 예정)'
                        : '새벽 수확·포장 완료'}
                    </span>
                  </div>

                  {/* 4 Step Progress Bar */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-2">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-bold mb-1">
                        ✓
                      </div>
                      <span className="font-bold text-[#1E3B1A]">주문접수</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-bold mb-1">
                        ✓
                      </div>
                      <span className="font-bold text-[#1E3B1A]">새벽수확선별</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-bold mb-1">
                        ✓
                      </div>
                      <span className="font-bold text-[#1E3B1A]">안전포장완료</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#A43B29] text-white flex items-center justify-center font-bold mb-1">
                        🚚
                      </div>
                      <span className="font-bold text-[#A43B29]">택배발송중</span>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <div className="bg-white p-4 rounded-xl border border-[#E3DBD0] text-xs space-y-2">
                  <div className="flex justify-between text-[#595244]">
                    <span>택배사 및 송장번호</span>
                    <span className="font-bold text-[#1E3B1A]">
                      {matchedOrder.courierName} {matchedOrder.trackingNumber}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#595244]">
                    <span>배송지 주소</span>
                    <span className="font-medium text-right max-w-[260px] truncate">
                      {matchedOrder.address} {matchedOrder.addressDetail}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#595244]">
                    <span>주문 일시</span>
                    <span>{matchedOrder.orderDate}</span>
                  </div>
                  <div className="flex justify-between text-[#595244] border-t border-[#EFE9DD] pt-2">
                    <span>주문 상품</span>
                    <span className="font-bold text-[#1E3B1A]">
                      {matchedOrder.items.map((i) => `${i.product.name} (${i.quantity}개)`).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#1E3B1A] font-bold">
                    <span>결제 금액</span>
                    <span className="font-serif text-sm tabular-nums">
                      {matchedOrder.totalAmount.toLocaleString('ko-KR')}원
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#7A7263] flex items-center gap-1.5 bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EDE5D8]">
                  <ShieldCheck className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>
                    신선식품 특성상 수령 당일 개봉하여 상태를 확인해 주시기 바랍니다.
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-[#FAF7F2] rounded-xl border border-[#DFD6C7]">
                <AlertCircle className="w-8 h-8 text-[#A43B29] mx-auto mb-2" />
                <h4 className="font-serif text-base font-bold text-[#1E3B1A]">
                  일치하는 주문 정보가 없습니다
                </h4>
                <p className="text-xs text-[#7A7263] mt-1">
                  입력하신 전화번호나 주문번호를 다시 한번 확인해 주세요.
                  <br />
                  전화 문의: 010-3867-6494 (평일 09:00 ~ 18:00)
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
