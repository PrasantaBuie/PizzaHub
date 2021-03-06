const express=require('express')
const db =require('./db.js')
const Pizza=require('./models/pizzaModel')
const pizzasRoute=require('./routes/pizzasRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')
const app=express()
app.use(express.json())
app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
app.get("/",(req,res)=>{
    res.send('server is running')
})

const port=process.env.PORT || 8000
app.listen(port,()=>console.log(`server is running at port ${port}`)

)