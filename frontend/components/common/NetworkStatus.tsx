"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

interface NetworkInformation extends EventTarget{
    readonly effectiveType? : string,
    readonly downlink? : number
}

export default function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(true)
    const [isSlow, setIsSlow] = useState(false)

    useEffect(() => {
        // online or offline detection
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine)
        }

        window.addEventListener("online", updateOnlineStatus)
        window.addEventListener("offline", updateOnlineStatus)
        
        //Detect slow network
        const nav = navigator as Navigator & {
            connection?: NetworkInformation;
            mozConnection?: NetworkInformation;
            webkitConnection?: NetworkInformation;
        };

        const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

        if(connection){
            const updateConnection = () => {
                const slowTypes = ["slow-2g", "2g", "slow-3g"];
                const currentType = connection.effectiveType ?? "";
                const currentDownlink = connection.downlink ?? 10;

                setIsSlow(
                    slowTypes.includes(currentType) || currentDownlink < 1
                )
            }
            updateConnection()
            connection.addEventListener("change", updateConnection)
        }

        return () => {
            window.removeEventListener("online", updateOnlineStatus)
            window.removeEventListener("offline", updateOnlineStatus)
        }
    }, [])

    return(
        <AnimatePresence>
            {!isOnline && (
                <motion.div
                    initial={{y: -100}}
                    animate={{y: 0}}
                    exit={{y: -100}}
                    className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 z-[100]"
                >
                    You are offline. Check your internet connection.
                </motion.div>
            )}

            {isOnline && isSlow &&(
                <motion.div
                    initial={{y: -100}}
                    animate={{y: 0}}
                    exit={{y: -100}}
                    className="fixed top-0 left-0 w-full bg-yellow-500 text-white text-center py-2 z-[100]"
                >
                    Slow network detected. Content may load slowly.
                </motion.div>
            )}
        </AnimatePresence>
    )
}
