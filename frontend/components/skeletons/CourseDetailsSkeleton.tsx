import React from 'react'

export default function CourseDetailsSkeleton() {
    return (
        <div className='animate-pulse max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6'>

            <div className='grid md:grid-cols-2 gap-8'>
                <div className='h-64 md:h-80 bg-white/10 rounded-xl'/>
                
                <div className='space-y-4'>
                    <div className='h-4 w-24 bg-white/10 rounded'/>
                    <div className='h-6 w-3/4 bg-white/10 rounded'/>
                    <div className='h-4 w-full bg-white/10 rounded'/>
                    <div className='h-4 w-5/6 bg-white/10 rounded'/>
                    <div className='h-10 w-40 bg-white/10 rounded mt-4'/>
                </div>
            </div>

            <div className='space-y-4'>
                <div className='h-4 w-40 bg-white/10 rounded'/>
                <div className='grid sm:grid-cols-2 gap-3'>
                    <div className='h-16 bg-white/10 rounded'/>
                    <div className='h-16 bg-white/10 rounded'/>
                </div>
            </div>
        </div>
    )
}
