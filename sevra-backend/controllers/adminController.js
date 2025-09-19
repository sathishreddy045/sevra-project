import User from '../models/userModel.js';
import Product from '../models/productModel.js'; // Assuming you have this model
import Booking from '../models/bookingModel.js';

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
const getBookings = async (req, res) => {
  const bookings = await Booking.find({}).populate('user', 'id name');
  res.json(bookings);
};

// @desc    Get all products
// @route   GET /api/admin/products
// @access  Private/Admin
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc    Create a product
// @route   POST /api/admin/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  const { name, price, imageUrl, category } = req.body;
  const product = new Product({
    name,
    price,
    imageUrl,
    category,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc    Update a product
// @route   PUT /api/admin/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  const { name, price, imageUrl, category } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.imageUrl = imageUrl;
    product.category = category;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// @desc    Delete a product
// @route   DELETE /api/admin/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne(); // Mongoose 6+ uses deleteOne()
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Booking.countDocuments();
    
    const revenueResult = await Booking.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } }
    ]);
    const totalRevenue = revenueResult.length > 0 ? revenueResult[0].totalRevenue : 0;

    res.json({ totalUsers, totalProducts, totalOrders, totalRevenue });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getUsers, getBookings, getProducts, createProduct, updateProduct, deleteProduct, getDashboardStats  };