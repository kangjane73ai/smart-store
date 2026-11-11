import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Star, Sparkles, Check } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, FARM_INFO } from '../data/farmData';

interface ProductSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleQuickAddClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onQuickAdd(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D5A27] uppercase mb-2">
              <span>강희농장 직거래 공식 장터</span>
              <span aria-hidden="true">·</span>
              <span>새벽 수확 당일 출고</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3B1A] tracking-tight">
              50년 정성이 깃든 제철 산지직송
            </h2>
            <p className="text-[#645D4F] text-sm sm:text-base mt-2 max-w-xl">
              유통 마진 없이 농장 직송으로 가장 신선할 때 보내드립니다.
              50,000원 이상 주문 시 무료배송 혜택을 드립니다.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DD] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#1E3B1A] shadow-xs'
                  : 'text-[#645E50] hover:text-[#1E3B1A]'
              }`}
            >
              전체 상품보기
            </button>
            <button
              onClick={() => setActiveCategory('melon')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'melon'
                  ? 'bg-[#2D5A27] text-white shadow-xs'
                  : 'text-[#645E50] hover:text-[#1E3B1A]'
              }`}
            >
              명품 멜론 (3·4·5수)
            </button>
            <button
              onClick={() => setActiveCategory('tomato')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'tomato'
                  ? 'bg-[#A43B29] text-white shadow-xs'
                  : 'text-[#645E50] hover:text-[#1E3B1A]'
              }`}
            >
              자연 완숙 꿀토마토
            </button>
            <button
              onClick={() => setActiveCategory('juice')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'juice'
                  ? 'bg-[#8E2818] text-white shadow-xs'
                  : 'text-[#645E50] hover:text-[#1E3B1A]'
              }`}
            >
              100% 토마토즙 (원조명물)
            </button>
          </div>
        </div>

        {/* Product Cards Grid: 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedProductId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-2xl border border-[#DFD6C7] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Product Image Slot (65-70% visual focus) */}
                <div className="relative aspect-[4/3] bg-[#EFE9DD] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Subtle Tag (Clean unboxed style) */}
                  <div className="absolute top-3 left-3 bg-[#1E3B1A]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider">
                    {product.badge || product.brix}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#2D5A27] text-xs font-bold px-2 py-0.5 rounded-md tabular-nums shadow-xs">
                    {product.brix}
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quiet Category & Review line */}
                    <div className="flex items-center justify-between text-xs text-[#7A7263] mb-2">
                      <span className="font-semibold uppercase tracking-wider text-[#2D5A27]">
                        {product.category === 'melon'
                          ? '머스크멜론 (3·4·5수)'
                          : product.category === 'tomato'
                          ? '자연 완숙토마토'
                          : '100% 순수 토마토즙'}
                      </span>
                      <div className="flex items-center gap-1 text-[#4A453A]">
                        <Star className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" />
                        <span className="font-bold tabular-nums">{product.rating}</span>
                        <span className="text-[#8C8372]">({product.reviewCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E3B1A] group-hover:text-[#2D5A27] transition-colors line-clamp-1 mb-1.5">
                      {product.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-[#6A6353] line-clamp-2 leading-relaxed mb-4">
                      {product.subtitle}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-1 text-xs text-[#645E50] mb-5 bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EDE5D8]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#847B6B]">기본 중량</span>
                        <span className="font-medium text-[#2E2920]">{product.weightText}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#847B6B]">수확 주기</span>
                        <span className="font-medium text-[#2D5A27]">{product.harvestCycle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Button Footer */}
                  <div className="pt-4 border-t border-[#ECE5D8] flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#9B9281] line-through tabular-nums">
                        {product.originalPrice.toLocaleString('ko-KR')}원
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-xl sm:text-2xl font-black text-[#1E3B1A] tabular-nums">
                          {product.basePrice.toLocaleString('ko-KR')}
                        </span>
                        <span className="text-xs font-bold text-[#1E3B1A]">원</span>
                        <span className="text-xs font-bold text-[#A43B29] ml-1">
                          {Math.round(
                            ((product.originalPrice - product.basePrice) / product.originalPrice) * 100
                          )}
                          %
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleQuickAddClick(e, product)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                            : 'bg-[#FAF7F2] hover:bg-[#EFE9DD] text-[#2D5A27] border-[#DFD6C7]'
                        }`}
                        title="장바구니 담기"
                        aria-label="장바구니 담기"
                      >
                        {isAdded ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <ShoppingBag className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3.5 py-2 text-xs font-semibold text-white bg-[#2D5A27] hover:bg-[#23471E] rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                      >
                        주문하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
