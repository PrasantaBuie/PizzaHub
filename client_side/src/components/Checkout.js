import React from 'react'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import StripeCheckout from 'react-stripe-checkout'
export default function Checkout({subtotal}){
    const dispatch=useDispatch()
    function tokenHandler(token){
        console.log(token)
        dispatch(placeOrder(token,subtotal))
    }
    return(
        <div>
            {/* amount always return value in paisa thats why we have to multiply it by 100 */}
            <StripeCheckout amount={subtotal*100} shippingAddress token={tokenHandler} currency='INR' stripeKey='pk_test_51J2oP4SEbQGx98vF4yew5wdXXMqmfsVidDdHOS6bN3ckXjVlIQZzJqTKen3s453gjRB9aIQMSFBvbr2zgwfhsaQI00HNFsKWna'>
                <button className='btn'> Pay Now</button>
            </StripeCheckout>
        </div>
    )
}