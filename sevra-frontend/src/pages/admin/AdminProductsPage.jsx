import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import ProductModal from '../../components/admin/ProductModal';
import './AdminCrud.css';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axios.get('http://localhost:5001/api/admin/products', config);
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user.token]);

  const handleSave = async (productData) => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    try {
      if (editingProduct) {
        await axios.put(`http://localhost:5001/api/admin/products/${editingProduct._id}`, productData, config);
      } else {
        await axios.post('http://localhost:5001/api/admin/products', productData, config);
      }
      fetchProducts();
      closeModal();
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        await axios.delete(`http://localhost:5001/api/admin/products/${id}`, config);
        fetchProducts();
      } catch (error) {
        console.error('Failed to delete product', error);
      }
    }
  };
  
  const openModal = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="admin-page-container">
      <ProductModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        productToEdit={editingProduct}
      />
      <div className="admin-page-header">
        <h1 className="admin-page-title">Manage Products</h1>
        <button onClick={() => openModal()} className="add-new-btn">Add Product</button>
      </div>
      <div className="admin-table-container">
        <table className="crud-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td><img src={product.imageUrl} alt={product.name} className="table-img" /></td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => openModal(product)} className="action-btn edit-btn">Edit</button>
                  <button onClick={() => handleDelete(product._id)} className="action-btn delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;