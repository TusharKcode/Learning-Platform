import CourseCarousel from '@/components/courses/CourseCarousel';
import CourseHeader from '@/components/courses/CourseHeader'
import CourseSearch from '@/components/courses/CourseSearch'

const demoCourses = [
    {
        title: "HTML in 30 Days",
        category: "HTML",
        slug: "html",
        duration: "30 Days",
        level: "Beginner",
        thumbnail: "/images/html.jpg",
        rating: 4.6,
    },
    {
        title: "CSS Mastery",
        category: "CSS",
        slug: "css",
        duration: "25 Days",
        level: "Intermediate",
        thumbnail: "/images/css.jpg",
        rating: 4.7,
    },
    {
        title: "JavaScript Basics",
        category: "JavaScript",
        slug: "javascript",
        duration: "40 Days",
        level: "Beginner",
        thumbnail: "/images/js.jpg",
        rating: 4.5,
    },
];

export default function CoursesPage() {
    return (
        <main className='flex-1'>

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
                    title='New Courses'
                    courses={demoCourses}
                />
            </div>
        </main>
    )
}
