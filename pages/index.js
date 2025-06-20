import React, { Fragment } from 'react';
import NavbarS2 from '../components/NavbarS2/NavbarS2';
import Hero2 from '../components/hero2/Hero2';
import RegisterSection from '../components/RegisterSection/RegisterSection';
import About2 from '../components/about2/about2';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import CausesSectionS2 from '../components/CausesSectionS2/CausesSectionS2';
import BecomeSection from '../components/BecomeSection/BecomeSection';
import ServiceSection3 from '../components/ServiceSection3/ServiceSection3';
import TeamSection from '../components/TeamSection/TeamSection';
import CtaSectionS2 from '../components/CtaSectionS2/CtaSectionS2';
import PartnerSectionS2 from '../components/PartnerSectionS2/PartnerSectionS2';
import CtaSectionS3 from '../components/CtaSectionS3/CtaSectionS3';
import FooterS2 from '../components/footerS2/FooterS2';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../public/images/FaithMineralsStoneFoundationLogo.jpeg';

const HomePage2 = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={'wpo-site-header'} Logo={Logo} />
      <Hero2 />
      <RegisterSection />
      <About2 hclass={'about-section-s2 section-padding'} />
      <ServiceSection2 hclass={'service-section-s2 section-padding pb-0'} />
      <CausesSectionS2 hclass={'causes-section-s2 section-padding'} />
      <BecomeSection hclass={'become_volunteer'} />
      <ServiceSection3 hclass={'service-section-s3 section-padding'} />
      <TeamSection hclass={'volunteer-section section-padding'} />
      <CtaSectionS2 />
      <PartnerSectionS2 />
      <CtaSectionS3 />
      <FooterS2 />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage2;
