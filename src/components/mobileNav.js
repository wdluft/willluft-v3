import React from 'react';
import { Link } from 'gatsby';
import { NavWrapper } from '../styles/elements';
import { useScrollFreeze } from '../hooks';

const MobileNav = () => {
  useScrollFreeze();

  return (
    <NavWrapper>
      <div className="siteNav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </NavWrapper>
  );
};

export default MobileNav;
