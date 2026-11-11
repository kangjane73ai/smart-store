import React, { useState } from 'react';
import { X, Sparkles, ChevronDown, ChevronUp, AlertCircle, Heart } from 'lucide-react';
import { FAQS } from '../data/farmData';

interface CareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareGuideModal: React.FC<CareGuideModalProps> = ({ isOpen, onClose }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#DFD6C7] max-h-[90vh] overflow-y-auto relative"
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
          <Sparkles className="w-4 h-4 text-[#2D5A27]" />
          <span>50년 농부가 전하는 꿀팁</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1E3B1A] mb-6">
          가장 맛있게 드시는 후숙 &amp; 보관법
        </h3>

        {/* 2 Guides side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Melon Guide */}
          <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E3DBD0]">
            <span className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider block mb-1">
              명품 머스크멜론 후숙법
            </span>
            <h4 className="font-serif text-lg font-bold text-[#1E3B1A] mb-3">
              배꼽이 말랑해질 때 드세요!
            </h4>
            <ol className="space-y-2 text-xs text-[#595244] list-decimal pl-4">
              <li>
                <strong>상온 후숙:</strong> 받으신 후 햇빛이 들지 않고 바람이 통하는 서늘한 상온(20~25℃)에 2~3일간 보관합니다.
              </li>
              <li>
                <strong>후숙 체크:</strong> 멜론 밑동(배꼽 부위)을 손으로 살짝 눌렀을 때 탄력 있게 들어가고 달콤한 향이 나면 완성!
              </li>
              <li>
                <strong>냉장 2시간:</strong> 드시기 2~3시간 전 냉장고에 넣어 차갑게 드시면 과즙의 단맛이 2배로 진해집니다.
              </li>
            </ol>
          </div>

          {/* Tomato Guide */}
          <div className="p-5 rounded-xl bg-[#FFF6F4] border border-[#F2D7D2]">
            <span className="text-xs font-bold text-[#A43B29] uppercase tracking-wider block mb-1">
              자연 완숙토마토 보관법
            </span>
            <h4 className="font-serif text-lg font-bold text-[#A43B29] mb-3">
              냉장고에 바로 넣지 마세요!
            </h4>
            <ol className="space-y-2 text-xs text-[#595244] list-decimal pl-4">
              <li>
                <strong>상온 보관 원칙:</strong> 나무에서 햇살을 머금고 자연 완숙된 토마토는 냉장고에 바로 넣으면 냉기로 인해 고유의 향기와 리코펜이 감소합니다.
              </li>
              <li>
                <strong>꼭지 아래로:</strong> 꼭지를 아래로 향하게 두시면 토마토가 쉽게 무르지 않고 단단함이 오래 유지됩니다.
              </li>
              <li>
                <strong>3일 후 냉장:</strong> 3~4일 이상 장기 보관하실 때만 신문지나 키친타월에 감싸 냉장 야채칸에 보관해 주세요.
              </li>
            </ol>
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-[#ECE5D8] pt-6">
          <h4 className="font-serif text-lg font-bold text-[#1E3B1A] mb-4">
            자주 묻는 질문 (FAQ)
          </h4>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpenItem = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#DFD6C7] overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpenItem ? null : index)}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#1E3B1A]">
                      Q. {faq.q}
                    </span>
                    {isOpenItem ? (
                      <ChevronUp className="w-4 h-4 text-[#7A7263] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#7A7263] shrink-0" />
                    )}
                  </button>

                  {isOpenItem && (
                    <div className="p-4 pt-0 text-xs text-[#5C5546] leading-relaxed border-t border-[#F0EBE0] bg-[#FAF7F2]">
                      A. {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#ECE5D8] text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
