import Contact from '../models/contactModel.js';
import Product from '../models/productModel.js';

const getServices = (req, res) => {
  const services = [
    { name: 'Grocery Delivery', iconUrl: '/icons/grocery.png' },
    { name: 'Medicine Supply', iconUrl: '/icons/medicine.png' },
    { name: 'Farming Tools', iconUrl: '/icons/tools.png' },
    { name: 'Vet Services', iconUrl: '/icons/vet.png' },
    { name: 'Digital Payments', iconUrl: '/icons/payment.png' },
  ];
  res.json(services);
};

const getPublicProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


const getNews = (req, res) => {
  const news = [
    { id: 1, headline: 'New Government Subsidy Announced for Fertilizers' },
    { id: 2, headline: 'Local Weather Update: Monsoon Expected to Arrive Early' },
    { id: 3, headline: 'Digital Literacy Camp to be Held in Nearby Village' },
  ];
  res.json(news);
};

const submitContactForm = async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required' });
  }

  const contactSubmission = new Contact({ name, message });
  await contactSubmission.save();

  res.status(201).json({ message: 'Message received. We will get back to you soon!' });
};

export { getServices, getPublicProducts, getNews, submitContactForm };