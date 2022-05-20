const { use } = require("../router/user.route")
const { createUser, getUserInfo} = require("../service/user.service")

class UserController{
    async register(ctx, next){
        //1.获取数据
        //console.log(ctx.request.body)
        const {username, password} = ctx.request.body
        //合法性
        if(!username || !password){
            console.error('用户名或密码为空', ctx.request.body);
            ctx.status = 400//请求格式
            ctx.body ={
                code: '10001',
                message: '用户名或密码为空',
                result: '',
            }
            return
        }
        //合理性
        //如果用户存在就不重复添加
        if(getUserInfo({username})){
            ctx.status = 409
            ctx.body ={
                code : '10002',
                message: '用户已经存在',
                result: ''
            }
            return
        }


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

    async login(ctx, next){
        ctx.body = '用户登陆成功'
    }
}

module.exports = new UserController()