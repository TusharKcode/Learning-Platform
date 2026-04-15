import React from 'react'
import Skeleton from '../ui/skeleton'

export default function AboutSkeleton() {
    return (
        <section className='py-20 bg-black w-full px-6'>
            <div className='max-w-4xl mx-auto space-y-6 text-center'>
                {/* Title */}
                <Skeleton className='h-8 w-1/2 mx-auto'></Skeleton>

                {/* Sub-Title */}
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-5/6 mx-auto'></Skeleton>
        
                {/* Button */}
                <Skeleton className='h-5 w-4/6 mx-auto'></Skeleton>
            </div>
        </section>
    )
}
