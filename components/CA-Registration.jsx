"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Registration = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings}  relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-3`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
          Hackathon Evangelist Registration
        </h4>
      </div>
    </div>

    <div style={{ marginTop: "50px" }}>
      <iframe
        title="Unique Title for Accessibility"
        src="https://lu.ma/embed-checkout/evt-k8KjynXVBVWKWWZ"
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

    {/* for large devices */}
    {/* <div className="w-[60vw] mx-auto py-5 hidden md:flex">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="name" className={`${styles.labels}`}>
                First Name:
              </label>
              <br />
              <input
                type="text"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                placeholder="First Name"
                className={`${styles.input}`}
                name="name"
                id="name"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="name" className={`${styles.labels}`}>
                Last Name:
              </label>
              <br />
              <input
                type="text"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
                placeholder="Last Name"
                className={`${styles.input}`}
                name="name"
                id="name"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="email" className={`${styles.labels}`}>
                Email:
              </label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Email id"
                className={`${styles.input}`}
                name="email"
                id="email"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="phoneNumber" className={`${styles.labels}`}>
                Contact:
              </label>
              <br />
              <input
                type="phone"
                value={contactNumber}
                onChange={(ev) => setContactNumber(ev.target.value)}
                placeholder="Phone Number "
                className={`${styles.input}`}
                name="phoneNumber"
                id="phoneNumber"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="College" className={`${styles.labels}`}>
                Community Name:
              </label>
              <br />
              <input
                type="text"
                value={community}
                onChange={(ev) => setCommunity(ev.target.value)}
                placeholder="Community Name"
                className={`${styles.input}`}
                name="College"
                id="College"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="CollegeCity" className={`${styles.labels}`}>
                Designation in Community:
              </label>
              <br />
              <input
                type="text"
                value={designation}
                onChange={(ev) => setDesignation(ev.target.value)}
                placeholder="Designation"
                className={`${styles.input}`}
                name="CollegeCity"
                id="CollegeCity"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="Branch" className={`${styles.labels}`}>
                Strength of Community:
              </label>
              <br />
              <input
                type="text"
                value={strength}
                onChange={(ev) => setStrength(ev.target.value)}
                placeholder="Strength"
                className={`${styles.input}`}
                name="Branch"
                id="Branch"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="Batch" className={`${styles.labels}`}>
                Community's Logo Link:
              </label>
              <br />
              <input
                type="text"
                value={logoLink}
                onChange={(ev) => setLogoLink(ev.target.value)}
                placeholder="Logo"
                className={`${styles.input}`}
                name="Batch"
                id="Batch"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="LinkedIn" className={`${styles.labels}`}>
                Community's LinkedIn:
              </label>
              <br />
              <input
                type="text"
                value={linkdin}
                onChange={(ev) => setLinkdin(ev.target.value)}
                placeholder="LinkeIn Id "
                className={`${styles.input}`}
                name="LinkedIn"
                id="LinkedIn"
              />
            </div>

            <div className={`${styles.mb3}`}>
              <label htmlFor="Instagram" className={`${styles.labels}`}>
                Community's Instagram:
              </label>
              <br />
              <input
                type="text"
                value={instagram}
                onChange={(ev) => setInstagram(ev.target.value)}
                placeholder="Instagram Id "
                className={`${styles.input}`}
                name="Instagram"
                id="Instagram"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className={`${styles.mb3}`}>
              <label htmlFor="Github" className={`${styles.labels}`}>
                Community's Github:
              </label>
              <br />
              <input
                type="text"
                value={github}
                onChange={(ev) => setGithub(ev.target.value)}
                placeholder="Github Link "
                className={`${styles.input}`}
                name="Github"
                id="Github"
              />
            </div>
            <div className={`${styles.mb3}`}>
              <label htmlFor="Twitter" className={`${styles.labels}`}>
                Community's Twitter:
              </label>
              <br />
              <input
                type="text"
                value={twitter}
                onChange={(ev) => setTwitter(ev.target.value)}
                placeholder="Twitter Link "
                className={`${styles.input}`}
                name="Twitter"
                id="Twitter"
              />
            </div>
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              How many registrations we can expect from your
            </label>
            <br />
            <label htmlFor="answers" className={`${styles.labels}`}>
              community?
            </label>
            <br />
            <input
              type="text"
              value={registrations}
              onChange={(ev) => setRegistrations(ev.target.value)}
              placeholder="No of Registrations "
              className="mt-[5px] mx-[15px] w-[52vw]  bg-[#25618B] h-[6vh] p-3  lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded"
              name="Twitter"
              id="Twitter"
            />
          </div>
          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              What are you expecting from hackathon for your
            </label>
            <br />
            <label htmlFor="answers" className={`${styles.labels}`}>
              Community?
            </label>
            <br />
            <textarea
              className="mt-[5px] mx-[15px] min-h-[30vh] min-w-[52vw] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
              placeholder="Expectations "
              value={expectations}
              onChange={(ev) => setExpectations(ev.target.value)}
              name="answers"
              id="answers"
            />
          </div>

          <button
            type="submit"
            className="bg-[#25618B] rounded-[10px] p-2 m-2 hover:bg-white hover:text-black mx-[15px] font-semibold lg:text-[25px] md:text-[15px] sm:text-[8px] text-[15px] text-white"
          >
            Submit
          </button>
        </form>
      </div> */}

    {/* for small devices */}
    {/* <div className="w-[90vw] mx-[10px] py-5 flex-col md:hidden">
        <form onSubmit={handleSubmit}>
          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              First Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(ev) => setFirstName(ev.target.value)}
              className={`${styles.inputS}`}
              name="name"
              id="name"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              Last Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(ev) => setLastName(ev.target.value)}
              className={`${styles.inputS}`}
              name="name"
              id="name"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="email" className={`${styles.labels}`}>
              Email:
            </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Email id"
              className={`${styles.inputS}`}
              name="email"
              id="email"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="phoneNumber" className={`${styles.labels}`}>
              Contact:
            </label>
            <br />
            <input
              type="phone"
              value={contactNumber}
              onChange={(ev) => setContactNumber(ev.target.value)}
              placeholder="Phone Number "
              className={`${styles.inputS}`}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="College" className={`${styles.labels}`}>
              Community Name:
            </label>
            <br />
            <input
              type="text"
              value={community}
              onChange={(ev) => setCommunity(ev.target.value)}
              placeholder="Community Name"
              className={`${styles.inputS}`}
              name="College"
              id="College"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="CollegeCity" className={`${styles.labels}`}>
              Your designation in Community:
            </label>
            <br />
            <input
              type="text"
              value={designation}
              onChange={(ev) => setDesignation(ev.target.value)}
              placeholder="Designation "
              className={`${styles.inputS}`}
              name="CollegeCity"
              id="CollegeCity"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Branch" className={`${styles.labels}`}>
              Strength of Community:
            </label>
            <br />
            <input
              type="text"
              value={strength}
              onChange={(ev) => setStrength(ev.target.value)}
              placeholder="Strength"
              className={`${styles.inputS}`}
              name="Branch"
              id="Branch"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Batch" className={`${styles.labels}`}>
              Community's Logo Link:
            </label>
            <br />
            <input
              type="text"
              value={logoLink}
              onChange={(ev) => setLogoLink(ev.target.value)}
              placeholder="Logo"
              className={`${styles.inputS}`}
              name="Batch"
              id="Batch"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="LinkedIn" className={`${styles.labels}`}>
              Community LinkedIn:
            </label>
            <br />
            <input
              type="text"
              value={linkdin}
              onChange={(ev) => setLinkdin(ev.target.value)}
              placeholder="LinkeIn Id "
              className={`${styles.inputS}`}
              name="LinkedIn"
              id="LinkedIn"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Instagram" className={`${styles.labels}`}>
              Community's Instagram:
            </label>
            <br />
            <input
              type="text"
              value={instagram}
              onChange={(ev) => setInstagram(ev.target.value)}
              placeholder="Instagram Id "
              className={`${styles.inputS}`}
              name="Instagram"
              id="Instagram"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="Github" className={`${styles.labels}`}>
              Community's Github:
            </label>
            <br />
            <input
              type="text"
              value={github}
              onChange={(ev) => setGithub(ev.target.value)}
              placeholder="Github Link "
              className={`${styles.inputS}`}
              name="Github"
              id="Github"
            />
          </div>
          <div className={`${styles.mb3}`}>
            <label htmlFor="Twitter" className={`${styles.labels}`}>
              Community's Twitter:
            </label>
            <br />
            <input
              type="text"
              value={twitter}
              onChange={(ev) => setTwitter(ev.target.value)}
              placeholder="Twitter Link "
              className={`${styles.inputS}`}
              name="Twitter"
              id="Twitter"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              How many registrations we can expect from your Community?
            </label>
            <br />

            <input
              type="text"
              value={registrations}
              onChange={(ev) => setRegistrations(ev.target.value)}
              placeholder="No of Registrations "
              className={`${styles.inputS}`}
              name="Twitter"
              id="Twitter"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="answers" className={`${styles.labels}`}>
              What are you expecting from hackathon for your Community?
            </label>
            <br />

            <textarea
              className="mt-[5px] mx-[15px] min-h-[30vh] w-[80%] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
              value={expectations}
              onChange={(ev) => setExpectations(ev.target.value)}
              placeholder="Expectations "
              name="answers"
              id="answers"
            />
          </div>

          <button
            type="submit"
            className="bg-[#25618B] rounded-[10px] p-2 m-2 hover:bg-white hover:text-black mx-[15px] font-semibold lg:text-[25px] md:text-[15px] sm:text-[8px] text-[15px] text-white"
          >
            Submit
          </button>
        </form>
      </div> */}
  </motion.footer>
);

export default Registration;
