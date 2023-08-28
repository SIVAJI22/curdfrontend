import React, { useState } from "react";
import { Fragment } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './home.css'

export const Adminlogin=()=>{
    const [admin,setadmin]=useState({
        name:"",
        email:"",
        Dob:"",
        Mobile:"",
        Department:"",
        password:"",
        address:"",

    })
    const onchange=(e)=>{
       
     const target=e.target;
     const name=target.name;
     const value=target.value;
      setadmin({
        ...admin, [name]:value
      })
    }


    const sumbit=()=>{
        console.log(admin);
        axios.post('http://localhost:5000/newusers/login',admin).then((response)=>{
           
    
        console.log(response.data.status);


if(response.data.status==="success"){
    // nav('/')
    alert('user register successfuly')
}        }
        )

        .catch((err)=>{
            console.log(err);
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
            
<br /><input  name="email" value={admin.email} onChange={onchange} placeholder="Email"  type="email" /><br />
            <input value={admin.password} name="password"    onChange={onchange}   type="password" placeholder="password" /><br />
            <Link to="/users">
           <br /> <button  className="btn btn-primary" >signin</button>
            </Link>
            <br />
 
<div className="mt-4 ms-2 btn btn-success">
<Link to='/login' style={{textDecoration:'none',color:'white'}}>Sign-in staff account</Link></div>
</div></Fragment>)}