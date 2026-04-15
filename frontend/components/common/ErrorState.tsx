"use client"
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button"

interface ErrorStateProps{
    title? : string
    message? : string
    onRetry?: () => void
}

export default function ErrorState({
    title = "Something went wrong",
    message = "We couldn't load the content. Please try again later",
    onRetry
}: ErrorStateProps) {
    return (
        <div className="w-full  min-h-[60vh] flex items-center justufy-center bg-black text-white px-6">
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                className="text-center max-w-md"
            >
                <div className="text-5xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-400">{message}</p>

                {onRetry && (
                    <div className="mt-6">
                        <Button
                            onClick={onRetry}
                            className="bg-gradient-to-r from-indiogo-500 to-purple-600"
                        >
                            Retry
                        </Button>
                    </div>
                )}
            </motion.div>
        </div>
    )
}
