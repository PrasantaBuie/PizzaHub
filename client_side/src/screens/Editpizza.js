
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById,editPizza } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Editpizza({ match }) {
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getpizzabyidstate = useSelector((state) => state.getPizzasByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate

    const editpizzaidstate = useSelector((state) => state.editPizzaReducer)
    const { editsuccess, editerror, editloading } = editpizzaidstate
    const dispatch = useDispatch()
    function form_handler(e) {
        e.preventDefault()
        const editedpizza = {
            _id:match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
      dispatch(editPizza(editedpizza))

    }
    useEffect(() => {
        /*
        error!! because it will fetch the first pizza name and will never changed
        if(pizza){
            setname(pizza.name)
        }
        else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
        */
        if(pizza){
            if(pizza._id==match.params.pizzaid){
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            }
            else{
                dispatch(getPizzaById(match.params.pizzaid))
            }
        }
        else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
        
    }, [pizza,dispatch])
    return (
        <div className='text-center'>
            <h1>Edit pizza</h1>
            
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            {editerror && (<Error error='Something went wrong' />)}
            {editloading && (<Loading />)}
            {editsuccess && (<Success success='Pizza edited successfully'/>)}
            
            <form onSubmit={form_handler}>
                <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }}></input>
                <input className='form-control' type='text' placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }}></input>
                <button className='btn mt-3' type='submit'>Edit Pizza</button>
            </form>
        </div>
    )
}