const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const app = express();

console.log('MongoDB URI:', process.env.MONGO_URI);

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
