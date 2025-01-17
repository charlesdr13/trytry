import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import term2Logo from '../assets/images/term2Logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 6.2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000520;
  font-family: monospace;
  position: relative;
  background: #000520;


  @media ${QUERIES.tabletAndUp} {
    padding: 1rem 2rem;
  }
`

const Logo = styled(Link)`
  transform: translateX(3%);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); // Subtle shadow
  background-clip: text;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-decoration: none;
  z-index: 2;
  ${typography.Lubalin}

  img {
    height: 3rem;  // Adjust this value to match your desired logo size
    width: auto;
    vertical-align: middle;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-left: 2rem;
    margin-right: 5rem;
  }
`

const NavLinks = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #E5E5E5;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  gap: 3rem;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media ${QUERIES.tabletAndUp} {;
    position: relative;
    gap: 4rem;
    flex: 3;
    position: static;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    padding-right: 16rem;
    transform: none;
    align-items: center;
    background: none;
  }

  @media (max-width: 1200px) {
    gap: 3rem; /* Decrease by 10% */
  }

  @media (max-width: 1080px) {
    gap: 2.2rem; /* Decrease by another 10% */
  }

  @media (max-width: 972px) {
    gap: 2rem; /* Decrease by another 10% */
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 2.5rem;
  z-index: 2;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
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

  @media (max-width: 1320px) {
    font-size: 1.3rem; /* Decrease by 10% */
  }

  @media (max-width: 1240px) {
    font-size: 1.1rem; /* Decrease by another 10% */
  }

  @media (max-width: 972px) {
    font-size: 1rem; /* Decrease by another 10% */
  }

  @media (max-width: 900px) {
    font-size: 1.5rem; /* Decrease by another 10% */
  }
`

const BuyButton = styled(NavLink)`
  background: #1E3B8D;
  color: white !important;
  border-top: 2px solid white;    // White top border
  border-left: 2px solid white;   // White left border
  border-bottom: 2px solid #0A2472; // Darker blue bottom border
  border-right: 2px solid #0A2472;  // Darker blue right border
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  min-width: 10rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);


  
  &:hover {
    background: #2a4dad;  // Slightly lighter blue on hover
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  @media ${QUERIES.desktopAndUp} {
    min-width: 10rem;
    margin-left: 6rem;
    margin-right: -5rem;
  }

  @media (max-width: 1420px) {
    margin-left: 1.3rem; /* Decrease by 10% */
    padding: 0.3rem 1rem;
  }

  @media (max-width: 1347px) {
    font-size: 1.1rem; /* Decrease by another 10% */
    min-width: 1rem;
  }

  @media (max-width: 1050px) {
    font-size: 1rem; /* Decrease by another 10% */
    min-width: 1rem;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem; /* Decrease by another 10% */
  }
`

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Nav>
      <Logo to="/">
        <img src={term2Logo} alt="TERM2 Logo" />
      </Logo>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>
      <NavLinks isOpen={isMenuOpen}>
        <NavLink to="/agents" onClick={() => setIsMenuOpen(false)}>THE AGENTS</NavLink>
        <NavLink to="#" onClick={() => setIsMenuOpen(false)}>TWITTER</NavLink>
        <NavLink to="#" onClick={() => setIsMenuOpen(false)}>TELEGRAM</NavLink>
        <NavLink to="#" onClick={() => setIsMenuOpen(false)}>DEXSCREENER</NavLink>
        <NavLink to="#" onClick={() => setIsMenuOpen(false)}>DEXTOOLS</NavLink>
        <BuyButton to="#" onClick={() => setIsMenuOpen(false)}>BUY NOW</BuyButton>
      </NavLinks>
    </Nav>
  )
}

export default NavigationBar 