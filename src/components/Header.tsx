import React from 'react';
import { ShoppingBag, Search, PhoneCall, ShieldCheck, Truck } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderLookup: () => void;
  onOpenCareGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenOrderLookup,
  onOpenCareGuide,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5]">
      {/* Top Notice Bar */}
      <div className="bg-[#2D5A27] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wide">오늘 새벽 05:30 수확 완료</span>
            <span className="text-[#C1E1B9]" aria-hidden="true">·</span>
            <span className="text-emerald-100 hidden sm:inline">오후 2시 이전 주문 시 오늘 바로 출발</span>
            <span className="text-[#C1E1B9] hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-emerald-100">5만원 이상 무료배송</span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100">
            <button
              onClick={onOpenCareGuide}
              className="hover:text-white transition-colors cursor-pointer text-xs underline underline-offset-2"
            >
              맛있게 먹는 후숙 꿀팁
            </button>
            <span className="text-[#5A8754]" aria-hidden="true">|</span>
            <button
              onClick={onOpenOrderLookup}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              주문·배송 조회
            </button>
            <span className="text-[#5A8754] hidden md:inline" aria-hidden="true">|</span>
            <a
              href={`tel:${FARM_INFO.phone}`}
              className="hidden md:flex items-center gap-1 text-white font-medium hover:text-emerald-200"
            >
              <PhoneCall className="w-3 h-3 text-emerald-300" />
              <span>전화주문 {FARM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
            康
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#1E3B1A]">
              강희농장
            </span>
            <span className="text-[10px] tracking-widest text-[#7D7667] font-medium -mt-1">
              SINCE 1974 · 50 YEARS
            </span>
          </div>
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#4A453A]">
          <a
            href="#products"
            className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
          >
            산지직송 상품
          </a>
          <a
            href="#brix-report"
            className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
          >
            오늘의 당도 리포트
          </a>
          <a
            href="#farm-story"
            className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
          >
            50년 장인 철학
          </a>
          <a
            href="#gift-package"
            className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
          >
            명품 선물포장
          </a>
          <a
            href="#reviews"
            className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
          >
            구매 후기
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action: Shopping Cart Button with counter */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenOrderLookup}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#4A453A] hover:text-[#2D5A27] bg-[#EFE9DD] hover:bg-[#E5DDCF] rounded-lg transition-colors whitespace-nowrap"
          >
            주문내역 조회
          </button>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="장바구니 보기"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>장바구니</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-[#2D5A27] bg-[#FEE180] rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
