"use client"

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'Get Quote', href: '/quote' }
    ]

    const services = [
        { name: 'Air Freight', href: '/services/air-freight' },
        { name: 'Road Freight', href: '/services/road-freight' },
        { name: 'Ocean Freight', href: '/services/ocean-freight' },
        { name: 'Warehousing', href: '/services/warehousing' },
        { name: 'Express Delivery', href: '/services/express' }
    ]

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Sitemap', href: '/sitemap' }
    ]

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-accent-foreground text-accent dark:bg-accent dark:text-accent-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* Company Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-primary  mb-3">
                                    NovaTrans
                                </h3>
                                <p className="leading-relaxed">
                                    Your trusted partner in global logistics and transportation solutions.
                                    We deliver excellence across air, sea, and land.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 transition-colors">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span className="text-sm">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3  transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span className="text-sm">info@novatrans.com</span>
                                </div>
                                <div className="flex items-start space-x-3  transition-colors">
                                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                                    <span className="text-sm">123 Logistics Ave, Transport City, TC 12345</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold  mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className=" hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            href={service.href}
                                            className=" hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter & Social */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold  mb-6">Stay Connected</h4>
                                <p className="text-sm mb-4">
                                    Subscribe to our newsletter for logistics insights and updates.
                                </p>

                                {/* Newsletter Signup */}
                                <div className="flex flex-col space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm  placeholder-accent focus:outline-none focus:border-ring transition-colors"
                                    />
                                    <Button className="rounded-sm text-sm font-medium transition-colors">
                                        Subscribe
                                    </Button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h5 className=" font-medium mb-4">Follow Us</h5>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10  hover:bg-primary/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border/30 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                            {/* Copyright */}
                            <div className=" text-sm">
                                © 2025 NovaTrans. All rights reserved.
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center space-x-6">
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Developer Credit */}
                            <div className="text-sm">
                                Created by{' '}
                                <a
                                    href="https://elifozge.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors font-medium"
                                >
                                    Elif Özge
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                                
            </div>
        </footer>
    )
}

export default Footer