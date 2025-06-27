"use client"

import { getFadeinContainer, fadeinItem } from '@/lib/motion/fadeinVariants'
import {  motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className='relative w-full h-[105vh] -mt-30 overflow-hidden'>
            {/* Background Image */}
            <Image
                src="/images/home/Hero.jpg"
                fill
                alt="Hero Image"
                className='object-cover'
                priority
            />

            {/* Overlay for better text readability */}
            <div className='absolute inset-0 bg-black/70'></div>

            {/* Content */}
            <div className='relative z-10 flex items-center justify-center h-full px-4 lg:mt-12'>


                <motion.div
                    variants={getFadeinContainer(0.5)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-center text-white space-y-4'
                >
                    <motion.h1 variants={fadeinItem} className='text-4xl md:text-5xl xl:text-7xl font-bold leading-tight'>
                        Freight Solutions That Go the
                        <span className='block text-primary'> Extra Mile – and Sky.</span>
                    </motion.h1>
                    <motion.p variants={fadeinItem} className='text-lg md:text-xl opacity-90 max-w-3xl mx-auto'>
                        Delivering excellence across land, sea, and air with innovative logistics solutions.
                    </motion.p>
                    <motion.div variants={fadeinItem} className='space-x-4 mt-2'>
                        <Button
                            size="lg"
                            variant="outline"
                            className="uppercase rounded-none hover:-translate-y-1"
                        >
                            Our Service
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="group uppercase rounded-none hover:-translate-y-1"
                        >
                            Get A Quate <ArrowRight className='w-7 h-7 group-hover:translate-x-1 transform-all duration-300s'/>
                        </Button>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero