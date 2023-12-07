import { Link } from "@inertiajs/react";
import CardBlog from "../CardBlog";

const Article = ({ artikel }) => {
    return (
        <section id="artikel">
            <div className="pt-16">
                <header className="flex justify-between items-center">
                    <h3 className="text-2xl font-black mb-5">
                        Cek Artikel-artikel Mind-blowing Di Blog Ngambis
                    </h3>
                    <Link className="underline" href="/" as="button">
                        Lihat artikel lainya
                    </Link>
                </header>
                <div className="content flex gap-10">
                    {artikel.map((data, i) => {
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
        </section>
    );
};

export default Article;
