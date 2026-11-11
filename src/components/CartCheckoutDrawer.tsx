import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Check, Copy, CheckCircle2, Gift } from 'lucide-react';
import { CartItem, Order } from '../types';
import { FARM_INFO } from '../data/farmData';

interface CartCheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onOrderComplete: (order: Order) => void;
  onClearCart: () => void;
}

export const CartCheckoutDrawer: React.FC<CartCheckoutDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOrderComplete,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);

  // Checkout form fields
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [addressDetail, setAddressDetail] = useState<string>('');
  const [shippingMemo, setShippingMemo] = useState<string>('부재 시 문 앞에 놓아주세요.');
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'credit_card' | 'easy_pay'>('bank_transfer');
  const [depositorName, setDepositorName] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const itemUnitPrice =
      item.product.basePrice +
      item.selectedOption.priceDelta +
      (item.giftBojagiWrap ? FARM_INFO.bojagiWrapFee : 0);
    return acc + itemUnitPrice * item.quantity;
  }, 0);

  const isFreeShipping = subtotal >= FARM_INFO.freeShippingThreshold || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : FARM_INFO.defaultShippingFee;
  const totalAmount = subtotal + shippingFee;
  const freeShippingRemain = Math.max(0, FARM_INFO.freeShippingThreshold - subtotal);

  // Auto-fill sample data for instant user testing
  const handleAutoFillSample = () => {
    setCustomerName('김민서');
    setPhone('010-9876-5432');
    setEmail('minseo.kim@naver.com');
    setZipCode('06028');
    setAddress('서울특별시 강남구 압구정로 201');
    setAddressDetail('102동 1403호');
    setShippingMemo('경비실 또는 문 앞에 안전하게 보관 부탁드립니다.');
    setDepositorName('김민서');
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(`${FARM_INFO.bankAccount.bank} ${FARM_INFO.bankAccount.accountNumber}`);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !address) return;

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `KH-${dateStr}-${randomSuffix}`;

    const newOrder: Order = {
      orderNumber,
      customerName,
      phone,
      email,
      zipCode: zipCode || '06028',
      address,
      addressDetail,
      shippingMemo,
      paymentMethod,
      depositorName: depositorName || customerName,
      items: [...cartItems],
      subtotal,
      shippingFee,
      totalAmount,
      orderDate: new Date().toLocaleString('ko-KR'),
      status: 'harvest_preparing',
      courierName: '우체국택배',
      trackingNumber: `68${Math.floor(10000000 + Math.random() * 90000000)}`,
    };

    setCompletedOrder(newOrder);
    onOrderComplete(newOrder);
    onClearCart();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E1D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2D5A27]" />
            <h3 className="font-serif text-lg font-bold text-[#1E3B1A]">
              {step === 'cart'
                ? `산지직송 장바구니 (${cartItems.length})`
                : step === 'checkout'
                ? '주문서 작성 및 결제'
                : '주문 접수 완료'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#645E50] hover:text-[#1E3B1A] hover:bg-[#EFE9DD] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-5 overflow-y-auto">
          {step === 'cart' && (
            <>
              {/* Free Shipping Progress */}
              <div className="mb-5 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#DFD6C7]">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#1E3B1A]">
                    {isFreeShipping ? (
                      <span className="text-[#2D5A27] font-bold">🎉 무료배송 혜택이 적용되었습니다!</span>
                    ) : (
                      <span>
                        <strong className="text-[#A43B29]">{freeShippingRemain.toLocaleString('ko-KR')}원</strong> 더 담으면 무료배송!
                      </span>
                    )}
                  </span>
                  <span className="text-[#7A7263]">50,000원 기준</span>
                </div>
                <div className="w-full h-2 bg-[#E9E1D3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2D5A27] rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / FARM_INFO.freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Items List */}
              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#8C8372] mx-auto flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#2D281F] mb-1">
                    장바구니가 비어 있습니다
                  </h4>
                  <p className="text-xs text-[#7A7263] mb-6">
                    50년 전통의 당도 높은 명품 멜론과 완숙토마토를 만나보세요.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-colors cursor-pointer"
                  >
                    산지직송 상품 둘러보기
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const itemUnitPrice =
                      item.product.basePrice +
                      item.selectedOption.priceDelta +
                      (item.giftBojagiWrap ? FARM_INFO.bojagiWrapFee : 0);
                    return (
                      <div
                        key={item.id}
                        className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E3DBD0] flex gap-3.5"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 rounded-lg object-cover bg-white shrink-0 border border-[#DFD6C7]"
                        />

                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-xs sm:text-sm font-bold text-[#1E3B1A] truncate">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-[#998F7E] hover:text-[#A43B29] p-0.5 cursor-pointer"
                                title="삭제"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <p className="text-[11px] text-[#6A6353] mt-0.5">
                              {item.selectedOption.name}
                            </p>

                            {item.giftBojagiWrap && (
                              <div className="flex items-center gap-1 text-[10px] text-[#A43B29] font-medium mt-1">
                                <Gift className="w-3 h-3" />
                                <span>전통 보자기 포장 포함 (+3,000원)</span>
                              </div>
                            )}

                            {item.customGiftMessage && (
                              <p className="text-[10px] text-[#7A7263] truncate mt-0.5">
                                카드: "{item.customGiftMessage}"
                              </p>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 border border-[#D5CBB9] rounded-lg bg-white px-1.5 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                                className="text-[#554E40] disabled:opacity-30 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold tabular-nums text-[#1E3B1A] w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="text-[#554E40] cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="font-serif text-sm font-bold text-[#1E3B1A] tabular-nums">
                              {(itemUnitPrice * item.quantity).toLocaleString('ko-KR')}원
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form id="checkout-form" onSubmit={handleCreateOrder} className="space-y-4">
              {/* Quick Auto-fill button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAutoFillSample}
                  className="text-xs font-semibold text-[#2D5A27] bg-[#EBF3E8] hover:bg-[#DEECD9] px-2.5 py-1.5 rounded-lg border border-[#2D5A27]/20 transition-colors cursor-pointer"
                >
                  ⚡ 간편 테스트용 주소 자동채우기
                </button>
              </div>

              {/* Customer Info */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#DFD6C7] space-y-3">
                <h4 className="text-xs font-bold text-[#1E3B1A] uppercase tracking-wider">
                  주문자 &amp; 받으실 분 정보
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#4A453A] mb-1">
                      받는 분 성함 *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4A453A] mb-1">
                      휴대폰 번호 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#4A453A] mb-1">
                    배송지 주소 *
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="우편번호"
                      className="w-24 text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                    />
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="기본 도로명 주소"
                      className="flex-1 text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                    />
                  </div>
                  <input
                    type="text"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                    placeholder="상세주소 (동, 호수 등)"
                    className="w-full text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#4A453A] mb-1">
                    배송 요청사항
                  </label>
                  <select
                    value={shippingMemo}
                    onChange={(e) => setShippingMemo(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F]"
                  >
                    <option value="부재 시 문 앞에 놓아주세요.">부재 시 문 앞에 놓아주세요.</option>
                    <option value="배송 전 미리 연락 부탁드립니다.">배송 전 미리 연락 부탁드립니다.</option>
                    <option value="경비실에 맡겨주세요.">경비실에 맡겨주세요.</option>
                    <option value="택배함에 넣어주세요.">택배함에 넣어주세요.</option>
                    <option value="파손 주의! 과일 상자 조심히 다뤄주세요.">파손 주의! 과일 상자 조심히 다뤄주세요.</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#DFD6C7] space-y-3">
                <h4 className="text-xs font-bold text-[#1E3B1A] uppercase tracking-wider">
                  결제 수단 선택
                </h4>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-[#2D5A27] bg-[#EAF2E9] text-[#1E3B1A]'
                        : 'border-[#D5CBB9] bg-white text-[#645E50]'
                    }`}
                  >
                    무통장 입금
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      paymentMethod === 'credit_card'
                        ? 'border-[#2D5A27] bg-[#EAF2E9] text-[#1E3B1A]'
                        : 'border-[#D5CBB9] bg-white text-[#645E50]'
                    }`}
                  >
                    신용/체크카드
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('easy_pay')}
                    className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      paymentMethod === 'easy_pay'
                        ? 'border-[#2D5A27] bg-[#EAF2E9] text-[#1E3B1A]'
                        : 'border-[#D5CBB9] bg-white text-[#645E50]'
                    }`}
                  >
                    간편결제
                  </button>
                </div>

                {paymentMethod === 'bank_transfer' && (
                  <div className="p-3 bg-white rounded-lg border border-[#E3DBD0] text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#1E3B1A]">
                        {FARM_INFO.bankAccount.bank} {FARM_INFO.bankAccount.accountNumber}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAccount}
                        className="text-[11px] text-[#2D5A27] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        {copiedAccount ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedAccount ? '복사됨' : '계좌복사'}</span>
                      </button>
                    </div>
                    <div className="text-[#7A7263] text-[11px]">
                      예금주: {FARM_INFO.bankAccount.holder}
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#4A453A] mb-1">
                        입금자명 (주문자와 다를 시 필수 입력)
                      </label>
                      <input
                        type="text"
                        value={depositorName}
                        onChange={(e) => setDepositorName(e.target.value)}
                        placeholder="입금자 성함"
                        className="w-full text-xs p-1.5 rounded border border-[#D5CBB9] bg-white text-[#2D281F]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}

          {step === 'success' && completedOrder && (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EAF2E9] text-[#2D5A27] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#2D5A27] tracking-wider uppercase">
                  산지직송 주문 접수 완료
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E3B1A] mt-1">
                  감사합니다, 정성을 다해 수확하겠습니다
                </h3>
                <p className="text-xs text-[#6A6353] mt-1">
                  주문번호: <strong className="text-[#1E3B1A] tabular-nums">{completedOrder.orderNumber}</strong>
                </p>
              </div>

              {/* Order Receipt Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#DFD6C7] text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#E8E1D5] pb-2 font-bold text-[#1E3B1A]">
                  <span>배송 정보</span>
                  <span>우체국택배 산지직송</span>
                </div>
                <div className="flex justify-between text-[#595244]">
                  <span>받는 분</span>
                  <span className="font-medium">{completedOrder.customerName} ({completedOrder.phone})</span>
                </div>
                <div className="flex justify-between text-[#595244]">
                  <span>배송 주소</span>
                  <span className="font-medium text-right max-w-[200px] truncate">
                    {completedOrder.address} {completedOrder.addressDetail}
                  </span>
                </div>
                <div className="flex justify-between text-[#595244]">
                  <span>결제 금액</span>
                  <span className="font-bold text-[#1E3B1A] tabular-nums">
                    {completedOrder.totalAmount.toLocaleString('ko-KR')}원
                  </span>
                </div>
                <div className="flex justify-between text-[#595244]">
                  <span>주문 상태</span>
                  <span className="font-bold text-[#2D5A27]">새벽 수확 후 품질 검수 대기중</span>
                </div>
              </div>

              {completedOrder.paymentMethod === 'bank_transfer' && (
                <div className="p-3 bg-[#FBF6EE] rounded-lg border border-[#E9D9BF] text-xs text-left text-[#6E4F18]">
                  <strong>입금 안내:</strong> {FARM_INFO.bankAccount.bank}{' '}
                  <strong>{FARM_INFO.bankAccount.accountNumber}</strong> (예금주: {FARM_INFO.bankAccount.holder})
                  <br />
                  <span className="text-[11px] text-[#8C6D32]">
                    * 입금 확인 즉시 발송 준비 카카오톡 알림톡을 발송해 드립니다.
                  </span>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setStep('cart');
                    onClose();
                  }}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-colors cursor-pointer"
                >
                  확인 및 쇼핑 계속하기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        {step !== 'success' && cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E8E1D5] bg-[#FAF7F2] space-y-3">
            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#595244]">
              <div className="flex justify-between">
                <span>상품 합계</span>
                <span className="tabular-nums font-medium">{subtotal.toLocaleString('ko-KR')}원</span>
              </div>
              <div className="flex justify-between">
                <span>배송비</span>
                <span className="tabular-nums font-medium">
                  {isFreeShipping ? '무료 (5만원 이상)' : `${shippingFee.toLocaleString('ko-KR')}원`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1E3B1A] pt-2 border-t border-[#E8E1D5]">
                <span>최종 결제 금액</span>
                <span className="font-serif text-lg text-[#2D5A27] tabular-nums">
                  {totalAmount.toLocaleString('ko-KR')}원
                </span>
              </div>
            </div>

            {/* Buttons */}
            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23471E] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>주문서 작성하기 ({totalAmount.toLocaleString('ko-KR')}원)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="py-3 px-4 text-xs font-semibold text-[#554E40] bg-white hover:bg-[#EFE9DD] border border-[#D5CBB9] rounded-xl cursor-pointer"
                >
                  이전으로
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3 text-xs sm:text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23471E] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {totalAmount.toLocaleString('ko-KR')}원 결제 완료하기
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
