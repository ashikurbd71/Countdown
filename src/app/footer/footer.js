import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-white via-blue-200 to-blue-700 pt-16 pb-4 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-sky-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-sky-400">
                            About Us
                        </h3>
                        <p className="text-sky-800 leading-relaxed">
                            We are dedicated to providing the best experience for our users. Our mission is to make learning and preparation accessible to everyone.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-sky-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-sky-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sky-800 hover:text-sky-600 transition-colors">Home</a></li>
                            <li><a href="/about" className="text-sky-800 hover:text-sky-600 transition-colors">About</a></li>
                            <li><a href="/services" className="text-sky-800 hover:text-sky-600 transition-colors">Services</a></li>
                            <li><a href="/contact" className="text-sky-800 hover:text-sky-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-sky-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-sky-400">
                            Contact Info
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-sky-800">
                                <Mail className="w-5 h-5 text-sky-600" />
                                <span>info@exambazz.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sky-800">
                                <Phone className="w-5 h-5 text-sky-600" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sky-800">
                                <MapPin className="w-5 h-5 text-sky-600" />
                                <span>123 Education St, Learning City</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-sky-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-sky-400">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sky-800 hover:text-sky-600 transition-colors" aria-label="Facebook">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-sky-800 hover:text-sky-600 transition-colors" aria-label="Twitter">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-sky-800 hover:text-sky-600 transition-colors" aria-label="Instagram">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-sky-800 hover:text-sky-600 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-sky-200 text-center">
                    <p className="text-sky-800 text-sm">
                        &copy; {new Date().getFullYear()} Exambazz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}


