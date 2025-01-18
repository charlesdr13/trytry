import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import term2Logo from '../assets/images/term2Logo.png'

const FooterWrapper = styled.footer`
  background: #000B2F;
  padding: 1rem;
  position: relative;
  z-index: 10;
  margin-top: -2.5rem;
  margin-left: -25rem;
  padding: 5rem 25rem;
  width: 122rem;
  height: 16rem;
`

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
`

const Logo = styled.img`
  height: 4rem;
  margin-left: 2rem;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
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
  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to="/">
          <Logo src={term2Logo} alt="TERM2 Logo" />
        </Link>
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