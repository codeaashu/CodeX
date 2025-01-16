"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Link from "next/link";
const Feedback = () => (
  <section className={`${styles.paddings}`} id="Sponsors">
    <TypingText title="| OUR SPONSORS" textStyles="text-center text-[25px]" />

    {/* title sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-8 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw] flex-col rounded-[32px] relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            TITLE PARTNER
          </h4>
          <Link href="https://orkes.io/" target="_blank">
            <img
              src="24.png"
              alt="ORKES"
              className="w-[500px] h-[250px] rounded-[25px]"
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>

    {/* power sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-8 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw] flex-col rounded-[32px] relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px]">
          <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            POWER PARTNER
          </h4>
          <Link href="https://xx.network/" target="_blank">
            <img
              src="38.png"
              alt="XX NETWORK"
              className="w-[500px] h-[250px] rounded-[25px]"
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>



    {/* platform, energy drink & innovation sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10  flex gap-5 md:flex-row flex-col  justify-center items-center`}
    >
      {/* energy drink sponsor */}
      {/* <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center  flex-col  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] ">
          <h4 className="font-bold lg:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            ENERGY DRINK PARTNER
          </h4>
          <Link href="https://devfolio.co/" target="_blank">
            <img
              src="30.png"
              alt="Monster Energy LOGO"
              className="lg:w-[300px] w-[250px]  rounded-[25px]"
            />
          </Link>
        </div>
      </motion.div> */}

      {/* platform sponsor */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw]  flex-col  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] ">
          <h4 className="font-bold lg:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            PLATFORM PARTNER
          </h4>
          <Link href="https://devfolio.co/" target="_blank">
            <img
              src="1.png"
              alt="DEVFOLIO LOGO"
              className="lg:w-[300px] w-[250px]  rounded-[25px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* Innovation Partner*/}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[80vw]  flex-col  relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] ">
          <h4 className="font-bold lg:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
            INNOVATION PARTNER
          </h4>
          <Link href="https://whereuelevate.com/" target="_blank">
            <img
              src="31.png"
              alt="Where U Elevate LOGO"
              className="lg:w-[300px] w-[250px]  rounded-[25px]"
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>

    {/* associate sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
        ASSOCIATE PARTNERS
      </h4>

      {/* row1 */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://polygon.technology/" target="_blank">
            <img src="2.png" alt="POLYGON LOGO" className="rounded-[15px]" />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://tezos.com/" target="_blank">
            <img
              src="21.png"
              alt="revealing poster"
              className="rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link
            href="https://www.quillaudits.com/smart-contract-audit"
            target="_blank"
          >
            <img src="22.png" alt="POLYGON LOGO" className="rounded-[15px]" />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://push.org/" target="_blank">
            <img
              src="23.png"
              alt="revealing poster"
              className="rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* row2 */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center mt-[10px] w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://solana.com/" target="_blank">
            <img src="26.png" alt="Solana LOGO" className="rounded-[15px]" />
          </Link>
        </div>

        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.routerprotocol.com/" target="_blank">
            <img src="41.png" alt="Router LOGO" className="rounded-[15px]" />
          </Link>
        </div>
      </motion.div>
    </motion.div>

    {/* Swag sponsor */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:pt-5 xs:pt-8 pt-10 mx-auto flex flex-col justify-center items-center`}
    >
      <h4 className="font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
        SWAG PARTNERS
      </h4>

      {/* row1 */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.commudle.com/" target="_blank">
            <img src="27.png" alt="commudle LOGO" className="rounded-[15px]" />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://reskilll.com/" target="_blank">
            <img
              src="28.png"
              alt="revealing poster"
              className="rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link
            href="https://cssbattle.dev/"
            target="_blank"
          >
            <img src="29.png" alt="css battle" className="rounded-[15px]" />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link
            href="https://fanstore.bobble.ai/"
            target="_blank"
          >
            <img src="32.png" alt=" fan store" className="rounded-[15px]" />
          </Link>
        </div>
        {/* <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://push.org/" target="_blank">
            <img
              src="23.png"
              alt="revealing poster"
              className="rounded-[15px]"
            />
          </Link>
        </div> */}
      </motion.div>

      {/* row2 */}
      {/* <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center mt-[10px] w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://polygon.technology/" target="_blank">
            <img src="26.png" alt="POLYGON LOGO" className="rounded-[15px]" />
          </Link>
        </div>
      </motion.div> */}
    </motion.div>

    {/* general sponsor */}
    <div>
      <h4 className="flex flex-col items-center z-[1] font-bold sm:text-[29px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[10px]">
        GENERAL PARTNERS
      </h4>

      {/* 1st row */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative  "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://replit.com/" target="_blank">
            <img
              src="3.png"
              alt="REPLIT LOGO"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://rosenfeldmedia.com/" target="_blank">
            <img
              src="4.png"
              alt="rosenfeld"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://gen.xyz/" target="_blank">
            <img
              src="5.png"
              alt="xyz.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.axure.com/" target="_blank">
            <img
              src="6.png"
              alt="axure.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* 2nd row */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative mt-[10px] "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.slido.com/" target="_blank">
            <img
              src="7.png"
              alt="slido.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://beeceptor.com/" target="_blank">
            <img
              src="8.png"
              alt="beeceptor.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.taskade.com/" target="_blank">
            <img
              src="9.png"
              alt="taskade.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://interviewbuddy.net/" target="_blank">
            <img
              src="10.png"
              alt="interviewbuddy.net"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* 3rd row */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative mt-[10px] "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.interviewcake.com/" target="_blank">
            <img
              src="11.png"
              alt="interviewcake.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://1password.com/" target="_blank">
            <img
              src="12.png"
              alt="1password.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.verbwire.com/" target="_blank">
            <img
              src="13.png"
              alt="verbwire.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.oreilly.com/" target="_blank">
            <img
              src="14.png"
              alt="oreilly.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* 4th row */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative mt-[10px] "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.echo3d.com/" target="_blank">
            <img
              src="15.png"
              alt="echo3d.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.sublimetext.com/" target="_blank">
            <img
              src="17.png"
              alt="sublimetext.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://streamyard.com/" target="_blank">
            <img
              src="18.png"
              alt="revealing poster"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.quicknode.com/" target="_blank">
            <img
              src="19.png"
              alt="revealing poster"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>

      {/* 5th row */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] items-center justify-center w-[90vw] flex md:flex-row flex-col lg:gap-5 gap-2 relative mt-[10px] "
      >
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://cybrancee.com/" target="_blank">
            <img
              src="16.png"
              alt="cybrancee.com"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center z-[1] mt-[5px] w-[250px]">
          <Link href="https://www.wolframalpha.com/" target="_blank">
            <img
              src="20.png"
              alt="wolfram alpha"
              className="w-[900px] rounded-[15px]"
            />
          </Link>
        </div>
      </motion.div>
    </div>

    <div className="flex items-center justify-center mt-4">
      <h4 className="font-bold md:text-[32px] text-[32px] text-white mt-3">
        Interested in sponsoring HACKHAZARDS?
      </h4>
    </div>

    <div className="flex items-center justify-center mt-2">
      <a href="https://drive.google.com/file/d/1OtvOCeghTnYlDelbP1Nj_Jiu7d1LYj6X/view">
        <button
          type="button"
          className=" flex items-center h-fit py-4 px-6 bg-[#e4dae8] rounded-[20px] gap-[15px] hover:bg-violet-300"
        >
          <img
            src="/money.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-black">
            See our sponsorship deck and connect with us
          </span>
        </button>
      </a>
    </div>
  </section>
);

export default Feedback;
