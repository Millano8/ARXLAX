import React from 'react';
import { useHits, useSearchBox } from 'react-instantsearch';
import { ProductCard } from './ProductCard'
import type { Product } from '../types';

export function SearchResults() {
  const { hits } = useHits();
  const { query } = useSearchBox();

  if (!query) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      {hits.length > 0 ? (
        hits.map((hit: any) => (
          <div key={hit.objectID} className="p-4 hover:bg-gray-50 border-b last:border-b-0">
            <h3 className="font-semibold">{hit.title}</h3>
            <p className="text-sm text-gray-600">${hit.price}</p>
          </div>
        ))
      ) : (
        <div className="p-4 text-center text-gray-600">
          No se encontraron resultados para "{query}"
        </div>
      )}
    </div>
  );
}