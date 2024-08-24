import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Signup() {
  const history=useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/Signup",
        {
          name,email,password
        }
      )
      .then(res=>{
        if(res.data="exist"){
          alert("User already exist")
          
        }
        else if(res.data="not exist"){
          history("/Homepage")
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
</nav><br/><br/>
<form className='sign'>
    <div>
      <section className="vh-100" style={{backgroundColor:" transparent"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" name="name" className="form-control" />
                      <label onChange={(e) => {setName(e.target.value)}} className="form-label" htmlFor="form3Example1c">Your Name</label>
                       
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" name="email" className="form-control" />
                      <label  onChange={(e) => {setEmail(e.target.value)}} className="form-label" htmlFor="form3Example3c">Your Email</label>
                       
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" name="password" className="form-control" />
                      <label  onChange={(e) => {setPassword(e.target.value)}} className="form-label" htmlFor="form3Example4c">Password</label>
                     
                    </div>
                  </div>
{/* 
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  onSubmit={submit} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </form>
    </>
  )
}
