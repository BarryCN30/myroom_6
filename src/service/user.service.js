const User = require('../model/user.model')



class UserService{

    async getUserInfo({id, username,password}){
        const whereOpt = {}

        id && Object.assign(whereOpt,{ id }),
        username && Object.assign(whereOpt,{ username })
        password && Object.assign(whereOpt,{password})

        const res = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: whereOpt
        })

        return res ? res.dataValues : null
    }
   
    async createUser(username, password){
        //todo:写入数据库
        const res = await User.create({username, password })
        // console.log(res)

        return res.dataValues
        // User.create({
        //     username: username,
        //     password: password
        // })
    }
    
}
   

module.exports = new UserService()