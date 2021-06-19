import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
 

import Loading from '../components/Loading'
AOS.init()
export default function Orderscreen() {
    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrderReducer)
    const { orders, error, loading } = orderstate
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (
      <>
        <div>
        <h2 style={{ fontSize: "30px" }}>My Orders</h2>
        <hr />
        <div className="row justify-content-center m-2 p-3">
          {loading && <Loading />}
          {error && <Error error="Something Went Wrong" />}
          {orders &&
            orders.map((order) => {
              return (
                <div className="col-md-8 m-2 p-1" data-aos="zoom-in" style={{backgroundColor:'red',color:'white'}}>
                  <div className="myorder flex-container p-3 table-responsive-sm">
                    {/* display items */}
                    <div className="text-left w-100 m-1 mr-2">
                      <h2>Items</h2><hr/>
                      {order.orderItems.map((item) => {
                        return (
                          <div>
                            <p>
                              {item.name} [{item.varient}] * {item.quantity} = 
                              {item.price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {/* display address */}
                    <div className="text-left w-100 m-1 mr-2">
                      <h2>Address</h2><hr/>
                      <p>Street : {order.shippingAddress.street}</p>
                      <p>City : {order.shippingAddress.city}</p>
                      <p>Country : {order.shippingAddress.country}</p>
                      <p>Pincode : {order.shippingAddress.pincode}</p>
                    </div>
                    {/* Order Status */}
                    <div className="text-left w-100 m-1 mr-2">
                      <h2>Status</h2><hr/>
                      <p>Order Amount : {order.orderAmount}</p>
                      <p>Order Id : {order._id}</p>
                      <p>Transaction Id : {order.transactionId}</p>
                      <p>Date : {order.createdAt.substring(0,10)}</p>
                      <p>Delivery Status : {order.isDelivered?(<p>Delivered</p>):(<p>On The Way...</p>)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
      </>
    );
  }