'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Events = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mt-32`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Events of HACKHAZARDS
        </h4>
      </div>
    </div>
  </motion.footer>
);

export default Events;
