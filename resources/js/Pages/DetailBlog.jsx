import CardBlog from "@/Components/CardBlog";
import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Image } from "@nextui-org/react";

const DetailBlog = (props) => {
    const data = props.artikel[0];
    const htmlContent = data.description;
    const moreArtkel = props.moreArtikel;
    console.log(moreArtkel);
    return (
        <>
            <Menu home={true} auth={props.auth} />
            <div className="container mt-20 mx-auto">
                <div className="flex justify-center items-center">
                    <div className="w-9/12 flex flex-col gap-5">
                        <header>
                            <h3 className="text-4xl font-bold">{data.title}</h3>
                            <p className="">
                                By{" "}
                                <span className="font-bold">{data.author}</span>
                            </p>
                            <p>{data.created_at}</p>
                        </header>
                        <div className="banner">
                            <Image
                                isBlurred
                                radius="none"
                                alt="artikel"
                                src={`../../../storage/artikel/${data.image}`}
                            />
                        </div>
                        <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <Header text="Artikel lainya" />
                    <div className="content flex gap-10">
                        {moreArtkel.map((data, i) => {
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
                </div>
                <Footer />
            </div>
        </>
    );
};

export default DetailBlog;
