const express = require("express")
const app = express()
const port = process.env.PORT || 3001
app.listen(port, function () {
    console.log(`${port}`)
})
require("dotenv").config()
app.use(express.static("public"))
app.use(express.json())
let MongoClient = require("mongodb").MongoClient
const uri = process.env.uri_key;
let clients = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let portofoliodb

clients.connect(error => {
    if (error) {
        console.error(error)
    }

    portofoliodb = clients.db("portofoliodb")

})

// API endpoint where it is possible to see the messages sent from the contact form
app.get("/recievedmessages", function (request, response) {
    portofoliodb.collection("messages").find({}).toArray(function (error, element) {
        if (error) {
            console.error(error)
        }
        response.json(element)
    })

})



//take the message from client side and put them in the visitors database
app.post("/messages", function (request, response) {
    let data = request.body
    portofoliodb.collection("messages").insertOne(data)
    response.end()
})