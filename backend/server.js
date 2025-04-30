const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const dbName = mongoose.connection.name;
    console.log(`MongoDB connected to database: ${dbName}`);
  })
  .catch(err => console.error('MongoDB connection error:', err));


//POST - Login user
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// GET all users 
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, '-__v -_id');
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error while getting users' });
  }
});


// PUT - Update user by email
app.put('/api/users/:email', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { new: true, projection: { _id: 0, __v: 0 } }
    );

    if (!updatedUser) {
      return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
