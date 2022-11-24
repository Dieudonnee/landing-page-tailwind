import React from 'react';
import {ctaData} from '../data'
const {title, subtitle, btnText1, btnText2} = ctaData

const CtaSection = () => {
    return (
        <section id='cta'
            className='  bg-gray-300  p-4  flex flex-col items-center md:p-0 m-0 md:m-0 '>
            <div className='flex flex-col items-center pt-8 '>
                <h3 className='font-xl font-bold md:font-lg md:font-extrabold  '>{title}</h3>
                <h4 className='font-sx pb-4 '>{subtitle}</h4>

            </div>
            <div  className='flex flex-row items-center '>
                <button className='bg-red-200 border p-6 rounded-lg  py-2 m-3'>{btnText1}</button>
                <button className='bg-red-200 border p-6 rounded-lg py-2 m-3'>{btnText2}</button>
            </div>

        </section>
    );
};

export default CtaSection;
