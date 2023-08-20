import React,{useState} from 'react'
import Footer from '../footer';
import Navbar from '../navbar';

const Contact = () => {
    const [userData,setUserData] =useState({
        firstName: "",
        lastName:"",
        phone:"",
        Email:"",
        address:"",
        message:"",
    });

    let name,value;
    const postUserData =(event)=>{
name =event.target.name;
value=event.target.value;
setUserData({...userData , [name]:value})
    }

    // firebase connection//
    
    const submitData = async(event)=>{
       event.preventDefault();
       const { firstName,
       lastName,
       phone,
       Email,
       address,
       message}= userData;

       if(firstName &&
        lastName &&
        phone &&
        Email &&
        address &&
        message){

    
      const res=await fetch("https://teaminvalid-e20e7-default-rtdb.firebaseio.com/userDataRecords.json",
       {method: "POST", headers: {"Content-Type":"application/json"},body:JSON.stringify({firstName,
      lastName,
      phone,
      Email,
      address,
      message,})});

      if(res){
        setUserData({ firstName: "",
        lastName:"",
        phone:"",
        Email:"",
        address:"",
        message:"",})
        alert("Data Stored");
      }
      else{
        alert("Please Enter Proper Values");
      }
        } else{
            alert("Please Enter Proper Values");
          }
    }; 

  return (
    <>
    <Navbar />
    	<section className="contactus-name">
             <div className="container">
                <div className='row'>
                    <div className ="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className ="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold CONTACT-US ">Contact Us</h1><br/>
                                <p className="main-hero-para fw-bold">
                                    We Would love to hear out your suggestions :)
                                </p>
                                {/* <figure>
                                    <img src="" alt="girl" className='img-fluid'/>
                                </figure> */}
                            </div>

                            <div className ="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    
                                        <div className="row">
                                           <div className="col-12 col-lg-6 contact-input-field">
                                            <input type ="text" name="firstName" id="" className="form-control lauda" placeholder ="First Name" value={userData.firstName} onChange={postUserData} />
                                           </div>

                                           <div className="col-12 col-lg-6 contact-input-field">
                                            <input type ="text" name="lastName" id="" className="form-control lauda" placeholder ="Last Name"  value={userData.lastName} onChange={postUserData}/>
                                           </div>
                                        </div>

                                        <div className="row">
                                           <div className="col-12 col-lg-6 contact-input-field">
                                            <input type ="text" name="phone" id="" className="form-control lauda" placeholder ="Phone Number" value={userData.phone} onChange={postUserData} />
                                           </div>

                                           <div className="col-12 col-lg-6 contact-input-field">
                                            <input type ="text" name="Email" id="" className="form-control lauda" placeholder ="Email-Id"  value={userData.Email} onChange={postUserData}/>
                                           </div>
                                        </div>
                                    
                                    <div className="row">
                                        <div className ="col-12 contact-input-field">
                                        <input type ="text" name="address" id="" className="form-control lauda" placeholder ="Address"  value={userData.address} onChange={postUserData}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className ="col-12 contact-input-field">
                                        <input type ="text" name="message" id="" className="form-control lauda" placeholder ="Enter Your Message"  value={userData.message} onChange={postUserData}/>
                                        </div>
                                    </div>

                                    <div class="form-check contact-input-field">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck2 "  />
                                       <label class="form-check-label"  className="main-hero-para ">
                                         I agree to the Terms and Conditions and won't Abuse anyone of your people
                                       </label>
                                     </div>

                                     <button type="submit" className="btn btn-dark w-100" onClick={submitData}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
        </section>
<Footer />
</>
  )
}

export default Contact;