export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type)
    {
        case 'ADD TO CART':
            //checks wheather the item is already exist in the cart
            const alreadyExist=state.cartItems.find(item=>item._id==action.payload._id)
            //if exist then update
            if(alreadyExist){
                return{
                    ...state,
                    cartItems:state.cartItems.map(item=>item._id==action.payload._id ? action.payload:item)
                }
            }
            //else init
            else{
            return{
            
            ...state,
            cartItems:[...state.cartItems,action.payload]
         
        }
    }
    case 'DELETE FROM CART': return{
        ...state,
        cartItems:state.cartItems.filter(item=>item._id!==action.payload._id)
    }
        default:return state
    }

}
    
