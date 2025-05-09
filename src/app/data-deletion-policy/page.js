import React from 'react';

const DataDeletionPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">ExamBazz Data Deletion Policy</h1>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Effective Date: May 4, 2025</p>

                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                    <p className="mb-4 sm:mb-6 text-gray-700">
                        At ExamBazz, we are committed to protecting the privacy and data rights of our users.
                        This Data Deletion Policy outlines the procedures and conditions under which users'
                        personal data is deleted from our systems. By using our services, you agree to the
                        terms outlined below.
                    </p>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">1. Scope</h2>
                        <p className="text-gray-700">
                            This policy applies to all users of ExamBazz, including but not limited to students,
                            teachers, organization administrators, and other stakeholders who have shared their
                            data with us.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">2. Types of Data Covered</h2>
                        <p className="mb-3 sm:mb-4 text-gray-700">This policy covers all personal data provided by users, including but not limited to:</p>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700">
                            <li>Name and contact information (email, phone number)</li>
                            <li>Account credentials and profile details</li>
                            <li>Exam records, submissions, and feedback</li>
                            <li>Payment information (where applicable)</li>
                            <li>Communication records with ExamBazz support or administration</li>
                        </ul>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">3. User-Initiated Deletion Requests</h2>
                        <p className="mb-3 sm:mb-4 text-gray-700">
                            Users may request deletion of their personal data by sending a request to{' '}
                            <a href="mailto:support@exambazz.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                                support@exambazz.com
                            </a>{' '}
                            using their registered email address.
                        </p>
                        <p className="mb-3 sm:mb-4 text-gray-700">Upon receiving a valid request, we will:</p>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700">
                            <li>Verify the identity of the requester to prevent unauthorized deletion</li>
                            <li>Process the deletion within 30 business days</li>
                            <li>Inform the user upon completion of the deletion process</li>
                        </ul>
                        <p className="mt-4 text-gray-600 text-sm sm:text-base">
                            Please note that certain data may be retained for a limited period to comply with
                            legal obligations, resolve disputes, enforce our agreements, or for legitimate
                            business purposes permitted by law.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">4. Automatic Data Deletion</h2>
                        <p className="text-gray-700">
                            We may automatically delete inactive user accounts and associated data after a
                            continuous period of inactivity (as defined in our Terms of Service) of 24 months,
                            subject to applicable legal requirements and prior notification to the user.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">5. Retention of Anonymized Data</h2>
                        <p className="text-gray-700">
                            Data that has been anonymized and can no longer be linked to an identifiable
                            individual may be retained indefinitely for statistical, research, and analytical
                            purposes.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">6. Third-Party Services</h2>
                        <p className="text-gray-700">
                            If user data has been shared with authorized third-party service providers
                            (e.g., payment processors, SMS services), we will take reasonable steps to request
                            the deletion of such data from their systems as well.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DataDeletionPolicy;
