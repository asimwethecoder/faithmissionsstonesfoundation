import React, { useState } from 'react';
import CountUp from 'react-countup';
import CapeTown from '../../public/images/about/capetowncity.jpeg';
import Shape1 from '../../public/images/about/shape4.svg';
import Shape2 from '../../public/images/about/shape11.svg';
import Shape3 from '../../public/images/healthcare.svg';
import Shape4 from '../../public/images/about/shape10.svg';
import Shape5 from '../../public/images/about/call.svg';
import Shape6 from '../../public/images/about/shape7.svg';
import Shape7 from '../../public/images/about/shape2.svg';
import Shape8 from '../../public/images/about/shape8.svg';
import Image from 'next/image';
import slide00 from '../../public/images/slider/slide00.jpg';
import slide012 from '../../public/images/slider/slide012.jpg';
import slider1 from '../../public/images/slider/slider1.jpg';
import slider013 from '../../public/images/slider/slider013.jpg';

const AboutS2 = props => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <section className={'' + props.hclass}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-12'>
            <div className='about-image' style={{ marginBottom: '30px' }}>
              <div
                className='image1'
                style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                <Image
                  src={slide00}
                  alt=''
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div
                className='image2'
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  margin: '20px auto 0',
                }}>
                <Image
                  src={slide012}
                  alt=''
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div
                className='shape-love'
                style={{
                  position: 'relative',
                  display: 'block',
                  margin: '20px auto',
                }}>
                <Image src={Shape1} alt='' />
              </div>
              <div
                className='text'
                style={{
                  position: 'relative',
                  transform: 'none',
                  margin: '20px auto',
                  textAlign: 'center',
                }}>
                <h2>Since</h2>
                <h3>
                  <CountUp end={2025} enableScrollSpy />
                </h3>
                <div className='shape'>
                  <Image src={Shape2} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-12'>
            <div className='right-content'>
              <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
                <Image src={Shape3} alt='' />
                Transforming Lives in South Africa and the Democratic Republic
                of Congo.
              </h2>
              <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>
                {' '}
                Helping each other can make<span> the world </span> better
              </h3>
              <p>
                Faith Missions Stone Foundation is dedicated to rescuing
                children from the streets, hazardous mining work and providing
                comprehensive care through shelter, education, and medical
                support.
              </p>

              <div className='about-tab'>
                <div
                  className='tab'
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <button
                    className={activeTab === 0 ? 'tablinks active' : 'tablinks'}
                    onClick={() => handleTabClick(0)}
                    style={{ marginBottom: '10px' }}>
                    Our Mission
                  </button>
                  <button
                    className={activeTab === 1 ? 'tablinks active' : 'tablinks'}
                    onClick={() => handleTabClick(1)}
                    style={{ marginBottom: '10px' }}>
                    Our Vission
                  </button>
                  <button
                    className={activeTab === 2 ? 'tablinks active' : 'tablinks'}
                    onClick={() => handleTabClick(2)}
                    style={{ marginBottom: '10px' }}>
                    excellence
                  </button>
                </div>
                <div
                  className={activeTab === 0 ? ' tabcontent active' : 'hidden'}>
                  <div
                    className='tab-wrap'
                    style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      className='left'
                      style={{ width: '100%', marginBottom: '20px' }}>
                      <Image
                        src={slider013}
                        alt=''
                        style={{ width: '40%', height: 'auto' }}
                      />
                    </div>
                    <div className='right' style={{ width: '100%' }}>
                      <ul>
                        <li>
                          <i className='flaticon-check'></i> Create sustainable
                          community programs
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Advocate for
                          children's rights nationwide
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Awards Winning
                          nonprofit company
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={activeTab === 1 ? ' tabcontent active' : 'hidden'}>
                  <div
                    className='tab-wrap'
                    style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      className='left'
                      style={{ width: '100%', marginBottom: '20px' }}>
                      <Image
                        src={CapeTown}
                        alt=''
                        style={{ width: '40%', height: 'auto' }}
                      />
                    </div>
                    <div className='right' style={{ width: '100%' }}>
                      <ul>
                        <li>
                          <i className='flaticon-check'></i> Provide safe
                          housing and nutrition
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Rescue children from
                          dangerous mining work
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Deliver essential
                          medical care
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={activeTab === 2 ? ' tabcontent active' : 'hidden'}>
                  <div
                    className='tab-wrap'
                    style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      className='left'
                      style={{ width: '100%', marginBottom: '20px' }}>
                      <Image
                        src={CapeTown}
                        alt=''
                        style={{ width: '40%', height: 'auto' }}
                      />
                    </div>
                    <div className='right' style={{ width: '100%' }}>
                      <ul>
                        <li>
                          <i className='flaticon-check'></i>Offer trauma
                          counseling and education
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Eradicate child
                          labor in South African and DRC mines
                        </li>
                        <li>
                          <i className='flaticon-check'></i>Establish regional
                          rehabilitation centers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='author-wrap'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <ul className='author-img' style={{ marginBottom: '20px' }}>
                  <li>
                    <Image src={slide00} alt='' />
                  </li>
                  <li className='active'>
                    <Image src={slide012} alt='' />
                  </li>
                  <li>
                    <Image src={slider1} alt='' />
                  </li>
                </ul>
                <div className='author-text' style={{ marginBottom: '20px' }}>
                  1000+ Children{' '}
                  <div className='shape'>
                    <Image src={Shape4} alt='' />
                  </div>
                </div>
                <div className='contact'>
                  <div className='icon'>
                    <Image src={Shape5} alt='' />
                  </div>
                  <div className='text'>
                    <span>Phone:</span>
                    <h4>+27 62 088 1234</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape-1'>
        <Image src={Shape6} alt='' />
      </div>
      <div className='shape-2'>
        <Image src={Shape7} alt='' />
      </div>
      <div className='shape-3'>
        <Image src={Shape8} alt='' />
      </div>
    </section>
  );
};

export default AboutS2;
