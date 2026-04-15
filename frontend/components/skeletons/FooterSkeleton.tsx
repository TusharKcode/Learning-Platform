import React from "react";
import Skeleton from "../ui/skeleton";

export default function FooterSkeleton() {
    return (
        <footer className='py-10 bg-black w-full px-6'>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                <Skeleton className="h-6 w-40"/>
                <Skeleton className="h-6 w-40"/>
                <Skeleton className="h-6 w-40"/>
            </div>
            <div className="mt-10">
                <Skeleton className="h-4 w-1/3 mx-auto"/>
            </div>
        </footer>
    );
}
