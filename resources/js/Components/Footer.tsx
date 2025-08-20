import React from "react";

import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Input } from "./ui/input";
import { Bars3Icon } from "@heroicons/react/24/solid";
import classNames from "classnames";

export default function Footer() {
    return (
        <footer className="w-full text-white bg-black py-9">
            <div className="w-full px-3 mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 ">
                    <div className="col-end-6 lg:col-start-2">
                        <div className="my-5 md:my-8">
                            <h1 className="text-4xl font-medium font-kaisei ">
                                LOREM IPSUM
                            </h1>
                        </div>
                        <div>
                            <p className="text-base text-justify">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here
                            </p>
                        </div>
                        <div className="flex flex-col py-8">
                            <label htmlFor="email" className="">
                                Email
                            </label>
                            <Input></Input>
                        </div>
                    </div>
                    <div className="col-start-7 col-end-9">
                        <div className="my-5 md:my-8">
                            <h1 className="text-base font-semibold tracking-widest underline underline-offset-1">
                                ABOUT US
                            </h1>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="hover:underline underline-offset-1">
                                <Link href="https://portofolio-me-seven.vercel.app/">
                                    Portopholio
                                </Link>
                            </div>
                            <div className="hover:underline underline-offset-1">
                                <Link href="">Program Us</Link>
                            </div>
                            <div className="hover:underline underline-offset-1">
                                <Link href="">Privacy Policy</Link>
                            </div>
                            <div className="hover:underline underline-offset-1">
                                <Link href="">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-9 col-end-11">
                        <div className="">
                            <div className="my-5 md:my-8">
                                <h1 className="text-base tracking-widest underline font-semibol underline-offset-1">
                                    {" "}
                                    SERVICE
                                </h1>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <div className="hover:underline underline-offset-1">
                                    <Link href="">Contact Us</Link>
                                </div>
                                <div className="hover:underline underline-offset-1">
                                    <Link href="">Help</Link>
                                </div>{" "}
                                <div className="hover:underline underline-offset-1">
                                    <Link href="">Status Order</Link>
                                </div>{" "}
                                <div className="hover:underline underline-offset-1">
                                    <Link href="">Email</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
