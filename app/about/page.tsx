import { AboutCompany } from '@/components/about/AboutCompany'
import ContentContainer from '@/components/custom/contentContainer'
import PageHeader from '@/components/custom/pageHeader'
import StatsCard from '@/components/custom/statsCard'
import React from 'react'

const About = () => {
  return (
    <div>
      <PageHeader
        title="About NovaTrans"
        description="NovaTrans delivers global freight solutions with precision and purpose - by land, by ocean and by air."
        image="/images/about.jpg"
      />
      <StatsCard classname='-mt-12' />

      <ContentContainer>
        <AboutCompany />
      </ContentContainer>
    </div>
  )
}

export default About