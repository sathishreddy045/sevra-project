import express from 'express';
const router = express.Router();
import {
  getServices,
  getProducts,
  getNews,
  submitContactForm,
} from '../controllers/dataController.js';

router.get('/services', getServices);
router.get('/products', getProducts);
router.get('/news', getNews);
router.post('/contact', submitContactForm);

export default router;