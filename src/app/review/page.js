'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Emily Johnson',
        title: 'Founder @Brixa Ventures',
        text: `In times of card loss, the bank's immediate support has proven reliable and reassuring, demonstrating a commitment to customer satisfaction and security.`,
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'Chloe Williams',
        title: 'Co-Founder @Stellar Dynamics',
        text: `The security standards in my account dealings have impressed me. I feel valued at all times, and that's highly secure to me.`,
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        name: 'Sophia Brown',
        title: 'CFO @Greater Innovations',
        text: `The diverse investment options offered by the bank have added a valuable layer to my financial portfolio, providing flexibility and strategic choices.`,
        img: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        name: 'Grace Taylor',
        title: 'CEO @Brixa Ventures',
        text: `The bank's swift services and user-friendly app have truly enhanced my experience; I am highly satisfied with the seamless and quick transactions.`,
        img: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        name: 'Ava Davis',
        title: 'COO @Stellar Innovations',
        text: `Responsive customer service, providing a reassuring and helpful experience.`,
        img: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        name: 'Henry Carter',
        title: 'Bank founder @QuantumLeap',
        text: `The credit application's swift approval showcased the bank's promptness; I extend my appreciation for the quick response and efficient service.`,
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        name: 'Olivia Smith',
        title: 'CSO @Stinson Dynamics',
        text: `Grateful for the app's efficiency, enabling me to swiftly manage finances; a heartfelt thank you for the seamless transaction experiences.`,
        img: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
        name: 'Liam Thompson',
        title: 'Co-Founder @Urban Innovations',
        text: `The extensive network of your branches ensures accessibility; it's excellent.`,
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        name: 'James Foster',
        title: 'CFO @Citystar International',
        text: `The bank's reasonable fees have become a crucial factor in my financial decisions, making it a preferred choice among other financial institutions.`,
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
];

const CARD_HEIGHT = 220; // px, adjust as needed for your card height + gap
const VISIBLE_ROWS = 2; // Number of visible rows at a time
const COLUMNS = 3; // Number of columns on desktop

export default function ReviewPage() {
    // Duplicate testimonials for seamless looping
    const allTestimonials = [...testimonials, ...testimonials];
    // Calculate number of rows (rounded up)
    const totalRows = Math.ceil(allTestimonials.length / COLUMNS);
    const ANIMATION_DISTANCE = CARD_HEIGHT * totalRows;
    const ANIMATION_DURATION = totalRows * 2.5; // seconds

    return (
        <div id="reviews" className="min-h-screen py-10">

            <div className="text-center mb-10">
                <div className="flex justify-center items-center mb-2">
                    <span className="text-blue-600 text-xs sm:text-sm font-medium mr-2">🔷 Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">
                    What people who work<br />with us think <span className="text-blue-600">about us?</span>
                </h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 flex justify-center">
                <div
                    className="w-full max-w-6xl overflow-hidden rounded-2xl   relative"
                    style={{ height: CARD_HEIGHT * VISIBLE_ROWS }}
                >
                    <motion.div
                        animate={{ y: [0, -ANIMATION_DISTANCE] }}
                        transition={{
                            duration: ANIMATION_DURATION,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 review-grid"
                    >
                        {allTestimonials.map((t, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-gray-200 p-6 shadow flex flex-col justify-between min-h-[196px] "
                                style={{ minHeight: CARD_HEIGHT - 24 }}
                            >
                                <div className="flex items-center mb-4">
                                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-500" />
                                    <div>
                                        <div className="font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-indigo-500 text-sm">{t.title}</div>
                                    </div>
                                </div>
                                <div className="text-base text-gray-800">{t.text}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="text-center mt-10">
                <button
                    className="bg-gradient-to-r from-white/50 to-blue-500 text-black rounded-full px-10 py-3 text-lg font-semibold shadow transition hover:from-gray-800 hover:to-blue-600"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}
