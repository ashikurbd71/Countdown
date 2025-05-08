'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Faded background text */}
            <div className=" inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="lg:text-[10vw] text-[45px] font-extrabold text-white/10 tracking-tight">Welcome</span>
            </div>
            {/* Main content */}
            <div className=" z-10 flex flex-col items-center w-full px-4 sm:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-center">ExamBazz is Almost Here..!</h1>
                <p className="text-base sm:text-xl md:text-3xl mb-6 sm:mb-8 text-center">Get ready to assess your students smartly</p>
                {/* Beautiful loader below the main text */}
                <div className="flex justify-center items-center my-6 sm:my-8">
                    <span className="relative flex h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20">
                        <span className="animate-spin inline-block w-full h-full border-4 sm:border-6 md:border-8 border-t-transparent border-blue-400 border-opacity-60 rounded-full"></span>
                    </span>
                </div>

            </div>
        </div>
    );
} 