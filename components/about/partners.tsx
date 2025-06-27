"use client"

import { partnerLogos } from '@/lib/constanst'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                We're proud to partner with some of the world's most respected companies across various industries
            </p>
            <div className="relative overflow-hidden bg-accent py-8 rounded-2xl">
                <div className="flex animate-scroll-right">
                    {/* First set of logos */}
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-4">
                            <div className="w-32 h-20  rounded-lg shadow-sm flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    width={120}
                                    height={60}
                                    className="max-w-full max-h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {partnerLogos.map((logo, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
                            <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    width={120}
                                    height={60}
                                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Partners