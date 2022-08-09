const express = require('express');
const BotController = require("../controllers /bot.controller");
const router = express.Router();


router.post('/bot_vlad', BotController.get);

module.exports = router;
