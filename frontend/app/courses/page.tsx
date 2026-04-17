import CourseCarousel from '@/components/courses/CourseCarousel';
import CourseHeader from '@/components/courses/CourseHeader'
import CourseSearch from '@/components/courses/CourseSearch'

const demoCourses = [
    {
        title: "HTML in 30 Days",
        category: "HTML",
        duration: "30 Days",
        level: "Beginner",
        thumbnail: "/images/html.jpg",
        rating: 4.6,
        progress: 40,
    },
    {
        title: "CSS Mastery",
        category: "CSS",
        duration: "25 Days",
        level: "Intermediate",
        thumbnail: "/images/css.jpg",
        rating: 4.7,
    },
    {
        title: "JavaScript Basics",
        category: "JavaScript",
        duration: "40 Days",
        level: "Beginner",
        thumbnail: "/images/js.jpg",
        rating: 4.5,
    },
];

export default function CoursesPage() {
    return (
        <main className='bg-black min-h-screen text-white'>

            <CourseHeader/>

            <div className='px-4 sm:px-6 mt-6'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-6'>Explore Courses</h1>
                <CourseSearch/>
            </div>

            <div className='mt-10 space-y-10'>
                <CourseCarousel
                    title='Popular Courses'
                    courses={demoCourses}
                />

                <CourseCarousel
                    title='Continue learning'
                    courses={demoCourses}
                />

                <CourseCarousel
                    title='New Courses'
                    courses={demoCourses}
                />
            </div>
        </main>
    )
}
