import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import HowToBuy from '../components/HowToBuy'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { typography } from '../styles/typography'
import landingImageBack from '../assets/images/landingPageBack.png'
import landingImageFront from '../assets/images/LandingPageFront2.png' 
import goals from '../assets/images/goals2.png'
import term2Front from '../assets/images/term2Front.png'
import rectangleBG2 from '../assets/images/RectangleBG3.svg'
import rectangleBG2Left from '../assets/images/RectangleBG3Left.png'
import rectangleBG2Right from '../assets/images/RectangleBG3Right.png'
import woodBG from '../assets/images/woodBG.png'
import redDiv from '../assets/images/redDivider.svg'
import agentImage from '../assets/images/agentImage2.png'
import Button from '../components/Button'
import flagDiv from '../assets/images/flagDivider.svg'
import TokenomicsBG from '../assets/images/TokenomicsBG.svg'
import plaqueBackground from '../assets/images/plaqueBG.svg'
import blueDivider from '../assets/images/blueDiv.svg'
import trumpHotelImage from '../assets/images/trumpHotel.png'
import LoadingScreen from '../components/LoadingScreen';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import globe from '../assets/videos/globe.webm'
import copyButtonImage from '../assets/images/copyBar.png'
import CopyButton from '../components/CopyButton'
import tokenomicsConfig from '../config/tokenomics.json'

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  height: auto;
  padding-bottom: 0;  // Add this line
  

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    padding-bottom: 0;
  }
`
const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;  
  width: 100%;
  height: 70%;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 3;

  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    padding: 2rem;
    height: 130%;
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
      0 1px 0 #000,
      0 2px 0 #000,
      0 3px 2px rgba(0,0,0,0.3); 

    z-index: 4;
    font-size: 1rem;
    margin-top: -1.66%;
    margin-bottom: -11%;
    font-weight: 700;
    ${typography.AnonymousPro}
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 7rem;
    margin-bottom: 4rem;
    
    h2 {
      position: relative;
      z-index: 4;
      font-size: 2.5rem;
      margin-bottom: -2.5rem;
      font-weight: 700;
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
  margin-top: 3.5rem;
  position: relative;
  z-index: 4;
  
  @media ${QUERIES.tabletAndUp} {
    width: 50%;        // Adjust for larger screens if needed
  }

  @media ${QUERIES.desktopAndUp} {
    width: 60%;        // Adjust for desktop if needed
  }
`

const ImageContainerBack = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  z-index: 3;
  position: relative;
  overflow: hidden;
  margin-left: -2.681%;

  video, img {
    width: 110%;
    height: 140%;
    object-fit: cover;
    object-position: center top;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 40rem;
    width: 50rem;
    margin-left: 18%;
    margin-top: -17%;
    margin-bottom: 15rem;
  }
`

const ImageContainerFront = styled.div`
  position: relative;
  width: 75%;
  height: 75%; 
  background: transparent;
  z-index: 4;
  margin-top: -76.6%;
  margin-left: 2.8725%;

  img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    margin: 2rem auto;
    margin-top: -50%;
    z-index: 4;
  }
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: transparent;

  @media ${QUERIES.tabletAndUp} {
    height: auto;
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
  margin-top: -10.724%;
  margin-left: -3.83%;
  z-index: 5;
  width: 50rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 70%;
    margin-left: -3%;
    margin-top: -10%;
    width: 100rem;
    z-index: 5;
  }

`
const ImageContainerRectangleLeft = styled.div`
  width: 12.5%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-left: -3.83%;
  margin-top: -15.2%;
  z-index: 6;

  img {
    width: 55%;
    height: 55%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 100%  ;
    margin-top: -8.7rem;
    margin-left: -2.1%;
    width: 14%;
    z-index: 6;
  }
`
const ImageContainerRectangleRight = styled.div`
  width: 13%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  display: flex;
  margin-top: -11.4%;
  margin-left: 26rem;
  z-index: 6;
  
  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 100%  ;
    margin-top: -6.6rem;
    margin-left: 94%;
    width: 14%;
    z-index: 6;
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
    margin-top: 0rem;
    z-index: 4;
  }
`

const MidSection = styled.section`
  color: #000;
  
  margin-top: 10rem;
  margin-bottom: 2rem;
  background: transparent;
  z-index: 2;
  h2 {
    position: relative;
    color: #FF2727;
    z-index: 2;
    font-size: 5rem;
    font-weight: bold;
    margin-top: -4rem;
    margin-left: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;

    -webkit-text-stroke: 1.5px black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }
    p{
      font-size: 1.3rem;
      font-weight: 400;
      margin: 1rem auto;
      text-align: center;
      gap: 0.5rem;
      line-height: 2rem;
      z-index: 2;
      margin-top: 0rem;
      width: 26rem;
      ${typography.Arimo}
    }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
    margin-left: 6rem;
  
    h2 {
      position: relative;
      z-index: 2;
      font-size: 6.5rem;
      margin-left: -3rem;
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
    margin-top: 2rem;
  }
`
const WoodBackground = styled.div`
  position: absolute;
  top: 93rem;
  left: 0;
  width: 100%;
  height: 20rem;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 60rem;
    width: 100%;
    top: 110rem;
    left: 0;
    
  }
`
const RedDivider = styled.div`
  width: 60rem;
  height: 2.5rem;
  background: transparent;
  position: relative;
  left: -13%;
  display: flex;
  margin-top: 4rem;
  z-index: 2;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '50px'};
    margin-left: -30rem;
    margin-top: 10rem;
    width: 150rem;
    z-index: 3;
  }

  @media ${QUERIES.IP11AndDown} {
  margin-top: 12.4vh;
  }
`
const GradientBackground2 = styled.div`
  position: absolute;
  top: 115rem;
  left: 0;
  width: 100%;
  height: 94rem;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 0;

  @media ${QUERIES.tabletAndUp} {
    top: 168rem;
    left: 0;
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
  margin-top: 2rem;

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
    font-size: 5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
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
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
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
      width: 27rem;
      line-height: 1.8rem ;
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
      margin-left: -1rem;
      margin-top: -1.5rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: -0.3rem;

    }

      h3 {
      position: relative;
      z-index: 2;
      font-size: 2.7rem;
      margin-left: -1rem;
      margin-top: -1.5rem;
      margin-bottom: 2rem;
      font-weight: bold;
      letter-spacing: 0.001rem;

    }

    p{
      font-size: 1.5rem;
      font-weight: 400;
      margin-left: 2.2rem;
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
  margin-left: 7rem;
  width: 5rem;
  height: 1rem;
  font-size: 1.4rem;
  padding: 2rem 0.5rem;

  @media ${QUERIES.tabletAndUp} {
    margin: 2rem auto;
    margin-top: 3rem;
    margin-left: 18.5rem;
    height: auto;
    width: auto;
    padding: 2rem 2.5rem;
    font-size: 2rem;
    
  }

  @media ${QUERIES.IP11AndDown} {
    left: 2%;
    height: auto;
    width: auto;
  }
}
`

const FlagDivider = styled.div`
  width: 90rem;
  height: 14rem;
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: 3rem;
  margin-left: -1.2rem;
  z-index: 2;
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
  height: 124rem;
  margin-left: -1rem;
  margin-top: -11rem;
  background: transparent;
  z-index: 0;
  position: absolute;
  overflow: hidden;

  
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 97rem;
    width: 121rem;
    margin-left: -25rem;
    margin-top: -17rem;
  }

  @media ${QUERIES.IP11AndDown} {
  width: 100%;
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
    font-size: 4rem;
    font-weight: 700;
    margin-top: -4rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
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
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 6rem;
    margin-bottom: 1rem;
    margin-left: 0vw;
    text-align: center;
        -webkit-text-stroke: 0.08rem black;
    text-shadow: 
      0 4px 0 #000,
      0 5px 0 #000,
      0 6px 2px rgba(0,0,0,0.3); 
      ${typography.AnonymousPro}
  }
  .liquidity {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: rem;  
        font-weight: bold;
        margin-top: 7rem;
        margin-bottom: 1rem;
        margin-left: 8.5rem;
    }

  .agents {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-left: 9rem;
        margin-top: 20.6rem;
      }

  .addresses1 {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-left: 8.25rem;
        margin-top: 31rem;
      }

  .treasury {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-top: 44.5rem;
        margin-left: 9rem;
      }

  .addresses2 {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-top: 55rem;
        margin-left: 8.3rem;

      }

  .marketing {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-top: 68.75rem;
        margin-left: 8rem;
      }

  .addresses3 {
        position: absolute;
        z-index: 5;
        color: #F20505;
        font-size: 2.5rem;  
        font-weight: bold;
        margin-top: 79rem;
        margin-left: 8rem;
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
      margin-top: 5rem;
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
}

  @media ${QUERIES.IP11AndDown} {
    margin-bottom: 2rem;
    background: transparent;
    z-index: 3;
    h2 {
      position: relative;
      z-index: 5;
      color: #fff;
      font-size: 4rem;
      font-weight: 700;
      margin-top: -4rem;
      margin-bottom: 1rem;
      margin-left: 3rem;
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
      font-size: 2.5rem;
      font-weight: bold;
      margin-top: 6rem;
      margin-bottom: 1rem;
      margin-left: 0vw;
      text-align: center;
          -webkit-text-stroke: 0.08rem black;
      text-shadow: 
        0 4px 0 #000,
        0 5px 0 #000,
        0 6px 2px rgba(0,0,0,0.3); 
        ${typography.AnonymousPro}
    }
    .liquidity {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-top: 6.5rem;
          margin-bottom: 1rem;
          margin-left: 8rem;
      }

    .agents {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-left: 9rem;
          margin-top: 19.75rem;
        }

    .addresses1 {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-left: 8.25rem;
          margin-top: 30rem;
        }

    .treasury {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-top: 43rem;
          margin-left: 9rem;
        }

    .addresses2 {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-top: 53rem;
          margin-left: 8.3rem;

        }

    .marketing {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-top: 66rem;
          margin-left: 8rem;
        }

    .addresses3 {
          position: absolute;
          z-index: 5;
          color: #F20505;
          font-size: 2.5rem;  
          font-weight: bold;
          margin-top: 76.5rem;
          margin-left: 8rem;
        }
}
`

const ButtonToken = styled.div`
  // Original ButtonToken styles
  position: relative;
  margin: 2rem auto;
  margin-top: -19.75rem;
  margin-left: 6.75rem;
  position: absolute;
  z-index: 5;
  padding: 1rem rem;

  // Inherited Button styles
  background: #2734BD;
  color: white;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  border-radius: 2px;
  min-width: 15rem;
  min-height: 5rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 1.75rem 2rem;
  font-size: 2rem;
  transition: all 0.2s ease;
  z-index: 6;
  ${typography.AnonymousPro}

  @media ${QUERIES.tabletAndUp} {
    margin-top: -23rem;
    margin-left: 6.75rem;
  }

  @media ${QUERIES.IP11AndDown} {
    margin-top: -29.5vh;
    margin-left: 21vw;

  }

`
const ButtonToken2 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -9rem;
  margin-left: 7rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;

  @media ${QUERIES.tabletAndUp} {
      margin-top: -11rem;
    left: 24%;
    transform: translateX(0);
  }
  @media ${QUERIES.IP11AndDown} {
    left: -3.5%;
  }
  
`
const ButtonToken3 = styled.div`
  // Original ButtonToken3 styles
  position: relative;
  margin: 2rem auto;
  margin-top: -19.5rem;
  margin-left: 5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;
  width: 60%;

  // Inherited Button styles
  background: #2734BD;
  color: white;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  border-radius: 2px;
  min-width: 15rem;
  min-height: 6rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 1.75rem 1.3rem;
  font-size: 1.4rem;
  transition: all 0.2s ease;
  z-index: 6;
  ${typography.AnonymousPro}

  @media ${QUERIES.tabletAndUp} {
      margin-top: -23rem;
      margin-left: 35.5rem;
      width: 23rem;
      font-size: 2rem;
  }
  @media ${QUERIES.IP11AndDown} {
    margin-left: 18vw;
    margin-top:-29.5vh;
  }
`
const ButtonToken4 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -9rem;
  margin-left: 6.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -11rem;
    left: 51.5%;
    transform: translateX(0);
  }

  @media ${QUERIES.IP11AndDown} {
    left: -1%;
    margin-top: -13.5vh;
  }
`
const ButtonToken5 = styled.div`
  // Original ButtonToken5 styles
  position: relative;
  margin: 2rem auto;
  margin-top: -20rem;
  margin-left: 3.75rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;

  // Inherited Button styles
  background: #2734BD;
  color: white;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  border-radius: 2px;
  min-width: 15rem;
  min-height: 6rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 1.75rem 1.2rem;
  font-size: 2rem;
  transition: all 0.2s ease;
  z-index: 6;
  ${typography.AnonymousPro}

  @media ${QUERIES.tabletAndUp} {
  margin-top: -23rem;
  margin-left: 4.5rem;
  }

  @media ${QUERIES.IP11AndDown} {
    margin-left: 10vw;
    margin-top: -29.5vh;
  }
  
`
const ButtonToken6 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -9rem;
  margin-left: 6.5rem;
  position: absolute;
  z-index: 5;
  padding: 2rem 1rem;
  font-size: 1.2rem;

  @media ${QUERIES.tabletAndUp} {
  margin-top: -11rem;
    left: 25%;
    transform: translateX(0);
    padding: auto;
    font-size: 2rem;
  }

  @media ${QUERIES.IP11AndDown} {
    left: -1%;
  }
`
const ButtonToken7 = styled.div`
  // Original ButtonToken7 styles
  position: relative;
  margin: 2rem auto;
  margin-top: -19.75rem;
  margin-left: 3.5rem;
  position: absolute;
  z-index: 5;
  padding: 1.5rem 1rem;

  // Inherited Button styles
  background: #2734BD;
  color: white;
  border-top: 0.3rem solid white;    
  border-left: 0.3rem solid white;   
  border-bottom: 0.3rem solid #1A10A3; 
  border-right: 0.3rem solid #1A10A3;  
  border-radius: 2px;
  min-width: 15rem;
  min-height: 6rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 1.75rem 1.2rem;
  font-size: 2rem;
  transition: all 0.2s ease;
  z-index: 6;
  ${typography.AnonymousPro}

  @media ${QUERIES.tabletAndUp} {
    margin-top: -23rem;
    margin-left: 36.5rem;
  }
  
  @media ${QUERIES.IP11AndDown} {
    margin-left: 10vw;
    margin-top: -29.5vh;
  }
  
`
const ButtonToken8 = styled(Button)`
  position: relative;
  margin: 2rem auto;
  margin-top: -9.5rem;
  margin-left: 6.5rem;
  position: absolute;
  z-index: 5;
  padding: 2rem 1rem;
  font-size: 1.2rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -11rem;
    left: 52%;
    transform: translateX(0);
    padding: 1.5rem 1rem;
    font-size: 2rem;

  }

  @media ${QUERIES.IP11AndDown} {
    margin-top: -13.5vh;
    left: -1%;
  }
`
const PlaqueBG1 = styled.div`
  width: 85%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 3;
      left: 50%;
    transform: translateX(-50%);
    margin-top: -5rem;

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
    left: 0%;
    transform: translateX(0%);
    
  }
`

const PlaqueBG2 = styled.div`
  width: 85%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 3;
      left: 50%;
    transform: translateX(-50%);

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
      left: 0%;
    transform: translateX(0%);
  }
`
const PlaqueBG3 = styled.div`
  width: 85%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 3;
      left: 50%;
    transform: translateX(-50%);

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
        left: 0%;
    transform: translateX(0%);
  }
`
const PlaqueBG4 = styled.div`
  width: 85%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 3;
      left: 50%;
    transform: translateX(-50%);

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
    left: 0%;
    transform: translateX(0%);
  }
`
const BlueDivider = styled.div`
  width: 60rem;
  height: 2.5rem;
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;
  margin-top: 10rem;
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
    margin-top: 12.5rem;
    width: 150rem;
  }

  @media ${QUERIES.IP11AndDown} {
    margin-top: 22vh;
  }
`
const GradientBackground3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 102rem;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  z-index: 2;
  margin-bottom: -450rem;
  margin-top: 332rem;

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    margin-top: 0rem;
    max-width: 100%;
    padding: 2rem;
    height: 100%;
  }
`
const WhiteBackground = styled.div`
  position: absolute;
  top: 430rem;
  left: 0;
  width: 100%;
  height: 95rem;  // Adjust this value to control how far down the gradient goes
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  z-index: 2;


  @media ${QUERIES.tabletAndUp} {
    top: 440rem;
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

const ImagePlaceholder = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: #ccc;
  margin: 1rem auto;
  border: 1px solid #999;

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '300px'};
    margin: 2rem auto;
  }
`

const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 2vw;
  margin-bottom: 10vw;

  @media ${QUERIES.IP11AndDown} {
    margin-bottom: 1vw;
  }
`

const Home = () => {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(() => {
    // Show loading only on fresh loads/refreshes, not internal navigation
    return !sessionStorage.getItem('navigationState');
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);

  useEffect(() => {
    if (showLoading) {
      // Set navigation state to prevent loading screen on internal navigation
      sessionStorage.setItem('navigationState', 'active');
      
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3500);
      
      // Clear the navigation state when component unmounts
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showLoading]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 428);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clear navigation state on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('navigationState');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      <Container>
        <GradientBackground />
        <Hero>  
          <h2>THE DREAM TEAM HAS BEEN ASSEMBLED FOR</h2>
          <CenteredImage 
          src={term2Front} 
          alt="TERM2"
          />
          <ImageContainerBack height="100%">
            {isMobile ? (
              <LandingImage src={landingImageBack} />
            ) : (
              <video autoPlay muted loop playsInline>
                <source src={globe} type="video/webm" />
              </video>
            )}
          </ImageContainerBack>
          <ImageContainerFront height="100%" margin-top="-20rem">
            <img src={landingImageFront} alt="Image of Globe" />
          </ImageContainerFront> 
        </Hero>
        <ImageContainer>
          <ImageContainerRectangle height="100%" margin-top="-20rem">
            <img src={rectangleBG2} alt="Image of Rectangle Background" />
          </ImageContainerRectangle> 
          <ImageContainerRectangleLeft height="10%" margin-top="-20rem">
            <img src={rectangleBG2Left} alt="Image of Rectangle Background" />
          </ImageContainerRectangleLeft> 
          <ImageContainerRectangleRight height="10%" margin-top="-20rem">
            <img src={rectangleBG2Right} alt="Image of Rectangle Background" />
          </ImageContainerRectangleRight> 
          <CopyButton 
            imageSrc={copyButtonImage}
            textToCopy={tokenomicsConfig.CopyBar.address}
            tooltipText="Copied to Clipboard!"
          />
        </ImageContainer>
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
          <ButtonHome to="/agents" className="agents-button">MEET THE AGENTS</ButtonHome>
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
            <PlaqueBG1>
              <img src={plaqueBackground} alt="Image of Plaque Background" />
            </PlaqueBG1>
            <ButtonToken to="/tokenomics">1 BILLION</ButtonToken>
            <ButtonToken2 to="/tokenomics">
              {tokenomicsConfig.buttonTokens.token2}
            </ButtonToken2>
            <PlaqueBG2>
              <img src={plaqueBackground} alt="Image of Plaque Background" />
            </PlaqueBG2>
            <ButtonToken3 to="/tokenomics">20 MILLION (2%) X8</ButtonToken3>
            <ButtonToken4 to="/tokenomics">
              {tokenomicsConfig.buttonTokens.token4}
            </ButtonToken4>
            <PlaqueBG3>
              <img src={plaqueBackground} alt="Image of Plaque Background" />
            </PlaqueBG3>
            <ButtonToken5 to="/tokenomics">100 MILLION (10%)</ButtonToken5>
            <ButtonToken6 to="/tokenomics">
            {tokenomicsConfig.buttonTokens.token6}
            </ButtonToken6>
            <PlaqueBG4>
              <img src={plaqueBackground} alt="Image of Plaque Background" />
            </PlaqueBG4>
            <ButtonToken7 to="/tokenomics">100 MILLION (10%)</ButtonToken7>
            <ButtonToken8 to="/tokenomics">
            {tokenomicsConfig.buttonTokens.token8}
            </ButtonToken8>
          </TokenomicsSection>
        <BlueDivider>
          <img src={blueDivider} alt="Image of Blue Divider" />
        </BlueDivider>
        <GradientBackground3 />
        <HowToBuy />
        <FlagDivider style={{marginTop: '2rem', zIndex: '5'}}>
          <img src={flagDiv} alt="Image of Flag Divider" />
        </FlagDivider>
        <WhiteBackground />
        <TrumpHotelBackground>
          <img src={trumpHotelImage} alt="Image of Trump Hotel" />
        </TrumpHotelBackground>
        <FAQ />
        <Footer />
      </Container>
    </>
  )
}

export default Home
