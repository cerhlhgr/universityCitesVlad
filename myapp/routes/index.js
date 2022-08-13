const express = require('express');
const BotController = require("../controllers /bot.controller");
const router = express.Router();


router.get('/bot_vlad', BotController.get);
router.post('/bot_vlad/check', BotController.post)


module.exports = router;
