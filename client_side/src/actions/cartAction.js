//add to cart
export const addToCart=(pizza,quantity,varient)=>(dispatch,getState)=>{

// cartItem is for payload
    var cartItem={
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:Number(quantity),
        prices:pizza.prices,
        price:pizza.prices[0][varient]*quantity
    }
    //overflow
    if(cartItem.quantity>10){
        alert('You cannot add more than 10 items')
    }

    
    else{
        // if cart quantity is less than 1 or 0 then delete it
        if(cartItem.quantity<1){
            dispatch({type:'DELETE FROM CART',payload:pizza})
    
        }
        else{
            dispatch({type:'ADD TO CART',payload:cartItem})
        }
        
    }
    
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))//local storage for catching the state(after refreshing the browser)
}
//delete from cart
export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
    dispatch({type:'DELETE FROM CART',payload:pizza})
    const cartItems=getState().cartReducer.cartItems 
    localStorage.setItem('cartItems',JSON.stringify(cartItems)) //local storage for catching the state(after refreshing the browser)
   

}