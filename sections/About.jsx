"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="About">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About HACKHAZARDS"
        textStyles="text-center text-[25px] font-extrabold "
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[23px] text-[16px] text-center text-secondary-white"
      >
        <div>
          <span className="font-extrabold text-white">HACKHAZARDS</span>, where
          innovation knows no bounds and challenges are met head-on with creative
          solutions. Step into a whirlwind of{" "}
          <span className="font-extrabold text-white">creativity</span> and{" "}
          <span className="font-extrabold text-white">rapid problem-solving</span>{" "}
          in this intense{" "}
          <span className="font-extrabold text-white">24-hour hackathon</span>{" "}
          experience. Unlike any other event of its kind, HACKHAZARDS combines the
          thrill of a hackathon with the opportunity to make a meaningful impact
          on the world's most pressing issues.At HACKHAZARDS, we believe that true
          innovation doesn't just happen it's nurtured through{" "}
          <span className="font-extrabold text-white">
            collaboration, exploration
          </span>

          , and{" "}
          <span className="font-extrabold text-white">
            thinking beyond boundaries
          </span>
          . With a diverse array of domains to choose from, participants are
          invited to delve into fields spanning technology, healthcare,
          environment, and more. Unleash your
          <span className="font-extrabold text-white"> imagination </span> and
          join forces with like-minded individuals from various disciplines to
          create interdisciplinary solutions.
        </div>

        <div className="md:flex md:justify-around my-[10px] ">
          <div className=" py-[10px] my-[10px]">
            <div className="flex justify-center items-center">
              <img
                src="location.gif"
                alt="location"
                className=" w-[100px] h-[120px]"
              />
              <div className=" mt-[8px] font-normal sm:text-[23px] text-[16px] text-center text-secondary-white">
                <span className="font-extrabold text-white">Venue</span> <br />
                [In-Person] - Bhagwan Parshuram <br />
                Institute of Technology,Rohini
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between  py-[10px]">
            <div className="flex justify-center items-center">
              <img
                src="calendar.gif"
                alt="location"
                className=" w-[80px] h-[80px] mt-[20px] mx-[20px]"
              />
              <div className=" mt-[8px] font-normal sm:text-[23px] text-[16px] text-center text-secondary-white">
                <span className="font-extrabold text-white">Date</span> <br />
                16th-17th March 2024 <br />
                24hr Hackathon
              </div>
            </div>
          </div>
        </div>
      </motion.div>



      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
