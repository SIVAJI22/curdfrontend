import React, { useState } from "react";
import { Fragment } from "react";
import axios from 'axios';

import './home.css'
import { Link, useNavigate } from "react-router-dom";

export const Signin=()=>{
    const Log=useNavigate();
    const [signin,setsignin]=useState({
      
        email:"",
  
        password:"",
        

    })
    const onchange=(e)=>{
       
     const target=e.target;
     const name=target.name;
     const value=target.value;
      setsignin({
        ...signin, [name]:value
      })
    }


    const sumbit=()=>{
        console.log(signin);
        axios.post('http://localhost:5000/newusers/login',signin).then((response)=>{
           console.log(response.data);
    
        if(response.data.status === 'success'){
    Log('/dash')
        }
        else{
         console.log(response.data.message)
alert(response.data.message)
        }
     })
     .catch(function (error){
       console.log(error);
     })
    }
//     console.log(response.data.status)
//     if(response.data.status === 'success'){
//         router('/phome')
//     }
//     else{
//      console.log(response.data.message)
//      setmessage(response.data.message);
//     }
//  })
//  .catch(function (error){
//    console.log(error);
//  })
return(
    <Fragment>
        <div  id=" newuser  "className="container  newuser ">
            <span>new user</span> <br />
            
<br /><input  name="email" value={signin.email} onChange={onchange} placeholder="Email" required  type="email" /><br />
            <input value={signin.password} name="password"    onChange={onchange}  required type="password" placeholder="password" /><br />
         
         <button onClick={sumbit} className="btn btn-primary">sign-in</button>
            <div className="mt-4 ms-2 btn btn-success">
<Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Don,t have account create now</Link>
</div>
<div className="mt-4 ms-2 btn btn-danger">
<Link to='/admin' style={{textDecoration:'none',color:'white'}}>Sign-in admin account</Link></div>
</div></Fragment>)}
