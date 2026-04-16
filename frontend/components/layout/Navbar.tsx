"use client";
import {motion} from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react';
import {Button} from "@/components/ui/button"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className='w-full border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>
                    {/* Logo */}
                <motion.h1
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    className='text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'
                >
                    Learnify
                </motion.h1>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-6'>
                    <Link href="/" className='text-sm hover:text-indigo-400 transition'>
                        Home
                    </Link>
                    <Link href="/courses" className='text-sm hover:text-indigo-400 transition'>
                        Courses
                    </Link>

                    {/* Language Selector */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className='gap-2 px-3 py-2 flex items-center rounded-lg bg-black/10 hover:bg-white/20 transition'>
                            <Globe size={16}/>
                            <span className='text-sm'>EN</span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className='bg-black text-white border border-white/10'>
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Hindi</DropdownMenuItem>
                            <DropdownMenuItem>Spanish</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Login Button */}
                    <Button className='bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition'>
                        Login
                    </Button>
                </div>

                {/* Mobile menu button */}
                <button
                    className='md:hidden'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    { isOpen ? <X/> : <Menu/>}
                </button>
            </div>  
            
            {/* Mobile menu */}        
            {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-4 pb-4 space-y-4 bg-black/80 backdrop-blur-md"
        >
            <Link href="/" className="block text-sm">Home</Link>
            <Link href="/courses" className="block text-sm">Courses</Link>

            <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>EN</span>
            </div>

            <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600">
            Login
            </Button>
        </motion.div>
        )}
        </header>
    )
}