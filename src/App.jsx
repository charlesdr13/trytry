import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

const AppContainer = styled.div`
  background-color: #E5E5E5;
  min-height: 100vh;
  width: 100%;
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
  )
}

export default App
