import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutS2 from '../../components/about2/about2';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import DonateSection from '../../components/DonateSection/DonateSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Head from 'next/head';

const AboutPage = () => {
  useEffect(() => {
    // Load responsive styles for about page
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/responsive-about.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>About Us - Faith Missions Stone Foundation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'About Us'} pagesub={'About'} />
      <AboutS2 hclass={'about-section-s4 section-padding'} />
      <FunFactS2 hclass={'funfact-section-s2'} />
      <CtaSection hclass={'cta-section'} />
      <DonateSection />
      <TeamSection hclass={'volunteer-section section-padding'} />
      <ProjectSectionS2 hclass={'project-section-s2 section-padding'} />
      <Testimonial2 tClass={'testimonial-section-s2 section-padding'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
