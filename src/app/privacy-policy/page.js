import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Privacy Policy</h1>

                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                            The ExamBazz platform is designed with a robust, scalable, and secure architecture to ensure high availability,
                            performance, and seamless user experience. Exam Bazz prioritizes user privacy. We have explained how to collect
                            your data and how it will be used for further processes. We adhere to our policy and data privacy rules and are
                            transparent with our process. By accessing or using the Platform, you agree to the terms of this Privacy Policy.
                        </p>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Information Required</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                            We require 6 primary pieces of information throughout the usage of the site:
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">1. Personal Information</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    All employees, contractors, and clients must sign legally binding Non-Disclosure Agreements (NDAs) and
                                    Service Agreements. This will include your name, email address, contact information, educational background,
                                    and other information identifying you as an individual. We only collect personal information that is necessary
                                    for the functionality of the platform.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">2. Account Information</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    Your username, password, and other information necessary to manage your account will be stored on our site too.
                                    Protecting your account credentials is your responsibility. We are keeping this information as a backup if you
                                    forget some of your credentials.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">3. Usage Information</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    We will want to know about your purpose and how you will use the platform, such as the pages you visit,
                                    the features you use, and the time you spend on the platform. We will use this data to identify your
                                    preference and will decorate the site according to that so that we can improve the user experience and
                                    optimize the platform&apos;s performance. Furthermore, The platform must comply with local and international
                                    educational standards for online assessments.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">4. Device Information</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    You have to submit information regarding the device you use to access the platform, including your IP address,
                                    browser type, operating system, and hardware identifiers. This information is used for security and
                                    troubleshooting purposes.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">5. Exam Data</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    We collect data related to the exams you create, administer, or take on the platform, including questions,
                                    answers, scores, and feedback. This data is treated with strict confidentiality and is only accessible to
                                    authorized users.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">6. Payment Information</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                    All financial transactions must adhere to anti-money laundering (AML) regulations. If you subscribe to our
                                    paid services, we collect payment information, such as your credit card details or other payment method.
                                    We use secure payment gateways to process transactions, and we do not store your payment information on
                                    our servers.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">How We Use Your Information</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600">
                            We use your information to provide and improve our services, ensure platform security, and enhance user experience.
                            Your data is handled with the utmost care and in compliance with applicable data protection laws and regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
