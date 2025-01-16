import { motion } from "framer-motion";
// import { TypingText } from "../components";
import { fadeIn } from "../utils/motion";

const Schedule = () => (
  <div id="Schedule" className="sm:mt-[-100px] md:mt-[-220px] lg:mt-[-260px]">
    {/* Using negative margin to fix the gap */}
    <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
      <div className="justify-center items-center w-full flex relative mt sm:mt-0">
        <img
          src="/SCHEDULE.png"
          alt=""
          className="w-full max-w-none"
          style={{
            transform: "scale(0.6)", // Scale down the image to 80%
            "@media (max-width: 768px)": { // Apply styles for small screens
              transform: "scale(1)", // Scale the image to 100%
            },
            "@media (max-width: 1024px)": { // Apply styles for medium screens
              transform: "scale(0.8)", // Scale the image to 80%
            },
          }}
        />
      </div>
    </motion.div>
  </div>
);

export default Schedule;
