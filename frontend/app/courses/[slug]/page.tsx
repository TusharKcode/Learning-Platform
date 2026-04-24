import { courseDetails } from '@/lib/data/courseDetails'
import CourseDetails from '@/components/courses/CourseDetails'
import { notFound } from 'next/navigation';

export default async function page({params}: {params: Promise<{slug: string}>}) {

    const { slug } = await params;
    const data = courseDetails[slug as keyof typeof courseDetails]

    if(!data) return notFound()

    return (
        <main>
            <CourseDetails data = {data}/>
        </main>
    )
}
