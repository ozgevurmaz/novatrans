"use client"
import { motion } from 'framer-motion'
import { Badge, CheckCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { ServicesType } from '@/types/freightService'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'

const PricingSection = ({ service }: { service: ServicesType }) => {
    return (
        <motion.section
            className="mb-16"
            initial="hidden"
            variants={getFadeinContainer(0)}
            whileInView="show"
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-bold mb-8 text-center">Service Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.pricing.map((tier, index) => (
                    <motion.div
                        key={index}
                        variants={fadeinItem}
                    >
                        <Card className={`h-full ${index === 1 ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-lg transition-all`}>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl">{tier.tier}</CardTitle>
                                    {index === 1 && <Badge>Popular</Badge>}
                                </div>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="w-full h-px bg-border" />
                                <ul className="space-y-2">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                                    Get {tier.tier} Quote
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default PricingSection