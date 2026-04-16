"use client"

import {motion} from "framer-motion"

const categories = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Python",
    "Java",
    "React",
    "Angular",
    "Vue",
    "Node",
    "MongoDB"
]

export default function CourseHeader() {
    return (
        <div className="w-full bg-black text-white border-b border-white/10 overflow-x-auto">
            <div className="flex gap-6 px-4 py-3 min-w-max">
                {categories.map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{scale: 1.05}}
                        className="text-sm whitespace-nowrap px-3 py-1 rounded-md hover:bg-white/10 transition"
                    >
                        {item}
                    </motion.button>
                ))}
            </div>
        </div>
    )
}
