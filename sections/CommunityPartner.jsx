"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { communityPartner } from "../constants";


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
    <section className={`${styles.paddings}`}>
      <TypingText
        title="| COMMUNITY PARTNERS"
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
            {communityPartner && communityPartner.length > 0
              ? communityPartner.map((member) => {
                return (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="cursor-pointer mt-[15px]"
                  >
                    <a href={member.link} target="_blank">
                      <img
                        src={member.image}
                        alt="member photo"
                        className="w-[200px] rounded-[10px] "
                      />
                    </a>


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
