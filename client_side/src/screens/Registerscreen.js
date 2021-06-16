import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'


export default function Registerscreen() {
    const dispatch=useDispatch()
    const[name,setname]=useState('')
    const[email,setmail]=useState('')
    const[password,setpassword]=useState('')
    const[cpassword,setcpassword]=useState('')
    //const registerstate=useSelector(state=>state.registerUseReducer)
    //const { loading ,success,error}=registerstate
    const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
    function register(){
        if(password!=cpassword){
            alert('Password not matching')
        }
        else{
            //user data saved
            const user={
            name,
            email,
            password
            }
            console.log(user)//checking data
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className='row justify-content-center '>
                <div className='col-md-5 mt-4 text-start shadow-lg p-3 mb-5 bg-white rounded'>
                
                    <h2 className='text-center'>Register</h2>
                    {loading && (<Loading/>)}
                {success && (<Success success='User Registerted Successfully'/>)}
                {error  && (<Error error='something went wrong'/>)}
                    <div>
                        <input type='text' required placeholder='enter name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <input type='text' required placeholder='email' className='form-control' value={email} onChange={(e)=>{setmail(e.target.value)}} />
                        <input type='text' required placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input type='text' required placeholder='confirm-password' className='form-control' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                        <button className='btn mt-3 mb-3' onClick={register}>Register</button>
                        <br/>
                        <a style={{color:'black'}} href='/login'>Click here to login</a>
                    </div>
                </div>

            </div>
        </div>
    )

}