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
import Head from 'next/head';

const ServiceSinglePage = props => {
  const router = useRouter();

  const serviceDetails = Services.find(item => item.slug === router.query.slug);

  return (
    <Fragment>
      <Head>
        <title>{serviceDetails?.title} - Faith Missions Stone Foundation Services</title>
        <meta name="description" content={`${serviceDetails?.description} - Faith Missions Stone Foundation's ${serviceDetails?.title} service supporting South African street children and orphans.`} />
        <meta name="keywords" content={`${serviceDetails?.title}, ${serviceDetails?.tag}, South Africa charity services, street children support`} />
        <meta property="og:title" content={`${serviceDetails?.title} - Faith Missions Services`} />
        <meta property="og:description" content={serviceDetails?.description} />
        <link rel="canonical" href={`https://faithmissionsstonefoundation.org/service-single/${serviceDetails?.slug}`} />
      </Head>
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
                  lives across South Africa's townships and urban centers, with
                  additional programs in the Democratic Republic of Congo's
                  mining regions. Every day, thousands of children face
                  dangerous conditions on the streets of Johannesburg, Cape Town,
                  Durban, and other SA cities, while others work in DRC's cobalt
                  and coltan mines instead of attending school. We provide critical
                  support including education, healthcare, and nutrition to these children.
                </p>
                <h3>Rescuing Hope from South African Streets</h3>
                <p>
                  In South Africa's townships and urban centers, thousands of
                  children live on the streets, begging at traffic lights and
                  vulnerable to exploitation. In the DRC's mineral-rich provinces,
                  an estimated 40,000 children work in artisanal mines. We work
                  directly with local communities across both regions to provide
                  comprehensive care and protection.
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
                      <li>Leading SA Organizations Making a Difference</li>
                      <li>
                        Daily township patrols to identify at-risk street children
                      </li>
                      <li>Working with local SA leaders to prevent child exploitation</li>
                    </ul>
                  </div>
                </div>
                <p>
                  The transformation happening in South African child welfare is
                  measurable and inspiring. Our programs across Gauteng, Western Cape,
                  KwaZulu-Natal, and Eastern Cape report that 70-80% of
                  children successfully reintegrate into formal education or vocational
                  training. Many go on to become productive community members, with some
                  even returning as volunteers or staff members. Children who once
                  lived on the streets of Johannesburg, Cape Town, and Durban now
                  attend school regularly, have stable housing, and most importantly,
                  have hope for their futures. Former street children have become
                  teachers, social workers, business owners, and community leaders
                  across South Africa. <br></br>In the Democratic Republic of Congo's
                  mineral-rich provinces, we continue our vital work with thousands
                  of children who labor in hazardous mining conditions. Through our
                  network of local partners, we've established 8 rescue centers
                  providing comprehensive care - nutritious meals, trauma counseling,
                  and accelerated learning programs. Our integrated approach addresses
                  both South African street children and DRC mining exploitation.
                </p>
                <h3 className='quate'>
                  "Every child rescued from South Africa's streets or provided with stable
                  care creates a positive ripple effect throughout our communities. These
                  children grow up to become parents who know how to provide stable homes,
                  community members who contribute positively to society, and advocates
                  who help other vulnerable children across our beautiful nation."
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
