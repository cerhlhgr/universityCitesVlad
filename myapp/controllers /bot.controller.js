const axios = require('axios').default

class BotController{

    async get(req, res, next) {
        try{
            res.send("2fdf3fc3");
        } catch (err){
            next(err)
        }

    }

    async post(req, res, next) {
        try{
            if (req.body.type === "message_new") {
                axios.get("https://dev.vk.com/method/database.getCities").then(res => {
                    console.log(res)
                })
            } else {
                res.send("2fdf3fc3");
            }
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()
