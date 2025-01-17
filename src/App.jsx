import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Header from './components/Header'

const AppContainer = styled.div`
  background-color: #E5E5E5;
  min-height: 100vh;
  width: 100%;
`

function App() {
  return (
    <Router
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App
