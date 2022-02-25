const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/movie', (req, res) => {
    res.render("movie")
});

app.listen(3000)