"use client";

import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");

    const handleNotify = () => {
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We'll notify you");
        setShowModal(false);
        setEmail("");
    };

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm rounded-b-xl">

            <div className="font-bold text-blue-700 text-lg">Exambazz</div>
            <nav className="hidden md:flex gap-6 text-gray-700">
                <a href="#benefits">Early Benefits</a>
                <a href="#journey">Our Journey</a>
                <a href="#reviews">Early Reviews</a>
                <a href="#faq">FAQs</a>
            </nav>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                onClick={handleNotify}
            >
                Get Notified
            </button>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
                    >
                        <label className="font-semibold">Enter your email to get notified:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border px-3 py-2 rounded"
                            placeholder="you@example.com"
                        />
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                            >
                                Notify Me
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-semibold"
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