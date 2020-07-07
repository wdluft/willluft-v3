import styled from 'styled-components';

export const Card = styled.div`
  background: var(--cardBg);
  box-shadow: var(--level3);
  border-radius: var(--borderRadius);
  padding: 1em;

  /* First and last items will never have top/bottom margins */
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  background-image: ${props => (props.menuOpen ? 'var(--gradient)' : 'none')};
  height: ${props => (props.menuOpen ? '100vh' : '3rem')};
  padding: var(--containerPadding);

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 50px;
    box-shadow: var(--level3);
    border-radius: 50%;
  }

  @media only screen and (min-width: 768px) {
    /* position: sticky; */
    height: 100vh;
    max-width: 25vw;
    background-image: var(--gradient);
    box-shadow: var(--headerShadow);

    img {
      max-width: 300;
      min-width: 175px;
      margin-left: 25vw;
    }
  }
`;

export const HamburgerWrapper = styled.button`
  --buttonColor: none;
  box-shadow: none;
  padding: 0;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    box-shadow: none;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: ${props =>
      props.menuOpen ? 'var(--black)' : 'var(--primary)'};
    margin: 5px 0;
  }
`;

export const NavWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-size: var(--h4);
      text-decoration: none;
    }
  }
  .siteNav {
    a {
      color: var(--black);
    }
  }

  .socialNav {
    a {
      color: var(--white);
    }
  }

  @media only screen and (min-width: 768px) {
  }
`;

export const SocialsWrapper = styled.div`
  a {
    color: var(--white);
  }
`;

export const LayoutContentWrapper = styled.main`
  padding: var(--containerPadding);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-left: 38vw;
  }
`;
