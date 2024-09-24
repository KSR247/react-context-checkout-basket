import { BasketItem, Product } from '../types';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  basketTotal: number;
  basketItemCount: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevBasket, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const basketTotal = basket.reduce((total, item) => total + item.price * item.quantity, 0);
  const basketItemCount = basket.reduce((count, item) => count + item.quantity, 0);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, basketTotal, basketItemCount }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};