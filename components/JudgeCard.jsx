import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import teamstyles from '../sections/Team.module.css';
import styles from "../styles";
import { judges } from "../constants";

const JudgeCard = () => (
  <div className={`${styles.paddings}`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-wrap gap-5`}>
      {judges.map((judge, index) => (
        <motion.div
          key={index}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.topPaddings} ${teamstyles.mentorCard} rounded-lg overflow-hidden shadow-md relative`}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex justify-center items-center flex-col gradient-05 p-4 relative"
          >
            <img
              src={judge.image}
              alt={judge.name}
              className="h-48 w-48 object-cover rounded-full"
            />
            <h4 className="font-extrabold text-xl text-white mt-4">{judge.name}</h4>
            <div className="flex justify-center items-center mt-2">
              <a href={judge.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default JudgeCard;

