import { useState } from 'react'
import styled from 'styled-components'
import { QUERIES } from '../constants/breakpoints'
import { typography } from '../styles/typography'
import trumpFAQImage from '../assets/images/TrumpFaq.svg'

const FAQSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin-left: -10rem;
  margin-top: -3rem;
  position: relative;
  z-index: 5;
  margin-bottom: -100;

`

const FAQTitle = styled.h2`
  color: #FF2727;
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 3rem;
  -webkit-text-stroke: 2px black;
  text-shadow: 
    0 4px 0 #000,
    0 5px 0 #000,
    0 6px 2px rgba(0,0,0,0.3);
  ${typography.AnonymousPro}
`

const FAQContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 50rem;
  margin: 0 auto;
  margin-left: 0rem;
  position: relative;
`

const QuestionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
  min-width: 50rem;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
    ${typography.AnonymousPro}
  }

  p {
    display: ${props => props.isOpen ? 'block' : 'none'};
    color: #666;
    line-height: 1.6;
    ${typography.Arimo}
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const ImageContainer = styled.div`
  position: relative;
  z-index: 8;
  margin-left: 8rem;
  margin-top: -2rem;
  width: 45rem;
  height: auto;
  min-width: 45rem;

  img {
    width: 100%;
    height: 100%;
  }
`

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null)

  const questions = [
    {
      id: 1,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus mi, pretium et sagittis in, suscipit in velit."
    },
    {
      id: 2,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 6,
      question: "Question Here",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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