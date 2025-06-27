"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react'
import Seperator from '../ui/seperator'
import { motion } from 'framer-motion'
import { fadeinItem, getFadeinContainer } from '@/lib/motion/fadeinVariants'

const ServiceSection = () => {
    const whyChooseUsFeatures = [
        {
            icon: Truck,
            text: "Fast & reliable delivery nationwide"
        },
        {
            icon: Shield,
            text: "100% secure and insured shipments"
        },
        {
            icon: Clock,
            text: "24/7 customer support & tracking"
        },
        {
            icon: Award,
            text: "Industry-leading service quality"
        }
    ]

    return (

        <motion.div
            className="py-16 max-w-7xl mx-auto"
            variants={getFadeinContainer(0)}
            initial="hidden"
            animate="show"
        >

            {/* Header */}
            <motion.div variants={fadeinItem} className="text-center mb-16 space-y-4">
                <h3 className='text-4xl md:text-5xl font-bold text-foreground'>
                    Our Services
                </h3>
                <p className="text-lg text-muted-foreground mx-auto">
                    Comprehensive logistics solutions tailored to meet your transportation needs with excellence and efficiency.
                </p>
            </motion.div>

            {/* Main Content */}
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Side - Service Info */}
                <div className='space-y-8'>
                    <motion.div variants={fadeinItem} className="space-y-6">
                        <h4 className="text-2xl md:text-3xl font-bold text-foreground capitalize">
                            We offer quick & powerful logistics solutions
                        </h4>

                        <Seperator />


                        <p className="text-muted-foreground text-lg leading-relaxed">
                            From small packages to large freight, we provide comprehensive transportation services
                            that ensure your goods reach their destination safely and on time. Our advanced tracking
                            system keeps you informed every step of the way.
                        </p>

                        <Button
                            variant="default"
                            size="lg"
                            className="group font-semibold"
                        >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>

                {/* Right Side - Why Choose Us */}
                <motion.div variants={fadeinItem} className='relative'>


                    {/* Content Card */}
                    <div className='relative z-10 bg-card/10 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-xl'>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h4 className="text-2xl font-bold text-foreground capitalize">
                                    Why Choose Us?
                                </h4>
                                <p className="text-muted-foreground">
                                    Experience the difference with our premium logistics services designed for your success.
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4">
                                {whyChooseUsFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3 group">
                                        <div className="flex-shrink-0 p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors duration-200">
                                            <feature.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full group font-semibold border-primary/30 hover:border-primary"
                            >
                                Discover More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>

    )
}

export default ServiceSection