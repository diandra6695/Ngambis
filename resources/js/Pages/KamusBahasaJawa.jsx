import Header from "@/Components/Header";
import { getRandomKata } from "@/Components/KamusBahasaJawa/api";
import Footer from "@/Components/LandingPage/Footer";
import Menu from "@/Components/LandingPage/Menu";
import { Head } from "@inertiajs/react";
import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    Input,
    Tooltip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const KamusBahsaJawa = (props) => {
    const [randomKata, setRandomKata] = useState([]);
    useEffect(() => {
        getRandomKata().then((result) => {
            setRandomKata(result.data);
        });
    }, []);

    // const RandomKataList = () => {
    //     return randomKata.map((kata, i) => {
    //         return (
    //             <AccordionItem key="1" aria-label="Accordion 1" title="test">
    //                 <div className="">haloo</div>
    //             </AccordionItem>
    //         );
    //     });
    // };

    const search = async (q) => {
        if (q.length >= 2) {
            const query = await getRandomKata(q);
            setRandomKata(query.data);
        }
    };

    return (
        <>
            <Head title="Kamus Bahasa Jawa" />
            <Menu home={true} auth={props.auth} />
            <div className="container mx-auto mt-20">
                <div className="w-full flex gap-5 flex-col items-center">
                    <Header text="Kamus Bahasa Jawa" />

                    <Input
                        type="text"
                        label="Masukkan Kata"
                        size="lg"
                        className="w-1/2 focus:ring-0 focus:ring-offset-0"
                        labelPlacement="outside"
                        onChange={({ target }) => search(target.value)}
                    />
                    <div className="md:w-1/2 w-full">
                        <Header text="Hasil" />
                        <Accordion
                            variant="splitted"
                            className="transition-all"
                        >
                            {randomKata.map((kata, i) => {
                                return (
                                    <AccordionItem
                                        key={i}
                                        aria-label={kata.name}
                                        title={kata.name}
                                        className="px-4 py-1 rounded-xl bg-color-second"
                                    >
                                        <div
                                            className=""
                                            dangerouslySetInnerHTML={{
                                                __html: kata.description,
                                            }}
                                        ></div>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default KamusBahsaJawa;
