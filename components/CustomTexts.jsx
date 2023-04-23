'use client';

import { motion } from 'framer-motion';
import { textContainer } from '../utils/motion';

export const TypingText = ({title, textStyles}) => (
  <motion.p
    variants={textContainer}
  >
    Typing Text
  </motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
