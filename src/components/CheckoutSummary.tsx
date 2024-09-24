import React from 'react';
import { useBasket } from '../context/BasketContext';

const CheckoutSummary: React.FC = () => {
  const { basketTotal, basketItemCount } = useBasket();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Checkout Summary</h2>
      <p>Total Items: {basketItemCount}</p>
      <p>Total Price: £{basketTotal.toFixed(2)}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;