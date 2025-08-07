import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) {
        setError('You must be logged in to view your dashboard.');
        setLoading(false);
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.get('http://localhost:5001/api/bookings/mybookings', config);
        setBookings(data);
      } catch {
        setError('Could not fetch booking history.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (loading) {
    return <div className="section-container"><p>Loading dashboard...</p></div>;
  }

  if (error) {
    return <div className="section-container"><p className="auth-error">{error}</p></div>;
  }

  return (
    <div className="dashboard-container section-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome, {user?.name}!</h1>
        <Link to="/edit-profile" className="edit-profile-btn">Edit Profile</Link>
      </div>
      
      <div className="dashboard-content">
        <h2 className="dashboard-subtitle">Your Booking History</h2>
        {bookings.length === 0 ? (
          <p>You have not made any bookings yet.</p>
        ) : (
          <div className="bookings-list">
            {bookings.map(booking => (
              <div key={booking._id} className="booking-card">
                <div className="booking-card-header">
                  <div>
                    <span className="booking-id">ORDER #{booking._id.substring(0, 10)}</span>
                    <span className="booking-date">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <span className={`booking-status status-${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="booking-card-body">
                  {booking.products.map(product => (
                    <div key={product._id} className="booking-product-item">
                      <span>{product.name} (x{product.qty})</span>
                      <span>₹{(product.price * product.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="booking-card-footer">
                  <strong>Total: ₹{booking.totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;