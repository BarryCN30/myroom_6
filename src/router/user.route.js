const Router = require('koa-router')

const router = new Router({prefix:'/users'})

//Get /users/拼接
router.get('/', (ctx,next)=>{
    ctx.body = 'hello users'
})

module.exports = router