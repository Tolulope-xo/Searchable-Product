import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import {products} from '../assets/data'

const SearchableProductTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocalOnly, setShowLocalOnly] = useState(false);

  const filteredProducts = products.map(category => ({
    category: category.category,
    items: category.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocal = showLocalOnly ? item.local : true;
      return matchesSearch && matchesLocal;
    })
  })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IoSearchSharp className="absolute right-3 top-2.5 text-gray-400" size={20}/>
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="localOnly"
          checked={showLocalOnly}
          onChange={(e) => setShowLocalOnly(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="localOnly" className="text-sm text-gray-600">
          Only show tweets in your current location
        </label>
      </div>

      <div>
        {filteredProducts.map((category) => (
          <div key={category.category} className="mb-4">
            <h2 className="font-bold text-gray-700 mb-2">{category.category}</h2>
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center p-3 bg-gray-50 rounded mb-2"
              >
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-500">{item.count}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableProductTable;