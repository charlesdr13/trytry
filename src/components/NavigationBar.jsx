import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'

const Nav = styled.nav`
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E5E5E5;
  font-family: monospace;
  position: relative;
  background: #D9D9D9;


  @media ${QUERIES.tabletAndUp} {
    padding: 1rem 2rem;
  }
`

const Logo = styled(Link)`
  transform: translateX(3%);
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
  text-decoration: none;
  z-index: 2;

  ${typography.Lubalin}
  

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
  color: black;
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
  background: #D9D9D9;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  min-width: 10rem;
  
  &:hover {
    background: #f0f0f0;
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
      <Logo to="/">  $TERM2</Logo>
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