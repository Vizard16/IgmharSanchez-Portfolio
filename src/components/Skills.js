import React from "react";
import { Carousel } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png";
import { TechIcon } from "./misc"; // Ensure this imports correctly as per your project structure

export const Skills = () => {
  const techs = [
    { src: "/images/langs/svelte.png", name: "Svelte", link: "https://svelte.dev" },
    { src: "https://skillicons.dev/icons?i=git", name: "Svelte", link: "https://svelte.dev" },
    // Add more items as needed
  ];

  const slidesData = [
    {
        id: 1,
        images: [
            { src: "/images/langs/svelte.png", alt: "Svelte", name: "Svelte",  link: "https://svelte.dev" },
            { src: "https://skillicons.dev/icons?i=git", alt: "React", name: "React" },
            { src: "/images/langs/vue.png", alt: "Vue", name: "Vue" },
            { src: "https://skillicons.dev/icons?i=git", alt: "React", name: "React" }
        ]
    },
    {
        id: 2,
        images: [
            { src: "/images/langs/angular.png", alt: "Angular", name: "Angular" },
            { src: "/images/langs/ember.png", alt: "Ember", name: "Ember" },
            { src: "/images/langs/backbone.png", alt: "Backbone", name: "Backbone" }
        ]
    },
    {
        id: 3,
        images: [
            { src: "/images/langs/django.png", alt: "Django", name: "Django" },
            { src: "/images/langs/flask.png", alt: "Flask", name: "Flask" },
            { src: "/images/langs/ruby.png", alt: "Ruby on Rails", name: "Rails" }
        ]
    }
];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h3>Programming Languages</h3>
              <Carousel interval={3000}> {/* Auto-cycle every 3000 ms */}
                  {slidesData.map((slide) => (
                      <Carousel.Item key={slide.id}>
                          <div className="d-flex justify-content-center">
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
              <h3>Technologies</h3>
              <Carousel interval={3000}> {/* Auto-cycle every 3000 ms */}
                  {slidesData.map((slide) => (
                      <Carousel.Item key={slide.id}>
                          <div className="d-flex justify-content-center">
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
