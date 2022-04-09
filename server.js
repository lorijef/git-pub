const express = require("express")
const app = express()
const PORT = 3000
const drinks = require("./models/drinks.js")

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

//app.get('/drinks/:id', (req, res) => {
    //res.send(req.params.drinks)
//})
app.get("/drinks/", (req, res) => {
    res.send({allDrinks: drinks});
  });

app.listen(PORT, () => {
    console.log("Listening to PORT...")
})