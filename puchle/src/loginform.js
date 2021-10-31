 import React, { useState } from 'react';
 
 const Loginform = ({ Login, error }) => {
     const [details, setDetails] = useState({email: "", password: ""});

     const submitHandler = e => {
         e.preventDefault();

         console.log(details);
     }

     return (
         <form onSubmit={submitHandler}>
         <div className="form-inner">
         <h2>Login</h2>
         {(error != "") ? ( <div className="error">{error}</div>) : ""}
         <div className="form-group">
         <lable htmlFor="email">Email:</lable>
         <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
         </div>

         <div className="form-group">
         <lable htmlFor="password">Password:</lable>
         <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
         </div>
         <input type="submit" value="LOGIN" />
         </div>
         </form>
     )
 }




 export default Loginform;
