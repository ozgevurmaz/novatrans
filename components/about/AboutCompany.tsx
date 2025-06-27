"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeinItem } from '@/lib/motion/fadeinVariants'
import { allServices } from '@/lib/constanst'
import Partners from './partners'
import ServicesGrid from './servicesGrid'
import MissionVisionSection from './missionVision'
import CompanyValuesSection from './values'



export const AboutCompany = () => {
    return (
        <div className="py-8 space-y-20">
            {/* Company Overview */}
            <motion.section
                initial="hidden"
                whileInView="show"
                variants={fadeinItem}
                viewport={{ once: true }}
                className="text-center  mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Leading the Future of Logistics
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-10/12 mx-auto">
                    With over two decades of experience in global logistics, NovaTrans has established itself as a trusted partner
                    for businesses worldwide. We combine cutting-edge technology with human expertise to deliver seamless freight
                    solutions that keep the world moving.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed maw-w-17/12 mx-auto">
                    Our commitment to excellence, sustainability, and innovation drives everything we do, from the smallest package
                    to the largest industrial shipment.
                </p>
            </motion.section>

            {/* Mission & Vision */}
            <MissionVisionSection />

            {/* Services Grid */}
            <ServicesGrid />

            {/* Partners Gallery */}
            <Partners />

            {/* Company Values */}
            <CompanyValuesSection />    
        </div>




    )
}
