import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Button,
} from "@nextui-org/react";
const Testimoni = () => {
    return (
        <section id="testimoni">
            <div className="pt-16">
                <header>
                    <h3 className="text-2xl font-black mb-5">
                        Kata Mereka yang Pernah Belajar di Ngambis
                    </h3>
                </header>
                <Card className="max-w-[340px] border p-5 bg-color-second">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <img
                                src="assets/img/main.png"
                                className="rounded-full w-10"
                                alt=""
                            />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-color-primary">
                                    Zoey Lang
                                </h4>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden mt-5">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ab ducimus porro odio aperiam soluta, voluptas
                            eius optio dolore sit beatae.
                        </p>
                        <span className="pt-2">
                            #Matematika!Seru
                            <span
                                className="py-2"
                                aria-label="computer"
                                role="img"
                            >
                                💻
                            </span>
                        </span>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
};

export default Testimoni;
