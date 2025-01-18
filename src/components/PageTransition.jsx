import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TransitionLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000520;
  transform-origin: top;
  z-index: 9999;
`;

const PageTransition = ({ isNavigating }) => {
  return (
    <AnimatePresence mode="wait">
      {isNavigating && (
        <TransitionLayer
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0, transformOrigin: 'bottom' }}
          transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      )}
    </AnimatePresence>
  );
};

export default PageTransition;