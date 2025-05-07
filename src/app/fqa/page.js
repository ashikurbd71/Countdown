"use client";

import { motion } from "framer-motion";

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
            className="py-16 bg-gray-50"
        >
            <div className="max-w-3xl mx-auto">
                <h3 className="text-blue-700 font-bold mb-2">Vision Behind Exambazz</h3>
                <div className="mb-6 text-lg font-semibold">সচরাচর জিজ্ঞাসা</div>
                <div className="mb-8 text-gray-600">
                    আপনার প্রশ্নের উত্তর এখানে পাবেন। আরও জানতে আমাদের সাথে যোগাযোগ করুন।
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.details
                            key={idx}
                            className="bg-white rounded-lg shadow px-6 py-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                        >
                            <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                            <div className="mt-2 text-gray-700">{faq.a}</div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
