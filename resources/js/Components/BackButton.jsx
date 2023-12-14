import { Button } from "@nextui-org/react";
import { ArrowLeft } from "@phosphor-icons/react";

const BackButton = () => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <Button onClick={goBack} className="mb-5 bg-color-primary text-white">
            <ArrowLeft size={32} />
            <p>Kembali</p>
        </Button>
    );
};

export default BackButton;
