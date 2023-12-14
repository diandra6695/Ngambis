import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import { Link } from "@inertiajs/react";

export default function Modaly({ isOpen, onClose, data }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <Modal
            className="bg-color-second w-96"
            backdrop="opaque"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col text-center gap-1">
                            Konfirmasi
                        </ModalHeader>
                        <ModalBody>
                            <h3>Kamu yakin mau hapus artikel kamu??</h3>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                variant="light"
                                onPress={onClose}
                            >
                                Ngga jadi deh
                            </Button>
                            <Link
                                color="danger"
                                href={route("blog.destroy", data.id)}
                                method="post"
                                data={{ id: data.id }}
                                as="button"
                                onClick={onClose}
                            >
                                Hapus
                            </Link>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
