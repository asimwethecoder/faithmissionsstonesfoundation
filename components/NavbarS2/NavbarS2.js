import React, { useState, useEffect } from 'react';
import HeaderS2 from '../headerS2/HeaderS2';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';

const NavbarS2 = props => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{
      position: isSticky ? 'fixed' : 'relative',
      width: '100%',
      zIndex: 999,
      top: 0,
      left: 0,
      background: isSticky ? '#fff' : 'transparent',
      boxShadow: isSticky ? '0 0 20px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <HeaderS2
        hclass={`${props.hclass} ${isSticky ? 'sticky-header' : ''}`}
        Logo={props.Logo || Logo}
        topbarClass={props.topbarClass}
      />
      {isSticky && (
        <style jsx global>{`
          .sticky-header .navbar-nav a {
            color: #333 !important;
          }
          .sticky-header .navbar-nav .sub-menu a {
            color: #333 !important;
          }
          .sticky-header .menu-item-has-children > a::before {
            color: #333 !important;
          }
        `}</style>
      )}
    </div>
  );
};

export default NavbarS2;