import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { typography } from '../styles/typography'

const StyledButton = styled(Link)`
  background: #2734BD;
  color: white !important;
  border-top: 0.4rem solid white;    
  border-left: 0.4rem solid white;   
  border-bottom: 0.4rem solid #1A10A3; 
  border-right: 0.4rem solid #1A10A3;  
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  min-width: 15rem;
  min-height: 6rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 2rem 2.5rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  z-index: 6;
  ${typography.AnonymousPro}

  &:hover {
    background: #2a4dad;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const Button = ({ children, to, onClick, className }) => {
  return (
    <StyledButton 
      to={to} 
      onClick={onClick} 
      className={className}
    >
      {children}
    </StyledButton>
  )
}

export default Button 