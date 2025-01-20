import styled from 'styled-components'
import { useState } from 'react'
import { typography } from '../styles/typography'
import { QUERIES } from '../constants/breakpoints'
const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 5;
  width: 20rem;  // Default (mobile) width
  height: auto;
  margin-left: 5rem;
  margin-top: -2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media ${QUERIES.tabletAndUp} {
    width: 55rem;  // Larger width for tablet and up
    height: auto;
    margin-left: 9rem;
    margin-top: -7.6rem;
  }

  @media ${QUERIES.IP11AndDown} {
    margin-left: 14vw;
  }
`

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ButtonText = styled.span`
  position: absolute;
  color: #F20505;
  font-size: 1.2rem;
  font-weight: bold;
  ${typography.AnonymousPro}
  z-index: 6;
  left: 18%;
  text-align: center;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.5rem;
    margin-top: -1rem;
  }
  
  @media ${QUERIES.IP11AndDown} {
    font-size: 0.6rem;
    top: 25%;
  }
` 

const Tooltip = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 1.2rem;
  ${typography.Arimo}
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
  white-space: nowrap;
  z-index: 10;
`

const CopyButton = ({ 
  imageSrc, 
  textToCopy, 
  tooltipText = 'Copied!'
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <ButtonContainer 
      onClick={handleClick}
    >
      <ButtonImage src={imageSrc} alt="Copy button" />
      <ButtonText>{textToCopy}</ButtonText>
      <Tooltip visible={showTooltip}>{tooltipText}</Tooltip>
    </ButtonContainer>
  )
}

export default CopyButton 