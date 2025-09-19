import express from 'express';
const router = express.Router();
import { 
  getUsers, 
  getBookings,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getDashboardStats,
} from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/users', protect, admin, getUsers);
router.get('/bookings', protect, admin, getBookings);
router.get('/stats', protect, admin, getDashboardStats);

router.route('/products')
  .get(protect, admin, getProducts)
  .post(protect, admin, createProduct);

router.route('/products/:id')
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;