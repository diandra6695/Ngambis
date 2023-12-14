import { Link } from "@inertiajs/react";
import { Card, CardBody, Image, CardFooter, Chip } from "@nextui-org/react";
function formatDateIndonesia(tanggal) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
    };

    return tanggal.toLocaleDateString("id-ID", options);
}

const isArtikel = (artikel) => {
    return artikel.map((data, i) => {
        const tanggalUTC = new Date(data.created_at);
        return (
            <Link href={`/home/blog/${data.slug}`} key={i}>
                <Card className="w-[26rem] hover:shadow-xl transition-all cursor-pointer bg-white">
                    <CardBody>
                        <Image
                            isBlurred
                            className="rounded-3xl w-[26rem] h-60 object-cover"
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
        );
    });
};

const noArtikel = () => {
    return <div>saat ini belum ada artikel tersedia</div>;
};

const CardBlog = ({ artikel }) => {
    return !artikel ? noArtikel() : isArtikel(artikel);
};

export default CardBlog;
