import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, Image as ImageIcon, MessageSquarePlus, X } from 'lucide-react';
import { Review } from '../types';
import { REVIEWS } from '../data/farmData';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeTag, setActiveTag] = useState<'all' | 'melon' | 'tomato' | 'juice'>('all');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

  // New review form state
  const [authorName, setAuthorName] = useState<string>('');
  const [locationName, setLocationName] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)');
  const [rating, setRating] = useState<number>(5);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tag, setTag] = useState<'melon' | 'tomato' | 'juice'>('melon');

  const filteredReviews = reviewsList.filter((r) => {
    if (activeTag === 'all') return true;
    return r.tag === activeTag;
  });

  const handleHelpfulClick = (id: string) => {
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !title.trim() || !content.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: `${authorName[0]}*${authorName.length > 2 ? authorName.slice(-1) : '민'}`,
      location: locationName.trim() || '전국',
      rating,
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, ''),
      title: title.trim(),
      content: content.trim(),
      productName: selectedProduct,
      verified: true,
      tag,
      helpfulCount: 0,
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsWriteModalOpen(false);
    // Reset form
    setAuthorName('');
    setLocationName('');
    setTitle('');
    setContent('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E3DBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D5A27] uppercase mb-2">
              <span>산지직송 100% 실구매 인증</span>
              <span aria-hidden="true">·</span>
              <span>평점 4.98 / 5.0</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3B1A] tracking-tight">
              식탁에서 전해온 솔직한 이야기
            </h2>
            <p className="text-[#645D4F] text-xs sm:text-sm mt-1.5">
              전국 각지에서 강희농장을 다시 찾아주시는 고객님들의 생생한 후기입니다.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>구매 후기 작성하기</span>
            </button>
          </div>
        </div>

        {/* Filter Pills / Buttons */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTag('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTag === 'all'
                ? 'bg-[#1E3B1A] text-white'
                : 'bg-white text-[#5E5748] hover:bg-[#EFE9DD] border border-[#DFD5C6]'
            }`}
          >
            전체 후기 ({reviewsList.length})
          </button>
          <button
            onClick={() => setActiveTag('melon')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTag === 'melon'
                ? 'bg-[#2D5A27] text-white'
                : 'bg-white text-[#5E5748] hover:bg-[#EFE9DD] border border-[#DFD5C6]'
            }`}
          >
            머스크멜론 후기
          </button>
          <button
            onClick={() => setActiveTag('tomato')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTag === 'tomato'
                ? 'bg-[#A43B29] text-white'
                : 'bg-white text-[#5E5748] hover:bg-[#EFE9DD] border border-[#DFD5C6]'
            }`}
          >
            자연 완숙토마토 후기
          </button>
          <button
            onClick={() => setActiveTag('juice')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTag === 'juice'
                ? 'bg-[#8E2818] text-white'
                : 'bg-white text-[#5E5748] hover:bg-[#EFE9DD] border border-[#DFD5C6]'
            }`}
          >
            100% 토마토즙 후기
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#DFD5C6] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Top Rating & Metadata Line (Clean unboxed text) */}
                <div className="flex items-center justify-between text-xs text-[#7A7263] mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-[#EAB308]">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-[#1E3B1A] tabular-nums">{rev.rating}.0</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#4A453A]">{rev.author}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{rev.location}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="tabular-nums">{rev.date}</span>
                  </div>
                </div>

                {/* Product Name tag */}
                <div className="text-xs font-medium text-[#2D5A27] mb-2 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D5A27]" />
                  <span>구매 상품: {rev.productName}</span>
                </div>

                {/* Review Title */}
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1E3B1A] mb-2.5">
                  "{rev.title}"
                </h4>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#5B5445] leading-relaxed mb-4">
                  {rev.content}
                </p>

                {/* Photo attached if any */}
                {rev.photoUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden aspect-[16/9] max-h-48 bg-[#EFE9DD] border border-[#E3DBD0]">
                    <img
                      src={rev.photoUrl}
                      alt="고객 구매 인증 사진"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Helpful Button */}
              <div className="pt-3 border-t border-[#F0EBE0] flex items-center justify-between text-xs text-[#7A7263]">
                <span className="text-[11px] text-[#2D5A27] font-medium">산지직송 수령 확인완료</span>
                <button
                  onClick={() => handleHelpfulClick(rev.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE9DD] text-[#554E40] transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>도움돼요</span>
                  <span className="font-bold tabular-nums text-[#1E3B1A]">
                    {rev.helpfulCount}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Modal */}
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#DFD6C7] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="absolute top-4 right-4 text-[#7A7263] hover:text-[#1E3B1A] p-1.5 rounded-full hover:bg-[#F3EFE7] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A27] mb-1">
                <Star className="w-4 h-4 fill-current text-[#EAB308]" />
                <span>강희농장 소중한 구매평</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3B1A] mb-4">
                과실의 맛과 신선도를 남겨주세요
              </h3>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#3E382E] mb-1">
                      작성자 성함
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="예: 홍길동"
                      className="w-full text-xs p-2.5 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E382E] mb-1">
                      거주 지역
                    </label>
                    <input
                      type="text"
                      value={locationName}
                      onChange={(e) => setLocationName(e.target.value)}
                      placeholder="예: 서울 송파구"
                      className="w-full text-xs p-2.5 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E382E] mb-1">
                    구매하신 상품
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => {
                      setSelectedProduct(e.target.value);
                      if (e.target.value.includes('멜론')) setTag('melon');
                      else if (e.target.value.includes('토마토즙')) setTag('juice');
                      else setTag('tomato');
                    }}
                    className="w-full text-xs p-2.5 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                  >
                    <option value="50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)">
                      50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)
                    </option>
                    <option value="100% 자연 완숙 꿀토마토 (새벽 당일수확)">
                      100% 자연 완숙 꿀토마토 (새벽 당일수확)
                    </option>
                    <option value="강희농장 100% 순수 완숙토마토즙 (NFC 저온착즙)">
                      강희농장 100% 순수 완숙토마토즙 (NFC 저온착즙)
                    </option>
                    <option value="고당도 가정용 머스크멜론 (3수 / 4수 / 5수 실속형)">
                      고당도 가정용 머스크멜론 (3수 / 4수 / 5수 실속형)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E382E] mb-1.5">
                    만족도 평점
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setRating(starVal)}
                        className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            starVal <= rating
                              ? 'text-[#EAB308] fill-[#EAB308]'
                              : 'text-[#D5CBB9]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#1E3B1A] ml-2">
                      {rating === 5 ? '매우 만족 (강력 추천)' : `${rating}점`}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E382E] mb-1">
                    후기 한 줄 제목
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="예: 인생 멜론입니다! 당도가 어마어마해요"
                    className="w-full text-xs p-2.5 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E382E] mb-1">
                    상세 후기 내용
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="당도, 과육의 식감, 포장 상태 등 솔직한 경험을 적어주시면 다른 분들에게 큰 도움이 됩니다."
                    className="w-full text-xs p-2.5 rounded-lg border border-[#D5CBB9] bg-white text-[#2D281F] focus:outline-none focus:border-[#2D5A27]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-semibold text-[#5E5748] hover:bg-[#F3EFE7] rounded-lg transition-colors cursor-pointer"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-lg transition-colors shadow-xs cursor-pointer"
                  >
                    후기 등록 완료
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
