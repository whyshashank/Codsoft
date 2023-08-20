import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar =() =>{
    const [show ,  setShow]= useState(false);
   
   
    
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className ="container">
    <a className="navbar-brand" href="/"><i className="bi bi-lightbulb-fill bulb"></i> EduEase</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation" 
    onClick={()=>{
        setShow(!show);
    }} >
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="https://eduease-gpt-4-0.netlify.app/">EduEase-GPT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
       
        
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
         
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
    
      </ul>
      <form className="form-inline my-2 my-lg-0">
        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
       <button className="btn btn-lg my-2 my-sm-0 btn-login" type="submit"><i className="bi bi-person-circle"></i> Login</button>
        <button className="btn btn-lg my-2 my-sm-0 btn-signup" type="submit">Signup</button>
        
      </form>
    </div>
    </div>
  </nav>
  </>
  )
      }

export default Navbar