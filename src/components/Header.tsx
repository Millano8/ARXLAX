import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { SearchResults } from './SearchResults';

export function Header() {
  const { cartTotal } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <Link to="/">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">ARXLAX S.A.</h1>
                <small>Importamos lo que quieras</small>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 max-w-2xl relative">
            <SearchBox />
            <SearchResults />
          </div>

          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartTotal}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}