import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="background">
        <div className="left-background"></div>
        <div className="right-background"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Look for the best car <br />
              Rental service here
            </h1>
            <p>Ease of renting a car safely and reliably. Of course at a very cheap price. Hurry up and get your best rental car</p>
            <div className="btn-item">
              <button>
                Rental Now <FaPhoneAlt />
              </button>
              <a href="">See all cars</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/images/heroimg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
