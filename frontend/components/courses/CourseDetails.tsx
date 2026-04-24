"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import { Star, Users } from "lucide-react"
import { useState } from "react"
// import CourseCarousel from "./CourseCarousel"

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

    const [tab, setTab] = useState("overview")

    if(!data){
        return(
            <div className="text-center py-20">
                <h2 className="text-lg font-semibold text-white">Course not found</h2>
                <p className="text-gray-400 text-sm mt-2">
                    This course may not exist or is under development.
                </p>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            {/* Hero */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
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

                    <Button className="mt-6 px-6 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
                        Start Course
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-10 flex gap-6 text-sm border-b border-white/10">
                {["overview", "curriculum", "certificate"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`pb-3 capitalize transition relative ${
                            tab === t
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {t}
                        {tab === t && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-500"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tabs Info */}
            <div className="mt-10">

                {/* overview */}
                {tab === "overview" && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                What you will learn
                            </h2>

                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                                {data.outcomes.map((item, i) => (
                                    <li key={i} className="bg-white/5 p-3 rounded-lg">
                                        ✓ {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}

                {/* curriculum */}
                {tab === "curriculum" && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="space-y-6"
                    >
                        {data.curriculum.map((item, i) => (
                            <div 
                                key={i} 
                                className="bg-white/5 p-3 rounded-lg text-sm hover:bg-white/10"
                            >
                                {item}
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* certificate */}
                {tab === "certificate" && data.certificate && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-semibold">
                            Certificate of Completion
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Get a certificate after completing the course
                        </p>
                    </motion.div>
                )}
            </div>
            {/* <div className="mt-16">
                <h2 className="text-xl font-semibold mb-4">Related Courses</h2>
                <CourseCarousel title=""/>
            </div> */}
        </div>
    )
}

