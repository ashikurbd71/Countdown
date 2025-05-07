"use client";

import { BadgeCheck, Bell, Gift, Shield } from "lucide-react";
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
            className="py-16 "
        >
            <div className="max-w-4xl mx-auto px-4 mt-10 text-center">
                <div className="flex items-center justify-center mb-2 gap-2">
                    <BadgeCheck className="text-blue-500 text-lg" />
                    <span className="text-blue-500 font-medium text-sm">Perks as a waitlist member</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Get Early bird Benefits</h2>
                <p className="text-gray-600 mb-8 text-base md:text-lg">
                    Obtain early access to our program and remain informed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border border-blue-200 rounded-lg overflow-hidden bg-gradient-to-tl from-blue-50 to-white">
                        <CardContent className="flex flex-col items-center py-8 bg-transparent">
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                                <Bell className="text-blue-400 w-4 h-4" />
                                Priority Access:
                            </div>
                            <div className="font-bold text-2xl mb-1">মার্চ ২০২৫</div>
                        </CardContent>
                    </Card>
                    <Card className="border border-blue-200 rounded-lg overflow-hidden bg-gradient-to-tl from-blue-50 to-white">
                        <CardContent className="flex flex-col items-center py-8 bg-transparent">
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                                <Gift className="text-blue-400 w-4 h-4" />
                                Exclusive Discount
                            </div>
                            <div className="font-bold text-2xl mb-1">30% Off</div>
                        </CardContent>
                    </Card>
                    <Card className="border border-blue-200 rounded-lg overflow-hidden bg-gradient-to-tl from-blue-50 to-white">
                        <CardContent className="flex flex-col items-center py-8 bg-transparent">
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                                <Shield className="text-blue-400 w-4 h-4" />
                                Exclusive Badge
                            </div>
                            <div className="font-bold text-2xl mb-1">Founder's Wall</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.section>
    );
}