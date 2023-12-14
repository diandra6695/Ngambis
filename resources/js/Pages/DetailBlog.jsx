import BackButton from "@/Components/BackButton";
import CardHome from "@/Components/CardHome";
import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head } from "@inertiajs/react";
import { Button, Image } from "@nextui-org/react";
import { ArrowLeft } from "@phosphor-icons/react";

function formatDateIndonesia(tanggal) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
    };

    return tanggal.toLocaleDateString("id-ID", options);
}

const DetailBlog = (props) => {
    const data = props.artikel[0];
    const htmlContent = data.description;
    const moreArtikel = props.moreArtikel;
    const tanggalUTC = new Date(data.created_at);

    return (
        <>
            <Head title={props.page} />
            <Menu home={true} auth={props.auth} />
            <div className="container mt-20 mx-auto">
                <BackButton />
                <div className="flex justify-center items-center">
                    <div className="w-9/12 flex flex-col gap-5">
                        <header className="flex flex-col gap-2">
                            <h3 className="text-4xl font-bold">{data.title}</h3>
                            <p>{formatDateIndonesia(tanggalUTC)}</p>
                            <div className="flex justify-between text-sm">
                                <p className="">
                                    By{" "}
                                    <span className="font-bold">
                                        {data.author}
                                    </span>
                                </p>
                                <p>
                                    Kategori:{" "}
                                    <span className="font-bold">
                                        {data.kategori}, {data.mapel}
                                    </span>
                                </p>
                            </div>
                        </header>
                        <div className="banner">
                            <Image
                                isBlurred
                                radius="lg"
                                alt="artikel"
                                src={`../../../storage/artikel/${data.image}`}
                            />
                        </div>
                        <article
                            className="mt-5"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <Header text="Artikel lainya" />
                    <div className="content flex gap-4">
                        <CardHome artikel={moreArtikel} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default DetailBlog;
