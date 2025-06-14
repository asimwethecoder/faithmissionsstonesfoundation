import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Accordion from '../../components/Accordion/Accordion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Services from '../../pages/api/Services';
import ServiceSidebar from './sidebar';
import samap from '../../public/images/service-single/img-6.jpg';
import simg1 from '../../public/images/image-gallery/1.jpg';
import simg2 from '../../public/images/image-gallery/2.jpg';
import simg3 from '../../public/images/image-gallery/3.jpg';
import simg4 from '../../public/images/image-gallery/4.jpg';
import Footer from '../../components/footer/Footer';
import logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import VideoModal from '../../components/ModalVideo/VideoModal';
import Image from 'next/image';

const ServiceSinglePage = props => {
  const router = useRouter();

  const serviceDetails = Services.find(item => item.slug === router.query.slug);

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={'wpo-site-header'} />
      <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service Single'} />
      <section className='service-single-page section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12 order-lg-2'>
              <div className='service-single-wrap'>
                <div className='title-image'>
                  <Image src={serviceDetails?.simage} alt='' />
                </div>
                <h2>{serviceDetails?.title}</h2>
                <p>
                  Faith Missions Stone Foundation is dedicated to transforming
                  lives in South Africa and the Democratic Republic of Congo's
                  mining regions. Every day, thousands of children face
                  dangerous conditions on the streets in townships, gang
                  dominated townships, in cobalt and coltan mines instead of
                  attending school. We provide critical support including
                  education, healthcare, and nutrition to these children.
                </p>
                <h3>Rescuing Hope in the Heart of Darkness</h3>
                <p>
                  In the DRC's mineral-rich provinces, an estimated 40,000
                  children work in artisanal mines. And in South Africa, kids
                  stand near traffic lights asking for money and food. We work
                  directly with local communities to.
                </p>
                <div className='video-wrap'>
                  <div className='video-img'>
                    <Image src={samap} alt='' />
                    <div className='video-holder'></div>
                  </div>
                  <div className='video-content'>
                    <h2>
                      Transforming Lives: Supporting Orphans and Street Children
                    </h2>
                    <p>
                      In South Africa's urban centers and townships, thousands
                      of children face daily struggles for survival. Many are
                      orphans due to HIV/AIDS, poverty, or family breakdown,
                      while others live on the streets, vulnerable to
                      exploitation, abuse, and neglect. These children
                      desperately need basic necessities: safe shelter,
                      nutritious food, clean clothing, and most importantly,
                      hope for a better future.
                    </p>
                    <ul>
                      <li>Leading Organizations Making a Difference</li>
                      <li>
                        Daily mine site patrols to identify at-risk children
                      </li>
                      <li>Working with local leaders to prevent child labor</li>
                    </ul>
                  </div>
                </div>
                <p>
                  The transformation happening in South African child welfare is
                  measurable and inspiring. Organizations report that 60-70% of
                  children in their programs successfully reintegrate into
                  formal education or vocational training. Many go on to become
                  productive community members, with some even returning as
                  volunteers or staff members. Children who once scavenged for
                  food in dangerous urban areas now attend school regularly,
                  have stable housing, and most importantly, have hope for their
                  futures. Former street children have become teachers, social
                  workers, business owners, and community leaders. <br></br>In
                  the Democratic Republic of Congo's mineral-rich provinces,
                  thousands of children labor in hazardous mining conditions
                  instead of attending school. Through our network of local
                  partners, we've established 12 rescue centers that provide
                  comprehensive care - nutritious meals, trauma counseling, and
                  accelerated learning programs. Last year alone, 62% of
                  rehabilitated youth successfully reintegrated into formal
                  education or vocational training. Our work not only saves
                  children from exploitation but empowers entire communities
                  through sustainable alternative income programs and advocacy
                  for ethical mining practices.
                </p>
                <h3 className='quate'>
                  "Every child rescued from the streets or provided with stable
                  care creates a positive ripple effect throughout South African
                  communities. These children grow up to become parents who know
                  how to provide stable homes, community members who contribute
                  positively to society, and advocates who help other vulnerable
                  children.."
                </h3>

                <div className='image-gallery'>
                  <h2>Eligibility checklist :</h2>
                  <ul>
                    <li>
                      <Image src={simg1} alt='' />
                    </li>
                    <li>
                      <Image src={simg2} alt='' />
                    </li>
                    <li>
                      <Image src={simg3} alt='' />
                    </li>
                    <li>
                      <Image src={simg4} alt='' />
                    </li>
                  </ul>
                </div>
                <Accordion />
              </div>
            </div>
            <div className='col-lg-4 col-12 order-lg-1'>
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
