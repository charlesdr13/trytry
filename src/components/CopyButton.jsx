import styled from 'styled-components'
import { useState } from 'react'
import { typography } from '../styles/typography'

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 5;
  width: 50rem;
  height: auto;
  margin-left: 9rem;
  margin-top: -7.6rem;
  

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(2px);
  }
`

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  width = '55rem', 
  height = 'auto',
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
      style={{ width, height }}
    >
      <ButtonImage src={imageSrc} alt="Copy button" />
      <Tooltip visible={showTooltip}>{tooltipText}</Tooltip>
    </ButtonContainer>
  )
}

export default CopyButton 