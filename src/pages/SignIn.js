import React,{useState} from 'react';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {Link,useNavigate} from 'react-router-dom'
import { toast} from 'react-toastify'
import Layout from '../components/Layout/Layout'
import OAuth from '../components/OAuth';

const SignIn = () => {
    
   const [showPassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
const {email,password}=formData
    const navigate=useNavigate()
    const onChange=(e)=>{
        setFormData(prevState =>({
            ...prevState,
            [e.target.id]:e.target.value,
        }))
    }
    const LoginHandler= async(e)=>{
        e.preventDefault()
        try{
            const auth=getAuth()
            const userCredential=await signInWithEmailAndPassword(auth,email,password)
            if(userCredential.user){
                toast.success("Login Successfully")
                navigate("/");
            }
        }catch(error){
            console.log(error)
            toast.error("Invalid Email or Password");
        }
    }



  return (
     <Layout>
        
      <div className="d-flex align-items-center justify-content-center w-100 mt-4">
<form className='bg-light p-4' onSubmit={LoginHandler}  >
<h4 className='bg-dark p-2 mt-2 text-light text-center'>Sign In</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    value={email}
    onChange={onChange}
    className="form-control" 
    id="email" 
    aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type={showPassword ? 'text':"password"} 
    value={password}
    onChange={onChange}
    className="form-control" 
    id="password" />
    {/* <span>show password  
    <BsFillEyeFill className="text-danger ms-2"
    stye={{cursor:"pointer"}}
        onClick={()=>{
            setShowPassword((prevState)=> !prevState);
        }}
    />
    </span> */}
    <Link to="/forgotpassword">Forgot Password</Link>
  </div>

 
  <button type="submit" className="btn btn-primary">Sign In</button>
<OAuth/>
<div>
    
    <span>New User</span> <Link to="/signup">Sign Up</Link>
</div>

</form>


      </div>
    </Layout>
  )
}

export default SignIn