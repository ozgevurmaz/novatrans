"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Truck,
    Ship,
    Plane,
    CheckCircle,
    AlertCircle
} from 'lucide-react'
import GetAQuoteForm from '../custom/getAQuoteForm'
import { allServices } from '@/lib/constanst'
import CTASection from '../custom/ctaSection'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success')
            setIsSubmitting(false)
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            })

            // Reset status after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)
        }, 1500)
    }

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: ["info@novatrans.com", "support@novatrans.com"],
            description: "Get in touch via email"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Speak with our experts"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            details: ["123 Logistics Boulevard", "Global Trade Center, Suite 500", "New York, NY 10001"],
            description: "Our headquarters"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Weekdays:", "8:00 AM - 6:00 PM", "Weekends:", "Emergency Only"],
            description: "When we're available"
        }
    ]

    return (
        <section className="py-8 space-y-8">

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ready to optimize your logistics? Contact our experts for a customized solution that fits your business needs.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mx-auto">
                <div className='space-y-4'>

                    <GetAQuoteForm />
                </div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            Contact Information
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            We're here to help! Reach out to us through any of these channels and our team will respond promptly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex flex-col items-start space-x-4">
                                    <div className='flex items-center gap-2'>
                                        <span className="bg-primary/10 p-3 rounded-lg flex-shrink-0 max-w-min text-primary">
                                            {info.icon}
                                        </span>
                                        <h4 className="text-lg font-semibold text-card-foreground">
                                            {info.title}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {info.description}
                                    </p>
                                    <div className="space-y-1">
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-card-foreground font-medium">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>

                                </div>
                            </motion.div>
                        ))}

                    </div>



                </motion.div>

            </div>

            <CTASection
                title='Need Immediate Assistance?'
                description='For urgent logistics needs, call our 24/7 emergency hotline'
                icon={Phone}
                actionText='+1 (555) 123-4567' />

        </section>
    )
}

export default ContactSection