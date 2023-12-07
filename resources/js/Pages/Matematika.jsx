import CardBlog from "@/Components/CardBlog";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";

const Matematika = (props) => {
    const data = props.artikel;
    return (
        <div>
            <Menu home={true} auth={props.auth} />
            <div className="container mt-20 mx-auto">
                <header className="flex justify-between items-center">
                    <h3 className="text-2xl font-black mb-5">
                        Tips and trik mengerjakan soal matematika
                    </h3>
                </header>
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
        </div>
    );
};

export default Matematika;
