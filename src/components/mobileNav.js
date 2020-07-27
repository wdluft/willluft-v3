import React from 'react';
import { Link } from 'gatsby';
import { NavWrapper } from '../styles/elements';
import { useScrollFreeze } from '../hooks';
import { useAppState } from '../state';

const MobileNav = () => {
  useScrollFreeze();
  const { toggleMenu, isMenuOpen } = useAppState();

  return (
    <NavWrapper>
      <div className="siteNav">
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/resume" onClick={toggleMenu}>
          Resume
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </NavWrapper>
  );
};

export default MobileNav;
