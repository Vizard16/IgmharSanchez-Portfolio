import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './terminal.css'; // Import the CSS file for the terminal styling

export const About = () => {
  const [screenSize, setScreenSize] = useState(550); // Initial screen size

  return (
    <section className="about" id="about">

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>

                
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      {/* Background blur effect */}
      
      {/* Apply the terminal window */}       
      <div className="fakeMenu" style={{ marginTop: '20px' }}>
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
    

      <div className="fakeScreen" >
        <p className="line1">$ sudo apt install: Who am I?<span className="cursor1">_</span></p>
        <p className="line2"> I'm an enthusiast about programming, robotics and automation. <span className="cursor2">_</span></p>
        <p className="line3"> I'm a proficient and passionate engineering student with experience in team-based software development and robotics, always eager to learn and self-driven towards solving world problems. <span className="cursor3">_</span></p>
        <p className="line4"><span className="cursor4">_</span></p>
      </div>

      <span className="background-blur-about"></span>

      

    
      
    </section>
  )
}
