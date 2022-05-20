const { DataTypes } = require('sequelize')
const seq = require('../db/seq.js')


//创建模型(model mr_user -> mr_users)
const User = seq.define('mr_user',{
    //id 会被sequelize自动创建管理
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',
    },
    password:{
        type: DataTypes.CHAR(64),
        allowNull:false,
        comment: '密码',
    },
})

const Agent = seq.define('mr_agent',{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    
})

// User.sync({force: true})

module.exports = User