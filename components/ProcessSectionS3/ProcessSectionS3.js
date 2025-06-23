import React from 'react';

import Shape from '../../public/images/healthcare.svg';
import Shape2 from '../../public/images/process/process-right.png';
import Icon1 from '../../public/images/process/icon-1.svg';
import Icon2 from '../../public/images/process/icon-2.svg';
import Icon3 from '../../public/images/process/icon-3.svg';
import Image from 'next/image';

const ProcessSectionS3 = props => {
  return (
    <section className={'' + props.hclass}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-12'>
            <div className='content'>
              <div className='section-title'>
                <span>
                  <Image src={Shape} alt='' />
                  We are always open for children
                </span>
                <h2>
                  Helping each other make <span>South Africa</span> better
                </h2>
                <p>
                  Transmds is the world’s driving worldwide coordinations
                  supplier we industry and exchange the worldwide trade of
                  merchandi world’s worldwide coordinations supplier — we uphold
                  industry and exchange
                </p>
              </div>
              <ul>
                <li>
                  <span className='num'>1</span>
                  <div className='icon'>
                    <Image src={Icon1} alt='' />
                  </div>
                  <h3>Learn about our SA township work</h3>
                </li>
                <li>
                  <span className='num'>2</span>
                  <div className='icon'>
                    <Image src={Icon2} alt='' />
                  </div>
                  <h3>Support South African street children</h3>
                </li>
                <li>
                  <span className='num'>3</span>
                  <div className='icon'>
                    <Image src={Icon3} alt='' />
                  </div>
                  <h3>See transformation in communities</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-5 col-12'>
            <div className='right-img'>
              <Image src={Shape2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionS3;
