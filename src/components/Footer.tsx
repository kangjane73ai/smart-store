import React from 'react';
import { PhoneCall, ShieldCheck, Truck, Clock, MapPin, Heart } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

interface FooterProps {
  onOpenCareGuide: () => void;
  onOpenOrderLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCareGuide, onOpenOrderLookup }) => {
  return (
    <footer className="bg-[#1E3B1A] text-[#EDE8DE] pt-14 pb-12 border-t border-[#2F4D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#2D5A27]">
          {/* Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#3D6E37] text-white flex items-center justify-center font-serif text-sm font-bold">
                康
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                강희농장
              </span>
            </div>
            <p className="text-xs text-[#B8CBB5] leading-relaxed mb-4">
              1974년부터 전북 익산시 석탄동 만경강변 비옥한 사질토에서 50년간 멜론과 자연 완숙토마토만을 고집해 온 장인의 산지직송 직거래 몰입니다.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8BAE86]">
              <span>1줄기 1과 원칙</span>
              <span aria-hidden="true">&middot;</span>
              <span>100% 자연 완숙</span>
              <span aria-hidden="true">&middot;</span>
              <span>당도 보증제</span>
            </div>
          </div>

          {/* Customer Service & Phone Order */}
          <div>
            <span className="text-xs font-bold text-[#8BAE86] uppercase tracking-wider block mb-2">
              직거래 주문 &middot; 고객센터
            </span>
            <div className="font-serif text-2xl font-bold text-white mb-1">
              <a href={`tel:${FARM_INFO.phone}`} className="hover:text-emerald-200 transition-colors">
                {FARM_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-[#A6C4A2] mb-3">
              일반전화: {FARM_INFO.tel}
              <br />
              상담시간: 평일 08:00 ~ 18:00 (주말&middot;공휴일 문자 접수 가능)
            </p>
            <div className="text-[11px] bg-[#2A4D25] p-2.5 rounded-lg border border-[#3A6335] text-[#D4E8D0]">
              * 어르신을 위한 <strong>전화 &middot; 문자 주문</strong>도 환영합니다. 주소와 수량을 문자로 보내주시면 당일 발송해 드립니다.
            </div>
          </div>

          {/* Bank Account */}
          <div>
            <span className="text-xs font-bold text-[#8BAE86] uppercase tracking-wider block mb-2">
              무통장 입금 계좌
            </span>
            <div className="text-sm font-bold text-white mb-1">
              {FARM_INFO.bankAccount.bank} {FARM_INFO.bankAccount.accountNumber}
            </div>
            <p className="text-xs text-[#A6C4A2] mb-4">
              예금주: {FARM_INFO.bankAccount.holder}
            </p>
            <div className="space-y-1.5 text-xs text-[#B8CBB5]">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#8BAE86]" />
                <span>우체국택배 &middot; 롯데택배 안전발송</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8BAE86]" />
                <span>{FARM_INFO.orderCutoffTime}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs font-bold text-[#8BAE86] uppercase tracking-wider block mb-2">
              이용 안내 &middot; 서비스
            </span>
            <ul className="space-y-2 text-xs text-[#B8CBB5]">
              <li>
                <button
                  onClick={onOpenCareGuide}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  &rarr; 멜론 후숙 &amp; 토마토 보관 꿀팁
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderLookup}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  &rarr; 실시간 배송 및 주문내역 조회
                </button>
              </li>
              <li>
                <a href="#gift-package" className="hover:text-white transition-colors">
                  &rarr; 멜론 &middot; 토마토즙 선물세트 문의
                </a>
              </li>
              <li>
                <a href="#brix-report" className="hover:text-white transition-colors">
                  &rarr; 오늘의 당도 측정 리포트
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Registration Details */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#8BAE86]">
          <div className="space-y-1">
            <p>
              상호: 강희농장 | 대표: 강희 | 사업자등록번호: {FARM_INFO.businessNumber} | 통신판매업신고: 제2024-전북익산-0294호
            </p>
            <p>
              소재지: {FARM_INFO.address} | 전자우편: farm.kanghee@gmail.com
            </p>
            <p className="text-[#6D9567]">
              &copy; {new Date().getFullYear()} 강희농장 (KANGHEE FARM). 50년 장인의 명예로 정직하게 재배합니다. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span className="font-semibold text-xs">100% 당도 불만족 무료 교환 보증</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
