import React from 'react'
import Skeleton from '../ui/skeleton'

export default function HeroSkeleton() {
    return (
        <section className='w-full min-h-[90vh] flex items-center justify-center bg-black px-6'>
            <div className='w-full max-w-3xl text-center space-y-6'>
                {/* Title */}
                <Skeleton className='h-10 sm:h-12 md:h-14 w-3/4 mx-auto'></Skeleton>

                {/* Sub-Title */}
                <Skeleton className='h-5 sm:h-6 w-full'></Skeleton>
                <Skeleton className='h-5 sm:h-6 w-5/6 mx-auto'></Skeleton>

                {/* Button */}
                <Skeleton className='h-12 w-40 mx-auto rounded-xl'></Skeleton>
            </div>
        </section>
    )
}
