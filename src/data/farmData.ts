import { Product, Review, DailyHarvestInfo, Order } from '../types';

export const FARM_INFO = {
  name: '강희농장',
  englishName: 'KANGHEE FARM',
  establishedYear: 1974,
  experienceYears: 50,
  farmerName: '강희 명인',
  address: '전북특별자치도 익산시 석탄동 강희농장',
  phone: '010-3867-6494',
  tel: '063-855-6494',
  bankAccount: {
    bank: '농협은행',
    accountNumber: '351-3867-6494-13',
    holder: '강희 (강희농장)',
  },
  freeShippingThreshold: 50000,
  defaultShippingFee: 3500,
  bojagiWrapFee: 3000,
  businessNumber: '408-91-64940',
  orderCutoffTime: '평일 오후 2시 당일 수확·당일 발송 마감',
};

export const TODAY_HARVEST: DailyHarvestInfo = {
  date: '오늘 새벽 05:30 수확 완료',
  melonBrix: 15.8,
  tomatoBrix: 9.4,
  morningTemperature: '18.5℃',
  sunshineHours: '일조량 9.8시간',
  harvestStatus: '당일 수확 전량 당도 선별 완료',
  shippedTodayCount: 162,
  farmerNote:
    '익산 석탄동의 기름진 만경강 사질토와 넉넉한 일조량 덕분에 올해 멜론 네트가 유난히 굵고 입체적으로 솟아올랐습니다. 멜론 15.8브릭스, 자연 완숙 토마토 9.4브릭스로 깎자마자 꿀향이 진동합니다. 100% 토마토즙도 오늘 아침 갓 수확한 토마토로 신선하게 저온 착즙했습니다.',
};

export const PRODUCTS: Product[] = [
  {
    id: 'melon-royal-master',
    name: '50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)',
    subtitle: '1줄기 1과 원칙, 조각품처럼 촘촘한 그물눈과 15.5+ Brix 극한의 당도',
    category: 'melon',
    basePrice: 45000,
    originalPrice: 53000,
    brix: '15.5~16.8 Brix',
    weightText: '3수 / 4수 / 5수 박스 선택',
    unitCountText: '박스 규격 선택',
    harvestCycle: '당일 새벽 수확 직송',
    badge: '산지 주문 1위',
    image: '/src/assets/images/product_melon_boxes_1794378567779.jpg',
    galleryImages: [
      '/src/assets/images/product_melon_boxes_1794378567779.jpg',
      '/src/assets/images/product_premium_melon_1794377589688.jpg',
      '/src/assets/images/hero_farmer_kanghee_1794378566621.jpg',
    ],
    description:
      '강희 농부가 50년간 연구한 토양 미생물 농법과 1줄기 1과 원칙으로 길러냈습니다. 한 덩굴에 단 하나의 멜론만을 남겨 만경강 유역의 모든 영양분을 한 통에 가득 응축했습니다. 예술품처럼 도톰하게 솟아오른 네트와 껍질 끝까지 달콤한 에메랄드빛 과육을 자랑합니다.',
    flavorProfile: {
      sweetness: 5,
      firmness: 4,
      juiciness: 5,
      aroma: 5,
    },
    features: [
      '3수(특대과) / 4수(로얄대과) / 5수(알뜰과) 맞춤 선택',
      '1줄기 1과 집중 영양 재배 (화학 착과제 제로)',
      '비파괴 당도 선별기 15.5 Brix 이상 전수 합격품',
      '충격 방지 맞춤 에어셀 안전 완충 포장',
    ],
    options: [
      {
        id: 'opt-melon-3',
        name: '명품 멜론 3수 특대과 박스 (약 6.5~7.0kg)',
        priceDelta: 0,
        weight: '약 6.8kg',
        countDescription: '특대과 3수 (개당 2.2kg 이상, VIP 귀한 선물용)',
      },
      {
        id: 'opt-melon-4',
        name: '명품 멜론 4수 로얄 대과 박스 (약 7.5~8.0kg)',
        priceDelta: 7000,
        weight: '약 7.8kg',
        countDescription: '로얄 대과 4수 (가장 인기 높은 표준 규격)',
      },
      {
        id: 'opt-melon-5',
        name: '명품 멜론 5수 알뜰 실속 박스 (약 8.0~8.5kg)',
        priceDelta: 12000,
        weight: '약 8.2kg',
        countDescription: '알뜰 실속 5수 (가족 나눔용 넉넉한 수량)',
      },
    ],
    stockCount: 42,
    rating: 4.99,
    reviewCount: 1680,
  },
  {
    id: 'tomato-natural-ripened',
    name: '100% 자연 완숙 꿀토마토 (새벽 당일수확)',
    subtitle: '가스 착색 NO! 나무에서 온전히 붉게 익은 후 수확해 단단하고 찰진 맛',
    category: 'tomato',
    basePrice: 28000,
    originalPrice: 33000,
    brix: '9.0~10.2 Brix',
    weightText: '2.5kg / 5kg',
    unitCountText: '선별 프리미엄과',
    harvestCycle: '당일 새벽 05시 수확',
    badge: '재구매율 96%',
    image: '/src/assets/images/product_vine_tomato_1794377591465.jpg',
    galleryImages: [
      '/src/assets/images/product_vine_tomato_1794377591465.jpg',
      '/src/assets/images/farm_story_soil_1794377593119.jpg',
      '/src/assets/images/hero_farmer_kanghee_1794378566621.jpg',
    ],
    description:
      '시중 마트에서 유통되는 파란 토마토를 따서 약품 가스로 붉게 칠한 물토마토와는 본질이 다릅니다. 나무에서 붉은빛이 속까지 꽉 찰 때까지 자연의 햇볕을 머금어, 칼로 썰어도 젤리가 터지지 않고 과육이 탱탱하며 새콤달콤한 옛날 토마토의 진한 감칠맛이 살아있습니다.',
    flavorProfile: {
      sweetness: 5,
      firmness: 5,
      juiciness: 5,
      aroma: 5,
    },
    features: [
      '인위적 가스 숙성 없는 100% 나무 자연 완숙 수확',
      '꿀벌 자연수정으로 기형 없이 동글동글 단단한 모양',
      '풍부한 리코펜과 진하고 묵직한 천연 감칠맛',
      '새벽 수확 후 산지직송 당일 발송',
    ],
    options: [
      {
        id: 'opt-tomato-25',
        name: '자연 완숙 꿀토마토 2.5kg (생과용 특상과)',
        priceDelta: 0,
        weight: '2.5kg',
        countDescription: '약 14~18과 내외 (특상과)',
      },
      {
        id: 'opt-tomato-50',
        name: '자연 완숙 꿀토마토 5.0kg (가정용 넉넉구성)',
        priceDelta: 24000,
        weight: '5.0kg',
        countDescription: '약 28~35과 내외 (특상과)',
      },
    ],
    stockCount: 68,
    rating: 4.98,
    reviewCount: 1120,
  },
  {
    id: 'tomato-juice-pure',
    name: '강희농장 100% 순수 완숙토마토즙 (NFC 저온착즙)',
    subtitle: '물 한 방울, 설탕, 방부제 제로! 50년 농장 완숙토마토 100%의 진한 맛',
    category: 'juice',
    basePrice: 38000,
    originalPrice: 45000,
    brix: '순수 토마토 100%',
    weightText: '100ml x 30포 / 60포',
    unitCountText: '30포 / 60포 선택',
    harvestCycle: '신선 저온 착즙',
    badge: '전국 명물 극찬',
    image: '/src/assets/images/product_pure_tomato_juice_1794378568701.jpg',
    galleryImages: [
      '/src/assets/images/product_pure_tomato_juice_1794378568701.jpg',
      '/src/assets/images/product_vine_tomato_1794377591465.jpg',
      '/src/assets/images/hero_farmer_kanghee_1794378566621.jpg',
    ],
    description:
      '전국에서 입소문만으로 주문이 끊이지 않는 강희농장의 대표 명물입니다. 물(정제수), 설탕, 액상과당, 합성첨가물을 단 0.1%도 넣지 않았습니다. 당일 수확한 신선한 자연 완숙 토마토만을 통째로 세척하여 영양소 파괴를 최소화한 저온 살균 착즙 공법으로 담아냈습니다. 걸쭉하고 진한 진짜 토마토의 생생함을 매일 아침 간편하게 챙기세요.',
    flavorProfile: {
      sweetness: 4,
      firmness: 5,
      juiciness: 5,
      aroma: 5,
    },
    features: [
      '원재료명: 강희농장 완숙토마토 100% (국내산 익산)',
      '물 0%, 설탕 0%, 색소 및 보존료 일절 무첨가',
      'HACCP 인증 위생 설비 저온 살균 공정',
      '4중 알루미늄 안전 스파우트/파우치 포장 (환경호르몬 안심)',
    ],
    options: [
      {
        id: 'opt-juice-30',
        name: '순수 완숙토마토즙 30포 선물박스 (100ml x 30포)',
        priceDelta: 0,
        weight: '3.0kg (30포)',
        countDescription: '100ml 파우치 30포 (손잡이 선물박스 포장)',
      },
      {
        id: 'opt-juice-60',
        name: '순수 완숙토마토즙 60포 대용량 실속박스 (100ml x 60포)',
        priceDelta: 34000,
        weight: '6.0kg (60포)',
        countDescription: '100ml 파우치 60포 (온 가족 넉넉구성)',
      },
    ],
    stockCount: 85,
    rating: 4.99,
    reviewCount: 2150,
  },
  {
    id: 'melon-family-sweet',
    name: '고당도 가정용 머스크멜론 (3수 / 4수 / 5수 실속형)',
    subtitle: '모양보다 당도와 실속에 집중! 15.0+ Brix 달콤함은 그대로',
    category: 'melon',
    basePrice: 38000,
    originalPrice: 44000,
    brix: '15.0~16.0 Brix',
    weightText: '3수 / 4수 / 5수 실속박스',
    unitCountText: '박스 규격 선택',
    harvestCycle: '당일 수확 발송',
    badge: '가성비 극찬',
    image: '/src/assets/images/product_premium_melon_1794377589688.jpg',
    galleryImages: [
      '/src/assets/images/product_premium_melon_1794377589688.jpg',
      '/src/assets/images/product_melon_boxes_1794378567779.jpg',
    ],
    description:
      '네트의 무늬가 선물용 기준에 약간 못 미칠 뿐, 15.0 Brix 이상의 극상 당도와 부드러운 과육은 명품 멜론과 완전히 동일합니다. 우리 가족이 집에서 부담 없이 숟가락으로 푹푹 떠먹기에 가장 알뜰하고 만족스러운 구성입니다.',
    flavorProfile: {
      sweetness: 5,
      firmness: 4,
      juiciness: 5,
      aroma: 4,
    },
    features: [
      '명품과 동일한 15.0 Brix 이상 당도 보증',
      '3수 / 4수 / 5수 원하는 수량 선택 가능',
      '과대 포장 비용을 뺀 알뜰 안전 에어캡 포장',
      '아이들 영양 간식, 홈카페 빙수 토핑 추천',
    ],
    options: [
      {
        id: 'opt-val-3',
        name: '가정용 실속 멜론 3수 (약 6.0~6.5kg)',
        priceDelta: 0,
        weight: '약 6.2kg',
        countDescription: '실속 특대과 3수',
      },
      {
        id: 'opt-val-4',
        name: '가정용 실속 멜론 4수 (약 7.0~7.5kg)',
        priceDelta: 6000,
        weight: '약 7.2kg',
        countDescription: '실속 대과 4수',
      },
      {
        id: 'opt-val-5',
        name: '가정용 실속 멜론 5수 (약 7.5~8.0kg)',
        priceDelta: 10000,
        weight: '약 7.8kg',
        countDescription: '실속 중과 5수',
      },
    ],
    stockCount: 50,
    rating: 4.97,
    reviewCount: 940,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: '박*은',
    location: '서울 서초구',
    rating: 5,
    date: '2026.11.08',
    title: '멜론 3수 박스 샀는데 크기가 얼굴만하고 꿀물이 뚝뚝 떨어져요',
    content:
      '강희 농부님 멜론은 차원이 다릅니다. 백화점 특품보다 네트가 훨씬 두껍고 조각품처럼 촘촘해요. 밑동 살짝 눌러서 이틀 후숙하고 잘랐는데 자르는 순간 달콤한 멜론 향이 온 집안에 진동하고 과즙이 그릇에 흥건하게 고입니다. 3수 박스 크기가 어마어마해서 부모님도 깜짝 놀라셨어요.',
    productName: '50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)',
    verified: true,
    photoUrl: '/src/assets/images/product_melon_boxes_1794378567779.jpg',
    tag: 'melon',
    helpfulCount: 92,
  },
  {
    id: 'rev-2',
    author: '정*훈',
    location: '경기 성남시 분당구',
    rating: 5,
    date: '2026.11.07',
    title: '토마토즙이 진짜 100% 맞네요. 마트 주스랑은 비교 불가!',
    content:
      '아침마다 위 건강 챙기려고 주문했는데, 물 탄 밍밍한 주스가 아니라 진짜 완숙 토마토를 통째로 갈아 넣은 것처럼 걸쭉하고 진합니다. 설탕이 안 들어갔는데도 토마토 자체 당도가 좋아서 달콤하고 신선한 향이 끝내줘요. 60포 바로 재구매했습니다.',
    productName: '강희농장 100% 순수 완숙토마토즙 (NFC 저온착즙)',
    verified: true,
    photoUrl: '/src/assets/images/product_pure_tomato_juice_1794378568701.jpg',
    tag: 'juice',
    helpfulCount: 88,
  },
  {
    id: 'rev-3',
    author: '김*영',
    location: '전북 전주시',
    rating: 5,
    date: '2026.11.05',
    title: '익산 석탄동 강희농장 토마토는 무조건 믿고 먹습니다',
    content:
      '인위적으로 색만 낸 토마토가 아니라 나무에서 자연 완숙된 거라 과육이 엄청 단단하고 찰져요. 칼로 얇게 썰어도 과즙과 씨가 안 무너져서 샐러드나 카프레제 해 먹으면 감칠맛이 폭발합니다. 50년 농사 내공이 그대로 느껴집니다.',
    productName: '100% 자연 완숙 꿀토마토 (새벽 당일수확)',
    verified: true,
    photoUrl: '/src/assets/images/product_vine_tomato_1794377591465.jpg',
    tag: 'tomato',
    helpfulCount: 65,
  },
  {
    id: 'rev-4',
    author: '최*민',
    location: '대구 수성구',
    rating: 5,
    date: '2026.11.02',
    title: '멜론 4수 박스로 온 가족이 행복하게 나눠먹었습니다',
    content:
      '가장자리 껍질 바로 윗부분까지 달콤해서 버릴 부위가 하나도 없어요. 안내문대로 보관해서 시원하게 먹으니 숟가락으로 파먹을 때마다 감탄이 절로 나옵니다. 15.8브릭스 당도 보증이라는 말이 100% 진짜네요.',
    productName: '50년 장인 명품 머스크멜론 (3수 / 4수 / 5수 박스)',
    verified: true,
    photoUrl: '/src/assets/images/product_premium_melon_1794377589688.jpg',
    tag: 'melon',
    helpfulCount: 47,
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    orderNumber: 'KH-20261110-8421',
    customerName: '김민준',
    phone: '010-3841-9920',
    email: 'minjun.kim@example.com',
    zipCode: '06236',
    address: '서울특별시 강남구 테헤란로 152',
    addressDetail: '18층',
    shippingMemo: '부재 시 문 앞에 놓아주세요. 파손주의 부탁드립니다.',
    paymentMethod: 'bank_transfer',
    depositorName: '김민준',
    items: [
      {
        id: 'init-cart-1',
        productId: 'melon-royal-master',
        product: PRODUCTS[0],
        selectedOption: PRODUCTS[0].options[0],
        quantity: 1,
        giftBojagiWrap: true,
        customGiftMessage: '존경하는 부모님 늘 건강하십시오.',
      },
    ],
    subtotal: 45000,
    shippingFee: 3500,
    totalAmount: 51500,
    orderDate: '2026.11.10 09:30',
    status: 'shipping',
    courierName: '우체국택배',
    trackingNumber: '6892-4102-9931',
  },
];

export const FARM_HISTORY = [
  {
    year: '1974년',
    title: '익산 석탄동 비옥한 만경강변 토양에 첫 식재',
    description: '물 빠짐이 뛰어나고 일조량이 풍부한 전북 익산시 석탄동 만경강 사질토에 터를 잡고 멜론과 토마토 재배를 시작했습니다.',
  },
  {
    year: '1989년',
    title: '1줄기 1과 멜론 집중재배 시스템 완성',
    description: '양보다 극상의 당도와 모양을 위해 한 덩굴에 단 하나의 멜론만 키우는 엄격한 적과 방식을 50년간 고수하고 있습니다.',
  },
  {
    year: '2004년',
    title: '100% 자연 완숙 토마토 & 순수 토마토즙 개발',
    description: '가스 착색제를 전면 배제하고 햇살 아래서 자연 완숙된 토마토만 수확하며, 물과 설탕 없는 100% 순수 착즙즙을 완성했습니다.',
  },
  {
    year: '2018년',
    title: '디지털 비파괴 당도 선별 시스템 구축',
    description: '외관뿐 아니라 과육 내부의 당도까지 15.5 Brix 이상 과학적으로 전수 검수하는 엄격한 품질 라인을 도입했습니다.',
  },
  {
    year: '2026년',
    title: '50주년 기념 강희농장 산지직송 직거래 몰',
    description: '중간 유통 마진 없이 당일 수확한 신선함과 감동을 24시간 이내 전국 각지의 식탁으로 전해드립니다.',
  },
];

export const FARM_FOUR_PILLARS = [
  {
    number: '01',
    title: '1줄기 1과 원칙 (모양과 당도의 극치)',
    desc: '한 줄기에 여러 개를 달면 당도가 떨어집니다. 강희농장은 단 하나의 과실만을 남기고 모조리 솎아내어 대지의 모든 수액과 태양 에너지를 한 통의 멜론에 쏟아붓습니다.',
  },
  {
    number: '02',
    title: '100% 나무 자연 완숙 (가스 착색 제로)',
    desc: '푸른 토마토를 따서 약품 가스로 붉게 만드는 인위적 착색을 절대 하지 않습니다. 나무에서 붉은빛과 리코펜이 꽉 찰 때까지 자연 햇살로 완숙시켜 깊고 진한 감칠맛을 냅니다.',
  },
  {
    number: '03',
    title: '원조 100% 순수 무첨가 완숙토마토즙',
    desc: '물(정제수) 한 방울, 설탕 한 톨, 방부제 0%! 50년 농장에서 자연 완숙된 토마토만 통째로 저온 착즙하여, 토마토의 풍부한 영양과 생생한 단맛을 그대로 병과 파우치에 담았습니다.',
  },
  {
    number: '04',
    title: '비파괴 당도 선별 & 100% 무료 교환제',
    desc: '머스크멜론 15.5 Brix 이상 기준을 통과한 과실만 출하합니다. 만약 드셔보시고 당도가 기준에 못 미치거나 파손이 발생하면 100% 새 상품으로 즉시 무료 재발송해 드립니다.',
  },
];

export const FAQS = [
  {
    q: '멜론 3수, 4수, 5수 박스의 차이는 무엇인가요?',
    a: '멜론 박스는 전체 상자 무게(약 7~8kg 내외)를 기준으로 들어가는 과실의 크기에 따라 구분됩니다. 3수 박스는 개당 2.2kg 이상의 가장 큰 특대과로 VIP 선물용 및 제사용에 으뜸입니다. 4수 박스는 개당 약 1.9~2.1kg의 로얄 대과로 선물과 가정용 모두 가장 선호도가 높습니다. 5수 박스는 개당 약 1.6~1.8kg의 중과로 온 가족이 넉넉하게 나눠드시기 좋은 실속 구성입니다. 세 규격 모두 15.5 Brix 이상의 당도는 100% 동일합니다.',
  },
  {
    q: '강희농장 토마토즙에는 정말 물이나 설탕이 전혀 안 들어가나요?',
    a: '네, 100% 무첨가 순수 완숙토마토 원액입니다. 정제수(물), 설탕, 올리고당, 색소, 보존료를 단 0.1%도 첨가하지 않고 오직 당일 수확한 신선한 자연 완숙 토마토만 깨끗이 세척해 저온 살균 착즙합니다. 토마토 본연의 달콤함과 풍부한 영양을 그대로 섭취하실 수 있습니다.',
  },
  {
    q: '멜론은 언제 먹는 것이 가장 맛있나요? (후숙 가이드)',
    a: '강희농장 멜론은 당일 갓 수확해 보내드리므로, 배송받으신 후 상온(20~25℃, 통풍이 잘 되는 그늘)에서 2~3일간 후숙해 주세요. 멜론 밑동(배꼽 부위)을 손가락으로 살짝 눌렀을 때 부드러운 탄력이 느껴지고 은은한 달콤한 향이 올라오면 최상의 타이밍입니다. 드시기 2~3시간 전 냉장고에 넣어 차갑게 드시면 당도가 더욱 극대화됩니다.',
  },
  {
    q: '완숙토마토는 냉장고에 보관해야 하나요?',
    a: '자연 완숙된 강희농장 토마토는 냉장고에 바로 넣으면 토마토 고유의 향기 성분이 손실될 수 있습니다. 드실 만큼은 꼭지를 아래로 향하게 하여 통풍이 잘 되는 서늘한 상온에 보관하시고, 3~4일 이상 장기 보관하실 때만 신문지나 키친타월에 싸서 야채칸에 보관해 주세요.',
  },
  {
    q: '배송 중 파손이나 당도 불만족 시 어떻게 처리되나요?',
    a: '강희농장은 공기 주입식 특수 에어셀 안전 완충 포장으로 발송되어 파손 위험이 극히 적습니다. 만에 하나 배송 중 과실이 상하거나, 안내된 당도 기준(멜론 15.5Brix 이상)에 미달하여 실망하셨다면 수령 후 사진 1장과 함께 고객센터(010-3867-6494)로 연락해 주세요. 이유를 묻지 않고 100% 무료 재발송 또는 환불을 약속합니다.',
  },
];
