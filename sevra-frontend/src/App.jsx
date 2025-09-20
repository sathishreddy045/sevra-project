import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './styles/App.css';

import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import AdminLayout from './components/admin/AdminLayout';

import PrivateRoute from './hooks/PrivateRoute';
import AdminRoute from './hooks/AdminRoute';

import HomePage from './pages/public/HomePage';
import ServicesPage from './pages/public/ServicesPage';
import ProductsPage from './pages/public/ProductsPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import CartPage from './pages/user/CartPage';
import DashboardPage from './pages/user/DashboardPage';
import EditProfilePage from './pages/auth/EditProfilePage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import ContactPage from './pages/user/ContactPage';

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="edit-profile" element={<EditProfilePage />} />
              </Route>
            </Route>

            <Route path="/admin/login" element={<AdminLoginPage />} />

            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="products" element={<AdminProductsPage />} />
                <Route path="orders" element={<AdminOrdersPage />} />
                <Route path="users" element={<AdminUsersPage />} />
              </Route>
            </Route>
          </Routes>
          </AuthProvider>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;