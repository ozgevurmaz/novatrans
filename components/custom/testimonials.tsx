"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/constanst'
import { Button } from '../ui/button'

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
        setIsAutoPlaying(false)
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-10/12 mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our logistics solutions.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-8">
                            <motion.div
                                initial={{ opacity: 0, rotate: 0 }}
                                whileInView={{ opacity: 1, rotate: 360 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="bg-primary/10 p-4 rounded-full"
                            >
                                <Quote className="w-8 h-8 text-primary" />
                            </motion.div>
                        </div>

                        {/* Testimonial Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                {/* Stars Rating */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-8 font-medium">
                                    "{currentTestimonial.content}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex flex-col items-center">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 bg-muted rounded-full mb-4 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                            <span className="text-xl font-semibold text-primary">
                                                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Name and Position */}
                                    <h4 className="text-xl font-semibold text-card-foreground mb-1">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {currentTestimonial.position}
                                    </p>
                                    <p className="text-sm text-primary font-medium">
                                        {currentTestimonial.company}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 border-2"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 border-2"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-12 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary scale-125'
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Auto-play indicator */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                    </button>
                </div>

                {/* Progress Bar */}
                {isAutoPlaying && (
                    <div className="max-w-xs mx-auto mt-4">
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
                                key={currentIndex}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestimonialSection