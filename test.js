const readline = require('readline')

function createInput(msg) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise(function(resolve, reject) {
    rl.question(`请输入${msg}: `, data => {
      rl.close()
      resolve(data)
    })
  })
}

Promise.resolve()
  .then(() => {
    return createInput('用户名').then(username => ({ username }))
  })
  .then(userInfo => {
    return createInput('密码').then(password => ({
      ...userInfo,
      password,
    }))
  })
  .then(userInfo => {
    return createInput('邮箱').then(email => ({
      ...userInfo,
      email,
    }))
  })
  .then(userInfo => {
    console.log(userInfo)
  })