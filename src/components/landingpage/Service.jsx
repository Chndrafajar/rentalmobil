import React from 'react';

export default function Service() {
  return (
    <>
      <section className="service">
        <div className="items-overlay">
          <div className="container">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-lg-7">
                <h6>Our Services</h6>
                <h2>
                  We have the best car
                  <br />
                  rental service
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quidem aperiam earum eos eveniet suscipit accusamus odio doloremque neque ipsum.</p>
              </div>
            </div>
            <div className="row row-service">
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="header"></div>
                  <div className="info">
                    <img src="/icons/flexibility.png" alt="" />
                    <h4>Flexibility & Convenience</h4>
                    <p>Car rental services offer high flexibility for customers. You can choose a car according to your needs, whether for a business trip, family vacation or special event.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="header"></div>
                  <div className="info">
                    <img src="/icons/price.png" alt="" />
                    <h4>Cost Efficiency</h4>
                    <p>Using a car rental service can be a more economical solution than buying your own car, especially if your needs are only occasional. You don't need to spend a lot of money</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="header"></div>
                  <div className="info">
                    <img src="/icons/kualitas.png" alt="" />
                    <h4>Quality and Safety</h4>
                    <p>Professional car rental companies usually have a fleet of vehicles that are well maintained and updated regularly. We also provide a choice of cars with various safety features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
