
"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import Countdown from "../countdown/page";
import { Globe, Instagram, Twitter } from "lucide-react";



export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-700 to-blue-400 relative"
        >
            {/* Animated floating shapes */}
            <motion.div
                className="absolute left-10 top-10 w-32 h-32 bg-blue-300 opacity-30 rounded-full blur-2xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-10 bottom-10 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <div className=" my-10 w-[500px] mx-auto rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-[#2563eb] to-[#020617] relative overflow-hidden"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                <div className="flex justify-center">
                    <span className="bg-white/80 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full mb-4 shadow">
                        🚀 LAUNCHES: MAY 7, 2025
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-white text-center mb-2">Join the waitlist</h1>
                <p className="text-blue-100 text-center mb-6 text-sm">
                    Obtain early access to our program and remain informed about release announcements.
                </p>
                <Countdown />
                <div className="flex items-center justify-center mb-2">
                    <span className="text-xs text-blue-200 flex items-center gap-1">
                        <svg width="16" height="16" fill="none" className="inline-block"><rect width="16" height="16" rx="4" fill="#64748b" /></svg>
                        LEFT UNTIL FULL RELEASE
                    </span>
                </div>
                <input
                    type="email"
                    placeholder="Your mail address"
                    className="w-full mt-3 px-4 py-2 rounded-full bg-[#232e4d] text-white placeholder:text-blue-200 border-none focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button className="w-full mt-3 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold transition text-lg shadow">
                    Join waitlist
                </button>
                <div className="flex justify-center gap-8 mt-8 text-blue-200 text-xl">
                    <a href="#" aria-label="X"><Twitter /></a>
                    <a href="#" aria-label="Instagram"><Instagram /></a>
                    <a href="#" aria-label="Website"><Globe /></a>
                </div>
            </div>
        </motion.section>
    );
}
