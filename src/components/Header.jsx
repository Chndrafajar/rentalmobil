import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { Link, scroller } from 'react-scroll';

export default function Header() {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeShadow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeShadow);

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
      <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}>
        <div className="container">
          <a className="navbar-brand" href="#">
            Rental<span>Mobil</span>
          </a>
          <span className="navbar-toggler" onClick={() => setActive(!active)}>
            <FaBars />
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
        </div>
      </nav>

      {/* bar mobile */}
      <div className={'header-mobile ' + (active && 'active')}>
        <div className="header">
          <a className="navbar-brand">
            Rental<span>Mobil</span>
          </a>
          <span className="icons" onClick={() => setActive(!active)}>
            <IoClose />
          </span>
        </div>
        <div className="items">
          <ul className="header-link">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} onClick={() => setActive(!active)} to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} onClick={() => setActive(!active)} to="about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} onClick={() => setActive(!active)} to="servicess">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" activeClass="active" spy={true} smooth={true} offset={-70} duration={300} onSetActive={handleSetActive} onClick={() => setActive(!active)} to="vehicle">
                Vehicle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
