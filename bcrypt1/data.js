let user={id:101,name:"Santosh",email:"reddy@mail.com",pw:"12345",crdno:"345676589876"}

const bcrypt = require("bcryptjs")

let x=bcrypt.genSaltSync(10)

let new_pw = bcrypt.hashSync(user.pw,x)

let new_crdno = bcrypt.hashSync(user.crdno,x)

//  console.log(new_crdno)

// console.log(new_pw)

user= {...user,pw:new_pw,crdno:new_crdno}
console.log(user)


let flag = bcrypt.compareSync('123456', user.pw)

flag ? console.log("Login Success") : console.log("Login Failure")
console.log(flag)