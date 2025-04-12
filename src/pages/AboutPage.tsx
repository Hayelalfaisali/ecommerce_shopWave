
import React from "react";
import Layout from "@/components/Layout";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Vlaues from "@/components/Vlaues";
import OurStory from "@/components/OurStory";
import AboutHero from "@/components/AboutHero";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <AboutHero />
      {/* Our Story */}
      <OurStory />
      {/* Values Section */}
      <Vlaues />
      {/* Team Section */}
      <Team />
      {/* Stats Section */}
      <Stats />
      {/* CTA Section */}
      <CTA />
    </Layout>
  );
};

export default AboutPage;