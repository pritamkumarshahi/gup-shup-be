const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  keepSignedIn: { type: Boolean, required: false },
});

module.exports = mongoose.model('users', userSchema);
