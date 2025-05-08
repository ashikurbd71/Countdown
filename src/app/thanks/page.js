import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';


export default function ThankYouPage() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            {/* Large background text */}
            <h1 className="absolute inset-0 flex items-center justify-center text-[10vw] font-extrabold text-white/10 select-none pointer-events-none z-0">
                You&apos;re In!
            </h1>
            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Thank You!</h2>
                <p className="text-2xl md:text-3xl text-white mb-8">Stay tuned for updates</p>
                <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition mb-8 flex items-center gap-2">
                    Go Back Home <span className="ml-2">→</span>
                </Link>
                <div className="flex items-center gap-8 text-white/80 text-2xl">
                    <Link href="https://www.linkedin.com/company/exambazz/posts/?feedView=all" target="_blank" aria-label="X" className="hover:text-white transition"><Linkedin /></Link>

                    <span className="h-6 w-px bg-white/20" />
                    <Link href="https://www.facebook.com/ExamBazz" target="_blank" aria-label="Facebook" className="hover:text-white transition"><Facebook /></Link>
                    <span className="h-6 w-px bg-white/20" />
                    <Link href="https://www.youtube.com/@ExamBazz" target="_blank" aria-label="Website" ><Youtube /></Link>
                </div>
            </div>
        </div >
    );
}
