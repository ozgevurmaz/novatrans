"use client"

import { motion } from 'framer-motion'
import { Eye, Zap } from 'lucide-react'
import React from 'react'

const MissionVisionSection = () => {
    return (
<section className="grid md:grid-cols-2 gap-12">
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-primary/10 border border-primary/20 p-8 rounded-2xl"
    >
        <div className="flex items-center mb-6">
            <div className="bg-primary p-3 rounded-full mr-4">
                <Zap className='w-7 h-7 text-primary-foreground' />
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
            To revolutionize global logistics by providing innovative, reliable, and sustainable freight solutions
            that connect businesses worldwide. We strive to exceed expectations through our commitment to excellence,
            cutting-edge technology, and personalized service that drives our clients' success.
        </p>
    </motion.div>

    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-secondary border border-secondary/50 p-8 rounded-2xl"
    >
        <div className="flex items-center mb-6">
            <div className="bg-secondary-foreground p-3 rounded-full mr-4">
                <Eye className='w-7 h-7 text-secondary' />
            </div>
            <h3 className="text-2xl font-bold text-secondary-foreground">Our Vision</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
            To be the world's most trusted logistics partner, setting the standard for innovation, sustainability,
            and customer satisfaction in the freight industry. We envision a future where seamless global trade
            drives prosperity while protecting our planet for generations to come.
        </p>
    </motion.div>
</section>
    )
}

export default MissionVisionSection