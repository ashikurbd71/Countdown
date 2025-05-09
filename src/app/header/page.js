"use client";

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import img from "../../assets/exambazz.png"
import Link from "next/link";

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
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 bg-white shadow-sm z-50">
            <Image src={img} alt="Exambazz" width={110} height={10} className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[160px]" />

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
                    <Link href="#benefits" className="hover:text-blue-500 transition-colors text-sm md:text-base" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#benefits').scrollIntoView({ behavior: 'smooth' });
                    }}>Early Benefits</Link>

                    <Link href="#feature" className="hover:text-blue-500 transition-colors text-sm md:text-base" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#feature').scrollIntoView({ behavior: 'smooth' });
                    }}>Feature</Link>
                    <Link href="#faq" className="hover:text-blue-500 transition-colors text-sm md:text-base" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#faq').scrollIntoView({ behavior: 'smooth' });
                    }}>FAQs</Link>
                </nav>
                <Link href="#notify"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded-xl cursor-pointer font-semibold transition text-sm md:text-base whitespace-nowrap"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#notify').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Get Notified
                </Link>
            </div>

            {/* Mobile Navigation */}
            {
                isMobileMenuOpen && (
                    <div className="absolute top-full left-0 z-50 right-0 bg-white shadow-lg md:hidden border-t">
                        <nav className="flex flex-col p-4 space-y-2">
                            <Link href="#benefits" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base" onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#benefits').scrollIntoView({ behavior: 'smooth' });
                                setIsMobileMenuOpen(false);
                            }}>Early Benefits</Link>

                            <Link href="#feature" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base" onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#feature').scrollIntoView({ behavior: 'smooth' });
                                setIsMobileMenuOpen(false);
                            }}>Feature</Link>
                            <Link href="#faq" className="py-2 px-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base" onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#faq').scrollIntoView({ behavior: 'smooth' });
                                setIsMobileMenuOpen(false);
                            }}>FAQs</Link>
                            <Link href="#notify"
                                className="mt-4 bg-blue-500 text-center hover:bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold transition w-full text-sm md:text-base"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#notify').scrollIntoView({ behavior: 'smooth' });
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Get Notified
                            </Link>
                        </nav>
                    </div>
                )
            }


        </header >
    );
}