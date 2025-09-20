import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import CartContext from '../../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const closeMobileMenu = () => setIsOpen(false);

  const handleLogout = () => {
    closeMobileMenu();
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container" onClick={closeMobileMenu}>
          <div className="navbar-logo">Sevra</div>
          <div className="navbar-tagline">Bridging Rural Needs With Care</div>
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-main-links">
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>

          <div className="nav-auth-links">
            <Link to="/cart" className="nav-cart-link" onClick={closeMobileMenu}>
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </Link>

            {user ? (
              <>
                <Link to="/dashboard" className="nav-links-auth" onClick={closeMobileMenu}>Dashboard</Link>
                <button onClick={handleLogout} className="nav-links-auth nav-links-auth-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-links-auth" onClick={closeMobileMenu}>Login</Link>
                <Link to="/signup" className="nav-links-auth nav-links-auth-primary" onClick={closeMobileMenu}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
