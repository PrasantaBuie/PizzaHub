
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions'
export default function ({ error }) {
    const[searchkey,setsearchkey]=useState('')
    const[category,setcategory]=useState('all')
    const dispatch=useDispatch()
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className='col-md-3 w-100 '>
                    <input onChange={(e)=>{setsearchkey(e.target.value)}} value={searchkey} type='text' className='from-control w-100 ' placeholder='Search pizzas'/>
                </div>
                <div className='col-md-3 w-100'>
                    <select className='form-control w-100 mt-1'onChange={(e)=>{setcategory(e.target.value)}} value={category} >
                        <option value='all'>All</option>
                        <option value='veg'>Veg</option>
                        <option value='nonveg'>Non-Veg</option>
                    </select>
                </div>
                <div className='col-md-3 w-100 mt-1'>
                    <button className='btn w-100' onClick={()=>{dispatch(filterPizzas(searchkey,category))}}>Filter</button>
                </div>
            </div>
        </div>
    )
}