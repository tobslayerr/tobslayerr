import React from 'react'
import avatar from "../assets/Avatar.webp"
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-600 px-4 pb-6 pt-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div className='bg-gray-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <img src={avatar} alt="" className='w-[200px] bg-gray-700 rounded-2xl' />
                </div>
                <h1 className='text-white font-bold text-center text-2xl my-2'>Kevin Christman Lumban Tobing</h1>
                <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>Front-End Web Developer</p>
                <hr className='text-gray-700 mx-4 border-2' />

                <nav className='mt-5'>
                    <ul className='flex flex-wrap text-center gap-2 items-center justify-center text-white text-xl font-semibold'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={'/portfolio'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`}><li>Portfolio</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>
                </nav>

                <div className='mt-7 px-4 space-y-7'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegEnvelope className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>EMAIL</h1>
                            <p className='text-gray-200 text-sm'>kevintobinggaming@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <MdOutlinePhoneIphone className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>PHONE</h1>
                            <p className='text-gray-200'>+62 882-1209-8241</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegCalendarAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>BIRTHDAY</h1>
                            <p className='text-gray-200'>21 July, 2006</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaMapMarkerAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>LOCATION</h1>
                            <p className='text-gray-200'>Jakarta, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
