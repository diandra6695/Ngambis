"use client";
import Banner from "@/Components/Banner";
import Info from "@/Components/Info";
import Article from "@/Components/LandingPage/Article";
import Footer from "@/Components/LandingPage/Footer";
import ListMateri from "@/Components/LandingPage/ListMateri";
import Menu from "@/Components/LandingPage/Menu";
import { Link, Head } from "@inertiajs/react";
import { CircularProgress, NextUIProvider } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";

const Homepage = (props) => {
    const [records, setRecords] = useState([]);
    const url = "https://harli.mgkusumaputra.me/api/nearest";
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
            <NextUIProvider>
                <Head title={props.head} />
                <Menu home={true} auth={props.auth} />
                <div className="container mx-auto">
                    <Banner />
                    <ListMateri />
                    <CircularProgress
                        color="primary"
                        size="md"
                        aria-label="Loading..."
                    />
                    <Info data={data} />
                    <Article artikel={props.artikel} home={true} />
                    <Footer />
                </div>
            </NextUIProvider>
        </>
    );
};

export default Homepage;
