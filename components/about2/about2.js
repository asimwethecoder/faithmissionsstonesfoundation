import React, { useState } from "react";
import VideoModal from "../ModalVideo/VideoModal";
import CountUp from "react-countup";
import About1 from "/public/images/about/about-3.jpg";
import About2 from "/public/images/about/about-4.jpg";
import About3 from "/public/images/about/about-5.jpg";
import About4 from "/public/images/about/about-6.jpg";
import About5 from "/public/images/about/about-7.jpg";
import Shape1 from "/public/images/about/shape4.svg";
import Shape2 from "/public/images/about/shape11.svg";
import Shape3 from "/public/images/healthcare.svg";
import Shape4 from "/public/images/about/shape10.svg";
import Shape5 from "/public/images/about/call.svg";
import Shape6 from "/public/images/about/shape7.svg";
import Shape7 from "/public/images/about/shape2.svg";
import Shape8 from "/public/images/about/shape8.svg";
import Image from "next/image";
import slide00 from "/public/images/slider/slide00.jpg";
import slide012 from "/public/images/slider/slide012.jpg";
import slider1 from "/public/images/slider/slider1.jpg";
import slider013 from "/public/images/slider/slider013.jpg";

const AboutS2 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image">
              <div className="image1">
                <Image src={slide00} alt="" />
              </div>
              <div className="image2">
                <Image src={slide012} alt="" />
              </div>
              <div className="shape-love">
                <Image src={Shape1} alt="" />
              </div>
              <div className="text">
                <h2>Since</h2>
                <h3>
                  <CountUp end={2025} enableScrollSpy />
                </h3>
                <div className="shape">
                  <Image src={Shape2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="right-content">
              <h2>
                <Image src={Shape3} alt="" />
                Transforming Lives in the Democratic Republic of Congo.
              </h2>
              <h3>
                {" "}
                Helping each other can make<span> the world </span> better
              </h3>
              <p>
                Faith Missions Stone Foundation is dedicated to rescuing
                children from hazardous mining work and providing comprehensive
                care through shelter, education, and medical support.
              </p>

              <div className="about-tab">
                <div className="tab">
                  <button
                    className={activeTab === 0 ? "tablinks active" : "tablinks"}
                    onClick={() => handleTabClick(0)}
                  >
                    Our Mission
                  </button>
                  <button
                    className={activeTab === 1 ? "tablinks active" : "tablinks"}
                    onClick={() => handleTabClick(1)}
                  >
                    Our Vission
                  </button>
                  <button
                    className={activeTab === 2 ? "tablinks active" : "tablinks"}
                    onClick={() => handleTabClick(2)}
                  >
                    excellence
                  </button>
                </div>
                <div
                  className={activeTab === 0 ? " tabcontent active" : "hidden"}
                >
                  <div className="tab-wrap">
                    <div className="left">
                      <Image src={slider013} alt="" />
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i> Create sustainable
                          community programs
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Advocate for
                          children's rights nationwide
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Awards Winning
                          nonprofit company
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={activeTab === 1 ? " tabcontent active" : "hidden"}
                >
                  <div className="tab-wrap">
                    <div className="left">
                      <Image src={About4} alt="" />
                      <VideoModal />
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i> Provide safe
                          housing and nutrition
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Rescue children from
                          dangerous mining work
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Deliver essential
                          medical care
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={activeTab === 2 ? " tabcontent active" : "hidden"}
                >
                  <div className="tab-wrap">
                    <div className="left">
                      <Image src={About5} alt="" />
                      <VideoModal />
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>Offer trauma
                          counseling and education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Eradicate child
                          labor in DRC mines
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Establish regional
                          rehabilitation centers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="author-wrap">
                <ul className="author-img">
                  <li>
                    <Image src={slide00} alt="" />
                  </li>
                  <li className="active">
                    <Image src={slide012} alt="" />
                  </li>
                  <li>
                    <Image src={slider1} alt="" />
                  </li>
                </ul>
                <div className="author-text">
                  1000+ Children{" "}
                  <div className="shape">
                    <Image src={Shape4} alt="" />
                  </div>
                </div>
                <div className="contact">
                  <div className="icon">
                    <Image src={Shape5} alt="" />
                  </div>
                  <div className="text">
                    <span>Phone:</span>
                    <h4>+27 62 088 1234</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <Image src={Shape6} alt="" />
      </div>
      <div className="shape-2">
        <Image src={Shape7} alt="" />
      </div>
      <div className="shape-3">
        <Image src={Shape8} alt="" />
      </div>
    </section>
  );
};

export default AboutS2;
