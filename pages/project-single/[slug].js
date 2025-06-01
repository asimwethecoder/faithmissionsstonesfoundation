import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Projects from '../../pages/api/projects';
import Footer from '../../components/footer/Footer';
import logo from '../../public/images/logo-2.svg';
import psingle1 from '../../public/images/project-details/sing1.jpg';
import psingle2 from '../../public/images/project-details/sing2.jpg';
import Image from 'next/image';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ProjectSingle = props => {
  const router = useRouter();
  const ProjectSingle = Projects.find(item => item.slug === router.query.slug);

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={'wpo-site-header'} />
      <PageTitle pageTitle='Child Rights Legal Initiative' />
      <section className='project-single-page section-padding'>
        <div className='container'>
          <div className='project-wrap'>
            <div className='project-top-info'>
              <div className='row align-items-center'>
                <div className='col-lg-8 col-12'>
                  <div className='section-title'>
                    <h2>Justice for Mining Children</h2>
                    <h3>{ProjectSingle?.title}</h3>
                    <p>{ProjectSingle?.docomunt}</p>
                    <Link
                      onClick={ClickHandler}
                      href='/donate'
                      className='theme-btn'>
                      Support Our Legal Fight <i className='ti-angle-right'></i>
                    </Link>
                  </div>
                </div>
                <div className='col-lg-4 col-12'>
                  <div className='project-info'>
                    <ul>
                      <li>
                        <h3>Partners</h3>
                        <span>DRC Justice Ministry</span>
                      </li>
                      <li>
                        <h3>Project Type</h3>
                        <span>Child Labor Legislation Reform</span>
                      </li>
                      <li>
                        <h3>Date Launched</h3>
                        <span>{ProjectSingle?.date}</span>
                      </li>
                      <li>
                        <h3>Legal Resources</h3>
                        <span>rights.miningchildren.org</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='image-gallery'>
                <ul>
                  <li>
                    <Image
                      src={psingle2}
                      alt='Legal team meeting with officials'
                    />
                  </li>
                  <li>
                    <Image src={psingle1} alt='Child protection workshop' />
                  </li>
                </ul>
              </div>
              <div className='info-content'>
                <div className='info-item'>
                  <div className='left'>
                    <h2>Legal Milestones Achieved</h2>
                  </div>
                  <div className='right'>
                    <p>
                      Our advocacy has resulted in groundbreaking changes to
                      DRC's child protection laws. We've successfully lobbied
                      for increased penalties for mine operators employing
                      children and established mandatory reporting systems for
                      underage labor violations.
                    </p>
                    <div className='item'>
                      <ul>
                        <li>2019 Child Mining Prohibition Act</li>
                        <li>24 Prosecuted Cases</li>
                      </ul>
                      <ul>
                        <li>15 Trained Juvenile Judges</li>
                        <li>National Reporting Hotline</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='info-item'>
                  <div className='left'>
                    <h2>Case Study Impact</h2>
                  </div>
                  <div className='right s2'>
                    <p>
                      Through strategic litigation, we've set legal precedents
                      protecting children's rights in mineral extraction zones.
                      Our landmark 2023 case established corporate liability for
                      subcontractor violations.
                    </p>
                    <div className='item'>
                      <ul>
                        <li>
                          <h3>
                            <i className='flaticon-check'></i>Legal Victories
                          </h3>
                          <span>
                            17 successful prosecutions of illegal mining
                            operators in 2023 alone
                          </span>
                        </li>
                        <li>
                          <h3>
                            <i className='flaticon-check'></i>Policy Influence
                          </h3>
                          <span>
                            Drafted 3 national child protection amendments
                            adopted by Parliament
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-img'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-12'>
                    <Image src={psingle1} alt='Lawyers reviewing case files' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-12'>
                    <Image
                      src={psingle2}
                      alt='Community legal awareness session'
                    />
                  </div>
                </div>
              </div>
              <div className='page-chang'>
                <div className='previous-post post'>
                  <Link
                    onClick={ClickHandler}
                    href='/projects/mining-rescue-initiative'>
                    Mining Rescue Initiative
                  </Link>
                </div>
                <button className='post-btn'>
                  <svg width='33' height='33' viewBox='0 0 33 33' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.68457 0.444336H7.0903V6.88878H0.68457V0.444336ZM0.68457 13.3333H7.0903V19.7777H0.68457V13.3333ZM7.0903 26.2221H0.68457V32.6665H7.0903V26.2221ZM13.4959 0.444336H19.9016V6.88878H13.4959V0.444336ZM19.9016 13.3333H13.4959V19.7777H19.9016V13.3333ZM13.4959 26.2221H19.9016V32.6665H13.4959V26.2221ZM32.7133 0.444336H26.3076V6.88878H32.7133V0.444336ZM26.3076 13.3333H32.7133V19.7777H26.3076V13.3333ZM32.7133 26.2221H26.3076V32.6665H32.7133V26.2221Z'
                      fill='#FF7236'
                    />
                  </svg>
                </button>
                <div className='next-post post'>
                  <Link
                    onClick={ClickHandler}
                    href='/projects/community-outreach'
                    className='next'>
                    Next <i className='ti-angle-right'></i>
                  </Link>
                  <Link
                    onClick={ClickHandler}
                    href='/projects/community-outreach'>
                    Community Outreach Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectSingle;
