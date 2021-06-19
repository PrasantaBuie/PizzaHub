import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { getAllPizzas } from '../actions/pizzaActions'
import { deletePizza } from '../actions/pizzaActions'
import { NavLink } from 'react-router-dom'

export default function Pizzaslist() {
    const pizzastate = useSelector(state => state.getAllPizzasReducer) //get the state 
    const { pizzas, error, loading } = pizzastate
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return(
        <div>  {loading && <Loading/>}
        {error && <Error error='Something went wrong'/>}
            <table className='table table-bordered table-responsive-sm'>
            
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    
                </thead>
              
                <tbody>
                {pizzas && pizzas.map(pizza=>{
                    return <tr>
                        <td>{pizza.name}</td>
                        <td>
                      
                            Small : {pizza.prices[0]['small']}<br/>
                            Medium : {pizza.prices[0]['medium']}<br/>
                            Large : {pizza.prices[0]['large']}
                        </td>
                        <td>{pizza.category}</td>
                        <td>
                            <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                            <NavLink to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-1'></i></NavLink>
                        </td>
                        </tr>
                        
                })}
                </tbody>
            </table>
            
        </div>
    )
       
    
}