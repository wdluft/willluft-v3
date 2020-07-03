import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/Logo.svg';
import Hamburger from './hamburgerMenu';
import Nav from './nav';
import { useAppState } from '../state';
import { HeaderWrapper } from '../styles/elements';
import { useWindowWidth } from '../hooks';

const Header = ({ siteTitle }) => {
  const { isMenuOpen } = useAppState();
  const width = useWindowWidth();

  // Show nav is menu is open on mobile or always on larger screens
  if (isMenuOpen || width >= 768) {
    return (
      <HeaderWrapper menuOpen>
        <div>
          <div>
            {width < 768 ? (
              <Link to="/">
                {' '}
                <img src={Logo} alt="Logo" />
              </Link>
            ) : (
              ''
            )}
          </div>

          {/* Only show hamburger if on mobile */}
          {width < 768 ? <Hamburger /> : ''}
        </div>
        <Nav />
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
        {width < 768 ? <Hamburger /> : ''}
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
