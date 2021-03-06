import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
export default function Loginscreen(){
    const loginstate=useSelector((state) => state.loginUserReducer);
    const { error, loading} = loginstate;
    const[name,setname]=useState('')
    const[email,setmail]=useState('')
    const[password,setpassword]=useState('')
    const dispatch=useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    },[])
    function login(){
        const user={email,password}
        dispatch(loginUser(user))
        
        
    }
    return(
        <>
        <div className='p-3'>
            <div className='row justify-content-center p-2'>
       
                    
                <div className='col-md-5 mt-4 text-start shadow-lg p-3 mb-5 bg-white rounded'>
                    <h2 className='text-center'>Login</h2>
                    {loading && <Loading/>}
                    {error && <Error error='Invalid Credentials'/>}
                    <div>
                      
                        <input type='text' required placeholder='email' className='form-control' value={email} onChange={(e)=>{setmail(e.target.value)}} />
                        <input type='password' required placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        
                        <button className='btn mt-3 mb-3' onClick={login}>Login</button>
                        <br/>
                        <p>First time in PizzaHub?<NavLink to='/register'> Register</NavLink></p>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
        
}