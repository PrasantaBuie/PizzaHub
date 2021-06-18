import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { deleteUser, getAllUsers } from '../actions/userActions'

export default function Userslist() {
    const dispatch=useDispatch()
    const getusersstate=useSelector((state)=>state.getAllUsersReducer)
    const{loading,error,users}=getusersstate
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return(
        <div>
            <h2>Userslist</h2>
            {loading && <Loading/>}
        {error && <Error error='Something went wrong'/>}
        <table className='table table-stripped table-bordered'>
        <thead className='thead-dark'>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {users && users.map(user=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}} style={{cursor:'pointer'}}></i></td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    )
       
    
}