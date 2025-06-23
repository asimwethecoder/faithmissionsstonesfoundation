import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { addToCart } from '../../store/actions/action';
import ShopProduct from '../../components/ShopProduct';
import api from '../../pages/api';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

import Logo from '/public/images/FaithMineralsStoneFoundationLogo.jpeg';
import Head from 'next/head';

const ShopPage = ({ addToCart }) => {
  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const products = productsArray;

  return (
    <Fragment>
      <Head>
        <title>Shop - Faith Missions Stone Foundation | Support Our Cause</title>
        <meta name="description" content="Shop Faith Missions Stone Foundation merchandise and support South African street children and orphans. Every purchase helps fund our township programs." />
        <meta name="keywords" content="Faith Missions shop, charity merchandise, support street children, South Africa charity shop, nonprofit store" />
        <meta property="og:title" content="Faith Missions Shop - Support Street Children" />
        <meta property="og:description" content="Shop to support South African street children and orphans" />
        <link rel="canonical" href="https://faithmissionsstonefoundation.org/shop" />
      </Head>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Shop'} />
      <section className='shop-page section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <ShopProduct
                addToCartProduct={addToCartProduct}
                products={products}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ShopPage);
