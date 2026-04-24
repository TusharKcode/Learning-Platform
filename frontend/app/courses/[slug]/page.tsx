import { courseDetails } from '@/lib/data/courseDetails'
import CourseDetails from '@/components/courses/CourseDetails'

export default async function page({params}: {params: Promise<{slug: string}>}) {

    const { slug } = await params;
    const data = courseDetails[slug as keyof typeof courseDetails]

    return (
        <main>
            <CourseDetails data = {data}/>
        </main>
    )
}
