const {getUserInfo} = require('../service/user.service')

const {userFormateError, userAlreadyExisted} = require('../consitant/err.type')



const userValidator = async(ctx, next) => {

    const {username, password} = ctx.request.body
     //合法性
     if(!username || !password){
        console.error('用户名或密码为空', ctx.request.body);
        ctx.app.emit('error', {userFormateError}, ctx)
        return
    }  
    await next();
}

// const verifyUser = async(ctx, next) => {
//         const {username } = ctx.request.body
//      //合理性
//      //如果用户存在就不重复添加

//      getUserInfo({username}).then(result =>{
//         if(result){
//             console.log('GGGGGGGGGGGGG')
//             console.error('用户名已存在', ctx.request.body);
//             ctx.app.emit('error', {userAlreadyExisted}, ctx)
//             return
//         }
//     })

//          await next();
// }
const verifyUser = async (ctx, next) => {
    const { username } = ctx.request.body
  
    // if (await getUerInfo({ user_name })) {
    //   ctx.app.emit('error', userAlreadyExited, ctx)
    //   return
    // }

      const res = await getUserInfo({ username })
  
      if (res) {
        console.error('用户名已经存在', { username })
        ctx.app.emit('error', userAlreadyExisted, ctx)
        return
      }
    
  
    await next()
  }

    module.exports = {
        userValidator,
        verifyUser,
    }

