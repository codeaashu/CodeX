"use client";

import { Fragment, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Model from "./Model";
import Model2 from "./Model2";
import Model3 from "./Model3";
import { ModelSolana, ModelPolygon, ModelTezos, ModelReplit, ModelQuill, ModelGen, ModelXX, ModelVerb } from "./ModelMain";

const Prizes = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const [isopen2, setIsOpen2] = useState(false);
  const toggleOpen2 = useCallback(() => {
    setIsOpen2((value) => !value);
  }, []);

  const [isopen3, setIsOpen3] = useState(false);
  const toggleOpen3 = useCallback(() => {
    setIsOpen3((value) => !value);
  }, []);
  const [isopen4, setIsOpen4] = useState(false);
  const toggleOpen4 = useCallback(() => {
    setIsOpen4((value) => !value);
  }, []);
  const [isopen5, setIsOpen5] = useState(false);
  const toggleOpen5 = useCallback(() => {
    setIsOpen5((value) => !value);
  }, []);
  const [isopen6, setIsOpen6] = useState(false);
  const toggleOpen6 = useCallback(() => {
    setIsOpen6((value) => !value);
  }, []);
  const [isopen7, setIsOpen7] = useState(false);
  const toggleOpen7 = useCallback(() => {
    setIsOpen7((value) => !value);
  }, []);
  const [isopen8, setIsOpen8] = useState(false);
  const toggleOpen8 = useCallback(() => {
    setIsOpen8((value) => !value);
  }, []);
  const [isopen9, setIsOpen9] = useState(false);
  const toggleOpen9 = useCallback(() => {
    setIsOpen9((value) => !value);
  }, []);

  const [isopen10, setIsOpen10] = useState(false);
  const toggleOpen10 = useCallback(() => {
    setIsOpen10((value) => !value);
  }, []);

  const [isopen11, setIsOpen11] = useState(false);
  const toggleOpen11 = useCallback(() => {
    setIsOpen11((value) => !value);
  }, []);

  return (
    <Fragment>
      <section className={`${styles.paddings}`} id="Prizes">
        <TypingText
          title="| PRIZES"
          textStyles="text-center text-[25px] font-bold mb-[55px]"
        />

        {/* 1st row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center lg:flex-row flex-col gap-6 z-[10]`}
        >
          {/* 1st prize */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="/first.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />
              <div className=" absolute w-[150px] h-[150px] hero-gradient1 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                First Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 10,000</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 25,000</span>{" "}
                <br />
              </h5>
              <h5
                className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
                onClick={toggleOpen}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>

          {/* 2nd prize */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="/second.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient3 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                Second Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 7,500</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 15,000</span>{" "}
                <br />
              </h5>
              <h5
                className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
                onClick={toggleOpen2}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>

          {/* 3rd prize */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="/third.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient4 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                Third Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 5,000</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 10,000</span>{" "}
                <br />
              </h5>
              <h5
                className="mt-[8px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]"
                onClick={toggleOpen3}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>
        </motion.div>

        {/* 2nd row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center lg:flex-row flex-col gap-6 z-[10] mt-[20px]`}
        >
          {/* solana track */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="37.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Solana
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize : <span className="font-extrabold text-white"> $ 850</span>{" "}
                <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen4}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>

          {/* ploygon track */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="36.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Polygon
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize : <span className="font-extrabold text-white"> $ 350</span>{" "}
                <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen5}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>


          {/* XX NETWORK */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="39.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                XX Network
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize :{" "}
                <span className="font-extrabold text-white"> $500</span> <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen10}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>
        </motion.div>

        {/* 3rd row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center lg:flex-row flex-col gap-6 z-[10] mt-[20px]`}
        >
          {/* Tezos track */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="34.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Tezos
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize : <span className="font-extrabold text-white"> $ 500</span>{" "}
                <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen7}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>

          {/* Quill audits track */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="33.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Quill Audits
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize :{" "}
                <span className="font-extrabold text-white"> Swags</span> <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen8}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>
          {/* replit track */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="35.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Replit
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize : <span className="font-extrabold text-white"> $ 50</span>{" "}
                <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen6}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>

        </motion.div>
        {/* 4 row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} ${styles.topPaddings} mx-auto flex justify-center items-center lg:flex-row flex-col gap-6 z-[10] mt-[20px]`}
        >
          {/* Verbwire */}

          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              <img
                src="40.png"
                alt="TRACK LOGO"
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                Best hack built on
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Verbwire
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize :{" "}
                <span className="font-extrabold text-white"> $45</span> <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen11}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>



          {/* General prizes */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]"
          >
            <div className="justify-center items-center w-full flex">
              {/* <img
              src="/.png"
              alt="TRACK LOGO"
              className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
            /> */}

              <div className=" absolute w-[150px] h-[150px] hero-gradient rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px]">
                General
              </h4>
              <h4 className="font-bold sm:text-[28px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-[20px]">
                Prizes
              </h4>

              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[30px]">
                Prize :{" "}
                <span className="font-extrabold text-white"> $XXX</span> <br />
              </h5>
              <h5
                className="font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white  hover:underline cursor-pointer mb-[10px]"
                onClick={toggleOpen9}
              >
                Know More <br />
              </h5>
            </div>
          </motion.div>
        </motion.div>

        <Model isVisible={isopen} onClose={toggleOpen} />
        <Model2 isVisible={isopen2} onClose={toggleOpen2} />
        <Model3 isVisible={isopen3} onClose={toggleOpen3} />
        <ModelSolana isVisible={isopen4} onClose={toggleOpen4} />
        <ModelPolygon isVisible={isopen5} onClose={toggleOpen5} />
        <ModelReplit isVisible={isopen6} onClose={toggleOpen6} />
        <ModelTezos isVisible={isopen7} onClose={toggleOpen7} />
        <ModelQuill isVisible={isopen8} onClose={toggleOpen8} />
        <ModelGen isVisible={isopen9} onClose={toggleOpen9} />
        <ModelXX isVisible={isopen10} onClose={toggleOpen10} />
        <ModelVerb isVisible={isopen11} onClose={toggleOpen11} />
      </section>
    </Fragment>
  );
};

export default Prizes;
