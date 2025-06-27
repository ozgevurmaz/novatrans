"use client"

import { allServices } from '@/lib/constanst'
import { motion } from 'framer-motion'
import React from 'react'
import ServiceCard from '../custom/serviceCard'

const ServicesGrid = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Our Core Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ServiceCard service={service} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default ServicesGrid