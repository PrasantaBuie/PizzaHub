import React, {useState,useEfect}from 'react'
import { addPizza } from '../actions/pizzaActions'
import { useDispatch,useSelector } from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Addpizzas() {
    const[name,setname]=useState('')
    const[smallprice,setsmallprice]=useState('')
    const[mediumprice,setmediumprice]=useState('')
    const[largeprice,setlargeprice]=useState('')
    const[image,setimage]=useState('')
    const[description,setdescription]=useState('')
    const[category,setcategory]=useState('')
    const dispatch=useDispatch()
    const addpizzastate=useSelector((state)=>state.addPizzasReducer)
    const {success,error,loading}= addpizzastate
    function form_handler(e){
        e.preventDefault()
        const pizza={
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            }
        }
        console.log(pizza)
        dispatch(addPizza(pizza))
    }
    return(
        <div className='text-left'>
            <h2>Addpizzas</h2>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Pizza Added successfully'/>)}
            <form onSubmit={form_handler}>
                <input className='form-control' type='text' placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='small varient price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='medium varient price' value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='large varient price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></input>
                <input className='form-control' type='text' placeholder='image' value={image} onChange={(e)=>{setimage(e.target.value)}}></input>
                <button className='btn mt-3' type='submit'>Add Pizza</button>
            </form>
        </div>
    )
       
    
}