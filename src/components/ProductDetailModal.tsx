import React, { useState } from 'react';
import { X, Star, ShieldCheck, Truck, Package, Heart, Check, Plus, Minus, Gift } from 'lucide-react';
import { Product, ProductOption, CartItem } from '../types';
import { FARM_INFO } from '../data/farmData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
  onDirectBuy: (item: Omit<CartItem, 'id'>) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectBuy,
}) => {
  if (!product) return null;

  const [selectedOption, setSelectedOption] = useState<ProductOption>(product.options[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [giftBojagiWrap, setGiftBojagiWrap] = useState<boolean>(false);
  const [customGiftMessage, setCustomGiftMessage] = useState<string>('');
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [showAddedSuccess, setShowAddedSuccess] = useState<boolean>(false);

  const unitPrice = product.basePrice + selectedOption.priceDelta + (giftBojagiWrap ? FARM_INFO.bojagiWrapFee : 0);
  const totalPrice = unitPrice * quantity;
  const isFreeShipping = totalPrice >= FARM_INFO.freeShippingThreshold;

  const handleAddToCart = () => {
    onAddToCart({
      productId: product.id,
      product,
      selectedOption,
      quantity,
      giftBojagiWrap,
      customGiftMessage: customGiftMessage.trim() || undefined,
    });
    setShowAddedSuccess(true);
    setTimeout(() => setShowAddedSuccess(false), 2000);
  };

  const handleDirectBuy = () => {
    onDirectBuy({
      productId: product.id,
      product,
      selectedOption,
      quantity,
      giftBojagiWrap,
      customGiftMessage: customGiftMessage.trim() || undefined,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DFD6C7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A453A] hover:text-[#1E3B1A] flex items-center justify-center shadow-sm border border-[#E5DEC7] transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Image Gallery & Quality Profile */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EFE9DD] border border-[#E3DBD0] relative">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#1E3B1A]/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                {product.brix}
              </div>
            </div>

            {/* Thumbnails */}
            {product.galleryImages.length > 1 && (
              <div className="flex gap-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#2D5A27] scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`갤러리 썸네일 ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Flavor Profile Metrics */}
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EBE3D7] mt-2">
              <h4 className="text-xs font-bold text-[#1E3B1A] uppercase tracking-wider mb-3">
                강희농장 품질 관능평가 지표
              </h4>
              <div className="space-y-2 text-xs text-[#595244]">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>당도 및 달콤함 (Sweetness)</span>
                    <span className="font-bold text-[#2D5A27]">{product.flavorProfile.sweetness} / 5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2D5A27] rounded-full"
                      style={{ width: `${(product.flavorProfile.sweetness / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>과육 치밀도 & 식감 (Firmness)</span>
                    <span className="font-bold text-[#2D5A27]">{product.flavorProfile.firmness} / 5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2D5A27] rounded-full"
                      style={{ width: `${(product.flavorProfile.firmness / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>풍부한 과즙량 (Juiciness)</span>
                    <span className="font-bold text-[#2D5A27]">{product.flavorProfile.juiciness} / 5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2D5A27] rounded-full"
                      style={{ width: `${(product.flavorProfile.juiciness / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-[#7A7263] mb-1.5">
                <span className="font-semibold text-[#2D5A27] tracking-wider uppercase">
                  {product.category === 'melon' ? '명품 머스크멜론 (3·4·5수)' : product.category === 'tomato' ? '100% 자연 완숙 꿀토마토' : '100% 순수 토마토즙'}
                </span>
                <div className="flex items-center gap-1 text-[#4A453A]">
                  <Star className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" />
                  <span className="font-bold tabular-nums">{product.rating}</span>
                  <span className="text-[#8C8372]">({product.reviewCount}건 구매평)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl font-bold text-[#1E3B1A] mb-2 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#645D4F] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 text-xs text-[#524B3E] mb-5">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2D5A27]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Option Selector */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#3E382E] mb-2">
                  구성 규격 선택
                </label>
                <div className="space-y-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOption(opt)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                        selectedOption.id === opt.id
                          ? 'border-[#2D5A27] bg-[#F3F8F2] font-semibold text-[#1E3B1A]'
                          : 'border-[#E0D8CA] bg-white text-[#554E41] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{opt.name}</span>
                        <span className="text-[11px] text-[#7A7263] mt-0.5">{opt.countDescription}</span>
                      </div>
                      <span className="font-bold tabular-nums text-[#2D5A27]">
                        {(product.basePrice + opt.priceDelta).toLocaleString('ko-KR')}원
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gift Bojagi Wrapping Add-on */}
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#DFD6C7] mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={giftBojagiWrap}
                    onChange={(e) => setGiftBojagiWrap(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#2D5A27] rounded border-gray-300 focus:ring-[#2D5A27]"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between font-bold text-[#1E3B1A]">
                      <span className="flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-[#2D5A27]" />
                        전통 실크 보자기 포장 + 감사 카드
                      </span>
                      <span className="text-[#A43B29] tabular-nums">+{FARM_INFO.bojagiWrapFee.toLocaleString('ko-KR')}원</span>
                    </div>
                    <p className="text-[#726B5D] text-[11px] mt-0.5">
                      은은한 옥색 실크 보자기 매듭과 노리개 장식으로 명절/부모님 선물에 품격을 더합니다.
                    </p>
                  </div>
                </label>

                {giftBojagiWrap && (
                  <div className="mt-3 pt-3 border-t border-[#E8E0D2]">
                    <label className="block text-[11px] font-medium text-[#554E41] mb-1">
                      보내는 분의 감사 메시지 (카드 인쇄 서비스)
                    </label>
                    <input
                      type="text"
                      value={customGiftMessage}
                      onChange={(e) => setCustomGiftMessage(e.target.value)}
                      placeholder="예: 어머님 아버님, 늘 건강하시고 행복하세요."
                      maxLength={60}
                      className="w-full text-xs p-2 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                    />
                  </div>
                )}
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center justify-between py-2 border-t border-[#ECE5D8] mb-4">
                <span className="text-xs font-bold text-[#3E382E]">주문 수량</span>
                <div className="flex items-center gap-2 border border-[#D5CBB9] rounded-lg bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-1 hover:bg-[#F3EFE7] disabled:opacity-30 rounded text-[#4A453A] cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold tabular-nums text-[#1E3B1A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-[#F3EFE7] rounded text-[#4A453A] cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price Total & CTA Buttons */}
            <div className="pt-4 border-t border-[#ECE5D8]">
              <div className="flex items-end justify-between mb-3">
                <div className="flex flex-col">
                  <span className="text-xs text-[#7A7263]">총 주문 금액</span>
                  <span className="text-[11px] text-[#2D5A27]">
                    {isFreeShipping ? '무료 배송 혜택 적용' : '5만원 이상 무료배송 (배송비 3,500원)'}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 text-right">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-[#1E3B1A] tabular-nums">
                    {totalPrice.toLocaleString('ko-KR')}
                  </span>
                  <span className="text-sm font-bold text-[#1E3B1A]">원</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-4 text-xs sm:text-sm font-bold text-[#2D5A27] bg-[#F2F7F1] hover:bg-[#E5EFE3] border border-[#2D5A27]/30 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {showAddedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-[#2D5A27]" />
                      <span>담기 완료!</span>
                    </>
                  ) : (
                    <span>장바구니 담기</span>
                  )}
                </button>

                <button
                  onClick={handleDirectBuy}
                  className="py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23471E] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center"
                >
                  바로 구매하기
                </button>
              </div>

              <div className="mt-3 text-center text-[11px] text-[#847B6B] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>100% 당도 보증제 &middot; 배송 중 파손 안심 보상 지원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
