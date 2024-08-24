import React from 'react'
import { Link } from 'react-router-dom'
export default function Aboutus() {
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
  <br/><br/>
    <h1>About Us</h1><br/><br/>
    <span>A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots, which are required footwear at industrial worksites.

Additionally, shoes have often evolved into many different designs, such as high heels, which are most commonly worn by women during fancy occasions. Contemporary footwear varies vastly in style, complexity and cost. Basic sandals may consist of only a thin sole and simple strap and be sold for a low cost. High fashion shoes made by famous designers may be made of expensive materials, use complex construction and sell for large sums of money. Some shoes are designed for specific purposes, such as boots designed specifically for mountaineering or skiing, while others have more generalized usage such as sneakers which have transformed from a special purpose sport shoe into a general use shoe.</span><br/><br/>
<span><Link to="https://harshshah2006.github.io/harshpersonalportfolio/"> My Personal Portfolio</Link></span>
    </>
  )
}
