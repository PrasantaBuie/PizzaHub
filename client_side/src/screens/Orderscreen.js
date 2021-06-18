import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error'

import Loading from '../components/Loading'
export default function Orderscreen() {
    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrderReducer)
    const { orders, error, loading } = orderstate
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (
        <div>
            <h2>My Orders</h2>
        
            <div className='row justify-content-center m-2'>
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {orders && orders.map(order=>{
                    return <div className='col-md-8  m-2 p-1'style={{backgroundColor:'red',color:'white'}}>
                        <div className='myorder d-flex  p-3 table-responsive-sm'>
                            <div className='text-left w-100 m-1 mr-2' >
                                <h2 >Items</h2>
                                <hr/>
                                {order.orderItems.map(item=>{
                                    return <div>
                                        <h1>{item.name}[{item.varient}]*{item.quantity}={item.price}</h1>
                                    </div>
                                })}
                            </div>
                            <div className='text-left  m-1 mr-2'>
                            <h2 >Address</h2>
                            <hr/>
                            <p>Street: {order.shippingAddress.street}</p>
                            <p>City: {order.shippingAddress.city}</p>
                            <p>Country: {order.shippingAddress.country}</p>
                            <p>Pincode: {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-left w-100 m-1 mr-2'>
                                <h2 >Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                                <p>Status:{order.isDelivered ? (<h1>Delivered</h1>):(<h1>On The Way</h1>)}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )

}