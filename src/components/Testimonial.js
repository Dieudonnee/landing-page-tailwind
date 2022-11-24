import React from "react";
import {testimonialsData} from "../data"

const Testimonial = () => {

    return (

      <section id="testimonial">
        
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2>What's different About Counstruction?</h2>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                {
    testimonialsData.map((TData, index) => {
    
      const { image, name, message, web, delay } = TData;
      return (
       
        <div  className=" flex flex-col items-center p-6 mb-12 space-y-12 rounded-lg bg-veryLightGray  md:w-1/3">
            <img src={image} className="w-16 -mt-14 " alt=""/>
            <h5 className="text-lg font-bold">{name}</h5>
            <p className="text-sm text-darkGrayBlue">
                {message}
               
            </p>
        </div>

      )
      
      
  })}
                  </div>
            </div>
        </section>
    );
};

export default Testimonial;
