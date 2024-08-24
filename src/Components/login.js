import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const history=useNavigate();
   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/Login",
        {
          name,email,password
        }
      )
      .then(res=>{
        if(res.data="exist"){
          history("/Homepage")
        }
        else if(res.data="not exist"){
          alert("user is not logged in")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  } 
  return (
    <>
     <nav  style={{backgroundColor:"transparent"}} className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Harsh</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Aboutus">Aboutus</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contactus</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Blogs</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    <center>
    <h1 style={{marginTop:'100px',marginLeft:'50px'}}>Login Form</h1>
    <form style={{width:'500px',marginTop:'50px'}}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small  style={{marginRight:'200px'}} id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div  style={{marginTop:'25px'}}  className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <span className='button'><button  style={{marginTop:'10px'}} type="submit" className="btn btn-primary">Login</button></span>
</form>
<div>
  <h5 className='register'>Don't have an account?&nbsp;<Link to="/signup">Register</Link></h5>
</div>
</center>
    </>
  )
}
