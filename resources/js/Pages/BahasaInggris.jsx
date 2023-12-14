import BackButton from "@/Components/BackButton";
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
            <Head title={props.head} />
            <Menu home={true} auth={props.auth} />
            <div className="container mx-auto mt-20">
                <BackButton />
                <Header text="Tense Bahasa Inggris" />
                <div className="content grid grid-cols-3 gap-4 mt-5">
                    <CardBlog artikel={data} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default BahasaIndonesia;
