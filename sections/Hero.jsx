'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";



const Hero = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="sm:py-2 xs:py-4 py-5 mt-[120px] sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:mt-[5px] mt-[12px]"
        >
          <div className="absolute w-full h-[300px] max-md:hidden hero-gradient rounded-tl-[140px] z-[0] -top-[20px]" />

          <img
            src="/bannerxl3.png"
            alt="hero_cover"
            className="w-full sm:w-[100vw] h-[83vh] max-md:hidden object-cover rounded-tl-[140px] z-1 relative"
          />

          <div className="absolute w-full h-[20vh] md:hidden hero-gradient rounded-tl-[50px] z-[0] -top-[20px]" />
          <img
            src="/bannersm.png"
            alt="hero_cover"
            className="w-full sm:w-[100vw]  md:hidden object-cover rounded-tl-[50px] z-1 relative"
          />


          <div className="md:flex-col flex flex-col justify-center items-center  my-10 mb-5 gap-5 pr-6 z-2">


            {/* <img
                  src="/devfolio.png"
                  alt="devfolio"
                  className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] object-contain"
                /> */}
            <div
              class="apply-button"
              data-hackathon-slug="hackhazards24"
              data-button-theme="dark-inverted"
              style={{ height: "96px", width: "340px", margin: "20px auto 0", display: "block", textAlign: "center" }}
            ></div>


            <a href="https://discord.com/invite/QQj66TND4c" target="_blank">
              <button
                type="button"
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[20px] gap-[12px] hover:bg-[#102f45] "
              >
                <img
                  src="/discord-mark-white.svg"
                  alt="devfolio"
                  className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] object-contain"
                />
                <span className="font-bold lg:text-[40px] text-[18px] text-white ">
                  Discord Server
                </span>
              </button>
            </a>
          </div>

          <div className=" flex justify-center items-center  my-3 mb-5 gap-5 pr-6 font-medium lg:text-[30px] text-[25px] text-white hover:underline hover:text-[#25618B]">
            <a href="https://docs.google.com/document/d/1rBz992a_-oChxud9umkL8_s_twOhSJx959aE1Bez0R0/edit?usp=sharing">
              Code of Conduct
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;