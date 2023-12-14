import { EnvelopeSimple, Phone } from "@phosphor-icons/react";

const Footer = (props) => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <section id="kontak">
            <div className="my-10">
                <div className=" border-t-2 flex flex-col gap-8 bg-color-gray p-8 text-white rounded-[2.5rem]">
                    <div className="content mt-10 flex justify-between text-sm">
                        <div className="">
                            <img
                                className="w-28"
                                src="../../../assets/img/logoPutih.svg"
                            />
                        </div>
                        <div className="list-none flex flex-col gap-2">
                            <header className="font-bold text-lg">Blog</header>
                            <li>
                                <a href="">Materi Pelajaran</a>
                            </li>
                            <li>
                                <a href="">Artikel</a>
                            </li>
                        </div>
                        <div className="list-none flex flex-col gap-2">
                            <header className="font-bold text-lg">
                                Tentang Kami
                            </header>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Testimonial</a>
                            </li>
                        </div>
                        <div className="list-none flex flex-col gap-2">
                            <header className="font-bold text-lg">
                                Hubungi Kami
                            </header>
                            <li>
                                <a href="" className="flex items-center gap-2 ">
                                    <span className="bg-white rounded-full text-black p-1">
                                        <EnvelopeSimple size={20} />
                                    </span>{" "}
                                    support@ngambis.com
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center gap-2">
                                    <span className="bg-white rounded-full text-black p-1">
                                        <Phone size={20} />
                                    </span>{" "}
                                    +62 812-2980-0145
                                </a>
                            </li>
                        </div>
                    </div>
                    <div className="flex justify-center text-sm">
                        <p>&copy; {year} Ngambis | All right reserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
