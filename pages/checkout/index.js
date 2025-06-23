import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import CheckoutSection from '../../components/CheckoutSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { connect } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Head from 'next/head';

const CheckoutPage = ({ cartList }) => {
  return (
    <Fragment>
      <Head>
        <title>Checkout - Faith Missions Stone Foundation</title>
        <meta name="description" content="Complete your purchase to support Faith Missions Stone Foundation's work with South African street children and orphans." />
        <meta name="keywords" content="Faith Missions checkout, charity donation, support street children, secure payment" />
        <link rel="canonical" href="https://faithmissionsstonefoundation.org/checkout" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
      <CheckoutSection cartList={cartList} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    cartList: state.cartList.cart,
    symbol: state.data.symbol,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
