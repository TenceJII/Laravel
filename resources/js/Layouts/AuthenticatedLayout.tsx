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
import Header from "@/Components/Header";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
