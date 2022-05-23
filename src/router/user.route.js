const Router = require('koa-router')

const {userValidator, verifyUser} = require('../middleware/user.middleware')

const {register, login} = require('../controller/user.controller')

const router = new Router({prefix:'/users'})

//注册接口
router.post('/register', userValidator, verifyUser, register)
// router.post('/register', register)

//Get /users/拼接
// router.get('/', (ctx,next)=>{
//     ctx.body = 'hello users'
// })

//登陆接口
router.post('/login', login)

module.exports = router