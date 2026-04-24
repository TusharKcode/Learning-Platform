"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import { Star, Users } from "lucide-react"

type CourseDetailsType = {
    title: string
    category: string
    duration: string
    level: string
    rating: number
    students: number
    thumbnail: string
    description: string
    outcomes: string[]
    curriculum: string[]
    certificate?: boolean
}

export default function CourseDetails({data} : {data? : CourseDetailsType}) {

    if(!data){
        return(
            <div className="text-center py-20 text-gray-400">
                Course not found
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

            <div className="grid md:grid-cols-2 gap-8 items-center">

                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                        src={data.thumbnail}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <span className="text-indigo-400 text-sm">
                        {data.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold mt-2">
                        {data.title}
                    </h1>
                    <p className="text-gray-400 mt-3">
                        {data.description}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center gap-1 text-yellow-400">
                            <Star size={16} fill="currentColor"/>
                            {data.rating}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                            <Users size={16}/>
                            {data.students}+ students
                        </span>
                    </div>

                    <div className="flex gap-3 mt-4 text-xs text-gray-400">
                        <span>{data.duration}</span>
                        <span>{data.level}</span>
                    </div>

                    <Button className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600">
                        Start Course
                    </Button>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">
                    What you will learn
                </h2>

                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                    {data.outcomes.map((item: string, i: number) => (
                        <li key={i} className="bg-white/5 p-3 rounded-lg">
                            ✓ {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">
                    Course Content
                </h2>

                <div className="space-y-3">
                    {data.curriculum.map((item: string, i: number) => (
                        <motion.div 
                            key={i} 
                            whileHover={{scale: 1.01}}
                            className="bg-white/5 p-3 rounded-lg text-sm"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>

            {data.certificate && (
                <div className="mt-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold">
                        Certificate of Completion
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Get a certificate after completing the course
                    </p>
                </div>
            )}
        </div>
    )
}

