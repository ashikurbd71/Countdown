"use client";

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import img from "../../../public/exambazz.png"

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNotify = () => {
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We'll notify you");
        setShowModal(false);
        setEmail("");
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 mb-5 bg-white shadow-sm relative">
            <Image src={img} alt="Exambazz" width={120} height={10} className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[160px]" />

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-3 md:gap-4 lg:gap-6 items-center">
                <nav className="font-semibold flex gap-3 md:gap-4 lg:gap-6 text-gray-700">
                    <a href="#benefits" className="hover:text-blue-500 transition-colors text-sm md:text-base">Early Benefits</a>
                    <a href="#journey" className="hover:text-blue-500 transition-colors text-sm md:text-base">Our Journey</a>
                    <a href="#reviews" className="hover:text-blue-500 transition-colors text-sm md:text-base">Early Reviews</a>
                    <a href="#faq" className="hover:text-blue-500 transition-colors text-sm md:text-base">FAQs</a>
                </nav>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded-xl cursor-pointer font-semibold transition text-sm md:text-base whitespace-nowrap"
                    onClick={handleNotify}
                >
                    Get Notified
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 z-50 right-0 bg-white shadow-lg md:hidden border-t">
                    <nav className="flex flex-col p-4 space-y-2">
                        <a href="#benefits" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base">Early Benefits</a>
                        <a href="#journey" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base">Our Journey</a>
                        <a href="#reviews" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base">Early Reviews</a>
                        <a href="#faq" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base">FAQs</a>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold transition w-full text-sm md:text-base"
                            onClick={handleNotify}
                        >
                            Get Notified
                        </button>
                    </nav>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 top-[80px] left-[1400px] bg-opacity-70 z-50 p-4 md:p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                        <label className="font-semibold text-sm md:text-base">Enter your email to get notified:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border px-3 py-2 rounded text-sm md:text-base"
                            placeholder="you@example.com"
                        />
                        <div className="flex gap-2 md:gap-3">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold text-sm md:text-base flex-1"
                            >
                                Notify Me
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 md:px-4 py-2 rounded-lg font-semibold text-sm md:text-base flex-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </header>
    );
}