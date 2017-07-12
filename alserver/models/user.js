
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Ther user model schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: { unique: true }
  },
  email: {
    type: String,
    index: { unique: true }
  },
  password_digest: String,
});

module.exports = mongoose.model('User', UserSchema);
