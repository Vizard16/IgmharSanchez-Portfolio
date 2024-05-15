import React from "react";
import Slider from "react-slick";

import { TechIcon } from "./misc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colorSharp from "../assets/img/color-sharp.png";

export default function SimpleSlider() {
  const techs = [
    // ... your techs array with image paths and names
    {
      src: "/images/langs/svelte.png",
      padding: "p-10",
      name: "Svelte",
      link: "https://svelte.dev",
    }
  ];

  const settings = {
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
    
  );
};