import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--black);
  background-image: ${props => (props.menuOpen ? 'var(--gradient)' : 'none')};
  height: ${props => (props.menuOpen ? '100vh' : '100%')};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 50px;
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
    height: 5px;
    background-color: ${props =>
      props.menuOpen ? 'var(--black)' : 'var(--primary)'};
    margin: 5px 0;
  }
`;

export const MobileNavWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-size: var(--h3);
      text-decoration: none;
      font-weight: bold;
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
`;
