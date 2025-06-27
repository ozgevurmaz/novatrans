import ContentContainer from '@/components/custom/contentContainer'
import PageHeader from '@/components/custom/pageHeader'
import TestimonialSection from '@/components/custom/testimonials'
import AboutSection from '@/components/Home/aboutSection'
import ServicesPresentation from '@/components/Home/servicesPresendation'
import React from 'react'

const Services = () => {
    return (
        <div>
            <PageHeader
                title="Services"
                description="Explore our full range of freight and logistics services — tailored to meet your business needs."
                image='/images/services.jpg'
            />
            <ContentContainer>
                <AboutSection />
                <ServicesPresentation />
                <TestimonialSection />
            </ContentContainer>
        </div>
    )
}

export default Services