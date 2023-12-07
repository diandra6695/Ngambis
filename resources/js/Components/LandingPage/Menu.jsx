"use client";
import { Link } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Tooltip,
} from "@nextui-org/react";

const Menu = (props) => {
    return (
        <Navbar
            shouldHideOnScroll
            isBordered
            className="fixed bg-color-bg h-14"
        >
            <NavbarBrand>
                <Link href="/" className="">
                    <img className="w-28" src="../../../assets/img/logo.svg" />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {!props.home ? (
                    <>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href="/"
                            >
                                Beranda
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href="#materi"
                            >
                                Materi
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href={route("home")}
                            >
                                Materi Belajar
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href={route("blog")}
                            >
                                Artikel
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href="#kontak"
                            >
                                Kontak
                            </Link>
                        </NavbarItem>
                    </>
                ) : (
                    <>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href="/"
                            >
                                Beranda
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href={route("home")}
                            >
                                Materi Belajar
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link
                                className=" text-sm"
                                color="foreground"
                                href={route("blog")}
                            >
                                Artikel
                            </Link>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
            <NavbarContent justify="end">
                {props.auth.user ? (
                    <>
                        <Tooltip
                            content="menuju ke dashboard"
                            className="border bg-color-bg px-2"
                        >
                            <NavbarItem>
                                <Button
                                    as={Link}
                                    color="primary"
                                    href="/dashboard"
                                    variant="flat"
                                >
                                    Dashboard
                                </Button>
                            </NavbarItem>
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Link href="/login">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="/register"
                                variant="flat"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
};

export default Menu;
