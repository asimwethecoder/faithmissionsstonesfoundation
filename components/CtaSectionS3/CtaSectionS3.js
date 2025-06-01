import React from 'react';
import Link from 'next/link';

import Shape from '../../public/images/healthcare.svg';
import Shape2 from '../../public/images/cta-shap-2.svg';
import Shape3 from '../../public/images/cta-shap-3.svg';
import Image from 'next/image';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const CtaSectionS3 = () => {
  return (
    <section className='cta-section-s3'>
      <div className='container'>
        <div className='cta-wrap'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-12'>
              <div className='content'>
                <h2>
                  {' '}
                  <Image src={Shape} alt='' /> Faith Missions Stone Foundation
                </h2>
                <h3>From Mine Rescue to Sustainable Futures</h3>
                <ul>
                  <li>
                    <i className='flaticon-check'></i>24/7 Local Response Teams
                    in Mining Regions
                  </li>
                  <li>
                    <i className='flaticon-check'></i>Child-Safe Environments
                    with Trauma-Informed Care
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='all-btn'>
                <Link
                  onClick={ClickHandler}
                  href='/donate'
                  className='theme-btn'>
                  Donate Now <i className='flaticon-heart'></i>
                </Link>
              </div>
            </div>
          </div>
          <div className='shape'>
            <Image src={Shape2} alt='' />
          </div>
          <div className='shape1'>
            <Image src={Shape3} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionS3;
