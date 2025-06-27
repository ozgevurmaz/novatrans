import ContactMap from '@/components/contact/contactMap'
import ContactSection from '@/components/contact/contactPage'
import ContentContainer from '@/components/custom/contentContainer'
import PageHeader from '@/components/custom/pageHeader'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <PageHeader title="Contact" image="/images/contact.jpg" />
            <ContactMap />
            <ContentContainer>
                <ContactSection />
            </ContentContainer>
        </div>
    )
}

export default Contact