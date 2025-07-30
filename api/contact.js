const mongoose = require('mongoose');
const cors = require('cors');

// MongoDB Connection
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_contacts');
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      const newContact = new Contact({
        name,
        email,
        message
      });

      await newContact.save();
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
