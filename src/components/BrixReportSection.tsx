import React, { useState } from 'react';
import { Gauge, CheckCircle2, ShieldCheck, ThermometerSun, Sparkles, RefreshCcw, Info } from 'lucide-react';
import { TODAY_HARVEST } from '../data/farmData';

export const BrixReportSection: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<'melon' | 'tomato'>('melon');

  return (
    <section id="brix-report" className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#E3DBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D5A27] uppercase mb-2">
            <Gauge className="w-4 h-4 text-[#2D5A27]" />
            <span>실시간 품질 검증 시스템</span>
            <span aria-hidden="true">·</span>
            <span>디지털 굴절계 전수 검사</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3B1A] tracking-tight mb-3">
            오늘 아침 수확한 과실의 실제 당도입니다
          </h2>
          <p className="text-[#645D4F] text-sm sm:text-base leading-relaxed">
            강희농장은 감(感)으로 수확하지 않습니다. 매일 아침 비파괴 광학 선별기와 디지털 당도 굴절계로
            엄격히 측정하여, 기준치 이상의 특등품만 선별해 고객님 댁으로 보내드립니다.
          </p>
        </div>

        {/* Brix Dashboard Box */}
        <div className="bg-white rounded-2xl border border-[#DFD5C6] shadow-md overflow-hidden">
          {/* Top Switcher Strip */}
          <div className="bg-[#FAF7F2] p-3 sm:p-4 border-b border-[#E8E1D5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-[#EAE2D5] p-1 rounded-xl">
              <button
                onClick={() => setSelectedCrop('melon')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCrop === 'melon'
                    ? 'bg-[#2D5A27] text-white shadow-xs'
                    : 'text-[#5C5546] hover:text-[#1E3B1A]'
                }`}
              >
                명품 머스크멜론 당도 (15.8°Bx)
              </button>
              <button
                onClick={() => setSelectedCrop('tomato')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCrop === 'tomato'
                    ? 'bg-[#A43B29] text-white shadow-xs'
                    : 'text-[#5C5546] hover:text-[#1E3B1A]'
                }`}
              >
                자연 완숙 꿀토마토 당도 (9.4°Bx)
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#6F6757]">
              <span className="flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4 text-[#D97706]" />
                온도 {TODAY_HARVEST.morningTemperature}
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">{TODAY_HARVEST.sunshineHours}</span>
              <span className="hidden sm:inline">|</span>
              <span className="font-medium text-[#2D5A27]">{TODAY_HARVEST.date}</span>
            </div>
          </div>

          {/* Main Inspection Grid */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Big Brix Gauge & Comparison */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-semibold tracking-wider text-[#756D5D] uppercase">
                  {selectedCrop === 'melon' ? '머스크멜론 실측 평균 당도' : '완숙토마토 실측 평균 당도'}
                </span>
                <span className="text-xs text-[#2D5A27] font-medium">당일 수확 로트 #202611-01</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span
                  className={`font-serif text-5xl sm:text-6xl font-black tabular-nums ${
                    selectedCrop === 'melon' ? 'text-[#2D5A27]' : 'text-[#A43B29]'
                  }`}
                >
                  {selectedCrop === 'melon' ? TODAY_HARVEST.melonBrix : TODAY_HARVEST.tomatoBrix}
                </span>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#3B3528]">Brix (브릭스)</span>
                  <span className="text-xs text-[#7A7263]">
                    {selectedCrop === 'melon'
                      ? '과육 중앙 및 바깥쪽 3개 구역 평균치'
                      : '자연 완숙 꼭지 하단부 측정치'}
                  </span>
                </div>
              </div>

              {/* Benchmark Comparison Bars */}
              <div className="space-y-4 pt-2 pb-6 border-y border-[#ECE5D8]">
                {selectedCrop === 'melon' ? (
                  <>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-[#2D5A27] font-bold">강희농장 50년 명품 멜론 (오늘 수확)</span>
                        <span className="text-[#2D5A27] font-bold">15.8 Brix (극상 당도)</span>
                      </div>
                      <div className="h-3 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#2D5A27] rounded-full transition-all duration-700 w-[95%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#6F6757] mb-1.5">
                        <span>일반 백화점 특품 합격 기준</span>
                        <span>14.0 Brix</span>
                      </div>
                      <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#7D9F78] rounded-full w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#8C8372] mb-1.5">
                        <span>시중 대형마트 일반 유통 멜론</span>
                        <span>11.0 ~ 12.0 Brix</span>
                      </div>
                      <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#C8BFB0] rounded-full w-[60%]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-[#A43B29] font-bold">강희농장 100% 자연 완숙 꿀토마토</span>
                        <span className="text-[#A43B29] font-bold">9.4 Brix (과일 수준의 단맛)</span>
                      </div>
                      <div className="h-3 w-full bg-[#F3DDD8] rounded-full overflow-hidden">
                        <div className="h-full bg-[#A43B29] rounded-full transition-all duration-700 w-[94%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#6F6757] mb-1.5">
                        <span>일반 농가 완숙 토마토</span>
                        <span>6.0 ~ 7.0 Brix</span>
                      </div>
                      <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#E08D7F] rounded-full w-[68%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#8C8372] mb-1.5">
                        <span>시중 마트 일반 유통 토마토 (푸른 채 조기수확)</span>
                        <span>4.0 ~ 4.5 Brix</span>
                      </div>
                      <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#C8BFB0] rounded-full w-[42%]" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Master Farmer Daily Note */}
              <div className="pt-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8EFE5] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E3B1A]">강희 농부의 오늘 수확 일기</h4>
                  <p className="text-xs sm:text-sm text-[#5B5445] leading-relaxed mt-1">
                    "{TODAY_HARVEST.farmerNote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 100% Sweetness Guarantee Certificate Card */}
            <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-7 rounded-xl border border-[#DFD6C7] relative">
              <div className="w-12 h-12 rounded-full bg-[#2D5A27] text-white flex items-center justify-center mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-[#A43B29] tracking-wider uppercase">
                강희농장의 자신감
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3B1A] mt-1 mb-3">
                100% 당도 보증제 약정
              </h3>

              <p className="text-xs sm:text-sm text-[#595244] leading-relaxed mb-5">
                "온라인으로 주문하셨다고 해서 품질에 타협하지 않습니다. 안내해 드린 기준 당도보다 싱겁거나
                배송 중 상처를 입었다면, <strong>단 1초의 망설임 없이 전액 환불 또는 새 상품 무료 재발송</strong>을
                약속드립니다."
              </p>

              <div className="space-y-2.5 text-xs text-[#4A453A] pt-4 border-t border-[#E8E0D2]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>수령 후 3일 이내 간편 사진 1장으로 신청 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>반품 수거 없이 즉시 새 박스 당일 발송</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>50년간 쌓아온 신뢰로 지키는 농장주의 이름</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8E0D2] flex items-center justify-between text-[11px] text-[#7A7263]">
                <span>발급처: 전북 익산시 석탄동 강희농장 품질관리실</span>
                <span className="font-bold text-[#1E3B1A]">직인 생략 [인]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
