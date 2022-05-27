const Project = require('../model/project.model')



class ProjectService{

    async getProjectInfo({}){
        const res = await User.find({
            attributes: ['id', 'projectname', 'canvas','sta'],
        })

        return res ? res.dataValues : null
    }
   
    async createProject(projectname, canvas, sta){
        //todo:写入数据库
        Project.create({projectname, canvas, sta})

        return res.dataValues
        // User.create({
        //     username: username,
        //     password: password
        // })
    }
    
}
   

module.exports = new ProjectService()