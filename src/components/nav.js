import React from 'react';
import { Link } from 'gatsby';
import { NavWrapper } from '../styles/elements';
import { useWindowWidth } from '../hooks';
import Logo from '../images/Logo.svg';

const MobileNav = () => {
  const width = useWindowWidth();

  return (
    <NavWrapper>
      <div className="siteNav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
      {width >= 768 ? (
        <Link to="/">
          {' '}
          <img src={Logo} alt="Logo" />
        </Link>
      ) : (
        ''
      )}
      <div className="siteNav">
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </NavWrapper>
  );
};

export default MobileNav;
