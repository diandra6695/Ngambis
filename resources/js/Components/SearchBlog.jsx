import { useState } from "react";
import CardBlog from "./CardBlog";
import { Button, Chip, Input } from "@nextui-org/react";
import BackButton from "./BackButton";

const SearchBlog = ({ artikel, fullartikel }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(artikel);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const results = fullartikel.filter((artikel) =>
            artikel.title.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    const handleSemuaArtikel = () => {
        setSearchResults(artikel);
    };
    const handleKategoriArtikel = () => {
        const term = "Artikel";
        const results = artikel.filter((artikel) =>
            artikel.kategori.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };
    const handleKategoriMateri = () => {
        const term = "Materi";
        const results = artikel.filter((artikel) =>
            artikel.kategori.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="w-[35rem] gap-2 flex">
                    <BackButton />
                    <Input
                        className="mb-10"
                        size="sm"
                        type="text"
                        radius="full"
                        placeholder="Cari..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="solid"
                        radius="full"
                        onClick={handleSemuaArtikel}
                        className="active:bg-color-primary focus:bg-color-primary focus:text-white"
                        size="md"
                    >
                        Semua
                    </Button>
                    <Button
                        variant="solid"
                        radius="full"
                        onClick={handleKategoriArtikel}
                        className="active:bg-color-primary focus:bg-color-primary focus:text-white"
                        size="md"
                    >
                        Artikel
                    </Button>
                    <Button
                        variant="solid"
                        radius="full"
                        onClick={handleKategoriMateri}
                        className="active:bg-color-primary focus:bg-color-primary focus:text-white"
                        size="md"
                    >
                        Materi
                    </Button>
                </div>
            </div>
            <div className="content grid grid-cols-3 gap-4">
                <CardBlog artikel={searchResults} />
            </div>
        </>
    );
};

export default SearchBlog;
