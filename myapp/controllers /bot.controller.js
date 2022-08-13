const axios = require('axios').default
const tokenMy = "vk1.a.On14TtijaODhlGJBwgdQZ9m6PZqAWtx5HNW6BdTuPW5VtLDqpVKSwkbdzrFet4O6BDlhU9iaaQfyUkVRrXWcYJT_GL9m3V46SivvxqQJydbJXGumTFdDwzRMDnSTsuNjJTPa_b6dx0GsKW1wH6QVsApjD5Hx41Hqq3smrsfobifNMgVF1VkMHCWeK0edWgp_"
const tokenGroup = "vk1.a.iR5VIpjVNSCmTUIT6CMA5Hkd4Woz8eO3O79ZYbfKsuuu2BIltM9gxPtop5VmRHfkgzR4BJjmFfD4gaaBK6ctWRQM_8KIkIFBEsyUQibq5i-p21R3sJlVVH27qpuDj9i-jqAYphQH-wHL3-l6FSDNMywX3soNXDcU4h5-v_Fq31n5Dtym-tz73UL0S8AE7fj6"

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
                const requestCities = {
                    access_token: tokenMy,
                    country_id: 1,
                    q: req.body.object.message.text,
                    count: 1,
                    v: req.body.v
                }
                axios.get("https://api.vk.com/method/database.getCities",  {params: requestCities}).then(res => {
                    return res.data.response.items[0].title
                }).then((city) => {
                    console.log(city)
                    const requestSendMessage = {
                        access_token: tokenGroup,
                        v: req.body.v,
                        user_id: req.body.object.message.from_id,
                        peer_id: req.body.group_id,
                        message: `Вы выбрали город ${city}, напишите название уника`
                    }
                    axios.post("https://api.vk.com/method/send", requestSendMessage).then(() => {
                        console.log(123)
                    })
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
