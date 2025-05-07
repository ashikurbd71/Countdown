"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";

export default function FAQSection() {
    const faqs = [
        { q: "What is Exambazz?", a: "Exambazz is ..." },
        { q: "Who can use Exambazz?", a: "Anyone who ..." },
        { q: "How secure is the exam system?", a: "We use ..." },
        { q: "Can students view their results instantly?", a: "Yes, ..." },
        { q: "Can I customize the exam experience or branding?", a: "Absolutely ..." },
    ];
    return (
        <motion.section
            id="faq"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="py-10 sm:py-14 md:py-16  min-h-screen"
        >
            <div className="w-full max-w-lg sm:max-w-2xl md:max-w-6xl mx-auto px-4 sm:px-6 md:px-4">
                {/* Header Box */}
                <div className="border-2 border-blue-400 rounded-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 bg-white">
                    <div className="flex items-center mb-2">
                        <span className="text-blue-600 text-xs sm:text-sm font-medium mr-2">🔷 Vision Behind AtomAI</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold leading-tight mb-2">Frequently Asked Questions</div>
                    <div className="text-gray-600 font-semibold text-sm sm:text-base mb-4">
                        মোদের মথুরা টরমল করে পাপ-লালসার ভারে, ভোগের সমিধ জ্বালিয়া আমরা পুড়িতেছি বারে বারে। ঘরে ফিরে যাও সোনার কিশোর! এ পাপমথুরাপুরী, তোমার সোনার অঙ্গেতে দেবে বিষবান ছুঁড়ি ছুঁড় |
                    </div>
                    <button
                        className="w-full cursor-pointer sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-full shadow transition-colors duration-200 mb-2 text-base sm:text-lg active:scale-95"
                        onClick={() => toast.success("You have joined the waitlist!")}
                    >
                        Join Waitlist →
                    </button>
                </div>
                {/* FAQ Section */}
                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.details
                            key={idx}
                            className="bg-white rounded-lg border border-blue-200 shadow px-4 sm:px-6 py-3 sm:py-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                        >
                            <summary className="cursor-pointer font-semibold text-base sm:text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300">{faq.q}</summary>
                            <div className="mt-2 text-gray-700 text-sm sm:text-base">{faq.a}</div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
