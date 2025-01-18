import styled from 'styled-components';
import term2Front from '../assets/images/term2Logo.png';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/lottie/loading.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #8EEAFF 0%, #FFFFFF 100%);
  overflow: hidden;
  z-index: 9999;
`;

const Logo = styled(motion.img)`
  width: 200px;
  height: auto;
  margin-top: 450px;
  margin-bottom: -500px;
`;

const AnimationContainer = styled(motion.div)`
  width: 1200px;
  height: 1200px;
  margin-top: 1rem;
`;

const RippleLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  z-index: 10000;
`;

const LoadingScreen = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('ripple'), 2000);
    const timer2 = setTimeout(() => setPhase('fadeout'), 3000);
    const timer3 = setTimeout(() => {
      setPhase('complete');
      onLoadingComplete?.();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: phase === 'fadeout' ? 0 : 1 
        }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
      >
        <LoadingContainer>
          <Logo src={term2Front} alt="TERM2 Logo" />
          <AnimationContainer>
            <Lottie animationData={loadingAnimation} loop={true} />
          </AnimationContainer>
        </LoadingContainer>

        <RippleLayer
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ 
            clipPath: phase === 'ripple' || phase === 'fadeout'
              ? 'circle(150% at 50% 50%)' 
              : 'circle(0% at 50% 50%)'
          }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;