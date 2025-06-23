import React, { Fragment } from 'react';
import Link from 'next/link';
import Projects from '../../pages/api/projects';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Image from 'next/image';
import Head from 'next/head';

const ProjectPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>
        <title>Our Projects - Faith Missions Stone Foundation | South African Initiatives</title>
        <meta name="description" content="Explore Faith Missions Stone Foundation's projects supporting street children and orphans across South Africa's townships and DRC mining regions. See our impact." />
        <meta name="keywords" content="Faith Missions projects, South Africa charity projects, street children initiatives, township development, orphan support programs" />
        <meta property="og:title" content="Faith Missions Projects - Transforming Lives" />
        <meta property="og:description" content="Projects supporting street children across South Africa and DRC" />
        <link rel="canonical" href="https://faithmissionsstonefoundation.org/project" />
      </Head>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Portfolio'} />
      <section className='project-page section-padding'>
        <div className='container'>
          <div className='project-wrap'>
            {Projects.slice(0, 6).map((project, pitem) => (
              <div className='project-grid' key={pitem}>
                <Image src={project.pimg1} alt='' />
                <div className='content'>
                  <div>
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        href={'/project-single/[slug]'}
                        as={`/project-single/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <span>{project.subtitle}</span>
                  </div>
                  <div>
                    <div className='icon'>
                      <Link
                        onClick={ClickHandler}
                        href={'/project-single/[slug]'}
                        as={`/project-single/${project.slug}`}>
                        <i className='flaticon-right-arrow'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectPage;
