import React from 'react';
import Link from 'next/link';
import causes from '../../pages/api/causes';
import Shape from '../../public/images/causes/shape2.svg';
import Slider from 'react-slick';
import Image from 'next/image';

const CausesSectionS2 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className='causes-section-s2 section-padding '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <div className='section-title'>
              <span>Rescuing Futures, Not Just Children</span>
              <h2>
                Building Hope in the <span>DRC</span> Together
              </h2>
              <p>
                Through shelter, education, and medical care, we're transforming
                lives of orphaned children trapped in Congo's mining regions.
                Every contribution helps break the cycle of exploitation.
              </p>
              <ul>
                <li>
                  <i className='flaticon-check'></i>
                  Immediate rescue from hazardous mining conditions
                </li>
                <li>
                  <i className='flaticon-check'></i>
                  Comprehensive trauma-informed rehabilitation programs.
                </li>
                <li>
                  <i className='flaticon-check'></i>
                  Sustainable community development initiatives.
                </li>
              </ul>
              <Link
                onClick={ClickHandler}
                href='/service'
                className='theme-btn'>
                View Our Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*}
      <Slider {...settings} className='causes-slider-s2'>
        {causes.slice(6, 10).map((causesData, item) => (
          <div className='causes-card' key={item}>
            <div className='image'>
              <span>{causesData.tag}</span>
              <Image src={causesData.Cimg} alt='' />
            </div>
            <div className='text'>
              <h2>
                <Link
                  onClick={ClickHandler}
                  href={'/causes-single/[slug]'}
                  as={`/causes-single/${causesData.slug}`}>
                  {causesData.title}
                </Link>
              </h2>
              <p>{causesData.docomunt}</p>
            </div>
            <div className='progress-wrap'>
              <div className='progress-item'>
                <div className='progress'>
                  <div
                    className='bar'
                    style={{ width: `${causesData.progress}%` }}>
                    <span className='cssProgress-label'>
                      {causesData.progress}%
                    </span>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <span className='title'>Goal:</span>
                  <span>${causesData.goal}</span>
                </li>
                <li>
                  <span className='title'>Raised:</span>
                  <span>${causesData.raised}</span>
                </li>
                <li>
                  <span className='title'>Goal:</span>
                  <span>${causesData.targetGoal}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider> */}
      <div className='shape'>
        <Image src={Shape} alt='' />
      </div>
    </section>
  );
};

export default CausesSectionS2;
