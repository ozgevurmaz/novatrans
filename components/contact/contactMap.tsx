"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import React from 'react'

const ContactMap = () => {
    return (
        < motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card border border-border rounded-sm overflow-hidden shadow-lg mx-12 -mt-12"
        >
            {/* Map Container */}
            <div className="relative h-60 bg-muted">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="NovaTrans Headquarters Location"
                />

                {/* Custom Overlay with Office Info */}
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="flex items-start space-x-3">
                        <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground text-sm mb-1">
                                NovaTrans Headquarters
                            </h4>
                            <div className="flex items-center mt-2 text-xs text-primary">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>Open Now • Closes 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Directions Button */}
                <div className="absolute bottom-4 right-4">
                    <a
                        href="https://maps.google.com/?q=123+Logistics+Boulevard,+New+York,+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg flex items-center space-x-2"
                    >
                        <MapPin className="w-4 h-4" />
                        <span>Get Directions</span>
                    </a>
                </div>
            </div>

            {/* Map Footer with Additional Locations */}

            <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-card rounded-lg">
                    <div className="font-medium text-card-foreground">West Coast Hub</div>
                    <div className="text-muted-foreground text-xs mt-1">
                        Los Angeles, CA
                    </div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg">
                    <div className="font-medium text-card-foreground">European Center</div>
                    <div className="text-muted-foreground text-xs mt-1">
                        Rotterdam, Netherlands
                    </div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg">
                    <div className="font-medium text-card-foreground">Asia Pacific</div>
                    <div className="text-muted-foreground text-xs mt-1">
                        Singapore
                    </div>
                </div>
            </div>


        </motion.div >
    )
}

export default ContactMap