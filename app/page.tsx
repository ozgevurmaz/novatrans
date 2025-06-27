import ContentContainer from "@/components/custom/contentContainer";
import GetAQuoteForm from "@/components/custom/getAQuoteForm";
import AboutSection from "@/components/Home/aboutSection";
import ExperienceSection from "@/components/Home/experienceSection";
import Hero from "@/components/Home/Hero";
import { ServicesCardSection } from "@/components/Home/servicesCardSection";
import ServicesPresendation from "@/components/Home/servicesPresendation";

export default function Home() {
  return (
    <div className="space-y-2 bg-accent">
      <Hero />
      <ContentContainer>
        <ServicesCardSection />
        <div className="mx-auto grid lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-20  ">
          <GetAQuoteForm />
          <div className="lg:col-span-2">
            <ExperienceSection />
          </div>
        </div>
        <AboutSection />
        <ServicesPresendation />
      </ContentContainer>
    </div>
  );
}
