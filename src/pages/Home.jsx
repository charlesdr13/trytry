import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import HowToBuy from '../components/HowToBuy'
import { typography } from '../styles/typography'
import landingImageBack from '../assets/images/LandingPageBack.png'
import landingImageFront from '../assets/images/LandingPageFront.png'
import rectangleBG from '../assets/images/RectangleBG.png'
import copyBar from '../assets/images/copyBar.png'


const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  

  @media ${QUERIES.tabletAndUp} {
    max-width: 1200px;
    padding: 2rem;
  }
`

const Hero = styled.section`
  color: #000;
  text-align: center;
  margin-bottom: 2rem;
  background: transparent;
  
  h1 {
    position: relative;
    z-index: 2;
    font-size: 7rem;
    margin-bottom: 1rem;
    font-weight: 10000;
    ${typography.Lubalin}
  }

  h2 {
    position: relative;
    z-index: 2;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: -1rem;
    font-weight: 10000;
    ${typography.AnonymousPro}
  }

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
    
    h1 {
      position: relative;
      z-index: 2;
      font-size: 15rem;
      margin-bottom: 2rem;
    }
  
    h2 {
      position: relative;
      z-index: 2;
      font-size: 1.4rem;
      margin-bottom: -2.5rem;
      font-weight: 10000;
      ${typography.AnonymousPro}
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
    margin-top: -300px;
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
    margin-top: -42rem;
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
  width: 100%;
  height: ${props => props.height || '200px'};
  background: transparent;
  position: relative;
  left: 0%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${props => props.height || '200px'};
    margin-top: -5.2rem;
    margin-left: -24.5rem;
    width: 120rem;
    z-index: 3;
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
const Home = () => {
  return (
    <Container>
      <Hero>
        <h2>The Dream Team has Been Assembled for</h2>
        <h1>TERM2</h1>
        <ImageContainerBack height="100%" margin-top="-20rem">
          <img src={landingImageBack} alt="Image of President Trump and the others" />
        </ImageContainerBack>
        <ImageContainerFront height="100%" margin-top="-20rem">
          <img src={landingImageFront} alt="Image of Globe" />
        </ImageContainerFront> 
      </Hero>
      <ImageContainerCopyBar height="100%" margin-top="-20rem">
        <img src={copyBar} alt="Image of Copy Bar" />
      </ImageContainerCopyBar>
      <ImageContainerRectangle height="100%" margin-top="-20rem">
        <img src={rectangleBG} alt="Image of Rectangle Background" />
      </ImageContainerRectangle> 
      <section>
        <h2>What is TERM2?</h2>
        <p>Trump's final term, the greatest term, and the last chance to Make America Great Again.</p>
        <p>Term2 is the antiembodiment of the fake news.</p>
        {/* Add other content */}
      </section>

      <section>
        <h2>The A(gent)-Team</h2>
        <p>Powered by AI. Working 24/7 for the American Dream</p>
        <ImageContainer />
      </section>

      <section>
        <h2>Tokenomics</h2>
        <ImageContainer />
      </section>

      <HowToBuy />

      <section>
        <h2>FAQ</h2>
        <ImageContainer />
      </section>
    </Container>
  )
}

export default Home
