import React, { useContext } from 'react';
import { useAppState } from '../state';
import MobileNav from './MobileNav';

const NavWrapper = () => {
  const { isMenuOpen } = useAppState();
  if (!isMenuOpen) return null;

  return <Nav />;
};

const Nav = () => {
  const { toggleMenu } = useAppState();

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavWrapper;
