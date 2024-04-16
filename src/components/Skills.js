import React from "react";
import Slider from "react-slick";

import { TechIcon } from "./misc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const techs = [
    // ... your techs array with image paths and names
    {
      src: "/images/langs/svelte.png",
      padding: "p-10",
      name: "Svelte",
      link: "https://svelte.dev",
    },
  ];

  const settings = 
    // ... your settings object from SimpleSlider
    {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 10,
      cssEase: "linear",
      vertical: false,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
  };


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Slider {...settings} className="mx-6 w-full -mt-2">
                          {techs.map((tech) => (
                            <TechIcon
                              key={tech.name}
                              src={tech.src}
                              padding={tech.padding}
                              name={tech.name}
                              link={tech.link}
                            />
                          ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};