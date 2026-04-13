"use client";

import {motion} from 'framer-motion'
import { Globe } from 'lucide-react';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export default function Header() {
    return (
        <header className='w-full border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>
                    {/* Logo */}
                <motion.h1
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    className='text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'
                >
                    Learnify
                </motion.h1>

                {/* Language Selector */}
                <DropdownMenu>
                    <DropdownMenuTrigger className='gap-2 px-3 py-2 flex items-center bg-black/10 hover:bg-white/20 transition'>
                        <Globe size={18}/>
                        <span className='text-sm'>EN</span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='bg-black text-white border border-white/10'>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Hindi</DropdownMenuItem>
                        <DropdownMenuItem>Spanish</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

