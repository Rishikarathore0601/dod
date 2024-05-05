import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import {BsFillEyeFill} from 'react-icons/bs';
import { toast} from 'react-toastify'
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from '../firebase.config'
import { doc,setDoc,serverTimestamp } from 'firebase/firestore';
import OAuth from '../components/OAuth';


const SignUp = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState({
        email:'',
        name:'',
        password:''
    })
    //const history = useHistory();
const {email,name,password}=formData;
    const navigate=useNavigate()
    
    const onChange=(e)=>{
        setFormData(prevState =>({
            ...prevState,
            [e.target.id]:e.target.value,
        }));
    };
const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try{
        const auth=getAuth()
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
       const user=userCredential.user
       updateProfile(auth.currentUser, { displayName: formData.name })

const formDataCopy={...formData}
delete formDataCopy.password
formDataCopy.timestamp=serverTimestamp()
await setDoc(doc(db,'users',user.uid),formDataCopy);
//history.push('/');
toast.success("SignUp Successfully !!")
navigate("/");
//alert("Signup Success");

     }catch(error){
         console.log(error)
         toast.error("Something went wrong")
 }
}


  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center w-100 mt-4">
<form className='bg-light p-4' onSubmit={onSubmitHandler} >
<h4 className='bg-dark p-2 mt-2 text-light text-center'>Sign Up</h4>
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
    <label htmlFor="exampleInputEmail1" 
    className="form-label">Enter Name</label>
    <input type="text"
    value={name} 
    className="form-control" 
    id="name" 
    onChange={onChange}
    aria-describedby="emailHelp" />
    <div id="emailHelp"
     className="form-text">
     </div>
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
  </div>

 
  <button type="submit" className="btn btn-primary" onSubmit={onSubmitHandler}>Sign Up</button>
<div>
    <h6>Login with Google</h6>
    <OAuth/>
    <span>Already User</span> <Link to="/signin">Login</Link>
</div>

</form>
</div>


    </Layout>
  )
}

export default SignUp