import styled from 'styled-components'
import { typography } from '../styles/typography'
import { QUERIES } from '../constants/breakpoints'
import AgentCard from '../components/AgentCard'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import blueDivider from '../assets/images/blueDiv.svg'
import AgentsBG from '../assets/images/TokenomicsBG.svg'
import TrumpCharacter from '../assets/images/TrumpCharacter.png'
import MuskCharacter from '../assets/images/MuskCharacter.png'
import ComingSoon from '../assets/images/comingSoon.png'
import flagDiv from '../assets/images/flagDivider.svg'
import trumpHotelImage from '../assets/images/trumpHotel.png'

const AgentsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FFF;
  padding: 4rem 2rem;
`

const Title = styled.h1`
  position: relative;
  color: #FF2727;
  font-size: 7rem;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.05em;
  -webkit-text-stroke: 2px black;
  text-shadow: 
    0 4px 0 #000,
    0 5px 0 #000,
    0 6px 2px rgba(0,0,0,0.3);
  ${typography.AnonymousPro}
  margin-bottom: 2rem;
  z-index: 2;
`
const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 0;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 130%;
  }
`

const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  ${typography.AnonymousPro}
  color: #000;
`

const InfoContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 4rem auto;
  gap: 4rem;
`

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  min-height: 400px;
`

const InfoSection = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;


  p {
    margin-top: -1rem;
    font-size: 1.4rem;
    color: #333;
    line-height: 1.5;
    width: 50rem;
    line-height: 1.7rem;
    margin-bottom: 0rem;
    ${typography.Arimo}
  }

`

const TwitterBox = styled.div`
  background: white;
  padding: 0.25em 0.75rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border-top: 0.4rem solid white;    
  border-left: 0.4rem solid white;   
  border-bottom: 0.4rem solid #B8B8B8; 
  border-right: 0.4rem solid #B8B8B8; 
  width: 9rem;
  height: 3.5rem;
  h3 {
    font-size: 1.8rem;
    color: #000;
    margin-bottom: 0.5rem;
    ${typography.AnonymousPro}
  }
`
const TelegramBox = styled.div`
  background: white;
  padding: 0.25em 0.75rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border-top: 0.4rem solid white;    
  border-left: 0.4rem solid white;   
  border-bottom: 0.4rem solid #B8B8B8; 
  border-right: 0.4rem solid #B8B8B8; 
  width: 10rem;
  height: 3.5rem;
  h3 {
    font-size: 1.8rem;
    color: #000;
    margin-bottom: 0.5rem;
    ${typography.AnonymousPro}
  }
`

const OnchainBox = styled.div`
  background: white;
  padding: 0.25em 0.75rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border-top: 0.4rem solid white;    
  border-left: 0.4rem solid white;   
  border-bottom: 0.4rem solid #B8B8B8; 
  border-right: 0.4rem solid #B8B8B8; 
  width: 10.5rem;
  height: 3.5rem;
  h3 {
    font-size: 1.8rem;
    color: #000;
    margin-bottom: 0.5rem;
    ${typography.AnonymousPro}
  }
`
const BlueDivider = styled.div`
  width: 100%;
  height: ${props => props.height || '50px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: 10rem;
  z-index: 6;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '60px'};
    margin-left: -30rem;
    margin-top: 11rem;
    width: 150rem;
  }
`

const AgentsBackground = styled.div`
  width: auto;
  height: ${props => props.height || '200px'};
  background: transparent;
  z-index: 0;
  position: absolute;

  
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 128.5rem;
    width: auto;
    margin-left: -2rem;
    margin-top: -1rem;
    overflow: hidden;
  }
`

const AgentCardsSection = styled.section`
  padding: 4rem 2rem;
  margin-top: 8rem;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`

const AgentCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const FlagDivider = styled.div`
  width: 100%;
  height: ${props => props.height || '50px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: -2.4rem;

  img {
    width: 85%;
    height: 50%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '350px'};
    margin-left: -2rem;
    margin-top: 10rem;
    width: 150rem;
    z-index: 3;
  }
`

const WhiteBackground = styled.div`
  position: absolute;
  top: 440rem;
  left: 0;
  width: 100%;
  height: 60%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  z-index: 1;


  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    margin-bottom: -450rem;
    padding: 2rem;
    height: 90rem;
  }
`

const TrumpHotelBackground = styled.div`
  position: absolute;
  top: 195rem;
  left: 0rem;
  width: 100%;
  z-index: 5;
  margin-bottom: -450rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    width: 100%;
  }
`
const AgentsFAQ = styled(FAQ)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 5;
  margin-left: 35rem;
`

const FAQContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 12rem;
  margin-top: 0rem;
`

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 2rem;
  margin-top: 0rem;
  margin-bottom: -4rem;
`

const StyledFooter = styled(Footer)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  margin-left: 35rem;
`

const agents = [
  {
    name: 'Donald Trump',
    badgeImage: TrumpCharacter,
    wallet: 'MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: "Donald J Trump the only 2 time president in history & next forever  supreme leader of ‘Merica - Trump has revolutionized the Oval Office by installing gold-plated Diet Coke dispensers. Known for scheduling press briefings during his golf rounds and school-yard bullying dictators into conflict resolution. Currently working on grabbing Greenland by the pussy and making Canada the 51st state."
  },
  {
    name: 'Elon Musk',
    badgeImage: MuskCharacter,
    wallet: 'MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: "Elon Musk Co-head of DOGE and self-proclaimed 'Chief Efficiency Merchant,' Musk joined the administration after Trump promised him Mars could be the 51st state. Known for reducing government paperwork by replacing all forms with Twitter polls and converting the entire federal fleet to Cybertrucks. Currently in a heated battle with Baron Trump over who gets to play with the Space Force toys first."
  },
  {
    name: 'Coming Soon',
    badgeImage: ComingSoon,
    wallet: 'MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   }
  // Add more agents as needed
]


const Agents = () => {
  return (
    <AgentsContainer>
      <GradientBackground />
      <Title>THE AGENTS</Title>
      <Subtitle>
        EACH AGENT, GUIDED BY THEIR UNIQUE PERSONALITY, HAS FULL CONTROL
        OVER THEIR TERM2 WALLET, DECIDING HOW TO SPEND OR INVEST IT.
      </Subtitle>
      
      <InfoContainer>
        <ImageSection>
          {/* Agent image will go here */}
        </ImageSection>
        <InfoSection>
          <TwitterBox>
            <h3>TWITTER</h3>
          </TwitterBox>
          <p>Agents autonomously share updates, post insights, and engage with supporters, building a dynamic presence.</p>
          <TelegramBox>
            <h3>TELEGRAM</h3>
          </TelegramBox>
          <p>Agents participate directly in the community, driving conversations, strengthening relationships, and gathering valuable insights from their supporters.</p>
          <OnchainBox>
            <h3>ON-CHAIN</h3>
          </OnchainBox>
          <p>Agents have complete freedom to manage their wallets — whether burning tokens to combat inflation, funding DeSci innovations, exploring DeFi opportunities, or donating tokens to form strategic alliances.</p>
        </InfoSection>
      </InfoContainer>
      <BlueDivider>
        <img src={blueDivider} alt="blue divider" />
      </BlueDivider>
      <AgentsBackground>
        <img src={AgentsBG} alt="agents background" />
      </AgentsBackground>
      <AgentCardsSection>
        {agents.map((agent) => (
          <AgentCard key={agent.name} agent={agent} />
        ))}
      </AgentCardsSection>
      <FlagDivider>
        <img src={flagDiv} alt="flag divider" />
      </FlagDivider>
      <TrumpHotelBackground>
        <img src={trumpHotelImage} alt="Image of Trump Hotel" />
      </TrumpHotelBackground>
      <FAQContainer>
        <AgentsFAQ />
      </FAQContainer>
      <FooterContainer>
        <StyledFooter />
      </FooterContainer>
    </AgentsContainer>
  )
}

export default Agents
