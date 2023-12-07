import CardBlog from "@/Components/CardBlog";
import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head, Link } from "@inertiajs/react";
import { Card, CardBody } from "@nextui-org/react";
import { Book } from "@phosphor-icons/react";

const BahasaJawa = (props) => {
    const data = props.artikel;
    return (
        <>
            <Head title={props.page} />
            <Menu home={true} auth={props.auth} />
            <div className="container mx-auto mt-20">
                <Header text="Materi bahasa Jawa" />
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
                <div className="mt-5">
                    <Header text="Fitur keren lainya" />
                </div>
                <Link href={route("materi.bahasajawa.kamus")}>
                    <Card className="bg-color-primary w-56 p-2 hover:shadow-xl transition-all">
                        <CardBody>
                            <div className="flex items-center gap-2 text-color-bg">
                                <Book size={32} />
                                <h3>Kamus bahasa jawa</h3>
                            </div>
                        </CardBody>
                    </Card>
                </Link>
                <Footer />
            </div>
        </>
    );
};

export default BahasaJawa;
