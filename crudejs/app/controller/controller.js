const UserDb  = require("../model/Users")
const controller = {}


controller.index =  async(req, res) => {
    const {page,limit} = req.query

    const users = await UserDb.findMany()
    res.render("index", {users: users})
         
 }


    
controller.search = async(req, res) => {
    const name = req.params.name
    console.log("name" +name)
    console.log("name" + name.toUpperCase())
    
    const User = await UserDb.findMany({
        where: {
            name: { contains: name }
        }
    });
    console.log("user" + User)
    res.render("user",User)

}

controller.show = (req, res) => {
    const id =parseInt(req.params.id)
    console.log("id" +id)
    const user= UserDb.findUnique({
        where: {    id: id
        }})
        .then (user => res.render("user",{user : user}))
        .catch(err => res.status(404).json({message: "User not found"})
    )
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
    
        UserDb.create( {data: {
                     name: name,
                    age :age
                 }})
        .then (user => {
            res.json(user)
        })
        .catch(err => 
            res.status(500).json({message: "User not created!"}))
    } else {
        res.status(400).json({message: "User not created!"})
    }
    
}

controller.update = async (req, res) => {
    let {name,age} = req.body
    let id = req.params.id

    console.log("dans update")
    age = parseInt(age)
    id = parseInt(id)
    if (name.length !=0  && Number.isInteger(age) && age > 0) {
        console.log("id" + id)
        const updatedUser = await UserDb.update({
            where : {id : id},
            data : {
                name : name, age : age},})
                const users = await UserDb.findMany()
                res.render("index", {users: users})
    }
}

 controller.destroy = async(req, res) => {
   
    
    const id =parseInt(req.params.id)
    console.log("id" +id)
    const user= UserDb.delete({
        where: {    id: id
        }})
        .then (user => res.json({message: "User deleted"}))
        .catch(err => res.status(404).json({message: "User not found"})
    )
        
   
}

module.exports = controller
