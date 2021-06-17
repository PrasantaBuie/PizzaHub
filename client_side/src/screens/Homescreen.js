import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Pizza from '../components/Pizza'
import Filter from '../components/Filter'

export default function Homescreen() {
    const pizzastate = useSelector(state => state.getAllPizzasReducer) //get the state 
    const { pizzas, error, loading } = pizzastate
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        //if loading then show loading,if error then show the error elese show all the pizzas to the home screen
        <div>
            <Filter/>
            <div className="row justify-content-center">
                
                {loading ? (<Loading/>) : error ? (<Error error='Something went wrong'/>) : pizzas.map(pizza => {
                    return <div className="col-md-4" key={pizza._id}>
                        <div>
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                })}



            </div>
        </div>
    )
}