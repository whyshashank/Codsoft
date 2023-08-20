import React from "react";

const Footer = () => {
  return (
    <>
     <footer className=" text-center text-dark underline" id="footeriya">


<div className="container p-4">
 
  <section className="mb-4">
   
    <a className="btn btn-floating  btn-floating m-1 btn-lg " href="/" role="button"
      ><i className="fab fa-facebook"></i
    ></a>

    
    <a className="btn btn-floating m-1 btn-lg" href="/" role="button" 
      ><i className="fab fa-twitter"></i
    ></a>

    
  

    
    <a className="btn  btn-floating m-1 btn-lg" href="#!" role="button" 
      ><i className="fab fa-instagram"></i
    ></a>

   
     <a className="btn  btn-floating m-1 btn-lg" href="#!" role="button" 
     ><i className="fab fa-telegram"></i
   ></a>

    
  </section>
  

 
  <section className="Last" >
    <form action="">
   
      <div className="row d-flex justify-content-center">
     
        <div className="col-auto">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
     

     
        <div className="col-md-5 col-12">
          
          <div className="form-outline form-dark underline mb-4">
            <input type="email" id="form5Example21" className="form-control hehe" placeholder="Email  Address" />
            
          </div>
        </div>
     

     
        <div className="col-auto">
        
          <button type="submit" className="btn  mb-4 subscribe" >
            Subscribe
          </button>
        </div>
     
      </div>
      
    </form>
  </section>


  
  <section className="mb-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
      repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
      eum harum corrupti dicta, aliquam sequi voluptate quas.
    </p>
  </section>



  <section className="">
   
    <div className="row">
   
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Quick Links</h5>

        <ul className="list-unstyled mb-0">
          <li className="login-form">
            <a href="#!" className="text-dark underline">Home</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">About</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">Courses</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">Contact</a>
          </li>
        </ul>
      </div>
   

   
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Useful Links</h5>

        <ul className="list-unstyled mb-0">
          <li className="login-form">
            <a href="#!" className="text-dark underline">Help Center</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">Ask Questions</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">Send Feedback</a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline">Private Policy</a>
          </li>
        </ul>
      </div>
   

   
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Social Media</h5>

        <ul className="list-unstyled mb-0">
          <li className="login-form">
            <a href="#!" className="text-dark underline"><i className="bi bi-facebook"></i></a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline"><i className="bi bi-twitter"></i></a>
          </li>
          <li className="login-form">
            <a href="#!" className="text-dark underline"><i className="bi bi-linkedin"></i></a>
          </li>
        </ul>
      </div>


{/* 
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark underline">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-dark underline">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-dark underline">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-dark underline">Link 4</a>
          </li>
        </ul>
      </div> */}
    
    </div>
    
  </section>
  
</div>



<div className="text-center p-3" >
  Made with ❤️by Team Invalid

</div>

</footer>
    </>
  );
};

export default Footer;