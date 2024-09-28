const express = require('express');
const { createChat, getChats } = require('../controllers/chatController');
const { authenticate } = require('../middleware/authMiddleware'); // Create this middleware
const router = express.Router();

router.use(authenticate); // Protect all chat routes

router.post('/create', createChat);
router.get('/', getChats);

module.exports = router;
