"use client"

import {motion} from "framer-motion"
import CourseCard from "./CourseCard"

interface Course{
    title: string,
    category: string,
    duration: string,
    level: string,
    thumbnail: string,
    rating?: number,
    progress?: number
}

interface Props{
    title: string
    courses: Course[]
}

export default function CourseCarousel({title, courses}: Props) {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold mb-4 px-4">{title}</h2>

            <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.03}}
                        className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] snap-start"
                    >
                        <CourseCard {...course}/>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
