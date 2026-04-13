"use client";
import {motion} from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='w-full bg-black text-white border-t border-white/10'>
            <div className='max-w-4xl mx-auto px-6 py-10'>

                    {/* Top Section */}
                <div className='flex flex-col md:flex-row justify-between gap-10'>

                    {/* Branding (Info) */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Learnify
                        </h2>
                        <p className='mt-3 text-gray-400 max-w-sm text-sm'>
                            Learning skills in a structured and practical way with our 30-day learning path
                            designed for real-world success.
                        </p>
                    </motion.div>
                    
                    {/* Quick Links */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                    >
                        <h3 className='font-semibold mb-3'>Quick Links</h3>
                        <ul className='space y-2 text-gray-400 text-sm'>
                            <li className='hover:text-white cursor-pointer transition'>Home</li>
                            <li className='hover:text-white cursor-pointer transition'>Courses</li>
                            <li className='hover:text-white cursor-pointer transition'>About</li>
                            <li className='hover:text-white cursor-pointer transition'>FAQs</li>
                        </ul>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                    >
                        <h3 className='font-semibold mb-3'>Follow Us</h3>
                        <div className='flex gap-4 text-gray-400 text-xl'>
                            <FaGithub className='hover:text-white cursor-pointer transition'/>
                            <FaLinkedin className='hover:text-white cursor-pointer transition'/>
                            <FaInstagram className='hover:text-white cursor-pointer transition'/>
                        </div>
                    </motion.div>
                </div>
                {/* Bottom Section */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="mt-10 pt-6 bg-black text-center text-gray-500 text-sm border-t border-white/10"
                >
                    © {new Date().getFullYear()} Learnify. All rights reserved.
                </motion.div>
            </div>
        </footer>
    )
}
