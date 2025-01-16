import React from "react";

const Model = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
      <section>
        <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[110px] sm:mt-[150px] ">
          <button
            className="text-white text-xl  place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white sm:text-[13px] text-[11px] p-2 rounded ">
            <p className="mx-[20px] py-[5px]">
              <ul className="list-disc">
                <li>1-Password Families 1-year plan worth USD 299 to each member</li>
                <li>Sublime Text/ Sublime Merge license worth USD 99 to each member</li>
                <li>Beeceptor credits worth USD 240</li>
                <li>Wolfram One personal edition 1-year subscription plus Wolfram Alpha Pro 1-year subscription to each member worth USD 375 each</li>
                <li>Free 3 Year Subscription to Taskade Starter Plan to each member: $1,800</li>
                <li>Free Async AI-driven mock interviews to each member : $100</li>
                <li>Free e-book from OReilly: $100</li>
                <li>20% off on all Taskade Subscriptions </li>
                <li>$10 flat discount on Interview Buddy Async AI-driven mock interview </li>
                <li>Free 30-day access to the full InterviewCake platform worth USD 10 each</li>
                <li>1-month access to the OReilly Learning Platform  worth USD 49 each</li>
                <li>20% off on all Rosenfeld 1 Month Echo 3D pro-tier subscription  worth USD 99 each</li>
                <li>30 Days Beeceptor Team Plan Access worth USD 25 </li>
                <li>$10 Verbwire Credits </li>
                <li>Free 1 year .xyz domains each</li>
              </ul>

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model;
