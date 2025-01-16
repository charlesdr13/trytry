import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'

const Container = styled.section`
  padding: 1rem;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }
`

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Step = styled.div`
  background-color: #E5E5E5;
  padding: 2rem;
  border-radius: 8px;
  
  h3 {
    font-family: monospace;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }
`

const ImagePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background: #ccc;
  margin: 1rem auto;
  border: 1px solid #999;
`

const HowToBuy = () => {
  return (
    <Container>
      <h2>How To Buy $TERM2</h2>
      <StepsContainer>
        <Step>
          <ImagePlaceholder />
          <h3>Get a Wallet</h3>
          <div className="subtitle">(Make Crypto Great Again)</div>
          <p>Set up an account with a Solana wallet of your choice—though we recommend using Phantom.</p>
        </Step>
        <Step>
          <ImagePlaceholder />
          <h3>Secure Some SOL</h3>
          <div className="subtitle">(The Dollar is a Total Disaster)</div>
          <p>Buy some Solana through your wallet or on an exchange, then transfer it to your wallet using the address provided.</p>
        </Step>
        <Step>
          <ImagePlaceholder />
          <h3>Buy $TERM2</h3>
          <div className="subtitle">(Because Losing is for Sleepy Joe)</div>
          <p>Go to Raydium, paste the $TERM2 contract address, enter the amount you want to buy, and confirm the transaction.</p>
        </Step>
      </StepsContainer>
    </Container>
  )
}

export default HowToBuy
