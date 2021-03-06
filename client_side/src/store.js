import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer ,addPizzasReducer,getPizzasByIdReducer,editPizzaReducer} from './reducers/pizzaReducers'
import {cartReducer} from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer ,getAllUsersReducer} from './reducers/userReducer'
import { placeOrderReducer,getUserOrderReducer ,getAllOrderReducer} from './reducers/orderReducer'
const finalReduser=combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addPizzasReducer:addPizzasReducer,
    getPizzasByIdReducer:getPizzasByIdReducer,
    editPizzaReducer:editPizzaReducer,
    getAllOrderReducer:getAllOrderReducer,
    getAllUsersReducer:getAllUsersReducer
})
const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
//checking for local storage
const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer :{
        currentUser:currentUser
    }
    
}
const composeEnhancers=composeWithDevTools({})
const store=createStore(finalReduser,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store