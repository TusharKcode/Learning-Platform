import React from 'react'

export default function CourseDetailsSkeleton() {
    return (
        <div className='animate-pulse max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6'>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='h-64 bg-white/10 rounded-xl'/>
                <div className='space-y-4'>
                    <div className='h-6 w-1/2 bg-white/10 rounded'/>
                    <div className='h-4 w-3/4 bg-white/10 rounded'/>
                    <div className='h-4 w-2/3 bg-white/10 rounded'/>
                    <div className='h-10 w-40 bg-white/10 rounded'/>
                </div>
            </div>

            <div className='space-y-3'>
                <div className='h-5 w-40 bg-white/10 rounded'/>
                <div className='h-4 bg-white/10 rounded'/>
                <div className='h-4 bg-white/10 rounded w-5/6'/>
            </div>
        </div>
    )
}
