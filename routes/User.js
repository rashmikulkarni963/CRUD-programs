const express = require('express');
const router = express.Router();
const User= require('../models/User');

// Get all items
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const User = await User.findById(req.params.id);
    if (!User) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(User);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { name,location,password,phoneno,email } = req.body;
    const user = new User({
      name,
      location,
      password,
      phoneno,
      email
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { name,location,password,phoneno,email } = req.body;
    const User = await User.findByIdAndUpdate(
      req.params.id,
      { name,location,password,phoneno,email },
      { new: true }
    );
    if (!User) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(User);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const User = await User.findByIdAndDelete(req.params.id);
    if (!User) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const User = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!User) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(User);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});
module.exports = router;