import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import event from '../../pages/api/event';
import ContactForm from './ContactForm';
import blogs from '../../pages/api/blogs';
import Image from 'next/image';

const EventSinglePage = props => {
  const router = useRouter();
  const EventSinglePage = event.find(item => item.slug === router.query.slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = index => {
    setActiveTab(index);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={EventSinglePage?.title}
        pagesub={'Community Outreach'}
      />
      <div className='event-details-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8'>
              <div className='event-item'>
                <div className='event-img'>
                  <Image
                    src={EventSinglePage?.eSimg}
                    alt='Community outreach visual'
                  />
                </div>
                <div className='event-details-text'>
                  <h2>{EventSinglePage?.subtitle}</h2>
                  <p>
                    Our initiatives address urgent challenges facing vulnerable
                    youth in South Africa's urban centers. Through coordinated
                    interventions in cities like{' '}
                    {EventSinglePage?.location?.split(',')[0]}, we combine
                    immediate relief with sustainable solutions to break the
                    cycle of street dependency. Our evidence-based approaches
                    are developed in partnership with local communities and
                    government stakeholders.
                  </p>
                </div>
                <div className='event-details-wrap'>
                  <div className='event-details-tab'>
                    <ul className='nav nav-tabs'>
                      <li className='nav-item'>
                        <a
                          className={
                            activeTab === 0 ? 'nav-link active' : 'nav-link'
                          }
                          onClick={() => handleTabClick(0)}>
                          Program Schedule
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className={
                            activeTab === 1 ? 'nav-link active' : 'nav-link'
                          }
                          onClick={() => handleTabClick(1)}>
                          Venue Location
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className={
                            activeTab === 2 ? 'nav-link active' : 'nav-link'
                          }
                          onClick={() => handleTabClick(2)}>
                          Get Involved
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='event-details-content'>
                    <div className='tab-content'>
                      <div className={activeTab === 0 ? 'active' : 'hidden'}>
                        <div id='Schedule' className='tab-pane active'>
                          <p>
                            Our structured programs combine immediate aid with
                            long-term empowerment. Each initiative follows three
                            phases:
                          </p>
                          <ul>
                            <li>
                              Phase 1: Street outreach and emergency
                              stabilization
                            </li>
                            <li>
                              Phase 2: Health/psychological assessments and
                              family tracing
                            </li>
                            <li>
                              Phase 3: Educational/vocational integration and
                              community reintegration
                            </li>
                            <li>
                              24/7 crisis response teams in high-risk urban
                              areas
                            </li>
                            <li>
                              Partnerships with local SAPS Social Crime
                              Prevention units
                            </li>
                            <li>
                              Monthly community feedback sessions in township
                              hubs
                            </li>
                            <li>
                              Quarterly progress reviews with Social Development
                              Department
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={activeTab === 1 ? 'active' : 'hidden'}>
                        <div id='Map' className='tab-pane'>
                          <div className='contact-map'>
                            <iframe
                              src='https://www.google.com/maps/embed?pb=!1m18!1m14!1m3!1d13246.066092735887!2d18.4231426!3d-33.9252972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6766f3a41a7d%3A0xe4c2846ef4d8623!2sCape+Town+International+Convention+Centre!5e0!3m2!1sen!2sza!4v1563442160088!5m2!1sen!2sza'
                              allowFullScreen
                              title='SA Outreach Locations'
                              width='600'
                              height='450'
                              frameBorder='0'
                              style={{ border: 0 }}></iframe>
                          </div>
                        </div>
                      </div>
                      <div className={activeTab === 2 ? 'active' : 'hidden'}>
                        <div id='Contact' className='tab-pane'>
                          <div className='event-contact'>
                            <h3>Join Our Urban Outreach Team</h3>
                            <div className='donations-details'>
                              <ContactForm />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-12'>
              <div className='blog-sidebar'>
                <div className='widget search-widget'>
                  <h3>Find Outreach Updates</h3>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search initiatives...'
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                      <button type='submit'>
                        <i className='ti-search'></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className='widget recent-post-widget'>
                  <h3>Recent Outreach Updates</h3>
                  <div className='posts'>
                    {blogs.slice(0, 3).map((blog, bitem) => (
                      <div className='post' key={bitem}>
                        <div className='img-holder'>
                          <Image src={blog.recent} alt='Program update' />
                        </div>
                        <div className='details'>
                          <span className='date'>
                            <i className='flaticon-calendar'></i>
                            {blog.create_at}
                          </span>
                          <h4>
                            <Link
                              onClick={ClickHandler}
                              href={'/blog-single/[slug]'}
                              as={`/blog-single/\${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='widget tag-widget'>
                  <h3>Focus Areas</h3>
                  <ul>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        Township Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        Street Youth
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        HIV Prevention
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        Skills Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        Legal Advocacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href='/event-single/Custom-Fabrication'>
                        Urban Outreach
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EventSinglePage;
