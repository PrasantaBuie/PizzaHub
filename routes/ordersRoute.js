const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router=express.Router()
const stripe=require('stripe')("sk_test_51J2oP4SEbQGx98vFAXY7cTTh9bXRAYIwvat1G4kVaBT2iOjh1Z1G37ovJH8TrbadzzL1rsLiGsAycFVjjFApEedF00a8KyCFWT")
router.post("/placeorder",async(req,res)=>{
    const{token,subtotal,currentUser,cartItems}=req.body
try {
    const customer=await stripe.customers.create({
        email:token.email,
        source:token.id
    })
    const payment=await stripe.charges.create({
        amount:subtotal*100,
        currency:'inr',
        customer:customer.id,
        receipt_email:token.email
    },{
        idempotencyKey:uuidv4()
    })
    if(payment){
        res.send('Payment successfully')
    }
    else{
        res.send('Payment failed')
    }
} catch (error) {
    return res.status(400).json({message:'Something went wrong'+error})
    console.log(error)
}
})
module.exports=router
