const { UserDb } = require("../model/Users")
const controller = {}


controller.index =  async(req, res) => {
    const {page,limit} = req.query
    console.log("page" + page + "limit" + limit)
    console.log("page" + parseInt(limit) + "limit" + parseInt(page))
    let UsersDb = await UserDb.findAll()

    if (parseInt(limit) >0 && parseInt(page) >0) {
        nbPages = Math.floor(UsersDb.length/limit)
        const UsersPage = UsersDb.slice((page-1)*limit, page*limit)
        res.send(UsersPage)
    } else {  
        console.log("UsersDb" + UsersDb)
        res.send(UsersDb)
    }     

    // CORRECTIF de l'exo
    // utiliser findandCountAll pour avoir le nombre total d'éléments
    // et le nombre de pages à afficher sans tout requêter

}
    
controller.search = async(req, res) => {
    const name = req.params.name
    console.log("name" +name)
    console.log("name" + name.toUpperCase())
    
    const User = await UserDb.findAll({where : {name : `%${name}%`}})
    
    console.log("user" + User)
    //Users.filter(user => user.name.toLocaleUpperCase().includes(name.toUpperCase()) ) 
    res.send(User)

}

controller.show = async(req, res) => {
    const id = req.params.id
    console.log("id" +id)
    const user = await UserDb.findByPk(parseInt(id))
    if (user) { res.json(user)}
    else {res.status(404).json({message: "User not found"})}


}




controller.create = async(req, res) => {
    let {name,age} = req.body
    //const idNumber = Users.reduce((acc, user) => acc <= user.id ? user.id+1 : acc, 0)
    //const user = {name,age,id:idNumber}    

    age = parseInt(age)
    console.log("nom"+ name)
    console.log("len" + name.length)
    console.log( "is Int "+ Number.isInteger(age))
    console.log( " >0"+ age>0)
    
    
    if (name.length !=0 && Number.isInteger(age) && age > 0) { 
        await UserDb.create({name:name, age:age})
        res.status(201).json({user, message: "User created succesfully!"})
    } else {
        res.status(400).json({message: "User not created!"})
    }
    
}

controller.update = async (req, res) => {
    let {id,name,age} = req.body
    
    age = parseInt(age)
    //const user = {name,age,id:parseInt(id)}
    userExist = await UserDb.findOne({where: {id:id}})
   
    if (userExist && name.length !=0  && Number.isInteger(age) && age > 0) {
        await UserDb.update({name:name, age:age}, {where: {id:id}})
        res.status(200).json({message: "User updated succesfully!"})
    }
    else {
        res.status(404).json({message: "User not found"})
    }
}

 controller.destroy = async(req, res) => {
    const {id,name,age} = req.body
    const user = {name,age,id:parseInt(id)}
    //userExist = Users.find(user => user.id == id)
    userExist = await UserDb.findOne({where: {id:id}})
    
    if (userExist) {
        UserDb.destroy({where: {id:id}})
        res.status(200).json({user, message: "User deleted succesfully!"})
    }
    else {
        res.status(404).json({message: "User not found"})
    }
}

module.exports = controller
