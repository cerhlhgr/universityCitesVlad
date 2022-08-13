class BotController{

    async get(req, res, next) {
        try{
            res.send({title:"serega pidr"});
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()
