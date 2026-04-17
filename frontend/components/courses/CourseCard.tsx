"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"

interface CourseCardProps{
    title: string,
    category: string,
    duration: string,
    level: string
}

export default function CourseCard({
    title,
    category,
    duration,
    level
}: CourseCardProps) {
    return (
        <motion.div
            whileHover={{y: -5}}
            className="group relative bg-black/60 border border-white/10 rounded-xl p-5 backdrop-blur-md transition overflow-hidden"
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"/>

            <div className="relative z-10">
                <span className="text-xs indigo-400 font-medium">
                    {category}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white line-clamp-2">
                    {title}
                </h3>

                <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                    <span>{duration}</span>
                    <span>{level}</span>
                </div>

                <div className="mt-5">
                    <Button className="w-full hover:opacity-90 transition bg-gradient-to-r from-indigo-500 to-purple-600">
                        Start Learning
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
