import React from 'react'
import Skeleton from '../ui/skeleton'

export default function HeroSkeleton() {
    return (
        <section>
            <div>
                {/* Title */}
                <Skeleton></Skeleton>

                {/* Sub-Title */}
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>

                {/* Button */}
                <Skeleton></Skeleton>
            </div>
        </section>
    )
}
