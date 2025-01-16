import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import teamstyles from '../sections/Team.module.css';
import styles from "../styles";
import { mentors } from "../constants";

const MentorCards = () => (
  <div className={`${styles.paddings}`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-wrap gap-5`}>
      {mentors.map((mentor, index) => (
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
              src={mentor.image}
              alt={mentor.name}
              className="h-48 w-48 object-cover rounded-full"
            />
            <h4 className="font-extrabold text-xl text-white mt-4">{mentor.name}</h4>
            <div className="flex justify-center items-center mt-2">
              <a href={mentor.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
              </a>
              <a href={mentor.twitter} target="_blank" rel="noopener noreferrer">
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 mr-2" />
              </a>
              <a href={mentor.github} target="_blank" rel="noopener noreferrer">
                <img src="/github (2).svg" alt="GitHub" className="w-6 h-6 mr-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MentorCards;
