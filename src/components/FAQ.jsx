import { useState } from 'react'
import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import trumpFAQImage from '../assets/images/TrumpFaq.png'

const FAQSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin-left: 0;
  margin-top: -3rem;
  position: relative;
  z-index: 5;
  margin-bottom: -100;

  @media ${QUERIES.tabletAndUp} {
    margin-left: -10rem;
  }
`

const FAQTitle = styled.h2`
  color: #FF2727;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
  margin-bottom: 2rem;
  text-align: center;
  -webkit-text-stroke: 2px black;
  text-shadow: 
    0 4px 0 #000,
    0 5px 0 #000,
    0 6px 2px rgba(0,0,0,0.3);
  ${typography.AnonymousPro}

  @media ${QUERIES.tabletAndUp} {
    font-size: 8rem;
    letter-spacing: -0.4rem;
    text-align: left;
  }
`

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  margin: 0 1rem;
    left: 50%;
    transform: translateX(-50%);
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    max-width: 50rem;
    margin-left: 0rem;
    left: 0%;
    transform: translateX(0%);
    margin-bottom: 5rem;
  }
`

const QuestionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`

const QuestionBox = styled.div`
  background: #E9E9E9;
  padding: 1.5rem;
  border-radius: 4px;
  border-top: 0.4rem solid white;    
  border-left: 0.4rem solid white;   
  border-bottom: 0.4rem solid #B8B8B8; 
  border-right: 0.4rem solid #B8B8B8;  
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 4;
  overflow: visible;
  width: calc(100% - 2rem);
  min-width: auto;

  @media ${QUERIES.tabletAndUp} {
    min-width: 50rem;
  }

  h3 {
    color: #333;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.025rem;
    margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
    ${typography.AnonymousPro}

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.5rem;
    }
  }

  p {
    display: ${props => props.isOpen ? 'block' : 'none'};
    color: #666;
    line-height: 1.6;
    font-size: 1.2rem;
    ${typography.Arimo}

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.4rem;
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const ImageContainer = styled.div`
    width: 20rem;
    height: auto;
    margin-left: 7rem;
    margin-bottom: -5rem;
  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: relative;
    z-index: 8;
    margin-left: 7rem;
    margin-top: 0rem;
    width: 47rem;
    height: auto;
    min-width: 48rem;
    margin-bottom: -5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null)

  const questions = [
    {
      id: 1,
      question: "What exactly is Term2?",
      answer: "Term2 is an entertainment brand that provides satirical coverage of President Trump's second term, featuring everything from executive order announcements to cabinet meeting highlights. We combine Trump's actual presidency with comedic interpretations of current events."
    },
    {
      id: 2,
      question: "Is this affiliated with the Trump administration",
      answer: "No, Term2 is a parody account and is not affiliated with President Trump, his administration, or any government organization. We create satirical content for entertainment purposes only."
    },
    {
      id: 3,
      question: "Why 'Term2'?",
      answer: "The name celebrates Trump's victory and return to office while building our own unique entertainment brand. We capture the excitement and energy of Trump's second term through humor and satire."
    },
    {
      id: 4,
      question: "Are the events in your content real?",
      answer: "We mix real events with satire. While President Trump, his cabinet (including Elon Musk and Vivek Ramaswamy at DOGE), and major policy decisions are real, our content provides a humorous interpretation of these events and personalities."
    },
    {
      id: 5,
      question: "How do you create your content?",
      answer: "We closely follow President Trump's actual speeches, policies, and public statements, fake news, and other developments then create entertaining content that captures his unique communication style and the dynamic energy of his second term."
    },
    {
      id: 6,
      question: "Can I submit ideas for Term2 content?",
      answer: "We love hearing from our community! While we can't use every suggestion, we're always interested in creative ideas that help capture the spirit of Trump's second term and bring more people into making america great again. Great America, Great world."
    },
    {
      id: 7,
      question: "Do you take political requests or commissioned content?",
      answer: "No, we maintain creative independence to ensure our content remains focused on entertainment rather than specific political messaging."
    },
    {
      id: 8,
      question: "What's the deal with DOGE?",
      answer: "The Department of Government Efficiency (DOGE) is a real government department headed by Elon Musk and Vivek Ramaswamy. While we cover their actual work, we do so in our signature entertaining style."
    }
    
  ]

  return (
    <FAQSection>
      <FAQTitle>FAQ</FAQTitle>
      <FAQContainer>
        <QuestionsContainer>
          {questions.map((q) => (
            <QuestionBox 
              key={q.id} 
              isOpen={openQuestion === q.id}
              onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
            >
              <h3>{q.question}</h3>
              <p>{q.answer}</p>
            </QuestionBox>
          ))}
        </QuestionsContainer>
        <ImageContainer>
          <img src={trumpFAQImage} alt="Trump at podium" />
        </ImageContainer>
      </FAQContainer>
    </FAQSection>
  )
}

export default FAQ 