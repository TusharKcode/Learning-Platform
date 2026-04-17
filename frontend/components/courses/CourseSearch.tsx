"use client"

import { courses } from "@/lib/data/courses"
import { Input } from "@base-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"


export default function CourseSearch() {

    const [query, setQuery] = useState("")
    const filteredCourses = courses.filter((course) => 
        course.category.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="w-full max-w-4xl mx-auto relative px-4">

            {/* Search Box */}
            <div className="relative group">

                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-focus-within:opacity-100 blur transition"/>
                {/* Input */}
                <div className="relative flex items-center w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <Search
                        size={18}
                        className="text-gray-400 mr-2"
                    />
                    <Input
                        placeholder="Search Courses (HTML, React, Python)..."
                        className="w-full bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-gray-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            
            {/* Suggestions Dropdown*/}
            <AnimatePresence>
                {query && (
                    <motion.div
                        initial={{opacity:0, y:8}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:8}}
                        className="absolute w-full mt-3 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                        {filteredCourses.length > 0 ? (
                            filteredCourses.slice(0,6).map((course) => (
                                <div
                                    key={course.id}
                                    className="px-4 py-3 flex items-center justify-between hover:bg-white/10 cursor-pointer transition"
                                >
                                    <span className="text-sm">{course.title}</span>
                                    <span className="text-xs text-gray-400">{course.category}</span>
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-sm text-gray-400">No result found</div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
