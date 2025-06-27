"use client"

import { allServices } from '@/lib/constanst'
import { fadeinItem } from '@/lib/motion/fadeinVariants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ServicesCards from '../custom/servicesCards'
import CTASection from '../custom/ctaSection'

const ServicesPresentation = () => {
    return (

        <motion.div
            variants={fadeinItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12 space-y-4"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Complete Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-10/12 mx-auto">
                Comprehensive logistics solutions designed to meet all your transportation and storage needs
            </p>


            {/* Main Content */}
            <div className='relative grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center align-middle'>
                {/* Left Side - Image */}
                <div className="flex w-full h-full relative group overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                        src="/images/home/servicesgeneral.jpg"
                        width={1280}
                        height={720}
                        alt="Professional logistics services"
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />

                    {/* Overlay Badge */}
                    <div className="hidden lg:flex absolute bottom-6 left-6 z-20 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg">
                        <span className="font-semibold">Trusted by 1000+ Companies</span>
                    </div>
                </div>

                {/* Right Side - Services List */}
                <div className='lg:space-y-4 z-40'>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            Why Choose Our Services?
                        </h3>
                        <p className="text-muted-foreground">
                            From air to sea, road to warehouse - we've got every aspect of your logistics covered with professional expertise.
                        </p>
                    </div>
                    <ServicesCards />
                </div>

                {/* CTA Section */}
                <div className="col-span-2">
                    <CTASection
                        title="Need a Custom Solution?"
                        description='Our logistics experts can create tailored solutions for your unique requirements.'
                        actionText='Contact Our Team'
                    />
                </div>

            </div>
        </motion.div>
    )
}

export default ServicesPresentation