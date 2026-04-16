import CourseHeader from '@/components/courses/CourseHeader'
import CourseSearch from '@/components/courses/CourseSearch'

export default function CoursesPage() {
    return (
        <main className='bg-black min-h-screen text-white'>
            <CourseHeader/>
            <div className='px-6'>
                <h1 className='text-2xl font-bold mb-6'>Explore Courses</h1>
            </div>
            <CourseSearch/>
        </main>
    )
}
