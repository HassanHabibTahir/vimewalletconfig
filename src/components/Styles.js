import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const Header = styled('div')`
  background: #0176ec;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(motion.span)`
  color: black;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.5s;
`;

export const SvgBox = styled(motion.div)``;

export const StyledWalletMultiButton = styled(Button)({
  background: '#5EBCEB',
  borderRadius: '8px',
  width: '160px',
  color: '#fff',
  '&:hover': {
    background: '#5EBCEBa1',
  },
});
