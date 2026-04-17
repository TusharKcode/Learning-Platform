import CourseCard from '@/components/courses/CourseCard';
import CourseHeader from '@/components/courses/CourseHeader'
import CourseSearch from '@/components/courses/CourseSearch'

const demoCourses = [
    {
        title: "HTML in 30 Days",
        category: "HTML",
        duration: "30 Days",
        level: "Beginner",
    },
    {
        title: "CSS Mastery",
        category: "CSS",
        duration: "25 Days",
        level: "Intermediate",
    },
    {
        title: "JavaScript Basics",
        category: "JavaScript",
        duration: "40 Days",
        level: "Beginner",
    },
];

export default function CoursesPage() {
    return (
        <main className='bg-black min-h-screen text-white'>
            <CourseHeader/>
            <div className='px-6'>
                <h1 className='text-2xl font-bold mb-6'>Explore Courses</h1>
            </div>
            <CourseSearch/>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {demoCourses.map((course, index) => (
                    <CourseCard key={index} {...course}/>
                ))}
            </div>
        </main>
    )
}
