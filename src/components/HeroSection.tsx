import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Scale, SunMedium } from 'lucide-react';
import { TODAY_HARVEST, FARM_INFO } from '../data/farmData';

interface HeroSectionProps {
  onOrderClick: () => void;
  onBrixClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick, onBrixClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] border-b border-[#E8E2D5] pt-8 pb-12 sm:pt-14 sm:pb-18">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EBF3E8] opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#F5EEDB] opacity-70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Story & High-Impact Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3B6E34] uppercase mb-3">
              <span>반세기 50년의 장인 고집</span>
              <span aria-hidden="true">·</span>
              <span>전북 익산시 석탄동 강희농장 산지직송</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#1E3B1A] leading-[1.2] tracking-tight mb-5 text-balance">
              당도도 으뜸, 모양도 으뜸
              <br />
              <span className="text-[#A43B29] font-serif">강희 농부가 50년 키운</span>{' '}
              명품 멜론 &amp; 자연완숙토마토
            </h1>

            {/* Compelling Value Description */}
            <p className="text-[#595244] text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
              한 덩굴에 단 하나의 과실만 남기는 <strong>1줄기 1과 원칙</strong>의
              15.8 Brix 명품 머스크멜론(3수·4수·5수 박스)과, 가스 착색제 없이 나무에서 100% 자연 완숙된
              탱탱한 꿀토마토, 그리고 물 한 방울 넣지 않은 <strong>원조 100% 순수 완숙토마토즙</strong>.
              오늘 새벽 수확한 살아있는 신선함을 농장에서 식탁으로 당일 직송합니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>오늘 수확물 주문하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBrixClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-[#3D382E] bg-white hover:bg-[#F3EFE7] border border-[#D8CEBE] active:scale-[0.98] rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>오늘의 당도 리포트 ({TODAY_HARVEST.melonBrix} Brix)</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#EAE3D5]">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#1E3B1A] tabular-nums">50년</span>
                <span className="text-xs text-[#7A7263] mt-0.5">단일재배 장인 노하우</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#1E3B1A] tabular-nums">15.8°</span>
                <span className="text-xs text-[#7A7263] mt-0.5">오늘 수확 최고 당도</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#A43B29] tabular-nums">100%</span>
                <span className="text-xs text-[#7A7263] mt-0.5">당도 미달 시 무료교환</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#1E3B1A] tabular-nums">05:30</span>
                <span className="text-xs text-[#7A7263] mt-0.5">새벽 수확 당일 출고</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Master Farmer Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DFD6C7] bg-[#EFE9DD] group">
              <img
                src="/src/assets/images/hero_farmer_kanghee_1794378566621.jpg"
                alt="강희농장 강희 명인이 당일 수확한 명품 머스크멜론과 자연 완숙 토마토"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Scrim with Master Identity */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-300 tracking-wider">
                      강희농장 대표 농부
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                      강희 명인 &middot; 50년 재배
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 max-w-xs">
                      "모양도 둥글고 네트가 균일해야 하지만, 무엇보다 한 입 베었을 때 꿀물이 터져 나와야 진짜입니다."
                    </p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/25 shrink-0 text-center">
                    <span className="block text-[11px] text-emerald-200">익산 석탄동 직송</span>
                    <span className="font-bold text-sm text-white">162상자 한정수확</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
