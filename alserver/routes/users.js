const express = require('express');
const router = new express.Router();
import validateInput from '../validations/signup';
import bcrypt from 'bcrypt';
const config = require('../config/index.json');
const User = require('mongoose').model('User');


router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    const { username, email, password } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);
    const user = User({ username, email, password_digest });
    console.log("Adding user with req body:", { username, email, password_digest });
    user.save((err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ errors: {global: "something went wrong"} });
      }
      return res.json({ success: true });
    });
  } else {
    res.status(400).json({ errors });
  }
});

module.exports = router;
