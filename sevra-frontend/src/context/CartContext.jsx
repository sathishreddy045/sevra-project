import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('sevraCart');
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('sevraCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const exist = prevItems.find(item => item._id === product._id);
      if (exist) {
        return prevItems.map(item =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems => {
       const exist = prevItems.find(item => item._id === product._id);
       if (exist.qty === 1) {
         return prevItems.filter(item => item._id !== product._id);
       } else {
         return prevItems.map(item => 
           item._id === product._id ? { ...item, qty: item.qty - 1 } : item
         );
       }
    });
  };
  
  const clearCart = () => {
      setCartItems([]);
      localStorage.removeItem('sevraCart');
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;