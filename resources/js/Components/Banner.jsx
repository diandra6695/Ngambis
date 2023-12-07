import { Link } from "@inertiajs/react";
import { Button, Card, CardBody } from "@nextui-org/react";

const Banner = () => {
    return (
        <Card>
            <CardBody>
                <div className="rounded-3xl mt-20 w-full p-16 bg-color-second flex justify-center gap-10 items-center">
                    <div className="descriptions max-w-2xl text-color-primary flex items-center gap-5 flex-col">
                        <div className="text-3xl text-center font-black">
                            <h3>
                                Kamu harus tahu, belajar itu bukan tentang
                                nilai, tapi tentang bagaimana kamu bisa
                                mengembangkan dirimu sendiri!
                            </h3>
                        </div>
                        <Button
                            radius="full"
                            className="w-32 bg-color-primary text-white"
                        >
                            <Link href="#materi">Mulai Belajar</Link>
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Banner;
