import { useState, useEffect, createContext, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || []));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      let produstExist = false;
      let updatedCart = prev.map((item) => {
        if (item.id === product.id) {
          produstExist = true;
          return { ...item, num: item.num + 1 };
        } else return item;
      });

      return produstExist ? updatedCart : [...prev, { ...product, num: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CardContext.Provider>
  );
};

export function useCart() {
  return useContext(CardContext);
}
