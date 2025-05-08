"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";

export default function FAQSection() {
    const faqs = [
        { q: "How does ExamBazz differ from traditional examination methods, and what are its key advantages?", a: "ExamBazz, being an online platform, makes conducting and evaluating exams easier and faster. Key advantages include the ability to manage exams on a large scale, time efficiency, vast resources, and individual reports" },
        { q: "How can an educational institution make its examination process more efficient by using ExamBazz?", a: "ExamBazz helps institutions streamline exam planning, administration, and results analysis through customizable exam formats, question bank creation and management, and integration with other educational platforms, ultimately saving time and effort" },
        { q: "What kind of benefits do students get from the ExamBazz platform that help them in their learning and assessment?", a: "Students can view their exam history, progress, and detailed feedback from teachers in one place. In some cases, there are also opportunities to retake exams or identify weaknesses for improvement" },
        { q: "Is ExamBazz suitable for an offline coaching centre?", a: "Yes, ExamBazz is suitable for an offline coaching centre. Its multi-role access, customization options, and scalable architecture can be tailored to the needs of different institutions. The initial focus is primarily on coaching centers and EdTechs" },
        { q: "What measures have been taken in the ExamBazz platform to prevent students from using unfair means during examinations?", a: "ExamBazz employs end-to-end encryption, multi-factor authentication, and has plans to incorporate anti-cheating technologies in future updates. Data security and the integrity of examinations are our primary goals" },
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
                        Explore our Frequently Asked Questions for short answers that provide clarity about our services

                    </div>
                    <Link
                        href="#notify"
                        className="w-full cursor-pointer sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-full shadow transition-colors duration-200 mb-2 text-base sm:text-lg active:scale-95"

                    >
                        Join Waitlist →
                    </Link>
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
                            <summary className="cursor-pointer font-semibold text-base sm:text-lg text-gray-800  ">{faq.q}</summary>
                            <div className="mt-2 text-gray-700 text-sm sm:text-base">{faq.a}</div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
