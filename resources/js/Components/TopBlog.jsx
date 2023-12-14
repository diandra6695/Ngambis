import { Link } from "@inertiajs/react";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
function formatDateIndonesia(tanggal) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
    };

    return tanggal.toLocaleDateString("id-ID", options);
}
const TopBlog = (props) => {
    console.log(props);
    const data = props.data.firstArtikel[0];
    const tanggalUTC = new Date(data.created_at);
    return (
        <div className="mb-10">
            <Link
                className="w-[40rem]"
                href={
                    data.kategori == "Materi"
                        ? `/home/blog/${data.slug}`
                        : `/blog/${data.slug}`
                }
            >
                <Card className="w-[40rem] hover:shadow-xl shadow-lg transition-all cursor-pointer bg-white">
                    <CardBody>
                        <Image
                            isBlurred
                            className="rounded-3xl w-[40rem] h-96 object-cover"
                            alt="artikel"
                            src={`../../../storage/artikel/${data.image}`}
                        />
                    </CardBody>
                    <CardFooter className="flex gap-2 mt-4 flex-col items-start p-5">
                        <p className="text-sm">
                            {formatDateIndonesia(tanggalUTC)}
                        </p>
                        <p className="text-sm">
                            By <span className="font-bold">{data.author}</span>
                        </p>
                        <h3 className="font-bold text-xl">{data.title}</h3>
                        <div className="gap-1 flex">
                            <Chip variant="bordered">{data.kategori}</Chip>
                            <Chip variant="bordered">{data.mapel}</Chip>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
            <div className=""></div>
        </div>
    );
};
export default TopBlog;
