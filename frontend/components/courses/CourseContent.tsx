"use client"
import { useState } from "react"

type Lesson = {
    id: number
    title: string
    video: string
    content: string
}

export default function CourseContent({ lessons } : {lessons: Lesson[]}) {

    const [active, setActive] = useState(lessons[0])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-3 gap-6">

            {/* Left Lesson List */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 h-[500px] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Course Content</h2>

                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        onClick={() => setActive(lesson)}
                        className={`p-3 rounded-lg cursor-pointer text-sm transition ${
                            active.id === lesson.id
                                ? "bg-indigo-500/20 text-white"
                                : "hover:bg-white/10 text-gray-400"
                        }`}
                    >
                        {lesson.title}
                    </div>
                ))}
            </div>

            {/* Right Lesson Video */}
            <div className="md:col-span-2 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">{active.title}</h3>
                    <p className="text-gray-400 mt-2">{active.content}</p>
                </div>
                
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                    <iframe
                        src={active.video}
                        title={active.title}
                        className="w-full h-full"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}