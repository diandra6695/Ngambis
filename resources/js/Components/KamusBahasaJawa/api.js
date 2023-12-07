import axios from "axios";

const baseUrl = "https://senaraiistilahjawa.kemdikbud.go.id";

export const getRandomKata = async (q) => {
    const kata = await axios.get(
        `${baseUrl}/api/v1/public/search/terms/${q}?page=1`
    );
    return kata.data.terms;
};
