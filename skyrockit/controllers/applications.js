// controllers/applications.js

const express = require('express');
const router = express.Router();

const User = require("../models/user.js");
//This is your logic

router.get('/', (req, res) => {
    res.send('hello application index route!')
});

module.exports = router;