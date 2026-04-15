import React from 'react'
import Skeleton from '../ui/skeleton'

export default function FAQskeleton() {
    return (
        <section className='py-20 bg-black w-full px-6'>
            <div className='max-w-4xl mx-auto space-y-6'>
                {/* Heading */}
                <Skeleton className='h-8 w-1/2 mx-auto'/>
                
                {/* FAQ items */}
                <div className='space-y-4 mt-10'>
                    {[1,2,3,4].map((_, i) => (
                        <Skeleton key={i} className='h-12 w-full rounded-lg'/>
                    ))}
                </div>
            </div>
        </section>
    )
}
