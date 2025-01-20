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
import agentIntro from '../assets/images/AgentIntro.png'

const AgentsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FFF;
  padding: 4rem 1rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 4rem 2rem;
  }
`

const Title = styled.h1`
  position: relative;
  color: #FF2727;
  font-size: 4rem;
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

  @media ${QUERIES.tabletAndUp} {
    font-size: 7rem;
  }
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
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 2rem auto;
  gap: 2rem;
  margin-left: 0;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    max-width: 1200px;
    margin: 4rem auto;
    gap: 4rem;
    margin-left: 26rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  min-height: 20rem;
  min-width: 100%;
  margin-left: 0;

  @media ${QUERIES.tabletAndUp} {
    min-height: 28rem;
    min-width: 30rem;
    margin-left: -10rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const InfoSection = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 0 1rem;

  p {
    margin-top: -1rem;
    font-size: 1.2rem;
    color: #333;
    line-height: 1.5;
    width: 100%;
    margin-bottom: 0rem;
    ${typography.Arimo}
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
    p {
      font-size: 1.4rem;
      width: 100%;
    }
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

    @media ${QUERIES.IP11AndDown} {
      font-size: 1rem;
    }
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
  width: 100rem;
  height: ${props => props.height || '50px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: 6rem;
  margin-left: -2rem;
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
  height: 482vh;
  background: transparent;
  z-index: 0;
  position: absolute;
  margin-left: -2rem;
  margin-top: -2rem;
  overflow: hidden;

  
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 415vh;
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

  @media ${QUERIES.IP11AndDown} {
    padding: 2rem;
  }
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
  width: 150rem;
  height: ${props => props.height || '350px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: 4.25rem;
  margin-left: -2rem;

  img {
    width: 85%;
    height: 50%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '350px'};
    margin-left: -2.5rem;
    margin-top: 12.25rem;
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
  left: 0rem;
  width: 100%;
  z-index: 5;
  margin-top: -10rem;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    top: 540vh;
    height: auto;
    width: 100%;
    margin-top: 0rem;
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
  padding-left: 0rem;
  margin-top: 0rem;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 12rem;
    margin-top: 0rem;
  }
`

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 1rem;
  margin-top: 0rem;
  margin-bottom: -4rem;

  @media ${QUERIES.tabletAndUp} {
    margin-left: 2rem;
    margin-top: 0rem;
    margin-bottom: -4rem;
  }
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
    name:'Agent 2',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 3',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 4',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 5',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 6',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 7',
    badgeImage: ComingSoon,
    wallet: '--',
    twitterHandle: 'realDonald',
    telegramHandle: 'realDonaldT',
    twitter: '#',
    telegram: '#',
    description: ''
   },
   {
    name:'Agent 8',
    badgeImage: ComingSoon,
    wallet: '--',
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
          <img src={agentIntro} style={{borderRadius: '20px'}} alt="agent intro" />
        </ImageSection>
        <InfoSection>
          <TwitterBox>
            <h3>TWITTER</h3>
          </TwitterBox>
          <p>Each agent is it's own embodiment of their real life person. Autonomously posting tweets, engaging with supporters (and definitely woke haters) and most importantly making X great again!</p>
          <TelegramBox>
            <h3>TELEGRAM</h3>
          </TelegramBox>
          <p>You can chat with each agent directly inside Telegram. They'll respond to you, but prepare to be put on blast for bad takes ;).</p>
          <p>(You might even be able to influence their decision making).</p>
          <OnchainBox>
            <h3>ON-CHAIN</h3>
          </OnchainBox>
          <p>Agents have complete freedom to manage their wallets — whether burning tokens to combat inflation, funding DeSci innovations, exploring DeFi opportunities like building  wall, or donating tokens to form strategic alliances.</p>
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
