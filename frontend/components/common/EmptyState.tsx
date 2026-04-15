"use client"
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button"

interface EmptyStateProps{
    title? : string
    message? : string
    actionLabel? : string
    onAction?: () => void
}

export default function EmptyState({
    title = "Nothing here yet",
    message = "Looks like there's no data to display",
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <div className="w-full  min-h-[60vh] flex items-center justufy-center bg-black text-white px-6">
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                className="text-center max-w-md"
            >
                <div className="text-5xl mb-4">📭</div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-400">{message}</p>

                {actionLabel && onAction && (
                    <div className="mt-6">
                        <Button
                            onClick={onAction}
                            className="bg-gradient-to-r from-indiogo-500 to-purple-600"
                        >
                            {actionLabel}
                        </Button>
                    </div>
                )}
            </motion.div>
        </div>
    ) 
}
