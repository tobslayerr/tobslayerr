import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (!name || !email || !message) {
            alert("Harap isi semua kolom sebelum mengirim pesan.");
            return;
        }

        const formattedMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=6288212098241&text=${formattedMessage}`;

        window.open(whatsappURL, '_blank'); 
    };

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
                    Contact Me
                </motion.h1>

                <motion.hr
                    className='border-3 text-yellow-500 w-12 rounded-4xl'
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                <motion.div
                    className='mt-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4703.987200261364!2d106.79238557573251!3d-6.316076661809138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee229acb972d%3A0x2e74d2fa25f612e2!2sFaculty%20of%20Computer%20Science%20-%20Pembangunan%20Nasional%20%22Veteran%22%20Jakarta%20University!5e1!3m2!1sen!2sid!4v1742118899662!5m2!1sen!2sid"
                        width="600"
                        height="450"
                        loading="lazy"
                        className='w-full rounded-2xl'
                    ></iframe>
                </motion.div>

                <motion.div
                    className='mt-10'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>

                    <motion.div
                        className='grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 my-7'
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2, duration: 1 }
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.input
                            type="text"
                            placeholder='Full Name'
                            className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <motion.input
                            type="email"
                            placeholder='Email Address'
                            className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </motion.div>

                    <motion.textarea
                        rows={4}
                        cols={50}
                        placeholder='Your Message'
                        className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></motion.textarea>

                    <motion.div
                        className='flex justify-end mt-7'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer transition transform hover:scale-105 hover:bg-yellow-500 hover:text-gray-900'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={sendMessage}
                        >
                            <FaPaperPlane /> Send Message
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

