import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Userslist from './Userslist'
import Orderslist from './Orderslist'
import Pizzaslist from './Pizzaslist'
import Addpizzas from './Addpizzas'
import { Route, Switch, NavLink } from "react-router-dom"
import Editpizza from './Editpizza'

export default function Adminscreen() {
    const dispatch = useDispatch()

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    useEffect(() => {
        if(currentUser==null)
        {
            window.location.href = '/login'
        }
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div className='text-center'>
            <div className='row justify-content-center p-3'>
                <div className='col-md-10 '>
                    <h2>Admin Panel</h2>
                    <ul className='adminfunction'>
                        <li><NavLink activeClassName='manu_active' to="/admin/userslist">Users List</NavLink></li>
                        <li><NavLink activeClassName='manu_active' to="/admin/pizzaslist">Pizzas List</NavLink></li>
                        <li><NavLink activeClassName='manu_active' to="/admin/addpizzas"> Add New Pizza</NavLink></li>
                        <li><NavLink activeClassName='manu_active' to="/admin/orderslist">Orders List</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path='/admin/userslist' component={Userslist}/>
                        <Route path='/admin/orderslist' component={Orderslist}/>
                        <Route path='/admin/pizzaslist' component={Pizzaslist}/>
                        <Route path='/admin/addpizzas' component={Addpizzas}/>
                        <Route path='/admin/editpizza/:pizzaid' component={Editpizza}/>
                    </Switch>
                </div>

            </div>

        </div>
    )
}