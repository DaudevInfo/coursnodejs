const { Users } = require("../model/Users")
const controller = {}




controller.index =  (req, res) => {
    const {page,limit} = req.query
    console.log("page" + page + "limit" + limit)
    console.log("page" + parseInt(limit) + "limit" + parseInt(page))

    if (parseInt(limit) >0 && parseInt(page) >0) {
        nbPages = Math.floor(Users.length/limit)
        const UsersPage = Users.slice((page-1)*limit, page*limit)
        res.send(UsersPage)
    } else {  
        res.send(Users)
    }     
 }
    
controller.search = (req, res) => {
    const name = req.params.name
    console.log("name" +name)
    console.log("name" + name.toUpperCase())
    
    const User = Users.filter(user => user.name.toLocaleUpperCase().includes(name.toUpperCase()) ) 
    res.send(User)

}

controller.show = (req, res) => {
    const id = req.params.id
    console.log("id" +id)
    const User = Users.find(user => user.id == id)
    res.send(User)

}




controller.create = (req, res) => {
    let {name,age} = req.body
    const idNumber = Users.reduce((acc, user) => acc <= user.id ? user.id+1 : acc, 0)
    const user = {name,age,id:idNumber}    

    age = parseInt(age)
    console.log("nom"+ name)
    console.log("len" + name.length)
    console.log( "is Int "+ Number.isInteger(age))
    console.log( " >0"+ age>0)
    
    
    if (name.length !=0 && Number.isInteger(age) && age > 0) { 
        Users.push(user)
        res.status(201).json({user, message: "User created succesfully!"})
    } else {
        res.status(400).json({message: "User not created!"})
    }
    
}

controller.update = (req, res) => {
    let {id,name,age} = req.body
    
    age = parseInt(age)
    const user = {name,age,id:parseInt(id)}
    userExist = Users.find(user => user.id == id)
   
    if (userExist && name.length !=0  && Number.isInteger(age) && age > 0) {
        Users = Users.filter(user => user.id != id)
        Users.push(user)
        res.status(200).json({user, message: "User updated succesfully!"})
    }
    else {
        res.status(404).json({message: "User not found"})
    }
}

 controller.destroy = (req, res) => {
    const {id,name,age} = req.body
    const user = {name,age,id:parseInt(id)}
    userExist = Users.find(user => user.id == id)
   
    
    if (userExist) {
        Users = Users.filter(user => user.id != id)
        res.status(200).json({user, message: "User deleted succesfully!"})
    }
    else {
        res.status(404).json({message: "User not found"})
    }
}

module.exports = controller
