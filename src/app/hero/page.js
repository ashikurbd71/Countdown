"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import Countdown from "../countdown/page";
import { Facebook, FacebookIcon, Globe, Instagram, Linkedin, LinkedinIcon, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import star1 from '../../../public/star.png'
import Image from "next/image";
export default function HeroSection() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleJoinWaitlist = () => {
        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }
        router.push("/thanks");
        setEmail(""); // Optionally clear the input
    };

    return (
        <motion.section
            id="notify"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 md:px-8 lg:px-0 relative overflow-hidden"
            style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: "url('/public/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.8, // Adjust for effect
                }}
            />

            {/* Replaced SVG with image */}
            <Image
                src={star1}  // Change to your image path
                alt="Abstract shape"
                width={250}
                height={250}
                className=" absolute left-[-140px] bottom-[-80px] h-[250px] sm:w-[300x] sm:h-[300px] md:w-[350px] opacity-40 md:h-[350px]  "
            />
            {/* Abstract SVG background shape - bottom right */}




            <Image
                src={star1} // Change to your image path
                alt="Abstract shape"
                width={250}
                height={250}
                className="absolute right-[-120px] bottom-[-80px] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] opacity-40 z-0"
            />
            {/* Animated floating shapes */}
            <motion.div
                className="absolute left-5 sm:left-10 top-5 sm:top-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-300 opacity-30 rounded-full blur-2xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200 opacity-20 rounded-full blur-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <div className="my-6 sm:my-8 lg:my-10 xl:my-10 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[450px] h-full  mx-auto rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 bg-gradient-to-br from-[#2563eb] to-[#020617] relative overflow-hidden"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                <div className="flex justify-center">
                    <span className="bg-white text-blue-700 text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 rounded-full mb-2 sm:mb-4 shadow">
                        LAUNCHES: MAY 17, 2025
                    </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">Join the waitlist</h1>
                <p className="text-blue-100 text-center mb-4 sm:mb-6 text-xs sm:text-sm">
                    Obtain early access to our program and remain informed about release announcements.
                </p>
                <Countdown />
                <div className="flex items-center justify-center mb-2">
                    <span className="text-[10px] sm:text-xs text-blue-200 flex items-center gap-1">
                        <svg width="14" height="14" fill="none" className="inline-block"><rect width="14" height="14" rx="4" fill="#64748b" /></svg>
                        LEFT UNTIL FULL RELEASE
                    </span>
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your mail address"
                    className="w-full mt-2 sm:mt-3 px-3 sm:px-4 py-2 rounded-full bg-[#232e4d] text-white placeholder:text-blue-200 border-none focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
                />
                <button
                    className="w-full mt-2 sm:mt-3 cursor-pointer py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold transition text-base sm:text-lg shadow"
                    onClick={handleJoinWaitlist}
                >
                    Join waitlist
                </button>
                <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-blue-200 text-lg sm:text-xl">
                    <Link href="https://www.facebook.com/ExamBazz" target="_blank" aria-label="X" className="border-r-2 border-blue-200 pr-3 sm:pr-4"><FacebookIcon /></Link>
                    <Link href="https://www.linkedin.com/company/exambazz/posts/?feedView=all" target="_blank" aria-label="Instagram" className="border-r-2 border-blue-200 pr-3 sm:pr-4"><LinkedinIcon /></Link>


                    <Link href="https://www.youtube.com/@ExamBazz" target="_blank" aria-label="Website" ><Youtube /></Link>
                </div>
            </div>
            <div className="w-full h-full rounded-lg bg-gradient-to-b from-white via-[#e6f0ff] to-[#5b9aff] blur-sm"></div>
        </motion.section >
    );
}
