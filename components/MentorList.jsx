import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import MentorCards from "./MentorCard";
import JudgeCard from "./JudgeCard";

const MentorList = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    {/* Judges */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3 items-center justify-center`}>
      <h4 className="flex items-center font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
        Our Judges
      </h4>
    </div>
    {/* Center aligning the MentorCards component */}
    <div className=" ml-6 flex justify-center">
      <JudgeCard />
    </div>
    {/* Mentors */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3 items-center justify-center`}>
      <h4 className="flex items-center font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
        Our Mentors
      </h4>
    </div>
    {/* Center aligning the MentorCards component */}
    <div className=" ml-6 flex justify-center">
      <MentorCards />
    </div>
  </motion.footer>
);

export default MentorList;
