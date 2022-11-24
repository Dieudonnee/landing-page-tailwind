import React from 'react';
import Button from './Button';
import NavLinks from './NavLinks';

const Nav = () => {

    return (
        <div className='bg-white'>
            <div className='flex items-center font-medium justify-around py-3'>
                <div>
                    <h1 className=' cursor-pointer font-bold font-xl py-3 '>Commerce.
                    </h1>
                </div>
                <ul className='hidden md:flex uppercase items-center gap-8 font-sans'>
                    <li to="/" className='py-7 px-3 inline-block'>Shop
                    </li>
                    <NavLinks/>
                </ul>
                <div>
                    <Button/>
                </div>
                {/* for mobile */}

                <ul className=' bg-white absolute py-24 pl-4  buttom-0 md:hidden'>
                    <li className='py-7 px-3 inline-block'>Shop</li>
                    <NavLinks/>
                    <div className='py-5'>

                        <Button/>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Nav;
