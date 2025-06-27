"use client"

import { Mail, ArrowRight, Phone, LucideIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

interface CTAProps {
    title: string,
    description: string,
    icon?: LucideIcon,
    actionText: string
}
const CTASection = ({ title, description, icon, actionText }: CTAProps) => {
    const Icon = icon
    return (
        <section
        >
            <Card className="bg-gradient-to-r from-primary to-primary/30 text-foreground border-0">
                <CardContent className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-4">
                        {description}
                    </p>
                    <Button size="lg" variant="secondary" className="group">
                        {Icon && <Icon className="mr-2 h-5 w-5" />}
                        {actionText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardContent>
            </Card>
        </section>
    )
}

export default CTASection