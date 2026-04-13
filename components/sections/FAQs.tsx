"use client";
import {motion} from 'framer-motion'

import {
    Accordion, 
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        value: "item-1",
        trigger: "What is Learnify?",
        content: "Learnify is structured learning platform where you can master skills step-by-step through day-wise learning paths like 'Learn HTML in 30 Days.'"
    },
    {
        value: "item-2",
        trigger: "How does the 30-day learning system work?",
        content: "Each course divided into daily lessons, allowing you to learn consistently without feeling overwhelmed while practicing small projects."
    },
    {
        value: "item-3",
        trigger: "Is this platform free to use?",
        content: "We offer both free and premium courses. Basic content is free, while advanced laerning paths and features may require a subscription."
    },
    {
        value: "item-4",
        trigger: "Will I get certificates after completion?",
        content: "Yes, certificate will be provided after successfully completing a course and meeting the required criteria."
    },
    {
        value: "item-5",
        trigger: "Can I track my progress?",
        content: "Yes, you can login and will be able to track your daily progress and resume learning anytime."
    }
]

export default function FAQs() {
    return (
    <section className='w-full py-20 bg-black text-white'>
        <div className='max-w-4xl mx-auto px-6'>
            <motion.h2
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className='text-3xl sm:text-4xl font-bold text-center'
            >
                Frequently Asked {" "}
                <span className='bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
                    Questions
                </span>
            </motion.h2>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className='mt-10'
            >
                <Accordion
                    className="w-full space-y-4"
                >
                    {faqItems.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    </section>
    )
}
