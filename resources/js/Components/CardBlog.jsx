import { Link } from "@inertiajs/react";
import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";
const CardBlog = (props) => {
    console.log(props);
    return (
        <Link href={`blog/detail/${props.slug}`}>
            <Card className="w-96 hover:shadow-xl transition-all cursor-pointer">
                <CardBody>
                    <Image
                        isBlurred
                        radius="none"
                        alt="artikel"
                        src={`../../../storage/artikel/${props.img}`}
                    />
                </CardBody>
                <CardFooter className="flex gap-2 mt-4 flex-col items-start p-5">
                    <p className="text-sm">
                        By <span className="font-bold">{props.author}</span>
                    </p>
                    <h3 className="font-bold text-lg">{props.title}</h3>
                    <div className="gap-1 flex">
                        <Chip variant="bordered">{props.kategori}</Chip>
                        <Chip variant="bordered">{props.mapel}</Chip>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default CardBlog;
