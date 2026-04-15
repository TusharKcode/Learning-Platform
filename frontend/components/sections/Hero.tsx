"use client";
import {motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import { FaAngular, FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';

const floatingIcons = [
    {icon: FaVuejs, x: "10%", y: "20%"},
    {icon: FaHtml5, x: "20%", y: "10%"},
    {icon: FaCss3, x: "80%", y: "15%"},
    {icon: FaAngular, x: "70%", y: "25%"},
    {icon: FaJs, x: "15%", y: "75%"},
    {icon: FaDatabase, x: "25%", y: "60%"},
    {icon: FaReact, x: "80%", y: "80%"},
    {icon: FaPython, x: "70%", y: "75%"},
    {icon: FaJava, x: "80%", y: "55%"},
]

export default function Hero(){
    return(
        <section className='relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white'>
            {/*Background glow*/}
            <div className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[100px] left-[100px]'/>
            <div className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full bottom-[100px] right-[100px]'/>

            {/*Icon Container*/}
            {floatingIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{opacity:0}}
                        animate={{opacity:0.8}}
                        transition={{duration:1, delay:index*0.2}}
                        className={`absolute text-2xl sm:text-3xl md:text-4xl text-white/20
                            ${index > 5 ? "hidden sm:block" : ""}`}
                        style={{left: item.x, top: item.y, transform: "translate(-50%, -50%)"}}
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