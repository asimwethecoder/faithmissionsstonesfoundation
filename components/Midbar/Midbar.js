import React from 'react';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Link from 'next/link';
import Image from 'next/image';

const Midbar = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className='midbar'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-3 col-12'>
            <Link onClick={ClickHandler} href='/' className='logo-mid'>
              <Image
                src={Logo}
                alt='FMSF Logo'
                width={120}
                height={30}
                style={{
                  objectFit: 'contain',
                  borderRadius: '10px',
                  padding: '5px',
                }}
              />
            </Link>
          </div>
          <div className='col-lg-9 col-12'>
            <ul>
              <li>
                <div className='icon'>
                  <i className='flaticon-clock'></i>
                </div>
                <div className='text'>
                  <h3>Opening Houres</h3>
                  <span>Mon _ Sat: 9.00 to 18.00</span>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <i className='fi flaticon-home-address'></i>
                </div>
                <div className='text'>
                  <h3>Our Address</h3>
                  <span>195 Corlett Dr, Bramley, S/Africa</span>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <i className='flaticon-phone-1'></i>
                </div>
                <div className='text'>
                  <h3>Contact Us</h3>
                  <span>+27 62 088 1234</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midbar;
