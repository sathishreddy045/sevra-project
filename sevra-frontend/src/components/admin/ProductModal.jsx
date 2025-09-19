import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import './ProductModal.css';

const ProductModal = ({ isOpen, onClose, onSave, productToEdit }) => {
  const [formData, setFormData] = useState({ name: '', price: '', category: '', imageUrl: '' });
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData({ name: '', price: '', category: 'Grocery', imageUrl: '' });
    }
    setImageFile(null); // Reset file input on open
  }, [productToEdit, isOpen]);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalImageUrl = formData.imageUrl;

    if (imageFile) {
      setIsUploading(true);
      const uploadFormData = new FormData();
      uploadFormData.append('image', imageFile);

      try {
        const config = { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${user.token}` }};
        const { data } = await axios.post('http://localhost:5001/api/upload', uploadFormData, config);
        finalImageUrl = data.imageUrl; // Use the new URL from Cloudinary
      } catch (error) {
        console.error('Image upload failed', error);
        setIsUploading(false);
        return; // Stop if upload fails
      }
      setIsUploading(false);
    }

    onSave({ ...formData, imageUrl: finalImageUrl });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2>{productToEdit ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
          <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
          <label className="form-label">Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="Grocery">Grocery</option>
            <option value="Medicine">Medicine</option>
            <option value="Fertilizer">Fertilizer</option>
          </select>
          
          <label className="file-input-label">Product Image</label>
          <input type="file" name="image" onChange={handleFileChange} />
          
          {formData.imageUrl && !imageFile && (
            <div className="image-preview">
              <p>Current Image:</p>
              <img src={formData.imageUrl} alt="Current product" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
          )}

          <button type="submit" className="modal-save-btn" disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Save Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;