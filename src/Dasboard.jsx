import React from "react";
import { Fragment } from "react";
import './home.css';
import { Link } from "react-router-dom";

export const Dash=()=>{
    return(
        <Fragment>
            <div>
                <span>if you want to check easily</span><br /><br />
                <Link  className="btn btn-primary"   to="/home">
             Register users
                </Link> <br /><br />

                <Link  className="btn btn-primary"    to="/">
                staff signin
                </Link><br /><br />
                <Link  className="btn btn-primary"    to='/admin'>
                Admin signin
                
                </Link><br /><br />
                {/* <Link  className="btn btn-primary"    to="/edituser">
                Edit staff
                
                </Link>
                <br /><br /> */}
            </div>
            <div  id="staff"className="container"> 
             <Link to="/users">
             <div>
                    No.of Staffs
                </div>
             </Link>
            </div>
        </Fragment>
    )
}