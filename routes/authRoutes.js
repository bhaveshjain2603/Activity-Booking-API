const express = require('express');
const { register, login } = require('../controllers/authController');
const { check } = require('express-validator');

const router = express.Router();

router.post('/register', [
  check('name').not().isEmpty(),
  check('email').isEmail(),
  check('phone').not().isEmpty(),
  check('password').isLength({ min: 6 })
], register);

router.post('/login', login);

module.exports = router;
