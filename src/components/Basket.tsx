import React from 'react';
import { useBasket } from '../context/BasketContext';

const Basket: React.FC = () => {
  const { basket, updateQuantity, basketTotal } = useBasket();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          <ul>
            {basket.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between items-center">
                <span>{item.name} - £{item.price.toFixed(2)}</span>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <strong>Total: £{basketTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;