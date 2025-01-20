import styled from 'styled-components'
import { typography } from '../styles/typography'
import Button from '../components/Button'
import xIcon from '../assets/images/twitterIcon.svg'
import telegramIcon from '../assets/images/telegramIcon.svg'
import walletLogo from '../assets/images/walletLogo.svg'
import { QUERIES } from '../constants/breakpoints'

const CardWrapper = styled.div`
  background: #001F50;
  padding: 1.5rem;
  border-radius: 4px;
  border-top: 0.3rem solid #6591FF;    
  border-left: 0.3rem solid #6591FF;   
  border-bottom: 0.3rem solid #020424; 
  border-right: 0.3rem solid #020424;  
  color: white;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: ${props => props.isComingSoon ? '15rem' : '300px'};
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
  margin-bottom: -4rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
    max-width: 1260px;
    min-height: ${props => props.isComingSoon ? '20rem' : '400px'};
    flex-direction: row;
    margin-bottom: -2rem;
  }
`

const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  background: #000720;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 0;
`

const LeftSection = styled.div`
  width: 400px;
  position: relative;
`

const AgentBadge = styled.div`
  position: relative;
  width: 18rem;
  height: auto;
  margin-top: ${props => props.isComingSoon ? '0rem' : '-5rem'};
  margin-left: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${QUERIES.tabletAndUp} {
    width: 25rem;
    margin-top: ${props => props.isComingSoon ? '0rem' : '-7rem'};
    margin-left: 9rem;
  }
`

const AgentName = styled(Button)`
  background: #2734BD;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 2px;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  padding: 1.2rem 1.5rem;
  font-size: 1.7rem;
  font-weight: 700;
  min-height: 1rem;
  margin-left: -2rem;
  margin-top: 8rem;
  ${typography.AnonymousPro}
  position: absolute;
  bottom: ${props => props.isComingSoon ? '-6rem' : '-4rem'};
  left: 19%;
  transform: translateY(-3%);
  white-space: nowrap;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 0rem;
    margin-left: 7.75rem;
    height: 5rem;
    bottom: ${props => props.isComingSoon ? '4rem' : '-1rem'};
  }
`

const RightSection = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const WalletSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  margin-top: 8em;
  margin-left: 4.5rem;
  img {
    height: 2.5
    rem;
    width: auto;
  }
  
  span {
    color: #666;
    font-size: 0.9rem;
    margin-top: -5rem;
    margin-left: -16rem;
    ${typography.AnonymousPro}
    font-weight: 700;

  }

  @media ${QUERIES.tabletAndUp} {
    margin-left: 9rem;
    margin-top: -0.8rem;
    

    span {
      margin-top: 0rem;
      margin-left: 0.5rem;
      font-size: 1.1rem;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: -12rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 1rem;
    margin-left: 0rem;
  }
`

const SocialIcon = styled.div`
  background: ${props => props.platform === 'twitter' ? '#000' : '#27A7E7'};
  padding: 0rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9.3rem;
  width: 24px;
  height: 24px;

  img {
    width: 128px;
    height: 128px;
  }

  @media ${QUERIES.tabletAndUp} {
    width: 48px;
    height: 48px;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #B3B7C7;
  text-decoration: none;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  margin-bottom: -2rem;
  margin-right:-8.5rem;
  ${typography.AnonymousPro}
`

const AgentDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #B3B7C7;
  margin-left: 1rem;
  width: 100%;
  ${typography.Arimo}

  @media ${QUERIES.tabletAndUp} {
    font-size: 19.12px;
    margin-left: 9.5rem;
    width: 34rem;
  }
`

const Capabilities = styled.div`
  margin-top: -2rem;
  margin-left: 0rem;
  h3 {
    color: #FF0000;
    font-size: 1.7rem;
    letter-spacing: 0.010em;
    -webkit-text-stroke: 0.2px black;
    text-shadow: 
    0 1px 0 #000,
    0 2px 0 #000,
    0 3px 2px rgba(0,0,0,0.3);
    margin-bottom: 0.7rem;
    ${typography.AnonymousPro}
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: -2rem;
    margin-left: 9.5rem;
  }
`

const CapabilitiesGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    
    span:first-child {
      color: #8EEAFF;
      font-size: 1.2rem;
      font-weight: 700;
      ${typography.AnonymousPro}
    }
  }

  @media ${QUERIES.tabletAndUp} {
    gap: 4rem;
  }
`

const StatusBadge = styled.span`
  background: ${props => {
    if (props.isComingSoon) return '#BF183B'; // change to #BF183B //
    return props.status === 'live' ? '#666' : '#666'; //change to live //
  }};
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 700;
  min-height: 2rem;
  min-width: 0.5rem;
  align-items: center;
  ${typography.AnonymousPro}
  text-transform: lowercase;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.2rem;
  }
`

const AgentCard = ({ agent }) => {
  // Function to check if name matches "Agent Name {number}" pattern
  const isComingSoon = (name) => {
    const pattern = /^Agent \d+$/;
    return pattern.test(name);
  };

  return (
    <CardWrapper isComingSoon={isComingSoon(agent.name)}>
      <CardHeader />
      <LeftSection>
        <AgentBadge isComingSoon={isComingSoon(agent.name)}>
          <img src={agent.badgeImage} alt={agent.name} />
        </AgentBadge>
        <AgentName isComingSoon={isComingSoon(agent.name)}>{agent.name}</AgentName>
      </LeftSection>
      
      <RightSection>
        <WalletSection>
          <img src={walletLogo} alt="Wallet" />
          <span>{agent.wallet}</span>
        </WalletSection>
        
        {!isComingSoon(agent.name) && (
          <>
            <SocialLinks>
              <SocialLink href={agent.twitter}>
                <SocialIcon platform="twitter">
                  <img src={xIcon} alt="X" />
                </SocialIcon>
                @{agent.twitterHandle}
              </SocialLink>
              <SocialLink href={agent.telegram}>
                <SocialIcon platform="telegram">
                  <img src={telegramIcon} alt="Telegram" />
                </SocialIcon>
                @{agent.telegramHandle}
              </SocialLink>
            </SocialLinks>
          </>
        )}
        
        <AgentDescription>{agent.description}</AgentDescription>
        
        <Capabilities>
          <h3>CAPABILITIES:</h3>
          <CapabilitiesGrid>
            <div>
              <span>Twitter</span>
              <StatusBadge status="live" isComingSoon={isComingSoon(agent.name)}>
                {isComingSoon(agent.name) ? 'offline' : 'coming soon'}
              </StatusBadge>
            </div>
            <div>
              <span>Telegram</span>
              <StatusBadge status="live" isComingSoon={isComingSoon(agent.name)}>
                {isComingSoon(agent.name) ? 'offline' : 'coming soon'}
              </StatusBadge>
            </div>
            <div>
              <span>On-chain</span>
              <StatusBadge isComingSoon={isComingSoon(agent.name)}>
                {isComingSoon(agent.name) ? 'offline' : 'coming soon'}
              </StatusBadge>
            </div>
          </CapabilitiesGrid>
        </Capabilities>
      </RightSection>
    </CardWrapper>
  )
}

export default AgentCard
