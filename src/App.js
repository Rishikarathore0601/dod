
import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import Offerings from "./pages/Offerings";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/offerings" element={<Offerings/>}/>
      <Route path="/category/:categoryName" element={<Category/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/profile" element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      
      
      </Route>
      <Route path="/about" element={<About/>}/>
    
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
