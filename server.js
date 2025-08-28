require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(bodyParser.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/keybolt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB models
const User = require('./models/User');
const Subscription = require('./models/Subscription');
const Log = require('./models/Log');

// API Routes
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', version: '1.0.0' });
});

// User authentication routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      email,
      password: hashedPassword
    });
    
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected routes middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Subscription management routes
app.get('/api/subscriptions', authenticateToken, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user.userId });
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/subscriptions', authenticateToken, async (req, res) => {
  try {
    const subscription = new Subscription({
      userId: req.user.userId,
      ...req.body
    });
    
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logging endpoint
app.post('/api/logs', authenticateToken, async (req, res) => {
  try {
    const log = new Log({
      userId: req.user.userId,
      ...req.body
    });
    
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

