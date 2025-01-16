"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const CPRegistration = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
          Community Partner Registration
        </h4>
      </div>
    </div>

    <div style={{ marginTop: "50px" }}>
      <iframe
        title="Unique Title for Accessibility"
        src="https://lu.ma/embed-checkout/evt-t4HvA1JBHu0lPqY"
        width="100%"
        height="800"
        style={{
          border: "1px solid #bfcbda88",
          borderRadius: "24px",
          maxWidth: "", // Set maximum width if needed
          margin: "0 auto", // Center the iframe
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.9)", // Example box shadow
        }}
        allowfullscreen=""
        aria-hidden="false"
      />
    </div>
  </motion.footer>
);

export default CPRegistration;
