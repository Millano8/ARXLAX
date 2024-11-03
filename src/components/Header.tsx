import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Header() {
  const { cartTotal } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // You can implement the search logic here using Algolia
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">ARXLAX S.A.</h1>
            <small>Importamos lo que quieras</small>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartTotal}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}