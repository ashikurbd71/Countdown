"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
    Shield,
    BookOpen,
    Users,
    BarChart3,
    Building2,
    FileText,
    Sparkles
} from "lucide-react";

const cards = [
    {
        title: "Security Features",
        description: "Prevent cheating with copy, tab-switch, and screenshot blocking",
        color: "bg-blue-400",
        icon: Shield,
        gradient: "from-blue-600/90 to-blue-800/90",
    },
    {
        title: "Question Bank Management",
        description: "Built-in question bank with tagging and one-click paper creation",
        color: "bg-cyan-400",
        icon: BookOpen,
        gradient: "from-cyan-600/90 to-cyan-800/90"
    },
    {
        title: "Exam Batch Management",
        description: "Manage multiple batches and monitor course-wise progress",
        color: "bg-purple-400",
        icon: Users,
        gradient: "from-purple-600/90 to-purple-800/90"
    },
    {
        title: "Student Progress Analysis",
        description: "Detailed performance reports to identify and address weaknesses",
        color: "bg-yellow-400",
        icon: BarChart3,
        gradient: "from-yellow-600/90 to-yellow-800/90"
    },
    {
        title: "Organization Management",
        description: "Team-based exam creation and teacher management for edtech",
        color: "bg-violet-400",
        icon: Building2,
        gradient: "from-violet-600/90 to-violet-800/90"
    },
    {
        title: "Offline Exam Assembler",
        description: "Instant offline paper creation with question shuffling",
        color: "bg-green-400",
        icon: FileText,
        gradient: "from-green-600/90 to-green-800/90"
    },
];

export default function FeaturePage() {
    const [allInView, setAllInView] = useState(false);
    const cardRefs = useRef([]);

    // Check if all cards are in view
    useEffect(() => {
        function checkAllInView() {
            const allVisible = cardRefs.current.every(
                (ref) => ref && ref.getBoundingClientRect().top < window.innerHeight
            );
            setAllInView(allVisible);
        }
        window.addEventListener("scroll", checkAllInView);
        checkAllInView();
        return () => window.removeEventListener("scroll", checkAllInView);
    }, []);

    return (
        <section className="py-8 sm:py-12 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    id="feature"
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold  bg-clip-text text-black">
                            Unique Features That Make a Difference
                        </h2>
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                        Offers unique features designed to simplify your exams. Enjoy robust security,
                        customizable options, and insightful analytics. Discover the difference.
                    </p>
                </motion.div>

                <div
                    className={`grid gap-4 sm:gap-6 md:gap-8 w-full transition-all duration-700
                        ${allInView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}
                    `}
                >
                    {cards.map((card, idx) => {
                        const ref = (el) => (cardRefs.current[idx] = el);
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                ref={ref}
                                className={`
                                    w-full min-h-[160px] sm:min-h-[180px] rounded-xl sm:rounded-2xl
                                    flex flex-col items-start p-4 sm:p-6 md:p-8 relative overflow-hidden
                                    bg-gradient-to-br ${card.gradient}
                                    text-white
                                    border border-white/20
                                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)]
                                    hover:scale-[1.02]
                                    transition-all duration-300
                                    backdrop-blur-sm
                                    group
                                `}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{
                                    delay: idx * 0.15,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                            >
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <Icon size={80} className="sm:w-[100px] sm:h-[100px]" />
                                </div>
                                <div className="relative z-10 w-full">
                                    <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 items-center">
                                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                                            <Icon size={24} className="sm:w-7 sm:h-7" />
                                        </div>
                                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white">{card.title}</h3>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{card.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
