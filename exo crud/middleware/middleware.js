

const pathOk = (req,res,next) => {
    if (req.path.includes("/search") || req.path.includes("/users")) {
        console.log("path ok")
        next()
    } else {
        console.log("path ko")
        res.status(404).json({ message: "Page not found"})
        
      }
}



const lateTime = (req,res,next) => {
    setTimeout(next, 2000)
}


const ageIsCorrect = (req,res,next) => {
    const {age} = req.body
    console.log("age" + age + "isInt" + Number.isInteger(age))    
    if (!age || !Number.isInteger(age) || age < 0) {
        res.status(400).json({message: "Age doit être un entier positif, non nul"})
    } else {
        next()
    }
}

module.exports = {pathOk, lateTime, ageIsCorrect}