"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { members, members2} from "../constants";
import teamstyles from './Team.module.css';

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Team = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  const owlStyles = {
    '.owl-carousel .item': {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
    },
    '.owl-carousel .item img': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};
  return (
    <section className={`${styles.paddings}`} id="Team">
      <TypingText
        title="| Organizing Team"
        textStyles="text-center text-[25px] font-bold"
      />
      <div>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            
            dots={true}
            animateIn={true}
            {...options}
          >
            {members && members.length > 0
              ? members.map((member) => {
                  return (
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                      className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center md:flex-row flex-col gap-5 lg:gap-8 z-[10]`}
                    >
                      <motion.div
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className=" lg:w-[500px] flex justify-center items-center flex-col  gradient-05 sm:p-4  p-4  border-radius-[50%] border-[3px]  relative"
                      >
                        <img
                          src={member.image}
                          alt="member photo"
                          className=" h-[200px] w-[180px] object-fit rounded-[50%] border-[5px]"
                        />
                        <div className="flex flex-col items-center ">
                          <h4 className="font-extrabold  xl:text-[20px]  text-[15px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[15px]">
                            {member.name}
                          </h4>
                          <h5 className=" font-bold xl:text-[16px] text-[11px] sm:leading-[22.68px] leading-[16.68px] text-white ">
                            {member.position}
                          </h5>

                          <div className="flex gap-4 mt-[12px]">
                            <a href={member.twitter}>
                              <img
                                src="/twitter.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.instagram}>
                              <img
                                src="/instagram.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.linkedIn}>
                              <img
                                src="/linkedin.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.github}>
                              <img
                                src="/github (2).svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
      
      <div>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {members2 && members2.length > 0
              ? members2.map((member) => {
                  return (
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                      className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center md:flex-row flex-col gap-5 lg:gap-8 z-[10]`}
                    >
                      <motion.div
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className=" lg:w-[500px] flex justify-center items-center flex-col  gradient-05 sm:p-4  p-4  rounded-[10px] border-[3px]  relative"
                      >
                        <img
                          src={member.image}
                          alt="anushka photo"
                          className=" h-[200px] w-[180px] object-fit rounded-[50%] border-[5px]"
                        />
                        <div className="flex flex-col items-center ">
                          <h4 className="font-extrabold  xl:text-[20px]  text-[15px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[15px]">
                            {member.name}
                          </h4>
                          <h5 className=" font-bold xl:text-[16px] text-[11px] sm:leading-[22.68px] leading-[16.68px] text-white ">
                            {member.position}
                          </h5>

                          <div className="flex gap-4 mt-[12px]">
                            <a href={member.twitter}>
                              <img
                                src="/twitter.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.instagram}>
                              <img
                                src="/instagram.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.linkedIn}>
                              <img
                                src="/linkedin.svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                            <a href={member.github}>
                              <img
                                src="/github (2).svg"
                                alt=""
                                className="w-[18px] h-[18px] object-contain cursor-pointer"
                              />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
      
    </section>
  );
};

export default Team;
