"use client"

import { courses } from "@/lib/data/courses"
import { Input } from "@base-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"


export default function CourseSearch() {

    const [query, setQuery] = useState("")
    const filteredCourses = courses.filter((course) => 
        course.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="w-full max-w-xl max-auto relative">

            {/* Input */}
            <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-3 py-2">
                <Search
                    size={18}
                    className="text-gray-400"
                />
                <Input
                    placeholder="bg-transparent border-none focus-visible:ring-0 text-white"
                    className="Search Courses....."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* Suggestions */}            
            <AnimatePresence>
                {query && filteredCourses.length > 0 && (
                    <motion.div
                        initial={{opacity:0, y:10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:10}}
                        className="absolute w-full mt-2 bg-black border border-white/10 rounded-lg shadow-lg z-50"
                    >
                        {filteredCourses.slice(0,5).map((course) => (
                            <div
                                key={course.id}
                                className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm"
                            >
                                {course.title}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* No result */}            
            <AnimatePresence>
                {query && filteredCourses.length === 0 && (
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        className="absolute w-full mt-2 bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400"
                    >
                        No results found
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
