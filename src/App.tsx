import Basket from './components/Basket';
import { BasketProvider } from './context/BasketContext';
import CheckoutSummary from './components/CheckoutSummary';
import ProductList from './components/ProductList';
import React from 'react';

const App: React.FC = () => {
  return (
    <BasketProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">React Context Checkout Basket App</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductList />
          <Basket />
          <CheckoutSummary />
        </div>
      </div>
    </BasketProvider>
  );
};

export default App;