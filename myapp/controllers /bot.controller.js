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
                console.log(req.body)
                const requestCities = {
                    access_token: tokenMy,
                    country_id: 1,
                    q: req.body.object.text
                }
                axios.post("https://dev.vk.com/method/database.getCities", requestCities).then(res => {
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
