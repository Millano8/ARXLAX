import React from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch';
import { Search } from 'lucide-react';

export function SearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}