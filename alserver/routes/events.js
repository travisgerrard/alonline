import express from 'express';
const router = new express.Router();
import authenticate from '../middleware/authenticate';


router.post('/', authenticate, (req, res) => {
  res.status(201).json({ success: true });
});

module.exports = router;
