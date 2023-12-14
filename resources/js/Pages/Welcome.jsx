"use client";

import Article from "@/Components/LandingPage/Article";
import Hero from "@/Components/LandingPage/Hero";
import ListMateri from "@/Components/LandingPage/ListMateri";
import Menu from "@/Components/LandingPage/Menu";
import Testimoni from "@/Components/LandingPage/Testimoni";
import Footer from "@/Components/LandingPage/Footer";
import { Link, Head } from "@inertiajs/react";
import { NextUIProvider } from "@nextui-org/system";
import { Container } from "postcss";

export default function Welcome(props) {
    return (
        <NextUIProvider>
            <div className="bg-color-bg">
                <Head title="Welcome" />
                <Menu home={false} auth={props.auth} />
                <div className="container mx-auto">
                    <Hero />
                    <ListMateri title="testing" />
                    <Article artikel={props.artikel} home={false} />
                    <Footer nama="Ngambis" />
                </div>
            </div>
        </NextUIProvider>
    );
}
