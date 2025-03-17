import React from 'react';
import Navbar from './Navbar';
import { projects } from './data';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Portfolio = () => {
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
          Portfolio
        </motion.h1>

        <motion.hr
          className='border-3 text-yellow-500 w-12 rounded-4xl'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              <div className='p-6'>
                <motion.h3
                  className='text-2xl font-semibold text-gray-300 mb-2'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className='text-gray-300 mb-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className='flex flex-wrap gap-2 mb-4'
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
                  {project.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'
                      variants={{
                        hidden: { opacity: 0, scale: 1 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>

                <div className='flex flex-col sm:flex-row gap-3'>
                  <motion.a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    View Project
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 justify-center items-center bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md transition-colors text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
