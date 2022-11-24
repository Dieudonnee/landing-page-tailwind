import React from "react";
import {heroData} from "../data";
import HeroImage from "../assets/img/Hero.svg"
const {image, title, subtitle, btnText} = heroData;
const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md  text-4xl font-bold text-center md:text-left md:text-5xl">
            {title}
          </h1>
          <p className="max-w-sm text text-center text-gray-500 md:text-left">
            Manage your budget by building affordable house for rent
            {subtitle}
          </p>
          <div className="flex justify-center md:justify-start">
          <a href="*" className="p-1 px-6 pt-1 rounded-full bg-red-300 text-white baseline sx md:block hidden ">Register</a>
      
          </div>
        </div>
        <div className="md:w-1/2 pb-8">
          <img src={HeroImage} alt=""/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
