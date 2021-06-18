import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
import Filter from '../components/Filter'
import { deliverOrder, getAllOrders } from '../actions/orderActions'
export default function Orderslist() {
    const dispatch=useDispatch()
    const getordersstate=useSelector((state)=>state.getAllOrderReducer)
    const{loading,error,orders}=getordersstate
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    return(
        <div>
            {loading && <Loading/>}
        {error && <Error error='Something went wrong'/>}
        <table className='table table-stripped table-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>Order Id</th>
                    <th>Email</th>
                    <th>User Id</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {orders && orders.map(order=>{
                    return <tr>
                        <td>{order._id}</td>
                        <td>{order.email}</td>
                        <td>{order.userid}</td>
                        <td>{order.orderAmount}/-</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>
                            {order.isDelivered ? (<Success success='Delivered' />):(<button className='btn' style={{fontSize:'0.8rem'}} onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    )
       
    
}