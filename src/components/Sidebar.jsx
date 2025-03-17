import React from 'react';
import avatar from "../assets/avatar.webp";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 h-screen w-[350px] rounded-xl m-7 hidden md:block shadow-lg">
            <div className="p-6">
                <div className="flex items-center justify-center">
                    <img src={avatar} alt="Profile" className="w-[180px] bg-gray-700 rounded-2xl shadow-md" />
                </div>

                <h1 className="text-white font-bold text-center text-2xl mt-4">Kevin Christman Lumban Tobing</h1>
                <p className="text-white bg-gray-700 rounded-md py-2 text-center mx-6 mt-3">Front-End Web Developer</p>

                <hr className="border-gray-700 my-6" />

                <div className="space-y-6">
                    <div className="flex gap-3 items-center">
                        <div className="bg-gray-700 p-2 rounded-md shadow">
                            <FaRegEnvelope className="text-yellow-500 text-2xl" />
                        </div>
                        <div className="text-white">
                            <h1 className="font-semibold">EMAIL</h1>
                            <a href="mailto:kevintobinggaming@gmail.com" className="text-gray-300 text-sm hover:text-yellow-400 transition-all">
                                kevintobinggaming@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-gray-700 p-2 rounded-md shadow">
                            <MdOutlinePhoneIphone className="text-yellow-500 text-2xl" />
                        </div>
                        <div className="text-white">
                            <h1 className="font-semibold">PHONE</h1>
                            <p className="text-gray-300">+62 882 1209 8241</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-gray-700 p-2 rounded-md shadow">
                            <FaRegCalendarAlt className="text-yellow-500 text-2xl" />
                        </div>
                        <div className="text-white">
                            <h1 className="font-semibold">BIRTHDAY</h1>
                            <p className="text-gray-300">21 July, 2006</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-gray-700 p-2 rounded-md shadow">
                            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
                        </div>
                        <div className="text-white">
                            <h1 className="font-semibold">LOCATION</h1>
                            <p className="text-gray-300">Jakarta, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
