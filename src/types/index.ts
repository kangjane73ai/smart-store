export type ProductCategory = 'all' | 'melon' | 'tomato' | 'juice';

export interface ProductOption {
  id: string;
  name: string;
  priceDelta: number;
  weight: string;
  countDescription: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'melon' | 'tomato' | 'juice';
  basePrice: number;
  originalPrice: number;
  brix: string;
  weightText: string;
  unitCountText: string;
  harvestCycle: string;
  badge?: string;
  image: string;
  galleryImages: string[];
  description: string;
  flavorProfile: {
    sweetness: number; // 1 to 5
    firmness: number;
    juiciness: number;
    aroma: number;
  };
  features: string[];
  options: ProductOption[];
  stockCount: number;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  id: string; // unique item uuid
  productId: string;
  product: Product;
  selectedOption: ProductOption;
  quantity: number;
  giftBojagiWrap: boolean; // 보자기 포장 여부 (+3,000)
  customGiftMessage?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  productName: string;
  verified: boolean;
  photoUrl?: string;
  tag: 'melon' | 'tomato' | 'juice';
  helpfulCount: number;
}

export interface Order {
  orderNumber: string;
  customerName: string;
  phone: string;
  email: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  shippingMemo: string;
  paymentMethod: 'bank_transfer' | 'credit_card' | 'easy_pay';
  depositorName?: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  orderDate: string;
  status: 'payment_pending' | 'harvest_preparing' | 'inspected_packed' | 'shipping' | 'delivered';
  courierName: string;
  trackingNumber: string;
  preferredDeliveryDate?: string;
}

export interface DailyHarvestInfo {
  date: string;
  melonBrix: number;
  tomatoBrix: number;
  morningTemperature: string;
  sunshineHours: string;
  harvestStatus: string;
  shippedTodayCount: number;
  farmerNote: string;
}
