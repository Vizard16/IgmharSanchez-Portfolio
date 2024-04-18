import React from "react";
import { Carousel } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png";
import { TechIcon } from "./misc"; // Ensure this imports correctly as per your project structure

export const Skills = () => {


  const slidesData = [
    {
        id: 1,
        title: "Programming Languages",
        images: [
            { src: "https://skillicons.dev/icons?i=cpp", alt: "C++", name: "C++",  link: "https://svelte.dev" },
            { src: "https://skillicons.dev/icons?i=python", alt: "Python", name: "Python", link: "https://www.python.org" },
            { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript", name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
            { src: "https://skillicons.dev/icons?i=cs", alt: "C#", name: "C#", link: "https://dotnet.microsoft.com/es-es/languages/csharp" },
            { src: "https://skillicons.dev/icons?i=golang", alt: "Go", name: "Golang", link: "https://golang.org" },
            { src: "https://skillicons.dev/icons?i=c", alt: "C", name: "C", link: "https://devdocs.io/c/ " }
            
          ]
    },
    {
        id: 2,
        title: "Front End Development",
        images: [
            { src: "https://skillicons.dev/icons?i=html", alt: "HTML", name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { src: "https://skillicons.dev/icons?i=css", alt: "CSS", name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { src: "https://skillicons.dev/icons?i=react", alt: "React", name: "React", link: "https://es.react.dev" },
            { src: "https://skillicons.dev/icons?i=svelte", alt: "Svelte", name: "Svelte", link: "https://svelte.dev" },
            { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap", name: "Bootstrap", link: "https://getbootstrap.com" },
            
        ]
    },
    {
      id: 3,
      title: "Back End Development",
      images: [
          { src: "https://skillicons.dev/icons?i=flask", alt: "Flask", name: "Flask", link: "https://flask.palletsprojects.com/en/3.0.x/" },
          { src: "https://skillicons.dev/icons?i=nodejs", alt: "NodeJS", name: "NodeJS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          { src: "https://skillicons.dev/icons?i=express", alt: "Express", name: "ExpressJs", link: "https://expressjs.com" },
          { src: "https://skillicons.dev/icons?i=postman", alt: "Postman", name: "Postman", link: "https://svelte.dev" },
          { src: "https://skillicons.dev/icons?i=sqlite", alt: "Sqlite", name: "Sqlite", link: "https://www.sqlite.org/index.html"},
          { src: "https://skillicons.dev/icons?i=postgres", alt: "PostreSQL", name: "PostreSQL", link: "https://www.postgresql.org"}
      ]
  },
    {
        id: 4,
        title: "Robotics",
        images: [
            { src: "https://skillicons.dev/icons?i=ros", alt: "ROS", name: "ROS", link: "https://docs.ros.org" },
            { src: "https://skillicons.dev/icons?i=opencv", alt: "OpenCV", name: "OpenCV", link: "https://opencv.org" },
            { src: "https://skillicons.dev/icons?i=arduino", alt: "Arduino", name: "Arduino", link: "https://www.arduino.cc" },
            { src: "https://skillicons.dev/icons?i=raspberrypi", alt: "RaspBerryPi", name: "RaspBerryPi", link: "" },
            
            
            
            
        ]
    }

];
  const slidesData2 = [
    	{
        id: 1,
        title: "Technologies",
        images:[
          { src: "https://skillicons.dev/icons?i=git", alt: "Git", name: "Git",  link: "https://git-scm.com/doc" },
          { src: "https://skillicons.dev/icons?i=github", alt: "Github", name: "Github", link: "" },
          { src: "https://skillicons.dev/icons?i=linux", alt: "Linux", name: "Linux", link: "https://www.linux.org" },
          { src: "https://skillicons.dev/icons?i=ubuntu", alt: "Ubuntu", name: "Ubuntu", link: "https://ubuntu.com/" },
          { src: "https://skillicons.dev/icons?i=bots", alt: "Bot", name: "DiscordBot", link: "https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications" },
        ]

      },
      {
        id: 2,
        title: "Mechatronics",
        images:[
          { src: "https://skillicons.dev/icons?i=cpp", alt: "C++", name: "C++",  link: "https://svelte.dev" },
        ]
      }
    ]   

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              
              
                <Carousel interval={2000} indicators={false}  /* Auto-cycle every 1000 ms, hide indicators, don't pause on hover, use fade transition */>
                    {slidesData.map((slide) => (
                        <Carousel.Item key={slide.id}>
                            <h3>{slide.title}</h3>
                            <div className="d-flex justify-content-center" style={{marginBottom : '10px' }}>
                                {slide.images.map((image) => (
                                    <div key={image.name} className="p-2">
                                        <TechIcon src={image.src} name={image.name} link={image.link} />
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
              
              
            </div>
          </div>
        </div>
      </div>
      
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              
              
                <Carousel interval={2000} indicators={false}  /* Auto-cycle every 1000 ms, hide indicators, don't pause on hover, use fade transition */>
                    {slidesData2.map((slide) => (
                        <Carousel.Item key={slide.id}>
                            <h3>{slide.title}</h3>
                            <div className="d-flex justify-content-center" style={{marginBottom : '10px' }}>
                                {slide.images.map((image) => (
                                    <div key={image.name} className="p-2">
                                        <TechIcon src={image.src} name={image.name} link={image.link} />
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
              
              
            </div>
          </div>
        </div>
      </div>

    </section>
    
  );
};

//ACUERDATE LO DE LAS SECTIONSSSS
