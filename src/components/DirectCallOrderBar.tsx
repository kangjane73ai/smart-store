import React, { useState } from 'react';
import { PhoneCall, MessageCircle, X, Sparkles } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export const DirectCallOrderBar: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="전화 주문 및 상담 문의"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-30 max-w-md bg-[#244620] text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-[#3E6D39] flex items-center justify-between gap-3"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-[#376831] text-[#FEE180] flex items-center justify-center shrink-0">
          <PhoneCall className="w-5 h-5 animate-pulse" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] text-[#C6E4C1]">
            <span className="font-semibold">전화 &middot; 문자 간편 주문</span>
            <span aria-hidden="true">&middot;</span>
            <span className="truncate">주소만 남겨주세요</span>
          </div>
          <div className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
            {FARM_INFO.phone}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <a
          href={`tel:${FARM_INFO.phone}`}
          className="px-3 py-1.5 text-xs font-bold bg-[#FEE180] text-[#1E3B1A] hover:bg-[#FCD860] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          통화연결
        </a>
        <a
          href={`sms:${FARM_INFO.phone}?body=${encodeURIComponent('강희농장 멜론/완숙토마토/토마토즙 주문 문의드립니다.')}`}
          className="px-2.5 py-1.5 text-xs font-semibold bg-white/15 hover:bg-white/25 text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          문자
        </a>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-[#9ABF95] hover:text-white rounded-md cursor-pointer ml-0.5"
          aria-label="닫기"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
