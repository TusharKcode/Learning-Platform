"use client";
import {motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import { FaAngular, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';

const floatingIcons = [
    {icon: FaVuejs, x: -135, y: -150},
    {icon: FaHtml5, x: -200, y: -100},
    {icon: FaCss3, x: 200, y: -120},
    {icon: FaAngular, x: 130, y: -90},
    {icon: FaJs, x: -250, y: 120},
    {icon: FaDatabase, x: -150, y: 50},
    {icon: FaReact, x: 250, y: 140},
    {icon: FaPython, x: 130, y: 130},
    {icon: FaJava, x: 185, y: 50},
]

export default function Hero(){
    return(
        <section className='relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white'>
            {/*Background glow*/}
            <div className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[100px] left-[100px]'/>
            <div className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full bottom-[100px] right-[100px]'/>

            {/*Background glow*/}
            {floatingIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{opacity:0}}
                        animate={{opacity:0.8}}
                        transition={{duration:1, delay:index*0.2}}
                        className='absolute text-xl text-white/70'
                        style={{x: item.x, y: item.y}}
                    >
                        <motion.div
                            animate={{y:[0, -20, 0]}}
                            transition={{duration:4, repeat:Infinity, ease:"easeInOut"}}
                        >
                            <Icon/>
                        </motion.div>
                    </motion.div>
                )
            })}

            {/*Main content*/}
            <div className='relative z-10 text-center px-6 max-w-3xl'>
                <motion.h1
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'
                >
                    Learn Skills in {""}
                    <span className='bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
                        30 days
                    </span>
                </motion.h1>
                <motion.p
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.2}}
                    className='mt-6 text-gray-400 sm:text-lg text-base'
                >
                    Structured learning paths designed to help you master technologies step-by-step with practicals.
                </motion.p>
                <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.4}}
                    className='mt-8'
                >
                    <Button className='px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition'>
                        Start Learning
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}