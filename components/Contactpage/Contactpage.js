import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const Contactpage = () => {
  return (
    <section className='contact-page section-padding'>
      <div className='container'>
        <div className='office-info'>
          <div className='row'>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='office-info-item'>
                <div className='office-info-icon'>
                  <div className='icon'>
                    <i className='fi flaticon-home-address'></i>
                  </div>
                </div>
                <div className='office-info-text'>
                  <h2>address line</h2>
                  <p>
                    195 Corlett Dr, Bramley,
                    <br />
                    Johannesburg, S/Africa
                  </p>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='office-info-item active'>
                <div className='office-info-icon'>
                  <div className='icon'>
                    <i className='fi flaticon-phone-call'></i>
                  </div>
                </div>
                <div className='office-info-text'>
                  <h2>Phone Number</h2>
                  <p>+27 62 088 1234</p>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='office-info-item'>
                <div className='office-info-icon'>
                  <div className='icon'>
                    <i className='fi flaticon-mail-1'></i>
                  </div>
                </div>
                <div className='office-info-text'>
                  <h2>Address</h2>
                  <p>
                    contact@aidUs.com <br /> info@aidUs.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-wrap'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='contact-left'>
                <h2>Get in touch</h2>
                <p>
                  Contact us today if you want to make a contribution or partner
                  with us in any innitiative.
                </p>
                <div className='map'>
                  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.093456973258!2d28.082044795801963!3d-26.125956687447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951418af2b7b25%3A0xfe4c21bb6f3a8a05!2s195%20Corlett%20Dr%2C%20Bramley%2C%20Johannesburg%2C%202096%2C%20South%20Africa!5e0!3m2!1sen!2sbd!4v1719422393473!5m2!1sen!2sbd'></iframe>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='contact-right'>
                <div className='title'>
                  <h2>Fill Up The Form</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
