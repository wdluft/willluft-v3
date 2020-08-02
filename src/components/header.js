import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/Logo.svg';
import Hamburger from './hamburgerMenu';
import Nav from './nav';
import { useAppState } from '../state';
import { HeaderWrapper } from '../styles/elements';
import { useWindowWidth } from '../hooks';
import Socials from './socials';
import MobileNav from './mobileNav';

const Header = ({ siteTitle }) => {
  const { isMenuOpen } = useAppState();
  const width = useWindowWidth();

  // Show nav if menu is open on mobile or always on larger screens
  if (isMenuOpen || width >= 768) {
    return (
      typeof window !== 'undefined' && (
        <HeaderWrapper menuOpen className="header">
          {width < 768 ? (
            <div>
              <div>
                <Link to="/">
                  {' '}
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <Hamburger />
            </div>
          ) : (
            ''
          )}
          {/* Show mobile nav on small screens */}
          {width < 768 ? <MobileNav /> : <Nav />}
          <Socials />
        </HeaderWrapper>
      )
    );
  }

  return (
    typeof window !== 'undefined' && (
      <HeaderWrapper className="header">
        <div>
          <div>
            <Link to="/">
              {' '}
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <Hamburger />
        </div>
      </HeaderWrapper>
    )
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
