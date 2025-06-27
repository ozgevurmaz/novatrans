"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import Image from 'next/image'
import { FreightServiceType } from '@/types/freightService'
import { useRouter } from 'next/navigation'

const FreightCard = ({ service }: { service: FreightServiceType }) => {
    const router = useRouter()
    
    const handleClick = () => {
     router.replace(`/services/${service.slug}`)
    }
    
    return (
        <Card className="group relative w-full max-w-[340px] h-[450px] pt-0 overflow-hidden rounded-sm flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="relative h-[250px] overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={1400}
                    height={788}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <CardHeader className="flex-1 text-center px-4 py-6">
                <CardTitle className='text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
                    {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                </CardDescription>
            </CardHeader>
            <div className='absolute bg-background w-16 h-16 rounded-tl-md rounded-br-full top-0 left-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary transition-all duration-300 flex items-center justify-center'>
                <service.icon className='w-8 h-8 text-foreground group-hover:text-primary-foreground' />
            </div>
            <div className="px-4 pb-4">
                <Button
                    onClick={handleClick}
                    className='w-full rounded-sm bg-accent text-accent-foreground'
                >
                    Read More
                </Button>
            </div>
        </Card>
    )
}

export default FreightCard