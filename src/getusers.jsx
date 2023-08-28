import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const  Getuser=()=>{
    const home=useNavigate();
    const  [users,setusers]=useState([])

    useEffect(()=>{
        getting()
    },[])
    const getting=()=>{
        axios.get('http://localhost:5000/newusers/userget').then((response)=>{
            console.log(response.data.data);
            setusers(response.data.data)
            // console.log(users);
        })
    }


    const handledelete=(id)=>{
  
    
        axios.delete(`http://localhost:5000/newusers/${id}`)
        .then(function (response){
          console.log(response.data)
     
           
        })
        .catch(function (error){
          console.log(error);
        })
      
       
      
      }
    return(
        <Fragment>
            <div className=""> 
            <table>
                   
                   <tr>
                   <th>
                    Name
                    </th> <br />
                    <th> Department</th>
                    <th>
                        D.O.B
                    </th>
                    <th>Email</th>
                    <th>Mobile</th>    <th>Address</th>
             
                    
                    </tr> 
                </table>
<br />
<br />

            {
            users.map((data)=>
            <div>
                <table>
                   
                    <tr>
                        <td >
                            {data.name}
                        </td>
                        <td>
                            {data.Department}
                        </td>
                        <td>
                            {data.Dob}
                        </td>
                        <td>
                            {data.email}
                        </td>
                        <td>
                            {data.Mobile}
                        </td>
                        <td>
                            {data.address}
                        </td>
                        <td>
                            <Link to={`/edituser/${data._id}`} >  <button className="btn btn-primary">update</button>
                            </Link>
                          
                            </td>

                        <td > <button onClick={()=> handledelete(data._id)}>Delete</button></td>
                    </tr>
                </table>

           
            
            </div>
        
            
            )
            }
      </div>


        </Fragment>
    )
}