import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Button, Card, CardBody } from "@nextui-org/react";
const Info = ({ data }) => {
    const formatDate = (inputDate) => {
        // Membuat objek Date dari string input
        const dateObject = new Date(inputDate);

        // Array nama hari dalam bahasa Inggris
        const daysOfWeek = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jum'at",
            "Sabtu",
        ];

        // Array nama bulan dalam bahasa Inggris
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "July",
            "Augustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        // Mendapatkan informasi hari, tanggal, bulan, dan tahun
        const dayOfWeek = daysOfWeek[dateObject.getUTCDay()];
        const dayOfMonth = dateObject.getUTCDate();
        const month = months[dateObject.getUTCMonth()];
        const year = dateObject.getUTCFullYear();

        // Mengembalikan string yang diformat
        const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

        return formattedDate;
    };
    const daysUntil = (targetDate) => {
        // Membuat objek Date untuk tanggal target
        const targetDateTime = new Date(targetDate).getTime();

        // Membuat objek Date untuk tanggal sekarang
        const now = new Date();
        const nowTime = now.getTime();

        // Menghitung selisih waktu dalam milidetik
        const timeDifference = targetDateTime - nowTime;

        // Menghitung selisih hari
        const daysDifference = Math.ceil(
            timeDifference / (1000 * 60 * 60 * 24)
        );

        return daysDifference;
    };

    // Menghitung berapa hari lagi

    const inputDate = data[0].date;
    const targetDate = data[0].date;
    const daysRemaining = daysUntil(targetDate);
    const formattedDate = formatDate(inputDate);

    return (
        <Card>
            <CardBody>
                <div className="rounded-[2.5rem] mt-20 w-full p-16 bg-color-second flex justify-center gap-10 items-center">
                    <div className="descriptions max-w-2xl text-color-primary flex items-center gap-5 flex-col">
                        <p>Kapan tanggal merah terdekat?</p>
                        <div className="text-3xl text-center font-black">
                            <h3>{formattedDate}</h3>
                            <p className="text-xl">{data[0].name}</p>
                        </div>
                        <h3 className="font-bold">
                            Kalem, liburnya masih {daysRemaining} hari lagi
                            kok..
                        </h3>
                        <Card className="bg-color-primary">
                            <CardBody className="text-color-bg p-2">
                                <p>Asik long weekend nich 😏</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Info;
