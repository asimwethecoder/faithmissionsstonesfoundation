import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import Midbar from '../Midbar/Midbar';
import Image from 'next/image';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';

const Header = props => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = e => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <header id='header'>
      <HeaderTopbar />
      <Midbar />
      <div className={'' + props.hclass}>
        <nav className='navigation navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-3 d-lg-none dl-block'>
                <MobileMenu />
              </div>
              <div className='col-lg-0 col-md-6 col-6'>
                <div className='navbar-header'>
                  <Link
                    onClick={ClickHandler}
                    className='navbar-brand'
                    href='/home'>
                    <Image
                      src={Logo}
                      alt='FMSF logo'
                      width={80}
                      height={30}
                      style={{
                        objectFit: 'contain',
                        borderRadius: '10px',
                        padding: '5px',
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-7 col-md-1 col-1'>
                <div
                  id='navbar'
                  className='collapse navbar-collapse navigation-holder'>
                  <button className='menu-close'>
                    <i className='ti-close'></i>
                  </button>
                  <ul className='nav navbar-nav mb-2 mb-lg-0'>
                    <li className='menu-item-has-children'>
                      <Link
                        onClick={ClickHandler}
                        className='active'
                        href='/home-2'>
                        Home
                      </Link>
                    </li>
                    <li className='menu-item-has-children'>
                      <Link onClick={ClickHandler} href='#'>
                        Pages
                      </Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link onClick={ClickHandler} href='/about'>
                            About
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href='/donate'>
                            Donate
                          </Link>
                        </li>
                        <li className='menu-item-has-children'>
                          <Link onClick={ClickHandler} href='#'>
                            event
                          </Link>
                          <ul className='sub-menu'>
                            <li>
                              <Link onClick={ClickHandler} href='/event'>
                                event
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href='/event-single/Custom-Fabrication'>
                                event Single
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <Link onClick={ClickHandler} href='#'>
                            causes
                          </Link>
                          <ul className='sub-menu'>
                            <li>
                              <Link onClick={ClickHandler} href='/causes'>
                                causes
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href='/causes-single/established-fact'>
                                causes Single
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <Link onClick={ClickHandler} href='#'>
                            volunteer
                          </Link>
                          <ul className='sub-menu'>
                            <li>
                              <Link onClick={ClickHandler} href='/volunteer-1'>
                                volunteer
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href='/become-volunteer'>
                                become volunteer
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <Link onClick={ClickHandler} href='#'>
                        services
                      </Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link onClick={ClickHandler} href='/service'>
                            services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href='/service-single/Fund-Raised-&-Donation'>
                            services Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <Link onClick={ClickHandler} href='#'>
                        Portfolio
                      </Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link onClick={ClickHandler} href='/project'>
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href='/project-single/Custom-Fabrication'>
                            Portfolio Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href='/contact'>
                        contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-5 col-md-2 col-2'>
                <div className='header-right'>
                  <div className='header-search-form-wrapper'>
                    <div className='cart-search-contact'>
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className='search-toggle-btn'>
                        <i
                          className={`fi ti-search ${
                            menuActive ? 'ti-close' : 'fi '
                          }`}></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? 'header-search-content-toggle' : ''
                        }`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Search here...'
                            />
                            <button type='submit'>
                              <i className='fi flaticon-magnifying-glass'></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='close-form'>
                    <Link
                      onClick={ClickHandler}
                      className='theme-btn'
                      href='/donate'>
                      Donate now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
