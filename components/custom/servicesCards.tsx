"use client"

import { allServices } from '@/lib/constanst'
import React from 'react'
import ServiceCard from './serviceCard'
import { motion } from 'framer-motion'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'

const ServicesCards = () => {
    return (
        <motion.div
            variants={getFadeinContainer(0)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            className='grid gap-2'
        >
            {allServices.map((item, index) => (
                <motion.span
                    key={index}
                    variants={fadeinItem}
                >
                    <ServiceCard service={item} />
                </motion.span>
            ))}
        </motion.div>
    )
}

export default ServicesCards