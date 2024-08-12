const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ensure this line is present
const careerRoutes = require('./routes/career'); // Import the career route
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');

const app = express();
const corsOptions = {
  origin: 'http://localhost:4200', // Adjust this to match your frontend URL
  credentials: true // This is important to allow cookies to be sent
};

// Middleware

app.use(cors(corsOptions));
app.use(express.json()); // For parsing JSON requests
app.use(cookieParser());
app.use(bodyParser.json());


// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Models
const User = require('./models/user'); // Ensure you have a User model

// Routes
app.use('/api/career', careerRoutes); // Use the career route
// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password )

  try {
    const user = await User.findOne({ email });
      if (!user) {
      return res.status(400).send('User not found');
    }
    console.log("user from DB", user)
    const isMatch = password === user.password;
    if (!isMatch) {
      console.log('user');
      return res.status(400).send('Invalid credentials');
    } 
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('userRole', user.role, { maxAge: 3600000 });
    res.status(200).json({ token, role: user.role });
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }  
});

// Signup routes
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password, dob, mobileNumber } = req.body;
    const newUser = new User({ fullName, email, password, dob, mobileNumber });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data' });
  }
});

app.post('/api/updateUser', async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      user.role = req.body.role || 'admin';  // Set the role to 'admin'
      await user.save();

      res.json({ message: 'User role updated to admin/default', user });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 