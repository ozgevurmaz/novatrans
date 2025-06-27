"use client"

import { freightServices } from '@/lib/constanst'
import { FreightServiceType } from '@/types/freightService'
import { motion } from 'framer-motion'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'
import FreightCard from '../custom/FreightCard'

export const ServicesCardSection = () => {
    return (
        <motion.div
            className='max-w-16xl flex flex-col py-16 md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-4 lg:gap-12 '
            variants={getFadeinContainer(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {freightServices.map((service: FreightServiceType, index: number) => (
                <motion.div
                    key={service.id}
                    variants={fadeinItem}
                    className={`
                        ${index === 1 ? 'lg:mt-16' : ''} 
                        ${index === 2 ? 'lg:mt-8 md:col-span-2 md:justify-self-center' : ''}
                    `}
                >
                    <FreightCard service={service} />
                </motion.div>
            ))}
        </motion.div>


    )
}
