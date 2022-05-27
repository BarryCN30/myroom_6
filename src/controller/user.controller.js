const { crptPassword } = require("../middleware/user.middleware")
const { use } = require("../router/user.route")

const jwt = require('jsonwebtoken')
const { createUser, getUserInfo} = require("../service/user.service")
const {JWT_SECRET} = require('../config/config.default')

class UserController{
    async register(ctx, next){
        //1.获取数据
        //console.log(ctx.request.body)
         const {username, password} = ctx.request.body
    


        //2.操作数据库
        const res = await createUser(username, password)
        //3.返回结果


        ctx.body = {
            code : 0,
            message: '用户注册成功',
            result: {
                id: res.id,
                username: res.username,
            },
        }
    }

    // async project(ctx, next){
    //     const {id, projectname, a_id,} = ctx.request.body
        
    //     const res = await creatProject()

    // }

    async login(ctx, next){
        const {username} = ctx.request.body
        

        //1.获取用户信息：token的payload中记录id，username
        try{
            //从返回结果对象中剔除掉password字段，将剩下的属性放到resUser对象
            const {password, ...res}= await getUserInfo({username})

            ctx.body = {
                code: 0,
                message: '用户登陆成功',
                result: {
                    token:jwt.sign(res, JWT_SECRET,{expiresIn: '1d'}),
                },
            }
        }catch(err){
            console.error('用户登陆失败',err)
        }
    }
}

module.exports = new UserController()