import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
// import img from '../../../public/'
export default function Footer() {
    return (
        <footer className="bg-[#111217] pt-16 pb-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex lg:justify-between lg:flex-row flex-col md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <span className="text-2xl font-bold text-gray-100">ExamBazz</span>
                        </div>
                        <p className="text-gray-400 text-center lg:text-left  text-sm">
                            Assess Smarter, Teach Better
                        </p>
                    </div>

                    <div className='flex justify-between lg:flex-row flex-col gap-8 lg:gap-24'>
                        {/* Links */}
                        <div className="space-y-4 flex flex-col justify-center lg:justify-start items-center">
                            <h3 className="text-base font-semibold text-gray-200">Links</h3>
                            <ul className="space-y-2 flex flex-col justify-center lg:justify-start items-center">
                                <li><Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">Early Benefits
                                </Link></li>
                                <li><Link href="#feature" className="text-gray-400 hover:text-white transition-colors">
                                    Feature
                                </Link></li>
                                <li><Link href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4 flex flex-col justify-center lg:justify-start items-center">
                            <h3 className="text-base font-semibold text-gray-200">Social Links</h3>
                            <ul className="space-y-2 flex flex-col justify-center lg:justify-start items-center">
                                <li className="flex items-center space-x-2">
                                    <Facebook className="w-4 h-4 text-gray-400" />
                                    <Link href="https://www.facebook.com/ExamBazz" target='_blank' className="text-gray-400 hover:text-white transition-colors">Facebook</Link>
                                </li>
                                {/* <li className="flex items-center space-x-2">
                                <Instagram className="w-4 h-4 text-gray-400" />
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                            </li> */}
                                <li className="flex items-center space-x-2">
                                    <Linkedin className="w-4 h-4 text-gray-400" />
                                    <Link href="https://www.linkedin.com/company/exambazz/posts/?feedView=all" target='_blank' className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Youtube className="w-4 h-4 text-gray-400" />
                                    <Link href="https://www.youtube.com/@ExamBazz" target='_blank' className="text-gray-400 hover:text-white transition-colors">Youtube</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
                    <div className="mb-2 md:mb-0">&copy; 2025 ExamBazz All Right Reserved</div>
                    <div className="flex space-x-6">
                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                        <Link href="/data-deletion-policy" className="hover:underline">Data Deletion Policy</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}


