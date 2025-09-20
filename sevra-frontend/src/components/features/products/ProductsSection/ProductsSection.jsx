import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../../../context/AuthContext';
import CartContext from '../../../../context/CartContext';
import './ProductsSection.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('');

  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/data/products');
        setProducts(data);
      } catch (err) {
        setError('Could not load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (user) {
      addToCart(product);
      alert(`${product.name} has been added to your cart!`);
    } else {
      navigate('/login');
    }
  };

  const filteredAndSortedProducts = products
    .filter(product => category === 'All' || product.category === category)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return 0;
    });

  if (loading) return <p className="section-container">Loading products...</p>;
  if (error) return <p className="section-container auth-error">{error}</p>;

  return (
    <section id="products" className="section-container">
      <h2 className="section-title">Available Products</h2>
      <p className="section-subtitle">A curated list of essential products available for order.</p>
      
      <div className="filter-controls">
        <input type="text" placeholder="Search..." className="search-bar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <div className="filter-group">
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Grocery">Grocery</option>
            <option value="Medicine">Medicine</option>
            <option value="Fertilizer">Fertilizer</option>
          </select>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
              </div>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-products-found">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;