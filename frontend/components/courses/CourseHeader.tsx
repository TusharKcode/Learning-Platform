"use client"

import {motion} from "framer-motion"
import { useRouter } from "next/navigation"

const categories = [
    "HTML", "CSS", "JavaScript", "SQL", "Python", "Java", "React", "Angular", "Vue",
    "Node", "MongoDB"
]

export default function CourseHeader() {

    const router = useRouter()

    return (
        <div className="w-full bg-black text-white border-b border-white/10 overflow-x-auto">
            <div className="flex gap-6 px-4 py-3 min-w-max">
                {categories.map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{scale: 1.05}}
                        onClick={() => router.push(`/courses/${item.toLowerCase()}`)}
                        className="text-sm whitespace-nowrap px-4 py-1.5 rounded-full hover:bg-white/10 transition"
                    >
                        {item}
                    </motion.button>
                ))}
            </div>
        </div>
    )
}
