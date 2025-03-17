import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="w-full">
            <nav className="hidden md:flex justify-end items-center bg-transparent p-4">
                <ul className="flex gap-10 text-white text-lg font-semibold">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-400 transition-all`}><li>About</li></NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-400 transition-all`}><li>Portfolio</li></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-400 transition-all`}><li>Contact</li></NavLink>
                </ul>
            </nav>

            <div className="md:hidden flex justify-end items-center bg-gray-700 p-4 rounded-lg shadow-md">
                <button onClick={toggle} className="text-yellow-500 focus:outline-none">
                    {open ? <HiMenuAlt3 className="w-8 h-8" /> : <HiMenuAlt1 className="w-8 h-8" />}
                </button>
            </div>

            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
    );
};

export default Navbar;
