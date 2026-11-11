import React from 'react';
import { Gift, ShieldCheck, Heart, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/farmData';
import { Product } from '../types';

interface GiftPackagingSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const GiftPackagingSection: React.FC<GiftPackagingSectionProps> = ({ onSelectProduct }) => {
  const melonProduct = PRODUCTS[0]; // 50년 장인 명품 머스크멜론 (3수 / 4수 / 5수)
  const juiceProduct = PRODUCTS[2]; // 100% 순수 완숙토마토즙

  return (
    <section id="gift-package" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Artwork */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#DFD6C7] shadow-xl bg-[#EFE9DD]">
              <img
                src="/src/assets/images/farm_gift_box_1794377592041.jpg"
                alt="강희농장 전통 보자기 포장과 명품 과일 선물세트"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-5 right-6 bg-[#2D5A27] text-white p-4 rounded-xl shadow-lg border border-white/20 hidden sm:flex items-center gap-3">
              <Gift className="w-6 h-6 text-[#FEE180]" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block text-emerald-200">
                  선물 만족도 1위
                </span>
                <span className="font-serif text-sm font-bold">
                  명절 &middot; 부모님 &middot; VIP 품격 선물
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A43B29] uppercase mb-2">
              <Gift className="w-4 h-4 text-[#A43B29]" />
              <span>강희농장 프리미엄 명품 선물 포장</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3B1A] tracking-tight mb-4 leading-tight">
              소중한 분의 품격에 어울리는<br />
              단 하나의 산지직송 명품 선물
            </h2>

            <p className="text-xs sm:text-sm text-[#5C5546] leading-relaxed mb-6">
              백화점 VIP 코너에 납품되는 최고 등급의 멜론(3수·4수·5수)과 100% 무첨가 순수 완숙토마토즙을 정성껏 포장해 드립니다.
              수작업으로 단아하게 매듭지은 은은한 옥색 실크 보자기와 품격 있는 감사 카드로 보내는 분의 진심을 온전히 전해드립니다.
            </p>

            {/* Gift Highlights List */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF2E9] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E3B1A]">
                    특수 에어셀 안전 완충 포장
                  </h4>
                  <p className="text-xs text-[#706859] mt-0.5">
                    공기 기둥이 과실 전체를 감싸 배송 중 충격이나 멍듦 없이 농장에서 딴 원형 그대로 도착합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF2E9] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E3B1A]">
                    전통 실크 보자기 &amp; 황동 노리개 장식
                  </h4>
                  <p className="text-xs text-[#706859] mt-0.5">
                    단아한 옥색(玉色) 실크 보자기 매듭과 복(福)을 기원하는 황동 노리개로 격조를 높였습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF2E9] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E3B1A]">
                    희망 배송일 지정 &amp; 캘리그라피 감사 엽서
                  </h4>
                  <p className="text-xs text-[#706859] mt-0.5">
                    생신, 기념일, 명절 등 원하시는 날짜에 맞춰 신선하게 수확 발송하며 보내시는 분의 성함과 문구를 인쇄해 동봉합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Order Boxes for Melon & Tomato Juice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DFD6C7] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#2D5A27] font-bold block mb-1">
                    명품 머스크멜론 (3·4·5수)
                  </span>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-serif text-lg font-bold text-[#1E3B1A]">
                      {melonProduct.basePrice.toLocaleString('ko-KR')}원~
                    </span>
                    <span className="text-xs text-[#A43B29] font-bold">15.5+ Brix</span>
                  </div>
                </div>
                <button
                  onClick={() => onSelectProduct(melonProduct)}
                  className="w-full py-2 text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-lg transition-colors cursor-pointer text-center"
                >
                  멜론 선물상자 주문
                </button>
              </div>

              <div className="p-4 bg-[#FFF7F5] rounded-xl border border-[#F2D7D0] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#A43B29] font-bold block mb-1">
                    100% 순수 완숙토마토즙 (30·60포)
                  </span>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-serif text-lg font-bold text-[#1E3B1A]">
                      {juiceProduct.basePrice.toLocaleString('ko-KR')}원~
                    </span>
                    <span className="text-xs text-[#2D5A27] font-bold">물 0% 무첨가</span>
                  </div>
                </div>
                <button
                  onClick={() => onSelectProduct(juiceProduct)}
                  className="w-full py-2 text-xs font-bold text-white bg-[#A43B29] hover:bg-[#8B3020] rounded-lg transition-colors cursor-pointer text-center"
                >
                  토마토즙 선물박스 주문
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
