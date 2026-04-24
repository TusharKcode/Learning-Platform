import React from 'react'

export default function CourseDetailsSkeleton() {
    return (
        <div className='animate-pulse px-4 sm:px-6 py-10 space-y-6'>
            <div className='h-64 bg-white/10 rounded-xl'/>

            <div className='h-6 w-1/2 bg-white/10 rounded'/>
            <div className='h-4 w-3/4 bg-white/10 rounded'/>

            <div className='space-y-3'>
                <div className='h-4 bg-white/10 rounded'/>
                <div className='h-4 bg-white/10 rounded w-5/6'/>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className='h-24 bg-white/10 rounded'/>
                <div className='h-24 bg-white/10 rounded'/>
            </div>    
        </div>
    )
}
