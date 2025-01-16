import styled from 'styled-components'

const AgentsContainer = styled.div`
  padding: 2rem;
`

const AgentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`

const AgentCard = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const agents = [
  {
    name: 'Trump',
    description: "Donald J. Trump the only 4-term president in history...",
    // Add other agent details
  },
  // Add other agents
]

const Agents = () => {
  return (
    <AgentsContainer>
      <h1>The Agents</h1>
      <h2>What Can They Do?</h2>
      
      <AgentsGrid>
        {agents.map((agent) => (
          <AgentCard key={agent.name}>
            <h3>{agent.name}</h3>
            <p>{agent.description}</p>
            <div className="social-links">
              <span>Twitter</span>
              <span>Telegram</span>
              <span>Onchain</span>
            </div>
          </AgentCard>
        ))}
      </AgentsGrid>
    </AgentsContainer>
  )
}

export default Agents
