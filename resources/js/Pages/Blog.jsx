import CardBlog from "@/Components/CardBlog";
import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import Paginator from "@/Components/Paginator";
import SearchBlog from "@/Components/SearchBlog";
import { PaginationItemType } from "@nextui-org/react";

const Blog = (props) => {
    console.log(props);

    return (
        <>
            <Menu home={true} auth={props.auth} />
            <div className="container mt-20 mx-auto">
                <Header text="Blog" />
                <SearchBlog
                    artikel={props.artikel.data}
                    fullartikel={props.artikelFull}
                />
                <div className="flex justify-center items-center">
                    <Paginator meta={props.artikel} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Blog;
