"use client";

import { useCallback, useState } from "react";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
// Deleted 2 icons of team guideliness and event
const Navbar = () => {
  const router = useRouter();
  const openContactUs = () => {
    router.push("/Contact");
  };

  const openCPRegistration = () => {
    router.push("/communitypartner");
  };

  const openRegistration = () => {
    router.push("/evangelists");
  };

  const openMentorRegistration = () => {
    router.push("/mentorsreg");
  };
  const openMentorList = () => {
    router.push("/mentors");
  };

  // const openEvents = () => {
  //   router.push("/Event");
  // };

  // const openTeamGuidelines = () => {
  //   router.push("/Guidelines");
  // };

  const openFAQ = () => {
    router.push("/Faq");
  };

  const openHome = () => {
    router.push("/");
  };

  const [isopen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="flex flex-row fixed z-30 w-full  top-0 sm:pb-10 ">
      <div className=" w-[100%] top-0 z-30  flex justify-between bg-primary-black sm:h-[110px] h-[90px]">
        <div onClick={openHome} className="cursor-pointer transition">
          <img
            src="/mainlogo.png"
            alt="menu"
            className="md:w-[150px] w-[120px] object-contain mx-6 my-3 "
          />
        </div>

        <div className="flex gap-6 justify-around py-10 max-lg:hidden cursor-pointer ">
          <Link to="About" activeClass="active" offset={-100} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              About
            </h2>
          </Link>

          <Link to="Themes" activeClass="active" offset={-100} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Themes
            </h2>
          </Link>

          <Link to="Prizes" activeClass="active" offset={-80} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Prizes
            </h2>
          </Link>

          <Link to="Schedule" activeClass="active" offset={-100} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Schedule
            </h2>
          </Link>

          <Link to="Sponsors" activeClass="active" offset={-100} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Sponsors
            </h2>
          </Link>
          <a href="/mentors">
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Judges & Mentors
            </h2>
          </a>

          <Link to="Team" activeClass="active" offset={-100} duration={500}>
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              Team
            </h2>
          </Link>

          <a href="https://www.namespacecomm.in/">
            <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
              nameSpace
            </h2>
          </a>
        </div>

        {/* <div className="z-40">
          <a
            id="mlh-trust-badge"
            className="block max-w-[100px] sm:min-w-[90px] min-w-[60px] right-50 top-0 w-[10%] "
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg"
              alt="Major League Hacking 2024 Hackathon Season"
              className="w-[100%]"
            />
          </a>
        </div> */}

        <div
          onClick={toggleOpen}
          className="py-10 mx-3 cursor-pointer justify-center items-center "
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[30px] h-[30px] object-contain"
          />
          <div>
            {isopen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" w-[250px] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-14 right-5 z-40 "
              >
                <div className="flex flex-col items-center cursor-pointer">
                  {/* <p
                    onClick={openTeamGuidelines}
                    className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Team Guidelines
                    <FaTeamspeak />
                  </p>

                  <p
                    onClick={openEvents}
                    className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Events <MdEmojiEvents />
                  </p> */}

                  <p
                    onClick={openFAQ}
                    className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    FAQ <FaQuestion />
                  </p>

                  <p
                    onClick={openContactUs}
                    className="w-full justify-center px-4 py-2 flex  items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Contact Us <IoMdContacts />
                  </p>
                  <p
                    onClick={openMentorList}
                    className=" lg:hidden m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Judges & Mentors
                  </p>
                  <p
                    onClick={openCPRegistration}
                    className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Community Partners
                    <MdOutlineAppRegistration />
                  </p>
                  <p
                    onClick={openMentorRegistration}
                    className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Mentors Registration
                    <MdOutlineAppRegistration />
                  </p>
                  <p
                    onClick={openRegistration}
                    className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    Hackathon Evangelists
                    <MdOutlineAppRegistration />
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
