import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrixReportSection } from './components/BrixReportSection';
import { ProductSection } from './components/ProductSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FarmStorySection } from './components/FarmStorySection';
import { GiftPackagingSection } from './components/GiftPackagingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CartCheckoutDrawer } from './components/CartCheckoutDrawer';
import { OrderLookupModal } from './components/OrderLookupModal';
import { CareGuideModal } from './components/CareGuideModal';
import { DirectCallOrderBar } from './components/DirectCallOrderBar';
import { Footer } from './components/Footer';
import { Product, CartItem, Order } from './types';
import { PRODUCTS, INITIAL_ORDERS } from './data/farmData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kanghee_farm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('kanghee_farm_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isOrderLookupOpen, setIsOrderLookupOpen] = useState<boolean>(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState<boolean>(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('kanghee_farm_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Sync orders to local storage
  useEffect(() => {
    try {
      localStorage.setItem('kanghee_farm_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.selectedOption.id === newItem.selectedOption.id &&
          item.giftBojagiWrap === newItem.giftBojagiWrap
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prev, { ...newItem, id: `cart-${Date.now()}-${Math.random()}` }];
      }
    });
  };

  const handleDirectBuy = (item: Omit<CartItem, 'id'>) => {
    handleAddToCart(item);
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart({
      productId: product.id,
      product,
      selectedOption: product.options[0],
      quantity: 1,
      giftBojagiWrap: false,
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleOrderComplete = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#242922] font-sans flex flex-col selection:bg-[#2D5A27] selection:text-white">
      {/* Global Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderLookup={() => setIsOrderLookupOpen(true)}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <HeroSection
          onOrderClick={() => scrollToSection('products')}
          onBrixClick={() => scrollToSection('brix-report')}
        />

        {/* 2. Today's Brix & Quality Inspection Report */}
        <BrixReportSection />

        {/* 3. Product Catalog & Direct Farm Store */}
        <ProductSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAdd={handleQuickAdd}
        />

        {/* 4. 50-Year Heritage & Soil Story */}
        <FarmStorySection />

        {/* 5. Luxury Gift Box Packaging Showcase */}
        <GiftPackagingSection
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 6. Real Verified Customer Reviews */}
        <ReviewsSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
        onOpenOrderLookup={() => setIsOrderLookupOpen(true)}
      />

      {/* Senior & Phone Order Quick Bar */}
      <DirectCallOrderBar />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectBuy={handleDirectBuy}
      />

      {/* Cart & Checkout Drawer */}
      <CartCheckoutDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOrderComplete={handleOrderComplete}
        onClearCart={handleClearCart}
      />

      {/* Order Tracking & Lookup Modal */}
      <OrderLookupModal
        isOpen={isOrderLookupOpen}
        onClose={() => setIsOrderLookupOpen(false)}
        orders={orders}
      />

      {/* Care & Ripening Guide Modal */}
      <CareGuideModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />
    </div>
  );
}
