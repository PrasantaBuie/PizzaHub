import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const dispatch=useDispatch()
    const cartState = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-4 bg-white rounded">
                <a className="navbar-brand" href="/"><img src='https://www.freeiconspng.com/uploads/pizza-icon-26.jpg' className='navicon img-fluid'/>PizzaHub</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {currentUser ? (<div className="dropdown mt-2">
                            <a className="dropdown-toggle" style={{color:'black'}} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentUser.name}
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a></li>
                            </ul>
                        </div>) : (<li className="nav-item">
                            <a className="nav-link" href="/login"><i class="fas fa-user"></i> Login </a>
                        </li>)}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i class="fas fa-shopping-cart"></i> Cart {cartState.cartItems.length}</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}