"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'

interface PageHeaderProps {
    title: string,
    description?: string,
    image: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
    return (
        <div className='relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[90vh] -mt-26 overflow-hidden z-0'>
            <Image
                src={image}
                alt={`${title} image`}
                fill
                className='object-cover object-center sm:object-bottom'
                priority
                sizes="100vw"
            />
            {/* Gradient overlay for better text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30' />
            
            <motion.div
                variants={getFadeinContainer(0.2)}
                initial="hidden"
                animate="show"
                className='absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'
            >
                <div className='text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-6xl w-full text-white'>
                    <motion.h1
                        variants={fadeinItem}
                        className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] sm:leading-[1.15] tracking-tight'
                    >
                        {title}
                    </motion.h1>
                    {description && (
                        <motion.p
                            variants={fadeinItem}
                            className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed opacity-90 font-light'
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default PageHeader