"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Heart, Zap } from 'lucide-react'
import React from 'react'

const CompanyValuesSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary text-primary-foreground p-12 rounded-2xl"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className='w-7 h-7' />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                    <p className="text-sm">Consistent delivery performance you can count on</p>
                </div>
                <div className="text-center">
                    <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className='w-7 h-7' />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                    <p className="text-sm">Cutting-edge technology driving logistics forward</p>
                </div>
                <div className="text-center">
                    <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className='w-7 h-7' />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                    <p className="text-sm">Environmental responsibility in every shipment</p>
                </div>
            </div>
        </motion.section>
    )
}

export default CompanyValuesSection