import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const { data } = await axios.get('http://localhost:5001/api/admin/stats', config);
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats', error);
      }
    };
    fetchStats();
  }, [user.token]);

  return (
    <div className="admin-dashboard">
      <h1 className="admin-page-title">Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>₹{stats ? stats.totalRevenue.toFixed(2) : '--'}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{stats ? stats.totalOrders : '--'}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats ? stats.totalUsers : '--'}</p>
        </div>
        <div className="stat-card">
          <h3>Products in Stock</h3>
          <p>{stats ? stats.totalProducts : '--'}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;