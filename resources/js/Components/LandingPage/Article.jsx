import { Link } from "@inertiajs/react";
import CardBlog from "../CardBlog";

const Article = ({ artikel }, props) => {
    console.log(props);
    return (
        <section id="artikel ">
            <div className="pt-16">
                <header className="flex justify-between items-center">
                    <h3 className="text-2xl font-black mb-5">
                        Cek Artikel-artikel Mind-blowing Di Blog Ngambis
                    </h3>
                    <Link className="underline" href="/blog" as="button">
                        Lihat artikel lainya
                    </Link>
                </header>
                <div className="content flex gap-4 justify-center">
                    <CardBlog artikel={artikel} />
                </div>
            </div>
        </section>
    );
};

export default Article;
