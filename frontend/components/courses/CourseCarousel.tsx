"use client"

import {motion} from "framer-motion"
import CourseCard from "./CourseCard"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    const scrollRef = useRef<HTMLDivElement>(null)
    const scroll = (dir : "left" | "right") => {
        if(!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full relative">
            <div className="flex items-center justify-between px-4 mb-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex gpa-2">
                    <button onClick={() => scroll("left")} className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                        <ChevronLeft size={18}/>
                    </button>
                    <button onClick={() => scroll("right")} className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                        <ChevronRight size={18}/>
                    </button>
                </div>
            </div>

            <div 
                className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide scroll-smooth"
                ref={scrollRef}
            >
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px]"
                    >
                        <CourseCard {...course}/>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
