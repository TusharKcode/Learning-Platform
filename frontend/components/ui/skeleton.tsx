import React from 'react'

export default function skeleton({className} : {className? : string}) {
    return (
        <div className={`relative overflow-hidden rounded-md bg-white /10 ${className}`}>
            <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-tansparent via-white/20 to-transparent'/>
        </div>
    )
}
