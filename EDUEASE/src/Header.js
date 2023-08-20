import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
      
              <h1 className="display-2">
             Did you know? <br /><span className="type">Only 1 out of 6 girls go for further studies...</span>
              </h1>

              <div className="d-grid gap-2 col-6 mx-start">
              <button type="button" className="btn btn-success btn-lg chamma">Know More  <i class="bi bi-arrow-right-circle"></i></button></div>
        
            </div>
      

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/vidya.jpg"
                alt="vidya"
                className="img-fluid"
              />
         
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;