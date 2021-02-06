const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/users');


app.use(cors());
app.use(bodyparser.json())
app.use('/api',userRoute);


// Connecting to mongoDB
mongoose.connect("mongodb+srv://raviteja:vishnu123$@sample-cluster.dquap.mongodb.net/sample_db?retryWrites=true&w=majority",{useUnifiedTopology: true,useNewUrlParser:true});
const connection = mongoose.connection;
connection.once("open",function(){
    console.log("Mongo DB connection successfully established");
})




app.listen(3000,(req,res)=>{
    console.log("Server port 3000 is listening");
})