"use client"

import { aboutSection } from '@/lib/constanst'
import { BriefcaseBusiness, ChevronRight, HeartHandshake, Map } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { fadeinItem } from '@/lib/motion/fadeinVariants'
import Seperator from '../ui/seperator'
import StatsCard from '../custom/statsCard'


const ExperienceSection = () => {
    return (
        <section className="space-y-8 mt-12 md:mt-0">
            {/* Header */}
            <motion.div
                variants={fadeinItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
                    {aboutSection.title}
                </h2>
                <Seperator />
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {aboutSection.content}
                </p>
                <Button variant="link" className='text-muted-foreground p-0'>read more
                    <ChevronRight />
                </Button>
            </motion.div>

            <StatsCard />
        </section>
    )
}

export default ExperienceSection