import mongoose from 'mongoose';

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);

// This is the line that needs to be added or fixed.
export default Contact;