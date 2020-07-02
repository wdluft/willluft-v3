import React from 'react';
import { Link } from 'gatsby';
import { MobileNavWrapper } from '../styles/elements';

const MobileNav = () => (
  <MobileNavWrapper>
    <div className="siteNav">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
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
  </MobileNavWrapper>
);

export default MobileNav;
