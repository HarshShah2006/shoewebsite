import React from 'react'
import { Link } from 'react-router-dom'
export default function Viewall() {
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
  <br/>
   
      <strong><h1>All Products</h1><br/><br/></strong>
     <strong> <h3>Nike</h3></strong><br/>
      <div style={{marginTop:'50px',marginBottom:'150px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='nike1.jfif'  className='img-thumbnail' alt=''></img>
    </div>
    <div className="col-sm">
    <img src='nike2.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='nike3.jfif'alt='' className='img-thumbnail'></img> 
    </div>
  </div>
</div>     
<div style={{marginTop:'50px',marginBottom:'150px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='nike4.jfif'  className='img-thumbnail' alt=''></img>
    </div>
    <div className="col-sm">
    <img src='nike5.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='nike6.jfif'alt='' className='img-thumbnail'></img> 
    </div>
  </div>
</div>

<strong><h3>Trending</h3></strong><br/>
<div style={{marginTop:'50px',marginBottom:'150px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='fas1.jfif'  className='img-thumbnail' alt=''></img>
    </div>
    <div className="col-sm">
    <img src='fas2.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas3.jfif'alt='' className='img-thumbnail'></img> 
    </div>
  </div>
</div> <div style={{marginTop:'50px',marginBottom:'150px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='fas4.jfif'  className='img-thumbnail' alt=''></img>
    </div>
    <div className="col-sm">
    <img src='fas5.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas6.jfif'alt='' className='img-thumbnail'></img> 
    </div>
  </div>
</div>
     </>
    )
  }