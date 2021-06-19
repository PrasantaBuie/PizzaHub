import React from 'react'
import { addToCart, deleteFromCart } from '../actions/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import Checkout from '../components/Checkout'
import { getUserOrders } from '../actions/orderActions'
import { useEffect } from 'react'
import Empty from '../components/Empty'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
 
AOS.init()
export default function Cartscreen() {
    const dispatch=useDispatch()
   
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    const cartstate = useSelector(state => state.cartReducer)
    console.log(cartstate)
    const cartItems = cartstate.cartItems
    const subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    return (
        
        <div>
            {subtotal ? (
            <div className='row justify-content-center p-2' data-aos='fade-down'>
                <div className='col-md-6'>
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                    {cartItems.map(item => {
                return <div className="d-flex justify-content-start">
                    <hr/>
                            <div className='text-start m-1 w-100'>
                                {/*in bootstrap5 text-left & text-right are removed to text-start and text-end */}
                                <h1>{item.name}[{item.varient}]</h1>
                                <h1 >Price:{item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                                <h1 style={{ display: 'inline' }}>Quantity:</h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity +1,item.varient))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity -1,item.varient))}}></i>
                                <hr/>
                            </div>
                            {/* images */ }
                            <div className='m-3 w-100'>
                                <img src={item.image} style={{height:'80px', width:'80px'}}/>
                               
                            </div>
                            {/* delete icon */}
                            <div className='mt-5 w-100'>
                            <i className="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(deleteFromCart(item))}></i>
                            </div>
                            
                        </div>
                        
                    })}
                </div>
                <div className='col-md-3 text-end'>
                    <h2>SubTotal: {subtotal}/-</h2>
                    <Checkout subtotal={subtotal}/>
                    
                </div>
            </div>):(<Empty/>)}
            <Footer/>
        </div>
    )
}