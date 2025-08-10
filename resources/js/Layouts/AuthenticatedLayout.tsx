import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import React from "react";
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
    const user = usePage().props.auth.user;
    const currentUrl = usePage().url;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
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

    const listNavigate = [
        { name: "HOME", to: "/home" },
        { name: "DASHBOARD", to: "/dashboard" },
        { name: "NEW,S", to: "/news" },
        { name: "FASHION", to: "/Fashion" },
        { name: "LOREM IDNs", to: "/Lorem IDNs" },
        { name: "LOREM Worlds", to: "/Lorem Worlds" },
    ];

    return (
        <div className="">
            <header className=" z-20 w-full">
                <div className="flex items-center w-full px-2 py-4 bg-white border-b border-black xl:px-16">
                    <div className="flex items-center lg:flex-col md:mx-auto gap-x-2">
                        <div className="block md:hidden ">
                            <Bars3Icon
                                onClick={() => handleNavbar(!isOpen)}
                                className="h-5"
                            />
                        </div>
                        <Link
                            href="/home"
                            className="text-lg font-semibold tracking-widest md:text-3xl font-kaisei "
                        >
                            LOREM IPSUM
                        </Link>
                        <div className="block lg:hidden ">
                            <div className="flex items-center ">
                                <div className="absolute right-0 px-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="">
                                            <UserIcon className="h-5 stroke-black fill-white" />
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent className="bg-white border rounded-lg shadow-lg">
                                            <DropdownMenuLabel>
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <UserIcon className="h-5 stroke-black fill-white" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="leading-none text-black "></div>
                                                        <div className="text-xs leading-none text-gray-400 "></div>
                                                    </div>
                                                </div>
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <Link
                                                    href="/profile"
                                                    className="block w-full"
                                                >
                                                    Your Profile
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link
                                                    href="/settings"
                                                    className="block w-full"
                                                >
                                                    Settings
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="flex items-center gap-x-4 ">
                                <div className="w-20  h-[1px]  bg-black "></div>
                                <p className="text-sm ">MAGAZINE</p>
                                <div className="w-20  h-[1px]  bg-black "></div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block ">
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
                    </div>
                </div>
                <div className="hidden py-2 bg-white shadow-md md:block">
                    <div className="flex justify-center font-medium gap-x-9">
                        {listNavigate.map((item) => (
                            <NavLink
                                key={item.name}
                                href={item.to}
                                active={currentUrl === item.to}
                                className={
                                    currentUrl === item.to ? "text-black" : ""
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
}
