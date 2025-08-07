import express from 'express';
const router = express.Router();
import {
  addBookingItems,
  getMyBookings,
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addBookingItems);
router.route('/mybookings').get(protect, getMyBookings);

export default router;