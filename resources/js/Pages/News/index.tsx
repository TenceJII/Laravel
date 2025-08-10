import React from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import image13 from "@/assets/image13.png";
import image4 from "@/assets/image4.png";
import image14 from "@/assets/image14.png";
export default function News() {
    return (
        <Authenticated>
            <section>
                <div className="py-6 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 ">
                    <div className="lg:my-8 my-4 lg:block hidden">
                        <img src={image11} alt="" />
                    </div>
                    <div className="flex flex-col lg:flex-row z-10">
                        <div className="w-full order-2 lg:order-1 lg:w-1/2">
                            <div className="flex flex-col justify-center items-center h-full ">
                                <div className="mx-auto md:max-w-2xl ">
                                    <p className="lg:text-4xl text-2xl font-baskervville font-semibold mb-4 ">
                                        What is Lorem Ipsum?{" "}
                                        <br className="hidden lg:block" /> Lorem
                                        Ipsum is simply
                                    </p>
                                    <p className="text-md font-baskervville mb-4">
                                        Lorem Ipsum is simply{" "}
                                        <br className="hidden lg:block" /> dummy
                                        text of the printing and{" "}
                                        <br className="hidden lg:block" />{" "}
                                        typesetting industry. Lorem Ipsum has
                                        been <br className="hidden lg:block" />{" "}
                                        the industry's standard dummy text ever
                                        since the 1500s,
                                    </p>
                                    <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville underline underline-offset-1">
                                        BY MONALISA MORALLES
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-full order-1 lg:order-2 lg:w-1/2">
                            <img src={image12} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 mx-auto max-w-7xl px-4">
                <div className="md:block hidden">
                    <div className="grid grid-cols-12  py-3">
                        <div className="col-start-1 col-end-7">
                            <img src={image13} alt="" />
                        </div>
                        <div className="col-start-7 col-end-13">
                            <div className="text-6xl font-baskervville font-semibold">
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy
                                text of the
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto  mb-5  h-[1px] bg-[#401D01] "></div>
                <h2 className="text-4xl tracking-[-0.1em] font-semibold font-ArchivoBlack">
                    NEWS PAPERS
                </h2>
                <div className="lg:grid lg:grid-cols-12 gap-2 py-6">
                    <div className="col-start-1 col-end-6">
                        <div className="flex flex-col">
                            <img src={image4} alt="" />
                            <h1 className="text-2xl font-baskervville ">
                                <span className="italic">Consectetur </span>{" "}
                                elit. Curabitur eget{" "}
                                <span className="block ">
                                    {" "}
                                    vehicula{" "}
                                    <span className="font-semibold">
                                        {" "}
                                        ipsum.
                                    </span>
                                </span>
                            </h1>
                            <p className="mt-5 font-baskervville">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                                Donec tempus venenatis ante, vel vestibulum dui
                                suscipit vitae. Praesent imperdiet convallis
                                felis vitae malesuada. Phasellus a facilisis
                                lectus.
                            </p>
                            <div className="flex items-center mt-5">
                                <p className="w-full text-xs italic">
                                    From : Maira /6/21/2024
                                </p>
                                <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-6 col-end-7 flex justify-center">
                        <div className="w-[1px] h-full bg-gray-400"></div>
                    </div>

                    <div className="col-start-7 col-end-10">
                        <div className="flex flex-col">
                            <img src={image14} alt="" />
                            <h1 className="text-2xl font-baskervville ">
                                <span className="italic">Consectetur </span>{" "}
                                elit. Curabitur eget{" "}
                                <span className="block ">
                                    {" "}
                                    vehicula{" "}
                                    <span className="font-semibold">
                                        {" "}
                                        ipsum.
                                    </span>
                                </span>
                            </h1>
                            <p className="mt-5 font-baskervville">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                                Donec tempus venenatis ante, vel vestibulum dui
                                suscipit vitae. Praesent imperdiet convallis
                                felis vitae malesuada. Phasellus a facilisis
                                lectus.
                            </p>
                            <div className="flex items-center mt-5">
                                <p className="w-full text-xs italic">
                                    From : Maira /6/21/2024
                                </p>
                                <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-10 col-end-11 flex justify-center">
                        <div className="w-[1px] h-full bg-gray-400"></div>
                    </div>
                    <div className="col-start-11 col-end-13">
                        <div className="py-2">
                            <img src={image14} alt="" />
                            <p className="mt-5 font-baskervville text-justify">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                            </p>
                            <div className="flex items-center mt-5">
                                <p className="w-full text-xs italic">
                                    From : Maira /6/21/2024
                                </p>
                                <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                            </div>
                        </div>
                        <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                        <div className="py-2">
                            <img src={image14} alt="" />
                            <p className="mt-5 font-baskervville text-justify">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                            </p>
                            <div className="flex items-center mt-5">
                                <p className="w-full text-xs italic">
                                    From : Maira /6/21/2024
                                </p>
                                <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}
