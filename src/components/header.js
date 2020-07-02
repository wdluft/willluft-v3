import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useAppState } from '../state';
import Logo from '../images/Logo.svg';
import Hamburger from './hamburgerMenu';
import { HeaderWrapper } from '../styles/elements';
import MobileNav from './MobileNav';

const Header = ({ siteTitle }) => {
  const { isMenuOpen } = useAppState();

  if (isMenuOpen) {
    return (
      <HeaderWrapper menuOpen>
        <div>
          <div>
            <Link to="/">
              {' '}
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <Hamburger />
        </div>
        <MobileNav />
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
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
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
