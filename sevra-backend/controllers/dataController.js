import Contact from '../models/contactModel.js';

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

const getProducts = (req, res) => {
  const products = [
    { _id: '1', name: 'Rice (1kg)', price: 60, imageUrl: '/images/rice.jpg' },
    { _id: '2', name: 'Milk (1L)', price: 55, imageUrl: '/images/milk.jpg' },
    { _id: '3', name: 'Bread Loaf', price: 40, imageUrl: '/images/bread.jpg' },
    { _id: '4', name: 'Eggs (Dozen)', price: 70, imageUrl: '/images/eggs.jpg' },
    { _id: '5', name: 'Paracetamol', price: 25, imageUrl: '/images/paracetamol.jpg' },
    { _id: '6', name: 'Cooking Oil (1L)', price: 150, imageUrl: '/images/oil.jpg' },
  ];
  res.json(products);
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

export { getServices, getProducts, getNews, submitContactForm };