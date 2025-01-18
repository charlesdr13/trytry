import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import getWallet from '../assets/images/getWallet.svg'
import secureSOL from '../assets/images/secureSol.svg'
import buyTERM2 from '../assets/images/buyTERM2.svg'

const HowToBuySection = styled.section`
  color: #000;
  
  margin-bottom: 2rem;
  background: transparent;
  z-index: 3;
  h2 {
    position: relative;
    color: #FF2727;
    z-index: 2;
    font-size: 1rem;
    font-weight: bold;  
    margin-top: 4rem;
    margin-bottom: 1rem;
        -webkit-text-stroke: 1.5px black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }
  h3 {
    font-size: 1.5rem;
    position: relative;
    z-index: 3;
    font-weight: 400;
    margin: 1rem auto;
    text-align: center;
    line-height: 1.8  ;
    ${typography.Arimo}
    }
  p {
    font-size: 1.5rem;
    position: relative;
    font-weight: 400;
    margin: 1rem auto;
    text-align: center;
    line-height: 1.8  ;
    ${typography.Arimo}
    }

  @media ${QUERIES.tabletAndUp} {
  
    h2 {
      position: relative;
      z-index: 2;
      font-size: 7rem;
      margin-left: 2rem;
      margin-top: 7rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: -0.3rem;

    }

    p{
      font-size: 1.5rem;
      font-weight: 400;
      margin-left: -2.5rem;
      text-align: center;
      line-height: 1.8  ;
      width: 75rem;
      max-width: 65rem;
      z-index: 2;
    }
  }

  @media (max-width: 980px) {
    h1{
      font-size: 13rem;
    }
  }

  @media (max-width: 820px) {
    h1{
      font-size: 12rem;
    }
  }  

  @media (max-width: 720px) {
    h1{
      font-size: 11rem;
    }
  } 

  @media (max-width: 600px) {
    h1{
      font-size: 9rem;
    }
  }  

  @media (max-width: 500px) {
    h1{
      font-size: 8rem;
    }
  }  

  @media (max-width: 440px) {
    h1{
      font-size: 6rem;
    }
  }  
`
const GradientBackground = styled.div`
  position: absolute;
  top: 375rem;
  left: 0;
  width: 100%;
  height: 80%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 1;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 115%;
  }
`

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

const GetWalletImage = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  display: grid;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    width: 30rem;
    margin: 0.5rem auto;
    margin-top: 2rem;
    margin-left: -13rem;
  }
`
const SecureSOLImage = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  display: grid;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    width: 30rem;
    margin: 0.5rem auto;
    margin-top: 2rem;
    margin-left: 0rem;
  }
`

const BuyTERM2Image = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  display: grid;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    width: 30rem;
    margin: 0.5rem auto;
    margin-top: 2rem;
    margin-left: 0rem;
  }
`
const HowToBuy = () => {
  return (
    <Container>
      <GradientBackground />
      <HowToBuySection>
        <h2>HOW TO BUY $TERM2</h2>
        <StepsContainer>
            <GetWalletImage>
             <img src={getWallet} alt="Get Wallet" />
            </GetWalletImage>
            <SecureSOLImage>
              <img src={secureSOL} alt="Secure Some SOL" />
            </SecureSOLImage>
            <BuyTERM2Image>
              <img src={buyTERM2} alt="Buy $TERM2" />
            </BuyTERM2Image>
        </StepsContainer>
      </HowToBuySection>
    </Container>
  )
}

export default HowToBuy
