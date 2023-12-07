import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    ],

    theme: {
        extend: {
            colors: {
                color: {
                    bg: "#FEFEFE",
                    second: "#EBF3F9",
                    pink: "#F3AA92",
                    red: "#F65868",
                    yellow: "#FFC561",
                    blue: "#B7C8FF",
                    green: "#A2F4CE",
                    primary: "#010406",
                    gray: "#7791A1",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, nextui()],
};
