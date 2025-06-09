import React from 'react';
import Link from 'next/link';

import Shape from '../../public/images/cta-shap.svg';
import Shape2 from '../../public/images/curved_shape.svg';
import Shape3 from '../../public/images/arrow1.svg';
import Image from 'next/image';
import volunteer from '../../public/images/slider/volunteer.jpg';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const CtaSection = props => {
  return (
    <section 
      className={'' + props.hclass}
      style={{
        backgroundImage: `url(${volunteer.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1
        }}
      ></div>
      <div className='container'>
        <div className='content'>
          <span>Compassion in Action: Join Us Today</span>
          <h3>children need your help by donating today</h3>
          <Link
            onClick={ClickHandler}
            href='/become-volunteer'
            className='theme-btn'>
            become voluteer
          </Link>
        </div>
      </div>
      <div className='shape'>
        <Image src={Shape} alt='' />
      </div>
      <div className='shape-1'>
        <Image src={Shape2} alt='' />
      </div>
      <div className='shape-2'>
        <Image src={Shape3} alt='' />
      </div>
    </section>
  );
};

export default CtaSection;