const path = require('path')
const { createProject,getProjectInfo} = require("../service/project.service")

const{fileUploadError} = require('../consitant/err.type')
class ProjectController{
    async Createlist(ctx, next){
        //1.获取数据
        //  console.log(ctx.request.files.file)
        //  const {projectname, canvas, sta} = ctx.request.body
        const {file} = ctx.request.files
        console.log(12121312)
        if(file){
           ctx.body = {
                code:0,
                message:'商品图片上传成功', 
                result: {
                    goods_img: path.basename(file.path)
                },
            }
        }else{
            return ctx.app.emit('error',fileUploadError,ctx)
        }


        // //2.操作数据库
        // const res = await createProject(projectname, canvas,sta)
        // //3.返回结果
        

        }


    async Getlist(ctx, next){
       
        const res = await getProjectInfo(id,projectname,canvas,sta)
        ctx.body = {
            code : 0,
            message: '获取项目成功',
            result: {
                id: res.id,
                projectname: res.projectname,
                canvas: res.canvas,
                sta: res.sta,
            },
        }
    }
    // async project(ctx, next){
    //     const {id, projectname, a_id,} = ctx.request.body
        
    //     const res = await creatProject()

    // }

    // async login(ctx, next){
    //     const {username} = ctx.request.body
        

    //     //1.获取用户信息：token的payload中记录id，username
    //     try{
    //         //从返回结果对象中剔除掉password字段，将剩下的属性放到resUser对象
    //         const {password, ...res}= await getUserInfo({username})

    //         ctx.body = {
    //             code: 0,
    //             message: '用户登陆成功',
    //             result: {
    //                 token:jwt.sign(res, JWT_SECRET,{expiresIn: '1d'}),
    //             },
    //         }
    //     }catch(err){
    //         console.error('用户登陆失败',err)
    //     }
    // }
}

module.exports = new ProjectController()