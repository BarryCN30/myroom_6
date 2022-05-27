const { DataTypes } = require('sequelize')
const seq = require('../db/seq.js')


//创建模型(model mr_user -> mr_users)
const Project = seq.define('mr_pro',{
    //id 会被sequelize自动创建管理
    projectname:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',
    },
    canvas:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        comment:'画布',
    },
    sta:{
        type: DataTypes.TINYINT(1),
        allowNull: false,
        unique: false,
        comment:'用户状态',
    },

})



 //User.sync({force: true})

module.exports = Project