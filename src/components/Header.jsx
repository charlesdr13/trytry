import NavigationBar from './NavigationBar'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #E5E5E5;
`

const Header = ({ onNavigate }) => {
  return (
    <HeaderContainer>
      <NavigationBar onNavigate={onNavigate} />
    </HeaderContainer>
  )
}

export default Header
