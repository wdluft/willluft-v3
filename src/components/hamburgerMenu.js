import React from 'react';
import { HamburgerWrapper } from '../styles/elements';
import { useAppState } from '../state';

const HamburgerMenu = () => {
  const { toggleMenu, isMenuOpen } = useAppState();

  if (isMenuOpen) {
    return (
      <HamburgerWrapper onClick={toggleMenu} menuOpen>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </HamburgerWrapper>
    );
  }

  return (
    <HamburgerWrapper onClick={toggleMenu}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </HamburgerWrapper>
  );
};

export default HamburgerMenu;
