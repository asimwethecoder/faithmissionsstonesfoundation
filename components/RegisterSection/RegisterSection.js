import React from "react";
import Link from "next/link";

import slider1 from "/public/images/slider/slider1.JPG";
import Shape from "/public/images/register-shape.svg";
import Shape1 from "/public/images/healthcare.svg";
import Image from "next/image";

const RegisterSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="register-section">
      <div className="container">
        <div className="content">
          <div className="image">
            <Image src={slider1} alt="" />
            <div className="icon">
              <i className="flaticon-tablet"></i>
            </div>
          </div>
          <div className="text">
            <span>
              <Image src={Shape1} alt="" />
              Non profit Charity Fundation
            </span>
            <h2>Click To Registered To be a memeber of us</h2>
            <Link onClick={ClickHandler} href="/contact">
              Contact Now <i className="flaticon-right-arrow-1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="shape">
        <Image src={Shape} alt="" />
      </div>
    </section>
  );
};

export default RegisterSection;
