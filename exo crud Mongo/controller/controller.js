const UserDb  = require("../model/Users")
const controller = {}


controller.index =  async(req, res) => {
    const {page,limit} = req.query
    console.log("page" + page + "limit" + limit)
    console.log("page" + parseInt(limit) + "limit" + parseInt(page))
    let UsersDb = await UserDb.find()


    if (parseInt(limit) >0 && parseInt(page) >0) {
        nbPages = Math.floor(UsersDb.length/limit)
        const UsersPage = UsersDb.slice((page-1)*limit, page*limit)
        res.send(UsersPage)
    } else {  
        console.log("UsersDb" + UsersDb)
        res.send(UsersDb)
    }     
 }
    
controller.search = async(req, res) => {
    const name = req.params.name
    console.log("name" +name)
    console.log("name" + name.toUpperCase())
    
    const User = await UserDb.find({name : `%${name}%`})
    
    console.log("user" + User)
    res.send(User)

}

controller.show = (req, res) => {
       const id =req.params.id
    
  
    const user= UserDb.findById(id).then (user => res.json(user)).catch(err => res.status(404).json({message: "User not found"}))
   


}




controller.create = (req, res) => {
    let {name,age} = req.body
    
    age = parseInt(age)
    console.log("nom"+ name)
    console.log("Age" + age)
    console.log("len" + name.length)
    console.log( "is Int "+ Number.isInteger(age))
    console.log( " >0"+ (age>0))
    console.log("userDB"+ UserDb)
    
    
    if (name.length !=0 && Number.isInteger(age) && age > 0) { 
    
        UserDb.create({name, age})
        .then (user => {
            res.json(user)
        })
        .catch(err => 
            res.status(400).json({message: "User not created!"}))
    } else {
        res.status(400).json({message: "User not created!"})
    }
    
}

controller.update = async (req, res) => {
    let {id,name,age} = req.body
    
    age = parseInt(age)
  
    const userExist = UserDb.findById(id).then (user => res.json(user)).catch(err => res.status(404).json({message: "User not found"}))
   
    if (userExist && name.length !=0  && Number.isInteger(age) && age > 0) {

        UserDb.update({_id:id}, {name, age},)
    }
}

 controller.destroy = async(req, res) => {
    const {id,name,age} = req.body
    const userExist = UserDb.findById(id).then (user => res.json(user)).catch(err => res.status(404).json({message: "User not found"}))
    
    if (userExist) {
        UserDb.deleteOne(id)
    }
    else {
        res.status(404).json({message: "User not found"})
    }
}

module.exports = controller
