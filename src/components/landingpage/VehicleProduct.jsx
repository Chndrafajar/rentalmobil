import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { productCar } from '../../assets/data';

export default function VehicleProduct() {
  return (
    <section className="vehicle-product">
      <div className="container">
        <div className="row">
          <h6>Our Rentals Cars</h6>
          <h2>
            Here are some of our
            <br />
            car rental options
          </h2>
        </div>
        <div className="row mt-3">
          {productCar.map((p) => (
            <div className="col-lg-4 col-md-6" key={p.id}>
              <div className="card">
                <img src={p.img} alt="" />
                <div className="info">
                  <h5>
                    ${p.price} <span>/ days</span>
                  </h5>
                  <h6 className="location">
                    <FaLocationDot /> {p.location}
                  </h6>
                </div>
                <h4>{p.name}</h4>
                <button className="btn-booking">
                  Booking Now <FaPhoneAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
