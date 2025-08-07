import React, { useContext, useState, useMemo } from 'react';
import CartContext from '../../context/CartContext';
import './ProductsSection.css';
import paraMed from '../../assets/paramed.jpg';
import orsMed from '../../assets/orsmed.jpg';
import rice from '../../assets/rice.webp';
import dal from '../../assets/dal.jpg';
import dap from '../../assets/dap.webp';
import urea from '../../assets/urea.png';

const productsData = [
  { _id: 'product1', name: 'Paracetamol 500mg', price: 25.00, imageUrl: paraMed, category: 'Medicine' },
  { _id: 'product2', name: 'ORS Powder', price: 20.00, imageUrl: orsMed, category: 'Medicine' },
  { _id: 'product3', name: 'Sona Masoori Rice (5kg)', price: 350.00, imageUrl: rice, category: 'Grocery' },
  { _id: 'product4', name: 'Toor Dal (1kg)', price: 140.00, imageUrl: dal, category: 'Grocery' },
  { _id: 'product5', name: 'Urea (45kg Bag)', price: 268.00, imageUrl: urea, category: 'Fertilizer' },
  { _id: 'product6', name: 'DAP (50kg Bag)', price: 1350.00, imageUrl: dap, category: 'Fertilizer' },
];

const categories = ['All', 'Medicine', 'Grocery', 'Fertilizer'];

const ProductsSection = () => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = productsData
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        selectedCategory === 'All' || product.category === selectedCategory
      );
    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <section id="products" className="section-container">
      <h2 className="section-title">Available Products</h2>
      <p className="section-subtitle">
        A curated list of essential products available for order.
      </p>

      <div className="filter-controls">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="sort-filter">
          <select 
            className="sort-select" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-products-found">No products found matching your criteria.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
