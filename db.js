const mongoose=require('mongoose')
//exact url is not given for security purpose
var mongoUrl="mongodb+srv://prashant:pb007@cluster0.ov7xv.mongodb.net/mern-pizza"
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection //connection....
db.on('connected',()=>{
    console.log("MongoDb connection successfull") //successfully connected
})
db.on('error',()=>{
    console.log("Connection failed") //connection failed
    //console.log(error)
})
module.exports=mongoose