"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
    return (
        <motion.section
            id="benefits"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-16 bg-white"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Get Early bird Benefits</h2>
                <p className="text-gray-600 mb-8">
                    Obtain early access to our program and remain informed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="flex flex-col items-center py-8">
                            <span className="text-3xl mb-2">🚀</span>
                            <div className="font-bold">Priority Access</div>
                            <div className="text-sm text-gray-500">সবার আগে</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center py-8">
                            <span className="text-3xl mb-2">💸</span>
                            <div className="font-bold">30% Off</div>
                            <div className="text-sm text-gray-500">Exclusive Discount</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center py-8">
                            <span className="text-3xl mb-2">🏅</span>
                            <div className="font-bold">Founder's Wall</div>
                            <div className="text-sm text-gray-500">Exclusive Badge</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.section>
    );
}