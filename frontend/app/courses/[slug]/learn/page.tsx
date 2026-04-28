import CourseContent from "@/components/courses/CourseContent"
import { courseContent } from "@/lib/data/courseContent"
import { notFound } from "next/navigation"

export default async function LearnPage({params}: { params : Promise<{slug: string}> }) {

    const {slug} = await params
    const lessons = courseContent[slug as keyof typeof courseContent]

    if(!lessons) return notFound()

    return (
        <main className="bg-black text-white min-h-screen">
            <CourseContent lessons={lessons}/>
        </main>
    )
}
