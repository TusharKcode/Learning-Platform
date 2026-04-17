"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"

interface CourseCardProps{
    title: string,
    category: string,
    duration: string,
    level: string,
    thumbnail: string,
    rating?: number,
    progress?: number
}

export default function CourseCard({
    title,
    category,
    duration,
    level,
    thumbnail,
    rating = 4.5,
    progress
}: CourseCardProps) {
    return (
        <motion.div
            whileHover={{y: -6}}
            className="group relative bg-black/60 border border-white/10 rounded-xl backdrop-blur-md transition overflow-hidden"
        >

            <div className="relative w-full h-40 overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-115 transition duration-300"
                />
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"/>

            <div className="relative z-10 p-4">
                <span className="text-xs text-indigo-400 font-medium">
                    {category}
                </span>

                <h3 className="mt-1 text-base font-semibold text-white line-clamp-2">
                    {title}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-sm text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span>{rating}</span>
                </div>

                <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                    <span>{duration}</span>
                    <span>{level}</span>
                </div>

                {progress !== undefined && (
                    <div className="mt-3">
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                                style={{width: `${progress}%`}}
                            />
                        </div>
                        <span className="text-xs text-gray-400 mt-1 inline-block">
                            {progress}% completed
                        </span>
                    </div>
                )}

                <Button className="w-full mt-4 hover:opacity-90 transition bg-gradient-to-r from-indigo-500 to-purple-600">
                    {progress ? "Continue" : "Start Learning"}
                </Button>    
            </div>
        </motion.div>
    )
}
