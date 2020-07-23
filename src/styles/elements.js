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

export const TransparentCard = styled(Card)`
  --cardBg: rgba(0, 0, 0, 0);
  box-shadow: none;
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
    border-right: solid 3px var(--black);

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

      &:hover {
        font-weight: bold;
      }
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

    &:hover {
      color: var(--grey);
    }
  }
`;

export const LayoutWrapper = styled.main`
  /* padding: var(--containerPadding); */
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media only screen and (min-width: 768px) {
    --containerPadding: 15vw;
    /* padding: 1rem var(--containerPadding); */
    position: absolute;
    margin-top: 0;
    left: 25vw;
    top: 0;
  }
`;

export const ResumeSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

export const ResumeItemContainer = styled.div`
  border-bottom: var(--line);

  h3 {
    font-weight: bold;
    font-size: var(--h2);
    margin-bottom: 0;
  }

  h5 {
    margin: 1rem 0;
  }

  .position__title {
    color: var(--primary);
  }
`;

export const ProjectWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--primary);
  padding: 1rem 25vw;
`;
