import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    overflow-x: hidden !important;
    width: 100vw;
    max-width: 100vw;
  }
`

const AppContainer = styled.div`
  background-color: #E5E5E5;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden !important;
`

function App() {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (path) => {
    setIsNavigating(true);
    setTimeout(() => {
      setIsNavigating(false);
    }, 800);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <PageTransition isNavigating={isNavigating} />
        <AppContainer>
          <Header onNavigate={handleNavigation} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  )
}

export default App
