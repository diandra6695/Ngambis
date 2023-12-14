import Modaly from "@/Components/Modaly";
import { Link } from "@inertiajs/react";
import {
    Button,
    Image,
    ModalBody,
    ModalContent,
    ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import { Eye, PencilSimple, Trash } from "@phosphor-icons/react";
import { useState } from "react";

const DeleteConfirmationModal = ({ onDelete, onCancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>Anda yakin ingin menghapus?</p>
                <button onClick={onDelete}>Ya, Hapus</button>
                <button onClick={onCancel}>Batal</button>
            </div>
        </div>
    );
};

const AdminBlog = ({ artikel }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                <button onClick={openModal}>Buka Modal</button>
            </div>
            <Table
                className="bg-white rounded-2xl flex"
                aria-label="Example static collection table"
            >
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn className="p-2">JUDUL</TableColumn>
                    <TableColumn>GAMBAR</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {artikel.map((data, i) => {
                        const nomor = i++;
                        return (
                            <TableRow className="" key={nomor}>
                                <TableCell>{i}</TableCell>
                                <TableCell className="text-lg max-w-xs font-black">
                                    {data.title}
                                    <p className="text-sm font-normal">
                                        Kategori: {data.kategori}, {data.mapel}
                                    </p>
                                </TableCell>
                                <TableCell className="flex flex-col items-center">
                                    <Image
                                        isBlurred
                                        className="rounded-3xl w-40 object-cover"
                                        alt="artikel"
                                        src={`../../../storage/artikel/${data.image}`}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <div className="relative flex items-center gap-5">
                                            <Link
                                                href={
                                                    data.kategori == "Materi"
                                                        ? `/home/blog/${data.slug}`
                                                        : `/blog/${data.slug}`
                                                }
                                            >
                                                <Tooltip content="View">
                                                    <span className="text-lg text-success-500 cursor-pointer active:opacity-50">
                                                        <Eye size={25} />
                                                    </span>
                                                </Tooltip>
                                            </Link>
                                            <Link
                                                href={route(
                                                    "blog.edit",
                                                    data.id
                                                )}
                                            >
                                                <Tooltip content="Edit Artikel">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <PencilSimple
                                                            size={25}
                                                        />
                                                    </span>
                                                </Tooltip>
                                            </Link>
                                            <Button onClick={openModal}>
                                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                    <Trash size={25} />
                                                </span>
                                            </Button>
                                            <Modaly
                                                data={data}
                                                isOpen={isModalOpen}
                                                onClose={closeModal}
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
};

export default AdminBlog;
