'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 items-center`}> {/* Added items-center class here */}
      <div className="flex justify-between flex-wrap gap-5 flex-col lg:flex-row">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          HACKHAZARDS
        </h4>
        {/* Registrations Starting Soon Button commented */}
        {/* <div>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[20px] gap-[12px] hover:bg-white"
          > */}
        {/* <img
                  src="/devfolio.png"
                  alt="devfolio"
                  className="w-[48px] h-[48px] object-contain"
                /> */}
        {/* <span className="font-normal text-[30px] text-white hover:text-black">
              Registrations Starting Soon!
            </span>
          </button>
        </div> */}
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4 flex-col">
          <a href="https://www.namespacecomm.in/">
            <h4 className="font-extrabold text-[24px] text-white">
              nameSpace, BPIT
            </h4>
          </a>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link}>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 nameSpace, BPIT. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
