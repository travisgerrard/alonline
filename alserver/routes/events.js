import express from 'express';
const router = new express.Router();
const config = require('../config/index.json');
const User = require('mongoose').model('User');
import jwt from 'jsonwebtoken'



router.post('/', (req, res) => {
  res.status(201).json({ success: true });
});

module.exports = router;
