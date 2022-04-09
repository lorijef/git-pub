const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.set("Welcome to the Gitpub App!")
})




app.listen(PORT, () => {
    console.log("Listening to PORT...")
})