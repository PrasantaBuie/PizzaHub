const { response } = require('express')
const express = require('express')
const router=express.Router()
const User=require('../models/userModel')
router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    const newUser=new User({name,email,password})
    try {
        newUser.save()
        res.send("User Registered successfully")
        
    } catch (error) {
        return res.status(400).json({message:error})
    }
});

//login route


router.post("/login",async (req,res)=>{
    const{email,password}=req.body
    try{
        const user=await User.find({email,password})
        console.log(user)
        //user is already exist
        if(user.length>0){
            //res.send("user logged in successfully")
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser)
        }
        else{
            return res.status(400).json({message:'User login failed'})
        }
    }
    catch(error){
        return res.status(400).json({message:'Something went wrong'})
    }
})
router.get("/getallusers", async(req, res) => {
    try {users = await User.find({});
      res.send(users);
    } catch (error) {
      return res.status(400).json({ massage: error });
      //console.log(error);
    }
  });
  router.post('/deleteuser',async(req,res)=>{
    const userid=req.body.userid
    try{
      await User.findOneAndDelete({_id:userid})
      res.send('user deleted successfully')
    }catch(error){
      return res.status(400).json({ massage: error })
    }
    
  })
module.exports = router