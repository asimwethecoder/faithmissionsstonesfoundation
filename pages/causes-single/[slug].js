import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import causes from '../../pages/api/causes';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import shape from '../../public/images/cause-single/shape.svg';
import SidebarSection from './SidebarSection';
import simg1 from '../../public/images/image-gallery/img1.jpg';
import simg2 from '../../public/images/image-gallery/img08.jpg';
import simg3 from '../../public/images/image-gallery/img03.jpg';
import simg4 from '../../public/images/image-gallery/img1.jpg';
import Accordion from '../../components/Accordion/Accordion';

const CausesSinglePage = () => {
  const router = useRouter();

  const CausesSingle = causes.find(item => item.slug === router.query.slug);

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={CausesSingle?.title} />
      <div className='case-details-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8'>
              <div className='case-details-left'>
                <div className='image'>
                  <Image src={CausesSingle?.CSimg} alt='' />
                  <div className='shape'>
                    <Image src={shape} alt='' />
                  </div>
                </div>
                <div className='case-details-content'>
                  <h2>{CausesSingle?.title}</h2>
                  <p>
                    This initiative directly addresses pressing challenges in
                    South Africa's region, where interventions are critically
                    needed to achieve sustainable development goals.
                  </p>
                </div>
                <div className='image-gallery'>
                  <ul>
                    <li>
                      <Image src={simg1} alt='' />
                    </li>
                    <li>
                      <Image src={simg2} alt='' />
                    </li>
                    <li>
                      <Image src={simg3} alt='' />
                    </li>
                    <li>
                      <Image src={simg4} alt='' />
                    </li>
                  </ul>
                </div>
                <Accordion />
              </div>
            </div>
            <div className='col col-lg-4 col-12'>
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CausesSinglePage;
