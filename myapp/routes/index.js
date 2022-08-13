const express = require('express');
const BotController = require("../controllers /bot.controller");
const router = express.Router();


router.get('/bot_vlad', BotController.get);


module.exports = router;
