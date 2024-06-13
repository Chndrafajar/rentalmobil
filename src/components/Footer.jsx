import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { Link, scroller } from 'react-scroll';

export default function Footer() {
  const handleSetActive = (to) => {
    console.log(to); // Optional: handle setActive event
  };
  const scrollToTop = () => {
    scroller.scrollTo('top', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="items">
            <a href="" className="footer-brand">
              Rental<span>Mobil</span>
            </a>
            <div className="footer-link">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} to="servicess">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} to="vehicle">
                    Vehicle
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sosial-icons">
              <div className="icons-item">
                <FaFacebook />
              </div>
              <div className="icons-item">
                <FaInstagram />
              </div>
              <div className="icons-item">
                <FaYoutube />
              </div>
              <div className="icons-item">
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
