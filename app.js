const serverConfig = require('./backend/configs/server.config')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbConfig = require('./backend/configs/db.config')
const Movie = require('./backend/models/movie.model')
const Theatre = require('./backend/models/theatre.model')
const dotenv = require('dotenv')

//Initializing express

const app = express();

//using the bodyParser middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//DB connection initiating 

mongoose.connect(dbConfig.DB_URL,{useNewUrlParser:true}).then(()=>{

    console.log('connect to Mongo DB')


//mongoose.connect(process.env.DB_URI,{useNewUrlParser:true}).then((data) =>{
  //  console.log(`mongo db database is connected with the host : ${data.connection.host}`)
   // init();


},err =>{

    console.log("Error:",err.message)

})

//this functio will initialize the state of the movie booking database

//sync function init(){

    
   // await Movie.collection.drop();
   // try{
  //      console.log("Movies inserted in this db")


 //   }catch(e){
 //       console.error(e.message)
 //   }



//}


//importing routes

require('./backend/routes/movie.routes')(app)

require('./backend/routes/theatre.routes')(app)


app.listen(serverConfig.PORT,()=>{
    console.log(`application started on the port :${serverConfig.PORT}`)
})



