import CardBlog from "@/Components/CardBlog";
import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head, Link } from "@inertiajs/react";
import { Card, CardBody } from "@nextui-org/react";
import { Book } from "@phosphor-icons/react";

const BahasaIndonesia = (props) => {
    const data = props.artikel;
    return (
        <>
            <Head title={props.page} auth={props.auth} />
            <Menu home={true} />
            <div className="container mx-auto mt-20">
                <Header text="Tense Bahasa Inggris" />
                <div className="content grid grid-cols-3 gap-4 mt-5">
                    {data.map((data, i) => {
                        return (
                            <CardBlog
                                key={i}
                                title={data.title}
                                slug={data.slug}
                                img={data.image}
                                author={data.author}
                                kategori={data.kategori}
                                mapel={data.mapel}
                            />
                        );
                    })}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default BahasaIndonesia;
