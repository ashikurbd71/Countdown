"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
    const targetDate = new Date("2025-05-17T00:00:00"); // 17 May 2025

    function getTimeLeft() {
        const now = new Date();
        const diff = Math.max(0, targetDate.getTime() - now.getTime());

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    }

    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 justify-center mb-4">
            <div className="flex flex-col items-center bg-[#232e4d] rounded-md px-5 py-2">
                <span className="text-3xl font-bold text-white">{String(time.days).padStart(2, "0")}</span>
                <span className="text-xs text-blue-200 font-semibold mt-1">DAYS</span>
            </div>
            <div className="flex flex-col items-center bg-[#232e4d] rounded-md px-5 py-2">
                <span className="text-3xl font-bold text-white">{String(time.hours).padStart(2, "0")}</span>
                <span className="text-xs text-blue-200 font-semibold mt-1">HOURS</span>
            </div>
            <div className="flex flex-col items-center bg-[#232e4d] rounded-md px-5 py-2">
                <span className="text-3xl font-bold text-white">{String(time.minutes).padStart(2, "0")}</span>
                <span className="text-xs text-blue-200 font-semibold mt-1">MINUTES</span>
            </div>
            <div className="flex flex-col items-center bg-[#232e4d] rounded-md px-5 py-2">
                <span className="text-3xl font-bold text-white">{String(time.seconds).padStart(2, "0")}</span>
                <span className="text-xs text-blue-200 font-semibold mt-1">SECONDS</span>
            </div>
        </div>
    );
}
