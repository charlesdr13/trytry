import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import term2Logo from '../assets/images/term2Logo.png'
import { BREAKPOINTS } from '../constants/breakpoints'

const FooterWrapper = styled.footer`
  background: #000B2F;
  padding: 1rem;
  position: relative;
  z-index: 10;
  width: 50rem;
  height: 7rem;
  margin-left: -2rem;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: -2.5rem;
    margin-left: -25rem;
    padding: 5rem 25rem;
    width: 122rem;
    height: 16rem;
  }
`

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    justify-content: flex-start;
    gap: 2rem;
  }
`

const Logo = styled.img`
  height: 4rem;
  margin-left: 2rem;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: 3.5rem;
    margin-left: 1rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`

const MobileScrollTop = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
  }
`

const ArrowUpIcon = styled.span`
  
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-135deg);
  margin-top: 0.5rem;
  margin-left: 10rem;
`

const NavLink = styled(Link)`
  color: #8A8A8A;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.2s ease;
  text-align: center;
  ${typography.AnonymousPro}
  
  &:hover {
    color: #646464;
  }
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to="/">
          <Logo src={term2Logo} alt="TERM2 Logo" />
        </Link>
        <MobileScrollTop onClick={scrollToTop}>
          <ArrowUpIcon />
        </MobileScrollTop>
        <NavLinks>
          <NavLink to="/agents">THE AGENTS</NavLink>
          <NavLink to="/twitter">TWITTER</NavLink>
          <NavLink to="/telegram">TELEGRAM</NavLink>
          <NavLink to="/dexscreener">DEXSCREENER</NavLink>
          <NavLink to="/dextools">DEXTOOLS</NavLink>
        </NavLinks>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer 