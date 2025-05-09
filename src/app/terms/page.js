import React from 'react';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-gray-900">
                    Terms of Service
                </h1>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-gray-700">
                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">1. Agreement to Terms</h2>
                        <p className="text-sm sm:text-base lg:text-lg">
                            By accessing or using the Platform, you agree to be bound by these Terms.
                        </p>
                    </section>

                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">2. Account Responsibilities</h2>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                            <li>You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</li>
                            <li>You must provide accurate and complete information when creating your account.</li>
                        </ul>
                    </section>

                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">3. User Content</h2>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                            <li>You are responsible for any content you submit or upload to the Platform.</li>
                            <li>You represent that you have all necessary rights to your User Content and that your User Content does not infringe the rights of any third party.</li>
                            <li>You agree not to submit or upload any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, racially, ethnically, or otherwise objectionable.</li>
                        </ul>
                    </section>

                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">4. Prohibited Activities</h2>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                            <li>You cannot use any content from the Platform without our express written consent.</li>
                            <li>You cannot impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with an individual or organization.</li>
                            <li>You cannot sell or unauthorizedly share user data with external entities.</li>
                        </ul>
                    </section>

                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">5. Content Rights</h2>
                        <p className="text-sm sm:text-base lg:text-lg">
                            Educators contributing questions or materials retain authorship rights but grant ExamBazz a perpetual license to use the content if required for system upgrade purposes.
                        </p>
                    </section>

                    <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">6. Legal Compliance</h2>
                        <p className="text-sm sm:text-base lg:text-lg">
                            You have agreed to comply with local taxation laws in every operating region.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
