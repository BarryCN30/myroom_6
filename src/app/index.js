const Koa =require('koa')
const path = require('path')

const koaBody = require('koa-body')
const errHandler = require('./errHandler')

const router = require('../router')

const app = new Koa()

app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir:path.join(__dirname,'../upload'),
        keepExtensions: true,
},
})
)
app.use(router.routes())
app.use(router.allowedMethods())

//统一错误处理
app.on('error', errHandler)





module.exports = app