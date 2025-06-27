"use client"

import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, HeartHandshake, Map } from 'lucide-react'
import React from 'react'

const aboutInfo = [
    {
        icon: BriefcaseBusiness,
        topText: "120+",
        bottomText: "Projects Completed"
    },
    {
        icon: HeartHandshake,
        topText: "100%",
        bottomText: "Client Satisfaction"
    },
    {
        icon: Map,
        topText: "20+",
        bottomText: "Countries Served"
    }
]


const StatsCard = ({ classname }: { classname?: string }) => {
    return (
        <motion.div
            variants={getFadeinContainer(0.5)}
            initial="hidden"
            animate="show"
            className={`flex flex-wrap gap-4 items-center justify-around bg-transparent mx-12 ${classname}`}
        >
            {
                aboutInfo.map((info, index) => (
                    <motion.div
                        key={index}
                        variants={fadeinItem}
                        className='group hover:scale-110 border rounded-sm flex sm:flex-row md:flex-col bg-background items-center text-center space-y-2 p-4 md:px-8 md:py-5 z-40'
                    >
                        <span
                            className='mb-2 p-4 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-colors duration-300'
                        >
                            <info.icon className='w-8 h-8 text-primary' />
                        </span>
                        <span>
                            <span
                                className='block text-3xl md:text-4xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300'
                            >
                                {info.topText}
                            </span>

                            <span
                                className='block text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300'
                            >
                                {info.bottomText}
                            </span>
                        </span>
                    </motion.div>
                ))}
        </motion.div>
    )
}

export default StatsCard