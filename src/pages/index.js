import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="CAME TechGroup" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Us" />
        <InterestsSection sectionId="services" heading="Our Services" />
        <ProjectsSection sectionId="offers" heading="What we offer" />
        <ContactSection sectionId="contact" heading="Contact Us" />
      </Page>
    </>
  );
}
