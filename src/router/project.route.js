const Router = require('koa-router')
const router = new Router({prefix:'/projects'})

const {Createlist,Getlist} = require('../controller/project.controller')

router.post('/createlist',Createlist)

router.post('/getlist',Getlist)

module.exports = router