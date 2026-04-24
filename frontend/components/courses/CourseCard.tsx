"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface CourseCardProps{
    title: string,
    category: string,
    slug: string,
    duration: string,
    level: string,
    thumbnail: string,
    rating?: number,
    progress?: number
}

export default function CourseCard({
    title,
    category,
    slug,
    duration,
    level,
    thumbnail,
    rating = 4.5,
    progress
}: CourseCardProps) {

    const [loading, setLoading] = useState(true)

    return (
        <Link href={`/courses/${slug}`} className="block h-full">
            <motion.div
                whileHover={{y: -6}}
                className="group relative bg-black/60 border border-white/10 rounded-xl backdrop-blur-md transition overflow-hidden h-full"
            >

            <div className="relative w-full h-40">
                {loading && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse"/>
                )}
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    onLoad={() => setLoading(false)}
                    className="object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"/>

            <div className="p-4">
                <span className="text-xs text-indigo-400 font-medium">
                    {category}
                </span>

                <h3 className="mt-1 text-base font-semibold line-clamp-2">
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

                <Button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                    Explore Content
                </Button>    
            </div>
            </motion.div>
        </Link>
    )
}
