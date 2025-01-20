import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { typography } from '../styles/typography'

const StyledButton = styled(Link)`
  background: #2734BD;
  color: white !important;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  width: 18rem;
  height: 6rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6) !important;
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
  overflow: hidden;
  text-overflow: ellipsis;
  ${typography.AnonymousPro}

  &:hover {
    background: #2a4dad;
    transform: translateY(-1px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8) !important;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8) !important;
  }

  .agents-button {
    height: 10rem;
    width: 20rem;
    padding: 1rem 2rem;
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