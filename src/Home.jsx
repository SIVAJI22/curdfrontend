import React, { useState } from "react";
import { Fragment } from "react";
import axios from 'axios';
import './home.css'
import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const nav=useNavigate();
    const [Newusers,setNewusers]=useState({
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
      setNewusers({
        ...Newusers, [name]:value
      })
    }


    const sumbit=()=>{
        console.log(Newusers);
        axios.post('http://localhost:5000/newusers/users',Newusers).then((response)=>{
           
    
        console.log(response.data.status)
if(response.data.status=== "success  "){
   
    alert('user register successfuly')
    nav('/')
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
           <input name="name" value={Newusers.name} onChange={onchange}   type="text" placeholder="Name"/>
<br />
         <label htmlFor="Dob" className="fs-4">Dob</label>   <input value={Newusers.Dob} name="Dob"    onChange={onchange}   type="date" placeholder="Dob" /><br />
<input  name="email" value={Newusers.email} onChange={onchange} placeholder="Email"  type="email" /><br />
<input name="Mobile" value={Newusers.Mobile} onChange={onchange} type="number" maxLength={10} minLength={10}
  pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile" /><br />
            <input  name="address" value={Newusers.address}   onChange={onchange}   type="text" placeholder="address"/><br />
            <input name="password" value={Newusers.password}   onChange={onchange}   type="password" placeholder="password" /><br />
            <input name="Department" value={Newusers.Department}  onChange={onchange}    type="text" placeholder="Department"/><br />
            <button  onClick={sumbit}> Register</button>
        </div>
    </Fragment>
)
}