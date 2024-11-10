import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import { CategoryProvider } from './context/CategoryContext';
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { Cart } from './components/Cart';
import { InstantSearch } from 'react-instantsearch';
import { searchClient } from './lib/algolia';

export function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <CartProvider>
        <CategoryProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <AboutUs />
                  <HowItWorks />
                  <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:hidden">
                        <select className="w-full p-2 border rounded-lg">
                          {['All Products', 'Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Beauty', 'Toys'].map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <Sidebar />
                      </div>
                      <main className="flex-1">
                        <ProductGrid />
                      </main>
                    </div>
                  </div>
                </>
              } />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <WhatsAppButton />
          </div>
        </CategoryProvider>
      </CartProvider>
    </InstantSearch>
  );
}