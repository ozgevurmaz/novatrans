"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card'
import { ServicesType } from '@/types/freightService'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'

const ProcessSection = ({ service }: { service: ServicesType }) => {
    return (
        <motion.section
            className="mb-16"
            variants={getFadeinContainer(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={fadeinItem}
                    >
                        <Card className="relative h-full hover:shadow-lg transition-all hover:-translate-y-1">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                        {step.step}
                                    </div>
                                    <CardTitle className="text-lg">{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm leading-relaxed">
                                    {step.description}
                                </CardDescription>
                            </CardContent>
                            {index < service.process.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                                </div>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default ProcessSection