"use client"

import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'
import { ServicesType } from '@/types/freightService'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Users, Award } from 'lucide-react'
import React from 'react'

const BenefitsSection = ({ service }: { service: ServicesType }) => {
    return (
        <motion.section
            className="mb-16"
            variants={getFadeinContainer(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Why Choose Our {service.title}?</h3>
                    <div className="space-y-4">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3"
                                variants={fadeinItem}
                            >
                                <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="text-sm">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Clock className="h-6 w-6 text-blue-600" />
                        <div>
                            <div className="font-semibold text-sm">Fast Service</div>
                            <div className="text-xs text-muted-foreground">Quick turnaround</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Shield className="h-6 w-6 text-green-600" />
                        <div>
                            <div className="font-semibold text-sm">Secure</div>
                            <div className="text-xs text-muted-foreground">Full protection</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Users className="h-6 w-6 text-purple-600" />
                        <div>
                            <div className="font-semibold text-sm">Expert Team</div>
                            <div className="text-xs text-muted-foreground">Professional service</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Award className="h-6 w-6 text-orange-600" />
                        <div>
                            <div className="font-semibold text-sm">Quality</div>
                            <div className="text-xs text-muted-foreground">Industry leading</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )

}

export default BenefitsSection