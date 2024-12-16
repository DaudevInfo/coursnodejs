const express = require("express")
const app = express()
app.use( express.json() )

app.listen(3000, () => {
    console.log("Server running on port 3000")
  })


  // Exercice 1 
app.get('/hello', (req, res) => {
    res.send("Bonjour, bienvenue dans l'API")
  })

  //Exercice 2 avec path param
  app.get('/user/:name', (req, res) => {  
    res.send("Bonjour, "+ req.params.name )
  })

  //Exercice 3 avec query param
  app.get('/search', (req, res) => {
    
    if (req.query === undefined) {
        res.send("Aucune recherche n'a été effectuée")
    } else {
        res.send("Recherche: "+ req.query)
    }
  })

    //Exercice 4 avec path param
  app.get('/product/:category/:id', (req, res) => {  
    res.send(`produit ID ${req.params.category} dans la catégorie ${req.params.id}`)
  })


// Exercice 5
  app.get('/api/info', (req, res) => {
    const response = {
      message : "Bienvenue dans l'API",
      status : "sucess"
    }
    res.json(response)
  })

  // Exercice 6
  app.get('/welcome', (req, res) => {
    const response = " <h1>Bienvenue sur notre site</h1> <p>Explorez le</p>"
    
    res.send(response)
  })

  // Exercice 7
  app.get('/profil/:username', (req, res) => {
    const age = req.query.age
    if (age === undefined) {
        res.send(`Profil de ${req.params.username} : âge non spécifié`)

    } else {
        res.send(`Profil de ${req.params.username} : âge ${req.query.age}`)
    }
})

// Exercice 8
const users = [ {firstname : "John", lastname : "Travolta", age : 25},
               {firstname : "Jane", lastname : "Fonda", age : 78}]

app.get('/api/users', (req, res) => {

    const username = req.query.name
    const user = users.find(elt => elt.firstname === username)

    console.log(users)
    console.log ("username :"+ username)
    console.log("Résultat du find dans users :" + user)

    if (!user) {
        res.json("Aucun utilisateur trouvé")
    } else {
        
        console.log(user)
        res.json({user})
    }
})
