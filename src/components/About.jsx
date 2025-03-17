import React from 'react';
import Navbar from './Navbar';
import avatar from "../assets/avatar.webp";
import { techStack } from './data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='md:rounded-xl bg-gray-800 md:m-7 flex-1 p-7'>
            <Navbar />

            <div className='mt-7'>
                <motion.h1 
                    className='text-white font-bold text-3xl mb-2'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h1>
                
                <motion.hr 
                    className='border-3 text-yellow-500 w-12 rounded-4xl'
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                />

                <div className='mt-5 md:hidden'>
                    <motion.img 
                        src={avatar} 
                        alt="Avatar" 
                        className='bg-gray-700 rounded-2xl' 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1 }} 
                    />
                </div>

                <motion.p 
                    className='mt-4 text-gray-300 text-xl font-semibold'
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Hi, my name is Kevin Christman Lumban Tobing. I am currently pursuing a D3 in Information Systems at UPN Veteran Jakarta. 
                    I have a strong interest in web development, and right now, I am focusing on learning front-end web development.
                </motion.p>

                <motion.p 
                    className='mt-2 text-gray-300 text-xl font-semibold'
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    I have experience working with React.js, Tailwind CSS, HTML, CSS, and JavaScript to build responsive and modern web applications. 
                    I am always eager to learn new technologies and improve my skills in web development. Let's learn and grow together! 🚀
                </motion.p>

                <motion.h1 
                    className='text-2xl text-white font-bold mt-7'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Tech Stack
                </motion.h1>

                <motion.div 
                    className='grid md:grid-cols-2 gap-6 mt-7'
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.3, duration: 1 }
                        }
                    }}
                    viewport={{ once: true }}
                >
                    {techStack.map((tech, index) => (
                        <motion.div 
                            className='bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl' 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
                            }}
                        >
                            <motion.div 
                                className='text-6xl text-yellow-500' 
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                {tech.icon}
                            </motion.div>
                            
                            <div className='w-full'>
                                <h1 className='font-bold text-2xl'>{tech.name}</h1>
                                <div className="w-full bg-gray-600 rounded-full h-4 mt-2">
                                    <motion.div 
                                        className="bg-yellow-500 h-4 rounded-full" 
                                        style={{ width: `${tech.percentage}%` }}
                                        initial={{ width: "0%" }} 
                                        whileInView={{ width: `${tech.percentage}%` }} 
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <motion.p 
                                    className='text-xl text-gray-300 mt-1'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2 }}
                                    viewport={{ once: true }}
                                >
                                    {tech.percentage}%
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default About;
