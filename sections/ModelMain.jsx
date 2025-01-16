import React from "react";

const ModelSolana = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>


                                <li>$500 for the best advanced project that is almost ready for full-time development</li>
                                <li>$250 for the best project that goes into depth, demonstrating higher-order code</li>
                                <li>$100 for the best project for beginners just starting out on Solana</li>
                            </ul>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelPolygon = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>


                                <li>Best hack built on Ethereum + Polygon: $200</li>
                                <li>Best hack built on Ethereum: $150</li>

                            </ul>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelTezos = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li>   1st Prize to the Best Project Built on Tezos: $150 </li>
                                <li> 2nd Prize to the Best Project Built on Tezos: $100 </li>
                                <li> 3rd Prize to the Best Project Built on Tezos: $50 </li>
                                <li>Top 5 Projects among the rest of the projects built on Tezos - 40 USD each: $200</li>

                            </ul>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelReplit = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li> Winning Project deployed on Replit: $50 </li>


                            </ul>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelQuill = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li> Some selected projects would be eligible to receive free or discounted auditing from Quill Audits up to a maximum pool of 2,000 USD
                                </li>


                            </ul>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelGen = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li>20% off on all Taskade Subscriptions</li>
                                <li>$10 flat discount on Interview Buddy Async AI-driven mock interview</li>
                                <li>Free 30-day access to the full InterviewCake platform (worth USD 10)</li>
                                <li>1-month access to the OReilly Learning Platform (worth USD 49)</li>
                                <li>20% off on all Rosenfeld purchases</li>
                                <li>1 Month Echo 3D pro-tier subscription (worth USD 99)</li>
                                <li>30 Days Beeceptor Team Plan Access (worth USD 25)</li>
                                <li>$10 Verbwire Credits</li>
                                <li>Free 1 year .xyz domains (worth USD 10 each)</li>
                            </ul>


                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ModelXX = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li>  $250 to the best project using XX network’s integrations</li>
                                <li>$150 to the second-best project using XX network’s integrations</li>
                                <li>$100 to the third-best project using XX network’s integrations</li>

                            </ul>


                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
const ModelVerb = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[15]">
            <section>
                <div className="lg:w-[50vw] w-[90vw] flex flex-col lg:mt-[50px] sm:mt-[150px] ">
                    <button
                        className="text-white text-xl  place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white sm:text-[18px] text-[11px] p-2 rounded ">
                        <p className="mx-[20px] py-[5px]">
                            <ul className='list-disc'>
                                <li>Most innovative project using verbwire will receive $45 worth of verbwire credits</li>
                            </ul>


                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};


export { ModelSolana, ModelPolygon, ModelTezos, ModelReplit, ModelQuill, ModelGen, ModelXX, ModelVerb };
