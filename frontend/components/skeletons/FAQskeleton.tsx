import React from 'react'
import Skeleton from '../ui/skeleton'

export default function FAQskeleton() {
    return (
        <section>
            <div>
                {/* Heading */}
                <Skeleton/>
                
                {/* FAQ items */}
                <div>
                    <Skeleton/>
                </div>
            </div>
        </section>
    )
}
