// Dependencies 
const express = require('express') ;
const app = express() ;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

// parse application/json
app.use(bodyParser.json())

// Requring model 
const  {User, extendUser}  = require('./models/user')
const  Contact  = require('./models/contact')

//  User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
//  User.sync({ force: true }) - This creates the table, dropping it first if it already existed
//  User.sync({ alter: true }) -This performs the necessary changes in the table to make it match the model.


// To create the model in database using Functionbased model 
// User.sync()  
// To create the model in database using classbased model 
// extendUser.sync()
// To create the model in database using classbased model 
// Contact.sync()

app.get('/', function (req, res) {
  res.send('Hello World') 
})
app.post('/', function (req, res) {
  res.send(req.body)
})

app.listen(3000, (err) => {
  if (err) throw err ;
  console.log(' app is listening successfully on port 3000')
})