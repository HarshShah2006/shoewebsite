import React from 'react'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <>

    <hr style={{backgroundColor: 'black'}} />  
    <div>
   <p   style={{fontFamily: 'sans-serif'}}>&emsp;<span className='textnone'>Let's talk <strong>+91 1234567890</strong></span>
        <span className="topsidee">    
       <span className='left'> <Link to="/login"><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg></Link>&emsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>&emsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>&emsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>&emsp;</span>
        </span>
    </p>
     </div>
   <hr/><br/>
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
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img src="image1.jpg" className=" w-100 c-img" alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <span className='images'>
      <img src="image2.jpg" className=" w-100 c-img" alt="..."/>
      </span>
    </div>
    <div className="carousel-item c-item">
      <img src="image3.jpg" className=" w-100 c-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button> 
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<span className='feature'> <p  style={{float:'right',marginLeft:'3px'}}><strong style={{ marginRight: '850px' ,fontFamily: 'inter sans-serif',fontSize: '30px',color: 'black',paddingLeft: '15px'}} >Featured Product</strong><span  style={{paddingRight:'50px'}}><Link to="/Viewall" className='view'> View All Products</Link></span></p><br/><br/></span>
<div style={{marginTop:'140px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='nike1.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='nike2.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='nike3.jfif'alt='' className='img-thumbnail'></img>
    </div>
  </div>
</div>
   {/*
           <br/><br/> <nav className='respon'>
                <p className='wh'>
                    <span className='disable'>&emsp;&emsp;</span><span className='image1'><img  style={{float:'left',marginLeft:'50px'}} className="img-thumbnail" src="nike1.jfif" alt=""/></span>&emsp;&emsp;
                    <span className='image2'> <img src="nike2.jfif" style={{marginLeft: '250px'}} className="img-thumbnail" alt=""/>&emsp;&emsp;</span>
                    <span className='image3'> <img style={{float:'right',marginRight: '50px'}} src="nike3.jfif" className="img-thumbnail" alt=""/>&emsp;&emsp;</span>
                </p> 
                 </nav><br/> 
             <nav>
                <p className='wh'>
                <span className='image4'>  &emsp;&emsp; <img style={{float: 'left',marginLeft:'50px'}} className="img-thumbnail" src="nike4.jfif" alt=""/>&emsp;&emsp; </span>
                <span className='image5'>   <img style={{marginLeft:'250px'}}  src="nike5.jfif" className="img-thumbnail" alt=""/>&emsp;&emsp;</span>
                <span className='image6'>   <img  style={{float: 'right',marginRight:'50px'}} src="nike6.jfif" className="img-thumbnail" alt=""/>&emsp;&emsp;</span>
                </p>
            </nav><br/><br/><br/>  */}
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
            <div className='disable' style={{ position: 'relative'}}>
              <span>
             <span className='big1'> <img  src="collectionitem1.jpg" alt='' style={{width: '700px',height: '660px',marginLeft: '20px'}} className='img-fluid'/><span className='remove'> <span style={{ position: 'absolute',top: '200px', right: '710px',color: '#8d8d8d',fontFamily: 'Inter sans-serif',fontSize: '18px'}}><span className='text'> Cassual Collection</span></span><b style={{ position: 'absolute',top: '300px', right: '710px',color: '#191919',fontFamily: 'Inter sans-serif',fontSize: '79px'}}>Street <br/> Wear.</b></span><button style={{width:'150px', position: 'absolute',top: '550px', right: '710px',backgroundColorcolor: '#081b29', color:'#00abf0', fontFamily: 'Inter sans-serif',fontSize: '18px'}}>Shop Now</button><svg style={{width:'50px', position: 'absolute',top: '558px', right: '710px',color: '#8d8d8d',FontFamily: 'Inter sans-serif',fontSize: '18px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg></span>
                <span className='big2'> <img src="collectionitem2.jpg" alt='' className='img-fluid' style={{width: '610px',height: '320px',float: 'right',position: 'absolute',marginLeft:'15px'}}/></span><span style={{position: 'absolute',top: '100px', right: '450px',color: '#8d8d8d',fontFamily: 'Inter sans-serif',fontSize: '18px'}}><span className='text'> Basic Collection</span><span className='remove'><b style={{ position: 'absolute',top: '10px', left: '0px',color: '#191919',fontFamily: 'Inter sans-serif',fontSize: '79px'}}>Basic <br/> Shoes.</b></span></span><span className='buttonloc'> <button className='shopnow' style={{width:'150px', position: 'absolute',top: '220px', right: '80px',backgroundColorcolor: '#081b29', color:'#00abf0',fontFamily: 'Inter sans-serif',fontSize: '18px'}}>Shop Now</button><span className='arrow'> <svg  style={{width:'50px', position: 'absolute',top: '230px', right: '80px',color: '#8d8d8d',fontFamily: 'Inter sans-serif',fontSize: '18px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg></span></span>
                <span className='big3'><img src="collectionitem3.jpg" alt='' className='img-fluid' style={{width: '610px',height: '320px',float: 'right',position: 'absolute',top: '340px',marginLeft:'15px'}} /> </span> <span className='remove'> <span style={{position: 'absolute',top: '400px', right: '430px',color: '#8d8d8d',fontFamily: 'Inter sans-serif',fontSize: '18px'}}><span className='text'> Best Seller Shoes</span><b style={{ position: 'absolute',top: '50px', left : '0px',color: '#191919',fontFamily: 'Inter sans-serif',fontSize: '63px'}}>Imported <br/> Shoes.</b></span></span><span className='buttonloc'><button className='shopnow' style={{width:'150px', position: 'absolute',top: '580px', right: '50px',backgroundColorcolor: '#081b29', color:'#00abf0',fontFamily: 'Inter sans-serif',fontSize: '18px'}}>Shop Now</button><span className='arrow'> <svg style={{width:'50px', position: 'absolute',top: '589px', right: '50px',color: '#8d8d8d',fontFamily: 'Inter sans-serif',fontSize: '18px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg></span></span>
              </span>
            </div><br/><br/>
            <strong className='salestext' style={{fontSize: '35px',fontFamily: 'inter sans-serif',color: 'black',marginLeft:'50px'}}>Fresh Sales</strong><br/><br/>
          {/* <div style={{marginTop:'140px',position:'absolute'}} className="container">
           <div className="row">
           <span className='fasimg1'>
           <div className="col-sm">
             <img src='fas1.jfif' alt='' className='img-thumbnail'></img>
           </div></span>
           <span className='fasimg2'>
           <div className="col-sm">
           <img src='fas2.jfif' alt='' className='img-thumbnail'></img>
           </div></span>
           <span className='fasimg3'>
           <div className="col-sm">
           <img src='fas3.jfif'alt='' className='img-thumbnail'></img>
           </div></span>
         </div>
       </div> */}
        <div className="container">
     
  <div className="row">
    <div className="col-sm">
      <img src='fas1.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas2.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas3.jfif' alt='' className='img-thumbnail'></img>
    </div>
  </div>
</div>
                                                                                                                                                                                                                                                {/* <nav className='wh'>
                                                                                                                                                                                                                                                  <p className='img' style={{position: 'relative'}}>
                                                                                                                                                                                                                                                <span className='fimg1'>   <img style={{marginLeft:'30px'}} src="fas1.jfif" className="img-thumbnail" alt=""/></span><span className='fimg1_1'> <span style={{position: 'absolute',left: '38px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                <span className='fimg2'>  <img style={{marginLeft:'250px'}} src="fas2.jfif" className="img-thumbnail"  alt=""/></span><span className='fimg2_2'><span style={{position: 'absolute',left: '522px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                <span className='fimg3'> <img style={{marginLeft:'230px'}} src="fas3.jfif" className="img-thumbnail"  alt=""/></span><span className='fimg3_3'><span style={{position: 'absolute',left: '989px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                </nav><br/> */}
                                                                                                                                                                                                                                                {/* <nav className='wh'>
                                                                                                                                                                                                                                                  <p style={{position: 'relative'}}>
                                                                                                                                                                                                                                                  <span className='fimg4'> <img style={{marginLeft:'30px'}} src="fas4.jfif" className="img-thumbnail"  alt=""/></span><span className='fimg4_4'><span style={{position: 'absolute',left: '38px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                  <span className='fimg5'><img style={{marginLeft:'250px'}} src="fas5.jfif" className="img-thumbnail"  alt=""/><span style={{position: 'absolute',left: '520px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                  <span className='fimg6'><img style={{marginLeft:'230px'}} src="fas6.jfif" className="img-thumbnail"  alt=""/><span style={{position: 'absolute',left: '988px',top: '5px',backgroundColor:'#6995B1',color: 'white'}}>-10% OFF</span></span>
                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                </nav><br/>*/}
                  
                                                                                                                                                                                                                
        <div style={{marginTop:'40px'}} className="container">
  <div className="row">
    <div className="col-sm">
      <img src='fas4.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas5.jfif' alt='' className='img-thumbnail'></img>
    </div>
    <div className="col-sm">
    <img src='fas6.jfif'alt='' className='img-thumbnail'></img>
    </div>
  </div>
</div>
<span className='svgs'>
<hr style={{border: '1px solid grey'}}/> 
            <span className='scgfs'>
            <svg style={{marginLeft:'50px',color:'#6995b1'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg></span>&emsp;<strong style={{bottom: '2px',position:'relative'}}>Free Shipping</strong>&nbsp;<span style={{bottom: '2px',position:'relative'}}>Over &#8377;2000</span>
          <span className='svgmb'>
            <svg   style={{marginLeft:'150px',color:'#6995b1'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg></span>&ensp;<strong style={{bottom: '2px',position:'relative'}}>Money Back</strong><span style={{bottom: '2px',position:'relative'}}>&nbsp;Return in 7 Days</span>
            <span className='buy'>
            <svg style={{marginLeft:'90px',color:'#6995b1'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
              <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
            </svg>&ensp;</span><strong style={{bottom:'2px',position: 'relative'}}>Buy 2 get 3th</strong>&nbsp;<span style={{bottom: '2px',position:'relative'}}>at 50% Off</span>
           <span className='any'>
            <svg style={{marginLeft:'50px',color:'#6995b1'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
            </svg>&ensp;<strong style={{bottom:'2px',position:'relative'}}>Any Questions?</strong>&nbsp;<span style={{bottom: '2px',position:'relative'}}>Experts Are Ready</span></span>
           <hr style={{border:'1px solid grey'}}/></span><br/><br/><br/><br/><br/>
           
           <nav className='footer' style={{position: 'relative'}}>
            <span className='products'>
           <ul style={{listStyleType: 'none',position:'absolute'}}>
           <strong><li style={{color:' #191919',fontSize: '18px'}}>Products</li></strong><br/>
            <li style={{fontSize: '15px',color: '#8D8D8D'}}>Nike</li><br/>
            <li style={{fontSize: '15px',color: '#8D8D8D'}}>Adidas</li><br/>
            <li style={{fontSize: '15px',color: '#8D8D8D'}}>Puma</li><br/>
            <li style={{fontSize: '15px',color: '#8D8D8D'}}>Bata</li><br/>
            <li style={{fontSize: '15px',color: '#8D8D8D'}}>Skechers</li><br/>
           </ul>
           </span>
           <span className='custser'>
           <ul style={{listStyleType: 'none',position: 'absolute',marginLeft:'250px'}}>
            <strong><li style={{color: '#191919',fontSize: '18px'}}>Customer Service</li></strong><br/>
             <li style={{fontSize: '15px',color: '#8D8D8D'}}>FAQ</li><br/>
             <li style={{fontSize: '15px',color: '#8D8D8D'}}>Contact</li><br/>
             <li style={{fontSize: '15px',color: '#8D8D8D'}}>Privacy Policy</li><br/>
             <li style={{fontSize: '15px',color: '#8D8D8D'}}>Return & refunds</li><br/>
             <li style={{fontSize: '15px',color: '#8D8D8D'}}>Delievery Information</li><br/>
            </ul>
            </span>
            <span className='contactus'>
            <ul style={{listStyleType: 'none',position: 'absolute',marginLeft:'550px'}}>
              <strong><li style={{color: '#191919',fontSize: '18px'}}>Contact Us</li></strong><br/>
              <li style={{fontSize: '15px',color:'#8D8D8D'}}>Do you have any questions <br/> or suggestions?</li><strong style={{fontSize: '15px',color: '#8D8D8D'}}> harsh@gmail.com</strong><br/><br/>
              <li style={{fontSize: '15px',color: '#8D8D8D'}}>For any doubts Give Us a Call on</li><strong style={{fontSize: '15px',color: '#8D8D8D'}}>+91 1234567890</strong><br/><br/>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>&emsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg>&emsp;<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
             </svg>&emsp; <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg></span></li>
              </ul>
              </span>
              <span className='customerservice'>
              <ul style={{listStyleType: 'none',position: 'absolute',marginLeft:'880px'}}>
                <strong><li style={{color: '#191919',fontSize: '18px'}}>Customer Service</li></strong><br/>
                 <li style={{fontSize: '15px',color: '#8D8D8D'}}>FAQ</li><br/>
                 <li style={{fontSize: '15px',color: '#8D8D8D'}}>Contact</li><br/>
                 <li style={{fontSize: '15px',color: '#8D8D8D'}}>Privacy Policy</li><br/>
                 <li style={{fontSize: '15px',color: '#8D8D8D'}}>Return & refunds</li><br/>
                 <li style={{fontSize: '15px',color: '#8D8D8D'}}>Delievery Information</li><br/>
                </ul>
                </span>
          </nav>
          </>
  )
}