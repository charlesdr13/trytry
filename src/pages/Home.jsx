import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import HowToBuy from '../components/HowToBuy'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { typography } from '../styles/typography'
import landingImageBack from '../assets/images/LandingPageBack.png'
import landingImageFront from '../assets/images/LandingPageFront.png' 
import goals from '../assets/images/goals.svg'
import term2Front from '../assets/images/term2Front.png'
import rectangleBG2 from '../assets/images/RectangleBG3.svg'
import rectangleBG2Left from '../assets/images/RectangleBG3Left.png'
import rectangleBG2Right from '../assets/images/RectangleBG3Right.png'
import woodBG from '../assets/images/woodBG.png'
import redDiv from '../assets/images/redDivider.svg'
import agentImage from '../assets/images/agentImage.png'
import Button from '../components/Button'
import flagDiv from '../assets/images/flagDivider.svg'
import TokenomicsBG from '../assets/images/TokenomicsBG.svg'
import plaqueBackground from '../assets/images/plaqueBG.svg'
import blueDivider from '../assets/images/blueDiv.svg'
import trumpHotelImage from '../assets/images/trumpHotel.png'


const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  height: auto;
  padding-bottom: 0;  // Add this line
  

  @media ${QUERIES.tabletAndUp} {
    max-width: 1200px;
    padding: 2rem;
    padding-bottom: 0;
  }
`
const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: -0;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 100%;
  }
`

const Hero = styled.section`
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 5rem;
  background: transparent;
  
  h2 {
    position: relative;
    -webkit-text-stroke: 0.8px black;
    text-shadow: 
      0 2px 0 #000,
      0 3px 0 #000,
      0 4px 2px rgba(0,0,0,0.3); 

    z-index: 2;
    font-size: 1rem;
    margin-top: -2rem;
    margin-bottom: -3rem;
    font-weight: 10000;
    ${typography.AnonymousPro}
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 7rem;
    margin-bottom: 4rem;
    
    h2 {
      position: relative;
      z-index: 2;
      font-size: 2.6rem;
      margin-bottom: -2.5rem;
      font-weight: 10000;
      ${typography.AnonymousPro}
    }
  }
`

const CenteredImage = styled.img`
  display: block;
  width: 80%;          // Adjust this value as needed
  max-width: 1000px;   // Maximum width of the image
  height: auto;
  margin: 0 auto;      // Centers the image horizontally
  margin-top: 4rem;
  position: relative;
  z-index: 2;
  
  @media ${QUERIES.tabletAndUp} {
    width: 70%;        // Adjust for larger screens if needed
  }

  @media ${QUERIES.desktopAndUp} {
    width: 80%;        // Adjust for desktop if needed
  }
`

const ImageContainerBack = styled.div`
  position: relative;
  width: 100%;
  height: 100%; 
  background: transparent;
  z-index: 1;
  margin-top: -9rem;

  img {
    width: 63%;
    height: 63%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin: 2rem auto;
    margin-top: -11rem;
    z-index: 1;
  }

  @media (max-width: 980px) {
    margin-top: -260px;
  }

  @media (max-width: 820px) {
    margin-top: -14rem;
  }

  @media (max-width: 600px) {
    margin-top: -12rem;
  }

  @media (max-width: 500px) {
    margin-top: -10rem;
  }

  @media (max-width: 440px) {
    margin-top: -6rem;
  }
`

const ImageContainerFront = styled.div`
  position: relative;
  width: 100%;
  height: 100%; 
  background: transparent;
  z-index: 3;
  margin-top: -12rem;

  img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    margin: 2rem auto;
    margin-top: -43rem;
    z-index: 3;
  }

  @media (max-width: 1120px) {
    margin-top: -35rem;
  }

  @media (max-width: 1000px) {
    margin-top: -31rem;
  }

  @media (max-width: 900px) {
    margin-top: -26rem;
  }

  @media (max-width: 820px) {
    margin-top: -24rem;
  }

  @media (max-width: 720px) {
    margin-top: -20rem;
  }

  @media (max-width: 650px) {
    margin-top: -18rem;
  }

  @media (max-width: 600px) {
    margin-top: -14rem;
  }

  @media (max-width: 550px) {
    margin-top: -12rem;
  }

  @media (max-width: 510px) {
    margin-top: -10rem;
  }

  @media (max-width: 478px) {
    margin-top: -8rem;
  }

  @media (max-width: 440px) {
    margin-top: -6rem;
  }

  @media (max-width: 420px) {
    margin-top: -2rem;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;

  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin: 2rem auto;
  }
`

const ImageContainerRectangle = styled.div`
  width: 110%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: -2.4rem;
  margin-left: -1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin-left: -24.5rem;
    margin-top: -4.8rem;
    width: 120rem;
    z-index: 3;
  }
`
const ImageContainerRectangleLeft = styled.div`
  width: 8.7%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-left: -1rem;
  margin-top: -3.1rem;
  z-index: 6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin-top: -11.9rem;
    margin-left: -24.5rem;
    width: 14%;
    z-index: 4;
  }
`
const ImageContainerRectangleRight = styled.div`
  width: 9.5%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  display: flex;
  margin-top: -2.25rem;
  margin-left: 26.85rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin-top: -9rem;
    margin-left: 85.2rem;
    width: 14.6%;
    z-index: 3;
    ${typography.Arimo}
  }
`

const ImageContainerCopyBar = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    z-index: 4;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin-top: -2rem;
    z-index: 4;
    
  }
`

const MidSection = styled.section`
  color: #000;
  
  margin-bottom: 2rem;
  background: transparent;
  z-index: 2;
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
    p{
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem auto;
      text-align: center;
      line-height: 1.8  ;
      z-index: 2;
      ${typography.Arimo}
    }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
    margin-left: 6rem;
  
    h2 {
      position: relative;
      z-index: 2;
      font-size: 6.5rem;
      margin-left: 7rem;
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

const GoalMap = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  z-index: 3;
  position: relative;
  
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '1000px'};
    width: 80rem;
    margin-left: -8rem;
    margin-top: -6rem;
  }
`
const WoodBackground = styled.div`
  position: absolute;
  top: 110rem;
  left: 0;
  width: 120%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 100%;
    width: 100%;
  }
`
const RedDivider = styled.div`
  width: 100%;
  height: ${props => props.height || '50px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: -2.4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '50px'};
    margin-left: -30rem;
    margin-top: 14rem;
    width: 150rem;
    z-index: 3;
  }
`
const GradientBackground2 = styled.div`
  position: absolute;
  top: 168rem;
  left: 0;
  width: 100%;
  height: 60%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 0;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 120rem;
  }
`
const AgentImageContainer = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '700px'};
    width: 65rem;
    margin: 2rem auto;
    margin-left: -3rem;
    margin-top: 6rem;
  }
`

const AgentSection = styled.section`
  color: #000;
  margin-bottom: 2rem;
  background: transparent;
  z-index: 2;
  h2 {
    position: relative;
    color: #FF2727;
    z-index: 2;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 4rem;
    margin-bottom: 1rem;
        -webkit-text-stroke: 2px black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }

  h3 {
    position: relative;
    color: #FFF;
    z-index: 2;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 4rem;
    margin-bottom: 1rem;
        -webkit-text-stroke: 0.8px black;
    text-shadow: 
      0 1px 0 #000,
      0 2px 0 #000,
      0 3px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }
    p{
      position: relative;
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem auto;
      text-align: center;
      line-height: 1.8  ;
      z-index: 2;
      ${typography.Arimo}
    }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
    margin-left: 6rem;
  
    h2 {
      position: relative;
      z-index: 2;
      font-size: 7rem;
      margin-left: 1rem;
      margin-top: -1.5rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: -0.3rem;

    }

      h3 {
      position: relative;
      z-index: 2;
      font-size: 2.7rem;
      margin-left: 1rem;
      margin-top: -1.5rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: 0.001rem;

    }

    p{
      font-size: 1.5rem;
      font-weight: 400;
      margin-left: 1.2rem;
      text-align: center;
      line-height: 1.8  ;
      width: 75rem;
      max-width: 56rem;
      z-index: 2;
    }
  }
`

const ButtonHome = styled(Button)`
  margin: 2rem auto;
  margin-top: 3rem;
  margin-left: 18.5rem;
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
    margin-left: -25rem;
    margin-top: 7rem;
    width: 150rem;
    z-index: 3;
  }
`

const TokenomicsBackground = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  z-index: 1;
  position: absolute;

  
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 88rem;
    width: 121rem;
    margin-left: -25rem;
    margin-top: -17rem;
  }
`
const TokenomicsSection = styled.section`
  color: #000;
  margin-bottom: 2rem;
  background: transparent;
  z-index: 3;
  h2 {
    position: relative;
    z-index: 5;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 4rem;
    margin-bottom: 1rem;
        -webkit-text-stroke: 2px black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }

  h3 {
    position: relative;
    z-index: 5;
    color: #F20505;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 4rem;
    margin-bottom: 1rem;
        -webkit-text-stroke: 2px black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
    margin-left: 6rem;
  
    h2 {
      position: relative;
      z-index: 5;
      font-size: 7rem;
      margin-left: 12.5rem;
      margin-top: -4rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: -0.3rem;

    }
    
    h3 {
    position: absolute;
    z-index: 5;
    color: #F20505;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 5rem;
    margin-bottom: 1rem;
    margin-left: 5.2rem;
    line-spacing: 0.1rem;
        -webkit-text-stroke: 0.6px black;
    text-shadow: 
      0 1px 0 #000,
      0 2px 0 #000,
      0 3px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }

    .liquidity {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-top: 16.5rem;
      margin-bottom: 1rem;
      margin-left: 7.5rem;
  }

    .agents {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-left: 40.5rem;
    }

    .addresses1 {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-left: 39.5rem;
      margin-top: 17rem;
    }

    .treasury {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-top: 36rem;
      margin-left: 8.5rem;
    }

    .addresses2 {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-top: 47.5rem;
      margin-left: 7.5rem;

    }

    .marketing {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-top: 36rem;
      margin-left: 39.5rem;
    }

    .addresses3 {
      position: absolute;
      z-index: 5;
      color: #F20505;
      font-size: 3rem;  
      font-weight: bold;
      margin-top: 47.5rem;
      margin-left: 39.5rem;
    }
`

const ButtonToken = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -23rem;
  margin-left: 7rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken2 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -11rem;
  margin-left: 7rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken3 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -23rem;
  margin-left: 36rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken4 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -11rem;
  margin-left: 39.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken5 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -23rem;
  margin-left: 4.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken6 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -11rem;
  margin-left: 3.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken7 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -23rem;
  margin-left: 36.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const ButtonToken8 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -11rem;
  margin-left: 35.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
`
const PlagueBG1 = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
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
    margin-top: 4rem;
    margin-left: 0rem;
  }
`

const PlagueBG2 = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
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
    margin-top: -30rem;
    margin-left: 32rem;
  }
`
const PlagueBG3 = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
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
    margin-top: 0rem;
    margin-left: 0rem;
  }
`
const PlagueBG4 = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
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
    margin-top: -30rem;
    margin-left: 32rem;
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
const GradientBackground3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: -0;
  margin-bottom: -450rem;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 100%;
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
  top: 438rem;
  left: 0;
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

const Home = () => {
  return (
    <Container>
      <GradientBackground />
      <Hero>
        <h2>THE DREAM TEAM HAS BEEN ASSEMBLED FOR</h2>
        <CenteredImage 
        src={term2Front} 
        alt="TERM2"
        />
        <ImageContainerBack height="100%" margin-top="-20rem">
          <img src={landingImageBack} alt="Image of President Trump and the others" />
        </ImageContainerBack>
        <ImageContainerFront height="100%" margin-top="-20rem">
          <img src={landingImageFront} alt="Image of Globe" />
        </ImageContainerFront> 
      </Hero>
      <ImageContainerRectangle height="100%" margin-top="-20rem">
        <img src={rectangleBG2} alt="Image of Rectangle Background" />
      </ImageContainerRectangle> 
      <ImageContainerRectangleLeft height="10%" margin-top="-20rem">
        <img src={rectangleBG2Left} alt="Image of Rectangle Background" />
      </ImageContainerRectangleLeft> 
      <ImageContainerRectangleRight height="10%" margin-top="-20rem">
        <img src={rectangleBG2Right} alt="Image of Rectangle Background" />
      </ImageContainerRectangleRight> 
      <MidSection>
          <h2>WHAT IS TERM2?</h2>
          <p>Trump's final term, the greatest term, and the last chance to Make America Great Again.</p>
          <p>Term2 is the antiembodiment of the fake news.</p>
          <p style={{lineHeight: '1.2'}}>We are the 100% authentic and true, people are saying the truest, WOW it's so true - documentation of the next 4 years of greatness.</p>
          <p>DOGE, MAGA, Crypto, and everything between will be immortalized here.</p>
          <p>Are you orange-man pilled yet? </p>
        <GoalMap margin-top="-20rem" height="100%">
          <img src={goals} alt="Image of Goal Map" />
        </GoalMap>
      </MidSection>
      <WoodBackground>
          <img src={woodBG} alt="Image of Wood Background" />
      </WoodBackground>
      <RedDivider>
        <img src={redDiv} alt="Image of Red Divider" />
      </RedDivider>
      <GradientBackground2 />
      <AgentSection>
        <AgentImageContainer height="100%">
          <img src={agentImage} alt="Image of Agent" />
        </AgentImageContainer>
        <h2>THE A(GENT)-TEAM</h2>
        <h3>AI'S WORKING 24/7 FOR THE AMERICAN DREAM</h3>
        <p>They said you can't run the country with AI, so you know what we did?</p>
        <p>The biggest AI you've ever seen. Agents - Can you believe that?</p>
        <p style={{lineHeight: '1.2'}}>All 100% oil-filled and American. Full control over the Federal reserve or 'wallets'. They choose where it goes cause who could do a worse job than the that knucklehead Jerome?</p>
        <p style={{lineHeight: '1.2'}}>They might fight inflation, make sex robots, invest in more trump towers, definitely more towers - or even de-sci whatever that is. The point is they are going to make crypto great again!</p>
        <ButtonHome to="/agents">MEET THE AGENTS</ButtonHome>
      </AgentSection>
      <FlagDivider>
        <img src={flagDiv} alt="Image of Flag Divider" />
      </FlagDivider>
      <TokenomicsBackground>
        <img src={TokenomicsBG} alt="Image of Tokenomics Background" />
      </TokenomicsBackground>
      <TokenomicsSection>
        <h2>TOKENOMICS</h2>
        <h3>TOTAL SUPPLY</h3>
        <h3 className="liquidity"> LIQUIDITY</h3>
        <h3 className="agents"> 8 AGENTS</h3>
        <h3 className="addresses1"> ADDRESSES</h3>
        <h3 className="treasury"> TREASURY</h3>
        <h3 className="addresses2"> ADDRESSES</h3>
        <h3 className="marketing"> MARKETING</h3>
        <h3 className="addresses3"> ADDRESSES</h3>
        <PlagueBG1>
          <img src={plaqueBackground} alt="Image of Plaque Background" />
        </PlagueBG1>
        <ButtonToken to="/tokenomics">1 BILLION</ButtonToken>
        <ButtonToken2 to="/tokenomics">BURNED</ButtonToken2>
        <PlagueBG2>
          <img src={plaqueBackground} alt="Image of Plaque Background" />
        </PlagueBG2>
        <ButtonToken3 to="/tokenomics">20 MILLION (2%) X8</ButtonToken3>
        <ButtonToken4 to="/tokenomics">VIEW NOW</ButtonToken4>
        <PlagueBG3>
          <img src={plaqueBackground} alt="Image of Plaque Background" />
        </PlagueBG3>
        <ButtonToken5 to="/tokenomics">100 MILLION (10%)</ButtonToken5>
        <ButtonToken6 to="/tokenomics">0XXXXXXXXXXXXXXXXXX</ButtonToken6>
        <PlagueBG4>
          <img src={plaqueBackground} alt="Image of Plaque Background" />
        </PlagueBG4>
        <ButtonToken7 to="/tokenomics">100 MILLION (10%)</ButtonToken7>
        <ButtonToken8 to="/tokenomics">0XXXXXXXXXXXXXXXXXX</ButtonToken8>
      </TokenomicsSection>
      <BlueDivider>
        <img src={blueDivider} alt="Image of Blue Divider" />
      </BlueDivider>
      <GradientBackground3 />
      <HowToBuy />
      <FlagDivider style={{marginTop: '2rem'}}>
        <img src={flagDiv} alt="Image of Flag Divider" />
      </FlagDivider>
      <WhiteBackground />
      <TrumpHotelBackground>
        <img src={trumpHotelImage} alt="Image of Trump Hotel" />
      </TrumpHotelBackground>
      <FAQ />
      <Footer />
    </Container>
  )
}

export default Home
