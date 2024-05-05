import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import {Link,useNavigate} from 'react-router-dom'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify';



const ForgotPassword = () => {
const [email,setEmail]=useState('')
const navigate=useNavigate()
const onSubmitHandler=async(e)=>{
  e.preventDefault()
  try{
    const auth=getAuth()
    await sendPasswordResetEmail(auth,email);
    toast.success("Email was sent");
    navigate("/signin");

  }catch(error){
    toast.error("Something went wrong")
  }
}


  return (
    <Layout>
    <div className ="container">
        <h1>Reset Password</h1>
        <form onSubmit={onSubmitHandler}>
  <div className="container mb-3">
    <label htmlFor="email" className='form-label'>Email:</label>
    <input type="email" 
    id="email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    name="email"
     required />
  </div>
  <div className='d-flex justify-content-between'>
  <button type="submit" className='btn btn-primary'>Reset</button>
<Link to="/signin">Sign In</Link>
  </div>

</form>
</div>
    </Layout>
  )
}

export default ForgotPassword