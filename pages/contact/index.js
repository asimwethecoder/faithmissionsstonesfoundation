import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Contactpage from '../../components/Contactpage/Contactpage';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

import Logo from '../../public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us - Faith Missions Stone Foundation | Get in Touch</title>
        <meta name="description" content="Contact Faith Missions Stone Foundation to learn how you can support South African street children and orphans. Get involved in our township programs and DRC initiatives." />
        <meta name="keywords" content="contact Faith Missions, South Africa charity contact, volunteer opportunities, donate to street children, nonprofit contact" />
        <meta property="og:title" content="Contact Faith Missions Stone Foundation" />
        <meta property="og:description" content="Get in touch to support South African street children and orphans" />
        <link rel="canonical" href="https://faithmissionsstonefoundation.org/contact" />
      </Head>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
