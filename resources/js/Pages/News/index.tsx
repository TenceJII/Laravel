import React from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import image13 from "@/assets/image13.png";
import image4 from "@/assets/image4.png";
import image14 from "@/assets/image14.png";
import image15 from "@/assets/image15.png";
import image16 from "@/assets/image16.png";
import image17 from "@/assets/image17.png";
export default function News() {
    return (
        <Authenticated>
            <section>
                <div className="container px-3 py-6 mx-auto sm:px-6 lg:px-8 ">
                    <div className="hidden my-4 lg:my-8 lg:block">
                        <img src={image11} alt="" />
                    </div>
                    <div className="z-10 flex flex-col lg:flex-row">
                        <div className="order-2 w-full lg:order-1 lg:w-1/2">
                            <div className="flex flex-col items-center justify-center h-full ">
                                <div className="mx-auto md:max-w-2xl ">
                                    <p className="mb-4 text-2xl font-semibold lg:text-4xl font-baskervville ">
                                        What is Lorem Ipsum?{" "}
                                        <br className="hidden lg:block" /> Lorem
                                        Ipsum is simply
                                    </p>
                                    <p className="mb-4 text-md font-baskervville">
                                        Lorem Ipsum is simply{" "}
                                        <br className="hidden lg:block" /> dummy
                                        text of the printing and{" "}
                                        <br className="hidden lg:block" />{" "}
                                        typesetting industry. Lorem Ipsum has
                                        been <br className="hidden lg:block" />{" "}
                                        the industry's standard dummy text ever
                                        since the 1500s,
                                    </p>
                                    <h2 className="text-sm tracking-widest underline md:mt-5 md:text-base font-baskervville underline-offset-1">
                                        BY MONALISA MORALLES
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 w-full lg:order-2 lg:w-1/2">
                            <img src={image12} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container px-4 py-6 mx-auto">
                <div className="hidden md:block">
                    <div className="grid grid-cols-12 py-3">
                        <div className="col-start-1 col-end-7">
                            <img src={image13} alt="" />
                        </div>
                        <div className="col-start-7 col-end-13">
                            <div className="text-6xl font-semibold font-baskervville">
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy
                                text of the
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto  mb-5  h-[1px] bg-[#401D01] "></div>
                <h2 className="text-4xl tracking-[-0.1em] font-semibold font-ArchivoBlack">
                    NEWS PAPERS
                </h2>
                <div className="gap-2 py-6 lg:grid lg:grid-cols-12">
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

                    <div className="flex justify-center col-start-6 col-end-7">
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
                    <div className="flex justify-center col-start-10 col-end-11">
                        <div className="w-[1px] h-full bg-gray-400"></div>
                    </div>
                    <div className="col-start-11 col-end-13">
                        <div className="py-2">
                            <img src={image14} alt="" />
                            <p className="mt-5 text-justify font-baskervville">
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
                            <p className="mt-5 text-justify font-baskervville">
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
            <section className="container px-4 py-6 mx-auto">
                <div className=" mb-5  h-[1px] bg-[#401D01] "></div>
                <h2 className="text-4xl tracking-[-0.1em] font-semibold font-ArchivoBlack underline underline-offset-1">
                    MOST POPULAR
                </h2>
                <div className="py-3 lg:grid lg:grid-cols-12 lg:gap-x-9 gap-x-2">
                    <div className="col-start-1 col-end-7 ">
                        <div className="flex flex-col justify-center lg:flex-row">
                            <div className="order-2 px-2 lg:order-1">
                                <h1 className="text-2xl font-baskervville ">
                                    <span className="italic">Consectetur </span>{" "}
                                    elit. Curabitur eget vehicula ipsum.
                                </h1>
                                <p className="mt-5 text-justify font-baskervville">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                </p>
                                <div className="flex items-center mt-5">
                                    <p className="w-full text-xs italic">
                                        From : Maira /6/21/2024
                                    </p>
                                    <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                                </div>
                            </div>
                            <div className="relative order-1 w-full h-full lg:order-2">
                                <img src={image15} alt="" />
                            </div>
                        </div>
                        <div className="flex-col py-7">
                            <div className=" lg:flex">
                                <div className="relative w-full ">
                                    <img src={image16} alt="" />
                                </div>
                                <div className="lg:px-5">
                                    <h1 className="text-2xl font-medium lg:text-4xl font-baskervville ">
                                        Consectetur elit. Curabitur eget
                                        vehicula ipsum. sectetur Curabi
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <p className="mt-5 text-justify font-baskervville">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    imperdiet convallis felis vitae malesuada.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    imperdiet convallis felis vitae malesuada.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-7 col-end-13">
                        <div className="flex flex-col">
                            <img className="" src={image17} alt="" />
                            <div>
                                <div className="flex items-center mt-5">
                                    <p className="w-full text-xs italic underline underline-offset-1">
                                        Watch Video
                                    </p>
                                    <div className="w-full lg:mt-0 h-[1px] bg-[#401D01]"></div>
                                </div>
                                <h1 className="text-2xl font-baskervville ">
                                    <span className="italic">Consectetur </span>{" "}
                                    elit. Curabitur eget vehicula ipsum.
                                </h1>
                                <p className="mt-5 text-justify font-baskervville">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                </p>
                                <div className="flex items-center mt-5">
                                    <p className="w-full text-xs italic">
                                        From : Maira /6/21/2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}
