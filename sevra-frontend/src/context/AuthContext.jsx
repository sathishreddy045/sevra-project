import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartContext from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('sevraUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    clearCart();
    localStorage.setItem('sevraUser', JSON.stringify(userData));
    setUser(userData);

    const from = location.search.split('=')[1] || (userData.isAdmin ? '/admin/dashboard' : '/');
    navigate(from);
  };

  const logout = () => {
    localStorage.removeItem('sevraUser');
    setUser(null);
    clearCart();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;