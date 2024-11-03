import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';
import { useCategory } from '../context/CategoryContext';

const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS, and sleep tracking.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.',
    price: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Modern Coffee Table',
    description: 'Sleek and modern coffee table with tempered glass top and wooden base. Perfect for any living room.',
    price: 249.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Professional Tennis Racket',
    description: 'High-performance tennis racket for professional players. Lightweight and durable construction.',
    price: 159.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Luxury Skincare Set',
    description: 'Complete skincare routine with premium ingredients. Includes cleanser, toner, serum, and moisturizer.',
    price: 129.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Classic Board Game Collection',
    description: 'Set of classic board games for family entertainment. Includes chess, checkers, and backgammon.',
    price: 79.99,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Bestseller Book Bundle',
    description: 'Collection of this year\'s top bestselling novels. Perfect for book lovers and avid readers.',
    price: 89.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
  }
];

export function ProductGrid() {
  const { selectedCategory } = useCategory();
  
  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}