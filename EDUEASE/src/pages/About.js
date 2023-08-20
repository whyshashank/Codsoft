import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';

const About = () => {
  return (
    <>
      <Navbar />
      
     <div className ="timeline">


      <div className ="chuhiya left-chuhiya">
        {/* <img src="./images/subj
        ect-icon-3.png" alt ="" /> */}
        <div className="text-box">
          <h2>What was the need ? </h2>
          <small>The journey begins...</small>
          <p>lorem dbjfbjs rsdfbbdjfd sdjnfjj</p>
          <span className="left-chuhiya-arrow"></span>
        </div>
      </div>
      
      <div className ="chuhiya right-chuhiya">
      {/* <img src="./images/subj
      ect-icon-3.png" alt ="" /> */}
        <div className="text-box chuso" >
          <h2>How we did ? </h2>
          <small>2022-2023</small>
          <p>lorem dbjfbjs rsdfbnjs bjdjf</p>
          <span className="right-chuhiya-arrow"></span>
        </div>
      </div>
      <div className ="chuhiya left-chuhiya">
      {/* <img src="./images/subj
      ect-icon-3.png " alt ="" /> */}
        <div className="text-box">
          <h2>What we did?</h2>
          <small>2022-2023</small>
          <p>lorem dbjfbjs rsdfb</p>
          <span className="left-chuhiya-arrow"></span>
        </div>
      </div>
      <div className ="chuhiya right-chuhiya">
      {/* <img src="./images/subj
      ect-icon-3.png" alt ="" /> */}
        <div className="text-box">
          <h2>Talking to NGOs</h2>
          <small>2022-2023</small>
          <p>lorem dbjfbjs rsdfb</p>
          <span className="right-chuhiya-arrow"></span>
        </div>
      </div>
      <div className ="chuhiya left-chuhiya">
      {/* <img src="./images/subj
      ect-icon-3.png" alt ="" /> */}
        <div className="text-box">
          <h2>Work done is done</h2>
          <small>2022-2023</small>
          <p>lorem dbjfbjs rsdfb</p>
          <span className="left-chuhiya-arrow"></span>
        </div>
      </div>
      <div className ="chuhiya right-chuhiya">
      {/* <img src="./images/subj
      ect-icon-3.png" alt ="" /> */}
        <div className="text-box">
          <h2>Finally we did it </h2>
          <small>2022-2023</small>
          <p>lorem dbjfbjs rsdfb</p>
          <span className="right-chuhiya-arrow"></span>
        </div>
      </div>

     </div>
     
    <Footer />
    </>
  )
}

export default About;