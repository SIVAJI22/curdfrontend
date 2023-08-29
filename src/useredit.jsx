import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const  Edituser=()=>{
const params=useParams();
const getuser=useNavigate();
    const [editusers,seteditusers]=useState({
        name:"",
        email:"",
        Dob:"",
        Mobile:"",
        Department:"",
        password:"",
        address:"",

    })

    useEffect(()=>{
        if(params.id){
            axios.get('https://curd-u5k5.onrender.com/newusers/'+params.id).then((response)=>{
console.log(response.data);
seteditusers(response.data.data)

            }).catch((er)=>{
                console.log(er);
            })
        }
    },[])
    const onchange=(e)=>{
       
        const target=e.target;
        const name=target.name;
        const value=target.value;
         seteditusers({
           ...editusers, [name]:value
         })
       }
       const onclick=()=>{
        console.log(editusers );
        axios.put(`https://curd-u5k5.onrender.com/newusers/${params.id}`,editusers).then((response)=>{
            console.log(response.data);
            alert('user update successfully')
            getuser('/users')

        })
       }
return(
    <Fragment>
        <div className=" Edit container">


       
                    <input name="name" value={editusers.name} onChange={onchange}   type="text" placeholder="Name"/>

<input value={editusers.Dob} name="Dob"    onChange={onchange}   type="date" placeholder="Dob" />
<input  name="email" value={editusers.email} onChange={onchange} placeholder="Email"  type="email" />
<input name="Mobile" value={editusers.Mobile} onChange={onchange} type="number" maxLength={10} minLength={10}  pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile" />
<input  name="address" value={editusers.address}   onChange={onchange}   type="text" placeholder="address"/>
<input name="password" value={editusers.password}   onChange={onchange}   type="password" placeholder="password" />
<input name="Department" value={editusers.Department}  onChange={onchange}    type="text" placeholder="Department"/>
<button  onClick={onclick}> Update</button>
</div>  </Fragment>
)
}