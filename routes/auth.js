const express = require('express');
const { signup, login, users, forgotPassword, resetPassword } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware'); // Create this middleware

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', users);
router.post('/forgot-password', forgotPassword);
router.post('/password-reset/:token', resetPassword);

module.exports = router;
