"use client"

import { ServicesType } from "@/types/freightService"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Mail, LucideIcon, Truck, Plane, Ship, Warehouse, Globe, BarChart3 } from "lucide-react"
import PageHeader from "../custom/pageHeader"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import ContentContainer from "../custom/contentContainer"
import CTASection from "../custom/ctaSection"
import PricingSection from "./pricingSection"
import ProcessSection from "./processSection"
import BenefitsSection from "./benefitsSection"
import { fadeinItem, getFadeinContainer } from "@/lib/motion/fadeinVariants"

const iconMap: Record<string, LucideIcon> = {
    Truck: Truck,
    Plane: Plane,
    Ship: Ship,
    Warehouse: Warehouse,
    Globe: Globe,
    Barchart: BarChart3,
}

export const ServiceDetailSection = ({ service }: { service: ServicesType }) => {
    const Icon = iconMap[service.icon] || Truck
    return (
        <div className="relative">
            <PageHeader title={service.title} image={service.image} description={service.description} />

            <motion.div
                variants={getFadeinContainer(0.7)}
                initial="hidden"
                animate="show"
                className={`flex gap-4 items-center justify-center mx-auto -mt-22 z-30 relative mb-10`}
            >
                <Button
                    size="lg"
                    variant="outline"
                    className="text-white uppercase rounded-none hover:-translate-y-1"
                >
                    Our Service
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="group text-white  uppercase rounded-none hover:-translate-y-1"
                >
                    Get A Quate <ArrowRight className='w-7 h-7 group-hover:translate-x-1 transform-all duration-300s' />
                </Button>
            </motion.div>

            <div
                className="relative bg-accent p-4 rounded-sm mx-auto grid grid-cols-2 lg:grid-cols-4 z-40">
                {service.stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                ))}
            </div>


            <ContentContainer >

                {/* Features Section */}
                <motion.section
                    className="my-16"
                    variants={getFadeinContainer(0)}
                    initial="hidden"
                    animate="show"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Key Features & Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeinItem}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardContent>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                            <p className="text-sm">{feature}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <BenefitsSection service={service} />

                {/* Process Section */}
                <ProcessSection service={service} />

                <PricingSection service={service} />

                <CTASection
                    title="Ready to Get Started?"
                    description="Contact our logistics experts today for a custom quote tailored to your specific needs."
                    icon={Mail}
                    actionText="Request Quote"
                />

            </ContentContainer>
        </div>
    )
}
