const express = require('express');
const BotController = require("../controllers /bot.controller");
const router = express.Router();


router.post('/', BotController.get);

module.exports = router;
