import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay || '0s'};
`;

export default FadeIn; 