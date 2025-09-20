import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import './AdminCrud.css';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const { data } = await axios.get('http://localhost:5001/api/admin/bookings', config);
        setOrders(data);
      } catch (error) { console.error(error); }
    };
    fetchOrders();
  }, [user.token]);

  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">Manage Orders</h1>
      <div className="admin-table-container">
        <table className="crud-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id.substring(0, 10)}...</td>
                <td>{order.user?.name || 'N/A'}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>₹{order.totalPrice.toFixed(2)}</td>
                <td><span className={`booking-status status-${order.status.toLowerCase()}`}>{order.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrdersPage;