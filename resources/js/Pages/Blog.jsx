import CardBlog from "@/Components/CardBlog";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";

const Blog = () => {
    return (
        <>
            <Menu home={true} />
            <div className="container mx-auto">
                <CardBlog />
                <Footer />
            </div>
        </>
    );
};

export default Blog;
