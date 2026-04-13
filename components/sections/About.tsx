"use client";
import {motion} from 'framer-motion'

export default function About(){
    return(
        <section className='w-full py-20 bg-black text-white'>
            <div className='max-w-5xl mx-auto px-6 text-center'>
                <motion.h2
                    initial={{opacity:0, y:30}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.6}}
                    className='text-3xl sm:text-4xl font-bold'
                >
                    About {" "}
                    <span>Learnify</span>
                </motion.h2>
                <motion.p
                    initial={{opacity:0, y:30}}
                    whileInView={{opacity:1, y:0}}
                    transition={{delay:0.2}}
                    className='mt-6 text-gray-400 text-base sm:text-lg leading-relaxed'
                >
                    Learnify is modern learning platform designed ot help you master skills in a 
                    structured and practical way. Instead of overwhelming content, we break down complex topics 
                    into simple, day-by-day learning paths.
                </motion.p>
                <motion.p
                    initial={{opacity:0, y:30}}
                    whileInView={{opacity:1, y:0}}
                    transition={{delay:0.2}}
                    className='mt-4 text-gray-400 text-base sm:text-lg leading-relaxed'
                >
                    Whether you are learnign HTML, JavaScript or advanced technologies, our goal is to
                    make your journey consistent, focused and effective - helping you build real skills 
                    in just 30 days.
                </motion.p>
            </div>
        </section>
    )
}