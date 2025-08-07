import Booking from '../models/bookingModel.js';
const addBookingItems = async (req, res) => {
  const { bookingItems, totalPrice } = req.body;

  if (bookingItems && bookingItems.length === 0) {
    return res.status(400).json({ message: 'No booking items' });
  } else {
    try {
      const booking = new Booking({
        user: req.user._id,
        products: bookingItems.map(item => ({
          name: item.name,
          qty: item.qty,
          price: item.price,
          product: item._id,
        })),
        totalPrice,
      });

      const createdBooking = await booking.save();
      res.status(201).json(createdBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(400).json({ message: 'Error creating booking', error: error.message });
    }
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(400).json({ message: 'Error fetching bookings', error: error.message });
  }
};

export { addBookingItems, getMyBookings };
