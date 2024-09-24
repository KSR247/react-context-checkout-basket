import { Product } from '../types';
import React from 'react';
import { useBasket } from '../context/BasketContext';

const products: Product[] = [
  { id: 1, name: 'T-Shirt', price: 19.99 },
  { id: 2, name: 'Jeans', price: 49.99 },
  { id: 3, name: 'Sneakers', price: 79.99 },
];

const ProductList: React.FC = () => {
  const { addToBasket } = useBasket();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 flex justify-between items-center">
            <span>{product.name} - £{product.price.toFixed(2)}</span>
            <button
              onClick={() => addToBasket(product)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add to Basket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;