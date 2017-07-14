import express from 'express';
const router = new express.Router();
const config = require('../config/index.json');
const User = require('mongoose').model('User');
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  console.log(identifier);
  User.findOne({
    email: identifier
  }, function (err, existingUser) {
    console.log(existingUser);
    if (err || existingUser == null) {
      console.error(err);
      return res.status(401).json({ errors: {global: "Invalid credentials"} });
    }
    if (bcrypt.compareSync(password, existingUser.password_digest)) {
      const token = jwt.sign({
        id: existingUser._id,
        username: existingUser.username
      }, config.jwtSecret);
      res.json({ token });
    } else {
      return res.status(401).json({ errors: {global: "Invalid credentials"} });
    }
  });
});

module.exports = router;
