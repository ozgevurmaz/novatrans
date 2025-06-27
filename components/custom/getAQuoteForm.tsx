import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'

const GetAQuoteForm = () => {
    return (
        <Card className='bg-secondary backdrop-blur-sm border shadow-xl rounded-sm'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold text-accent-foreground text-center'>
                    Get A Quote
                </CardTitle>
                <p className='text-sm text-muted-foreground text-center'>
                    Fill out the form below and we'll get back to you with a personalized quote
                </p>
            </CardHeader>
            <CardContent className='py-0'>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <Input
                        placeholder='Your Full Name *'
                        className='md:col-span-2 h-10 text-base border-2 focus:border-primary transition-all duration-200 bg-background/80'
                        required
                    />

                    <Input
                        type='email'
                        placeholder='Email Address *'
                        className='h-10 text-base border-2 focus:border-primary transition-all duration-200 bg-background/80'
                        required
                    />

                    <Input
                        type='tel'
                        placeholder='Phone Number *'
                        className='h-10 text-base border-2 focus:border-primary transition-all duration-200 bg-background/80'
                        required
                    />

                    <Input
                        placeholder='Service Type '
                        className='h-10 text-base border-2 focus:border-primary transition-all duration-200 bg-background/80'
                    />

                    <Input
                        placeholder='Quantity/Volume'
                        className='h-10 text-base border-2 focus:border-primary transition-all duration-200 bg-background/80'
                    />

                    <Input
                        placeholder='Pickup & Destination Locations *'
                        className='h-10 text-base border-2 md:col-span-2 focus:border-primary transition-all duration-200 bg-background/80'
                        required
                    />

                    <Textarea
                        placeholder='Additional Details or Special Requirements...'
                        className='min-h-[100px] text-base border-2 md:col-span-2 focus:border-primary transition-all duration-200 resize-none bg-background/80'
                        rows={5}
                    />

                    <Button
                        type='submit'
                        className='w-full h-12 md:col-span-2 mt-2 font-semibold bg-primary'
                    >
                        <Send className='w-5 h-5 mr-2' />
                        Get My Quote
                    </Button>

                    <p className='text-xs text-muted-foreground text-center md:col-span-2 mt-2'>
                        * Required fields. We'll respond within 24 hours.
                    </p>

                </form>
            </CardContent>
        </Card>
    )
}

export default GetAQuoteForm