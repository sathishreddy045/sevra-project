import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">Sevra Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" end>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">
              <i className="fas fa-box-open"></i> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">
              <i className="fas fa-list-alt"></i> Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users">
              <i className="fas fa-users"></i> Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;