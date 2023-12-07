import { Link } from "@inertiajs/react";

const ListMateri = () => {
    return (
        <section id="materi">
            <div className="pt-16 ">
                <header className="flex justify-between items-center">
                    <h3 className="text-2xl font-black mb-5">
                        Materi Belajar yang #BikinCerdasBeneran
                    </h3>
                    <Link
                        className="underline"
                        href={route("home")}
                        as="button"
                    >
                        Selengkapnya
                    </Link>
                </header>
                <div className="content flex flex-wrap gap-5 justify-center">
                    <Link
                        style={{ display: "contents" }}
                        href={route("materi.matematika")}
                        className="w-auto"
                    >
                        <div className="card hover:scale-105 transition-all p-5 w-60 rounded-3xl bg-color-second">
                            <header>
                                <h3 className="text-xl font-bold">
                                    Matematika
                                </h3>
                                <p className="text-sm my-2">
                                    Matematika ilmu yang menyenangkan...
                                </p>
                            </header>
                            <img src="/assets/img/math.svg" alt="" />
                        </div>
                    </Link>
                    <Link
                        style={{ display: "contents" }}
                        href={route("materi.bahasaInggris")}
                        className="w-auto"
                    >
                        <div className="card hover:scale-105 transition-all  p-5 w-60 rounded-3xl bg-color-second">
                            <header>
                                <h3 className="text-xl font-bold">
                                    Bahasa Inggris
                                </h3>
                                <p className="text-sm my-2">
                                    Yakali bro jaman sekarang masih belum bisa
                                    Bahasa Inggris??
                                </p>
                            </header>
                            <img src="/assets/img/english.svg" alt="" />
                        </div>
                    </Link>
                    <Link
                        style={{ display: "contents" }}
                        href={route("materi.bahasaIndonesia")}
                        className="w-auto"
                    >
                        <div className="card hover:scale-105 transition-all  p-5 w-60 rounded-3xl bg-color-second">
                            <header>
                                <h3 className="text-xl font-bold">
                                    Bahasa Indonesia
                                </h3>
                                <p className="text-sm my-2">
                                    Kamu tahu nggak, bahasa Indonesia itu keren
                                    banget loh. Ayo belajar bareng-bareng!
                                </p>
                            </header>
                            <img src="/assets/img/indo.svg" alt="" />
                        </div>
                    </Link>
                    <Link
                        style={{ display: "contents" }}
                        href={route("materi.sejarah")}
                        className="w-auto"
                    >
                        <div className="card hover:scale-105 transition-all  p-5 w-60 rounded-3xl bg-color-second">
                            <header>
                                <h3 className="text-xl font-bold">Sejarah</h3>
                                <p className="text-sm my-2">
                                    Lu tau sejarah, lu punya kuasa
                                </p>
                            </header>
                            <img src="/assets/img/sejarah.svg" alt="" />
                        </div>
                    </Link>
                    <Link
                        style={{ display: "contents" }}
                        href={route("materi.bahasajawa")}
                        className="w-auto"
                    >
                        <div className="card hover:scale-105 transition-all  p-5 w-60 rounded-3xl bg-color-second">
                            <header>
                                <h3 className="text-xl font-bold">
                                    Bahasa Jawa
                                </h3>
                                <p className="text-sm my-2">
                                    Kata sepuh, Orang Jawa jangan sampai hilang
                                    jawanya
                                </p>
                            </header>
                            <img src="/assets/img/jawir.svg" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ListMateri;
