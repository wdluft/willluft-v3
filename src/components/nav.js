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
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {width >= 768 ? (
        <Link to="/">
          {' '}
          <img src={Logo} alt="Logo" />
        </Link>
      ) : (
        ''
      )}
      <div className="socialNav">
        <a
          href="https://twitter.com/iamwilldl"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          Twitter
        </a>
        <a
          href="https://github.com/wdluft"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/william-luft-42ab9258/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          LinkedIn
        </a>
      </div>
    </NavWrapper>
  );
};

export default MobileNav;
