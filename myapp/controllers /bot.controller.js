class BotController{

    async get(req, res, next) {
        try{
            res.send("2fdf3fc3");
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()
