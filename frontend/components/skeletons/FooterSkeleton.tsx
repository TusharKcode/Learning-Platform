import React from "react";
import Skeleton from "../ui/skeleton";

export default function FooterSkeleton() {
    return (
        <footer>
            <div>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>
        </footer>
    );
}
