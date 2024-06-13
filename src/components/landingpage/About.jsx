import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import OficialPartners from './OficialPartners';

export default function About() {
  return (
    <>
      <OficialPartners />
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/carabout.png" alt="" />
            </div>
            <div className="col-md-6">
              <h6>About Us</h6>
              <h2>
                Over 100+ types of <br />
                special rental cars
              </h2>
              <p>Get your dreams car rental at an affordable price. There are various attractive offers from us. We collaborate with various trusted leasing partners</p>
              <button className="btn-allcars">
                See all cars <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
