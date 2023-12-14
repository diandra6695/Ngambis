import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const Hero = () => {
    return (
        <section id="home" className="w-full pt-20">
            <div className="rounded-[2.5rem] w-full p-16 bg-color-second flex justify-center gap-10 items-center">
                <div className="descriptions max-w-xl flex flex-col gap-5 text-color-primary">
                    <div className="header text-4xl font-black">
                        <h3>
                            Belajar dengan semangat dan capai tujuan dengan
                            Ngambis!
                        </h3>
                    </div>
                    <p className="text-sm">
                        Lihat, setiap kali kamu belajar, kamu lagi nambahin
                        senjata buat masa depan kamu. Bayangin aja, ilmu yang
                        kamu dapetin sekarang itu kayak modal buat buka pintu
                        kesuksesan nanti. Gak ada yang lebih keren dari
                        merasakan hasil dari jerih payah kita sendiri, kan?
                    </p>
                    <Button
                        radius="full"
                        className="w-32 bg-color-primary text-white"
                    >
                        <Link href="#materi">Learn More</Link>
                    </Button>
                </div>
                <div className="images">
                    <img src="assets/img/main.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
