import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import Footer from "@/Components/Footer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import classNames from "classnames";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const navbarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOut = (event: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOut);
        return () => {
            document.removeEventListener("mousedown", handleClickOut);
        };
    }, [navbarRef]);
    const user = usePage().props.auth.user;
    const currentUrl = usePage().url;
    useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const handleNavbar = (val: boolean) => {
        console.log(val);
        setIsOpen(val);
    };
    const closeNavbar = (val: boolean) => {
        console.log(val);
        setIsOpen(val);
    };
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const listNavigate = [
        { name: "HOME", to: "/home" },
        { name: "DASHBOARD", to: "/dashboard" },
        {
            name: "NEW,S",
            to: "/news",
        },
        { name: "FASHION", to: "/Fashion" },
        { name: "LOREM IDNs", to: "/Lorem IDNs" },
        { name: "LOREM Worlds", to: "/Lorem Worlds" },
    ];

    return (
        <div className="">
            <header className="z-20 w-full ">
                <div className="flex items-center justify-between w-full px-2 py-4 bg-white border-b border-black xl:px-16">
                    <div className="flex items-center lg:flex-col md:mx-auto gap-x-2">
                        <div className="block md:hidden ">
                            <Bars3Icon
                                onClick={() => handleNavbar(!isOpen)}
                                className="h-5"
                            />
                        </div>
                        <Link
                            href="/home"
                            className="text-xl font-semibold -tracking-widest md:text-6xl font-kaisei "
                        >
                            LOREM IPSUM
                        </Link>

                        <div className="hidden lg:block">
                            <div className="flex items-center font-semibold font-baskervville gap-x-4 ">
                                <div className="w-20  h-[1px]  bg-black "></div>
                                <p className="text-sm ">MAGAZINE</p>
                                <div className="w-20  h-[1px]  bg-black "></div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <UserIcon className="h-6 stroke-black fill-white" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border rounded-lg shadow-lg">
                                    <DropdownMenuLabel>
                                        <div className="flex items-center">
                                            <UserIcon className="h-5 stroke-black fill-white" />
                                            <span className="ml-2 text-black">
                                                {user.name}
                                            </span>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link
                                            href="/profile"
                                            className="block w-full font-baskervville"
                                        >
                                            Your Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link
                                            href="/settings"
                                            className="block w-full font-baskervville"
                                        >
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="block w-full text-left font-baskervville"
                                        >
                                            Sign Out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex gap-x-6">
                                <Link
                                    href={route("login")}
                                    className="text-xl font-kaisei hover:underline underline-offset-2 decoration-1"
                                >
                                    SIGN IN
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-xl font-kaisei hover:underline underline-offset-2 decoration-1"
                                >
                                    REGISTER
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden py-2 bg-white shadow-md md:block">
                    <div className="flex justify-center font-medium gap-x-9">
                        {listNavigate.map((item) =>
                            item.name === "NEW,S" ? (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => setIsNewsOpen(true)}
                                    onMouseLeave={() => setIsNewsOpen(false)}
                                >
                                    <Link
                                        href={item.to}
                                        className={classNames(
                                            currentUrl === item.to &&
                                                "border-b-2 border-black flex items-center"
                                        )}
                                        onClick={() => setIsNewsOpen(true)}
                                    >
                                        {item.name}
                                    </Link>

                                    {isNewsOpen && (
                                        <div className="absolute left-0 z-50 w-48 bg-white border border-black shadow-lg">
                                            <Link
                                                href="/news/latest"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Latest
                                            </Link>
                                            <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>

                                            <Link
                                                href="/news/sports"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Sports
                                            </Link>
                                            <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>

                                            <Link
                                                href="/news/entertainment"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Entertainment
                                            </Link>
                                            <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>

                                            <Link
                                                href="/news/technology"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Technology
                                            </Link>
                                            <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>

                                            <Link
                                                href="/news/technology"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                News
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    href={item.to}
                                    active={currentUrl === item.to}
                                    className={classNames(
                                        currentUrl === item.to
                                            ? "border-b-2 border-black"
                                            : "border-b-2 border-transparent"
                                    )}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        )}
                    </div>
                </div>

                <div className={`relative z-50 ${isOpen ? "block" : "hidden"}`}>
                    <div className="fixed inset-0 bg-slate-600 opacity-10"></div>
                    <nav
                        ref={navbarRef}
                        className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r "
                    >
                        <div className="flex mb-3 underline underline-offset-2">
                            <Link href="/" className="">
                                <span className="object-center text-xl font-medium tracking-wide bg-center bg-repeat drop-shadow-xl hover:drop-shadow-sm bg-clip-text">
                                    LOREM IPSUM
                                </span>
                            </Link>
                            <button
                                className="ml-auto"
                                onClick={() => closeNavbar(!isOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            {listNavigate.map((item) => (
                                <NavLink
                                    key={item.name}
                                    href={item.to}
                                    active={currentUrl === item.to}
                                    className={
                                        currentUrl === item.to
                                            ? "border-b-2 !border-black text-black"
                                            : "border-b-2 border-transparent"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-col pt-6 gap-y-6 ">
                                <Button>LOGIN</Button>
                                <Button>SIGN IN</Button>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span> © 2023 Tensei, Inc.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
}
