const express = require ("express")
const app = express()
const port = 3000

//const bodyParser = require('bory-parser')
const routes = require('./routes.js')
routes(app)


app.use(express.static('./app/public'))
app.use(express.static('public'))

//app.use(bodyParser.urlencoded({extended:true}))
//app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.listen(port, function() {
    console.log('funcionou')
})
