const axios = require('axios').default
const tokenMy = "vk1.a.On14TtijaODhlGJBwgdQZ9m6PZqAWtx5HNW6BdTuPW5VtLDqpVKSwkbdzrFet4O6BDlhU9iaaQfyUkVRrXWcYJT_GL9m3V46SivvxqQJydbJXGumTFdDwzRMDnSTsuNjJTPa_b6dx0GsKW1wH6QVsApjD5Hx41Hqq3smrsfobifNMgVF1VkMHCWeK0edWgp_"
const tokenGroup = "vk1.a.iR5VIpjVNSCmTUIT6CMA5Hkd4Woz8eO3O79ZYbfKsuuu2BIltM9gxPtop5VmRHfkgzR4BJjmFfD4gaaBK6ctWRQM_8KIkIFBEsyUQibq5i-p21R3sJlVVH27qpuDj9i-jqAYphQH-wHL3-l6FSDNMywX3soNXDcU4h5-v_Fq31n5Dtym-tz73UL0S8AE7fj6"

let step = 0
let city = ""

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
            if (req.body.type === "message_new" && step === 0) {
                city = req.body.object.message.text
                const requestCities = {
                    access_token: tokenMy,
                    country_id: 1,
                    q: req.body.object.message.text,
                    count: 1,
                    v: req.body.v
                }
                axios.get("https://api.vk.com/method/database.getCities", {params: requestCities}).then(() => {
                    const requestSendMessage = {
                        access_token: tokenGroup,
                        v: req.body.v,
                        user_id: req.body.object.message.from_id,
                        peer_id: req.body.group_id,
                        message: `Вы выбрали город ${req.body.object.message.text}, напишите название уника`,
                        random_id: Math.random()
                    }
                    axios.get("https://api.vk.com/method/messages.send", {params: requestSendMessage})
                })
            } else if (req.body.type === "message_new" && step === 1) {
                const requestUniversity = {
                    access_token: tokenMy,
                    country_id: 1,
                    q: city,
                    count: 1,
                    v: req.body.v
                }
                axios.get("https://api.vk.com/method/database.getUniversities",  {params: requestUniversity}).then(() => {
                    const requestSendMessage = {
                        access_token: tokenGroup,
                        v: req.body.v,
                        user_id: req.body.object.message.from_id,
                        peer_id: req.body.group_id,
                        message: `Вы выбрали уник ${req.body.object.message.text}`,
                        random_id: Math.random()
                    }
                    axios.get("https://api.vk.com/method/messages.send", {params: requestSendMessage})
                })
            } else if (req.body.type === "message_new" && req.body.object.message.text === "Очистить") {
                city = ""
                step = 0
            }
            else {
                res.send("2fdf3fc3");
            }
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()
