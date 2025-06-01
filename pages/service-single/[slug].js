import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Accordion from "../../components/Accordion/Accordion";
import { useRouter } from "next/router";
import Link from "next/link";
import Services from "../../pages/api/Services";
import ServiceSidebar from "./sidebar";
import video from "/public/images/service-single/video.jpg";
import simg1 from "/public/images/image-gallery/1.jpg";
import simg2 from "/public/images/image-gallery/2.jpg";
import simg3 from "/public/images/image-gallery/3.jpg";
import simg4 from "/public/images/image-gallery/4.jpg";
import Footer from "../../components/footer/Footer";
import logo from "/public/images/logo-2.svg";
import VideoModal from "../../components/ModalVideo/VideoModal";
import Image from "next/image";

const ServiceSinglePage = (props) => {
  const router = useRouter();

  const serviceDetails = Services.find(
    (item) => item.slug === router.query.slug
  );

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={"wpo-site-header"} />
      <PageTitle pageTitle={serviceDetails?.title} pagesub={"Service Single"} />
      <section className="service-single-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-lg-2">
              <div className="service-single-wrap">
                <div className="title-image">
                  <Image src={serviceDetails?.simage} alt="" />
                </div>
                <h2>{serviceDetails?.title}</h2>
                <p>
                  Faith Missions Stone Foundation is dedicated to transforming
                  lives in the Democratic Republic of Congo's mining regions.
                  Every day, thousands of children face dangerous conditions in
                  cobalt and coltan mines instead of attending school. We
                  provide critical support including education, healthcare, and
                  nutrition to these children.
                </p>
                <h3>Rescuing Hope in the Heart of Darkness</h3>
                <p>
                  In the DRC's mineral-rich provinces, an estimated 40,000
                  children work in artisanal mines. We work directly with local
                  communities to.
                </p>
                <div className="video-wrap">
                  <div className="video-img">
                    <Image src={video} alt="" />
                    <div className="video-holder">
                      <VideoModal />
                    </div>
                  </div>
                  <div className="video-content">
                    <h2>Transforming Lives in Mining Communities</h2>
                    <p>
                      In the heart of the Democratic Republic of Congo's
                      mineral-rich regions, children as young as 6 work 12-hour
                      days in cobalt and coltan mines. Our foundation intervenes
                      through
                    </p>
                    <ul>
                      <li>Immediate Rescue Operations</li>
                      <li>
                        Daily mine site patrols to identify at-risk children
                      </li>
                      <li>Working with local leaders to prevent child labor</li>
                    </ul>
                  </div>
                </div>
                <p>
                  In the Democratic Republic of Congo's mineral-rich provinces,
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
                <h3 className="quate">
                  "Every child rescued from the mines represents a rebirth of
                  hope - we don't just extract minerals from the earth, but
                  extract children from exploitation to restore their stolen
                  futures."
                </h3>

                <div className="image-gallery">
                  <h2>Eligibility checklist :</h2>
                  <ul>
                    <li>
                      <Image src={simg1} alt="" />
                    </li>
                    <li>
                      <Image src={simg2} alt="" />
                    </li>
                    <li>
                      <Image src={simg3} alt="" />
                    </li>
                    <li>
                      <Image src={simg4} alt="" />
                    </li>
                  </ul>
                </div>
                <Accordion />
              </div>
            </div>
            <div className="col-lg-4 col-12 order-lg-1">
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
