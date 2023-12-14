import Header from "@/Components/Header";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head, Link } from "@inertiajs/react";

const About = (props) => {
    return (
        <div className="">
            <Head title="about" />
            <div className="container mx-auto mt-20">
                <Menu home={false} auth={props.auth} />
                <div className="flex flex-col gap-5 items-center">
                    <Header text="About" />
                    <Link href="/" className="">
                        <img
                            className="w-56"
                            src="../../../assets/img/logo.svg"
                        />
                    </Link>
                    <div className="w-1/2 flex flex-col gap-5">
                        <p>
                            Ngambis adalah platform pembelajaran daring yang
                            menyediakan berbagai macam blog tutorial. Ini adalah
                            platform berbasis situs web yang memungkinkan
                            pengguna mengakses konten dari mana saja. Ngambis
                            bertujuan untuk memberikan pengalaman belajar yang
                            interaktif dan menarik bagi penggunanya.
                        </p>
                        <p>
                            Ngambis berasal dari kata ambisius, diharapkan orang
                            yang menggunakan platform ngambis dapat belajar
                            dengan semangat serta ambisius yang tinggi
                        </p>
                        <p>
                            Filosofi logo Ngambis didasarkan pada konsep belajar
                            yang menyenangkan dan mudah diakses. Logo Ngambis
                            terdiri dari lingkaran hitam dengan lipatan kertas
                            di dalamnya, yang melambangkan kecerdasan dan
                            kemampuan belajar. Nama “Ngambis” ditulis dengan
                            huruf tebal dan tanpa serif, yang menunjukkan
                            kesederhanaan dan kemudahan dalam belajar.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;
