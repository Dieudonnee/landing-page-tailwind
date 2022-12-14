import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
    const links = [
        {
            name: "home",
            link: "/"
        }, {
            name: "About",
            link: "/"
        }, {
            name: "contact",
            link: "/"
        }, {
            name: "location",
            link: "/"
        }
  ];
  let [open,setOpen]=useState(false)
    return (
        <div className="relative container mx-auto p-6 ">
            <div className="md:flex item-center justify-between md:px-10 ">
                <div className="pt-1 font-bold text-2xl cursor pointer">
                 
                    <h2 className="font-bold ">Xperts.</h2>
          </div>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
          <ul className={`  md:flex md:items-center md:pb-0 pb-12 font-sans 
                            absolute md:static  md:z-auto bg-gray-100 z-[50] left-0 
                            w-full md:w-auto md:pl-0 pl-9 transition-all
                            duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {links.map((nav) => (
                        <li className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={nav.name} className="text-gray-800 hover:text-gray-400 duration-300">{nav.name}</a>
                        </li>
                    ))}
            <Button>Get Started</Button>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
