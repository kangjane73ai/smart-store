import React from 'react';
import { Sparkles, Sprout, HeartHandshake, Award, Clock } from 'lucide-react';
import { FARM_FOUR_PILLARS, FARM_HISTORY, FARM_INFO } from '../data/farmData';

export const FarmStorySection: React.FC = () => {
  return (
    <section id="farm-story" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DEC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D5A27] uppercase mb-2">
            <span>50년 농사 일지</span>
            <span aria-hidden="true">·</span>
            <span>1974년부터 이어온 흙과 땀의 기록</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3B1A] tracking-tight mb-3">
            당도도 으뜸, 모양도 으뜸인 이유
          </h2>
          <p className="text-[#645D4F] text-sm sm:text-base leading-relaxed">
            비결은 요령을 부리지 않는 정직함에 있습니다.
            빨리 수확하거나 많이 따려고 욕심내지 않고, 자연의 섭리를 지켜온 50년 고집을 소개합니다.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FARM_FOUR_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#DFD5C4] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-black text-[#A43B29] block mb-3 tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1E3B1A] mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D5545] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center gap-1.5 text-[11px] font-semibold text-[#2D5A27]">
                <Sprout className="w-3.5 h-3.5" />
                <span>강희농장 절대 원칙</span>
              </div>
            </div>
          ))}
        </div>

        {/* Large Story Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-[#DFD5C4] overflow-hidden p-6 sm:p-10 shadow-sm mb-16">
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EFE9DD]">
            <img
              src="/src/assets/images/farm_story_soil_1794377593119.jpg"
              alt="강희농장 50년 유기농 온실 토양과 싱그러운 토마토 줄기"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 text-white">
              <span className="text-xs sm:text-sm font-medium">
                전북 익산시 석탄동 강희농장 생태 온실 &middot; 토착 미생물과 살아 숨 쉬는 흙
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold text-[#A43B29] tracking-wider uppercase mb-1">
              토양에만 50년을 바친 농부의 철학
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3B1A] mb-4 leading-tight">
              "과일의 맛과 모양은 사람이 아니라<br />건강한 흙과 벌이 만듭니다"
            </h3>
            <p className="text-xs sm:text-sm text-[#595244] leading-relaxed mb-4">
              시중에서 흔히 보는 모양이 비뚤어진 과일이나, 껍질만 빨갛고 속은 물맛인 토마토는
              인위적인 착과제와 화학 비료로 강제 비대시켰기 때문입니다.
            </p>
            <p className="text-xs sm:text-sm text-[#595244] leading-relaxed mb-6">
              강희농장은 50년 동안 볏짚, 쌀겨, 미생물을 발효시킨 자가 퇴비만을 땅에 돌려줍니다.
              튼튼한 토양에서 자란 작물은 병충해에 강하고, 꿀벌이 정성스레 자연수정하여
              조각품처럼 솟아오른 촘촘한 네트와 균일한 구형을 스스로 완성합니다.
            </p>

            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E9E1D3] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-bold text-sm shrink-0">
                50년
              </div>
              <div className="text-xs text-[#524B3E]">
                <strong className="text-[#1E3B1A] block mb-0.5">강희 명인의 당부</strong>
                "우리 농장의 이름을 걸고 보내는 만큼, 단 한 통의 과일도 부끄러운 것은 담지 않습니다."
              </div>
            </div>
          </div>
        </div>

        {/* 50-Year Heritage Timeline */}
        <div className="border-t border-[#DFD6C7] pt-12">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3B1A] text-center mb-8">
            강희농장이 걸어온 반세기의 발자취
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {FARM_HISTORY.map((hist, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E3DBD0] flex flex-col">
                <span className="font-serif text-lg font-black text-[#2D5A27] mb-1 tabular-nums">
                  {hist.year}
                </span>
                <h4 className="text-xs font-bold text-[#1E3B1A] mb-1.5 leading-snug">
                  {hist.title}
                </h4>
                <p className="text-[11px] text-[#6A6353] leading-relaxed">
                  {hist.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
