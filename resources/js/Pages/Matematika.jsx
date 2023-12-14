import BackButton from "@/Components/BackButton";
import CardHome from "@/Components/CardHome";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head } from "@inertiajs/react";

const Matematika = (props) => {
    const data = props.artikel;
    return (
        <div>
            <Head title={props.head} />
            <Menu home={true} auth={props.auth} />
            <div className="container mt-20 mx-auto">
                <BackButton />
                <header className="flex justify-between items-center">
                    <h3 className="text-2xl font-black mb-5">
                        Tips and trik mengerjakan soal matematika
                    </h3>
                </header>
                <div className="content grid grid-cols-3 gap-4 mt-5">
                    <CardHome artikel={data} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Matematika;
