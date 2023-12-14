import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head } from "@inertiajs/react";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

const LatinToJawa = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${searchTerm}`
            ); // Ganti dengan URL API yang sesuai
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (error) {
            setError("Terjadi kesalahan saat mengambil data");
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    console.log(data, null, 2);
    return (
        <div>
            <Head title={props.head} />
            <Menu home={true} auth={props.auth} />
            <div className="container mx-auto mt-20">
                <div className="w-full flex gap-5 flex-col items-center">
                    <div className="md:w-1/2 w-full h-screen">
                        <Header text="Kamus Bahasa Indonesia" />
                        <div className="flex gap-4">
                            <Input
                                size="sm"
                                type="text"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Masukkan kata kunci"
                            />
                            <Button
                                onClick={fetchData}
                                disabled={loading}
                                size="lg"
                            >
                                {loading ? "Memuat..." : "Cari"}
                            </Button>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {data && (
                            <div className="mt-5">
                                <h2 className="text-xl">lema: {data.lema}</h2>
                                <h2 className="text-xl mt-2">
                                    Arti: {data.arti}
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
export default LatinToJawa;
