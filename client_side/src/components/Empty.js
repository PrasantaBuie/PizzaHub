import React from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
 
AOS.init()
export default function () {
    return (
        <div data-aos='fade-down' >
            <img className='img-fluid' src='https://www.gokofo.com/resources/images/no-cart-items.jpg'/>
            <h2 style={{fontSize:'2rem'}}>No items in your cart.</h2>
            <h1>Your favourite items are just a click away.</h1>
            <NavLink className='btn' to='/'>Start Eating Pizzas</NavLink>
        </div>
    )
}