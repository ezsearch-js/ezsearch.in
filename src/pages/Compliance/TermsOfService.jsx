const TermsOfService = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
                <p className="text-gray-400">Last Updated: November 30, 2025</p>
            </div>

            <div className="card p-8 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using Ez Search, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">2. User Obligations</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You must provide accurate and complete information during registration and KYC.</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                        <li>You agree not to use the platform for any illegal or unauthorized purpose.</li>
                        <li>Business users must ensure their listings comply with all applicable laws.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">3. Escrow Services</h2>
                    <p>
                        Ez Search provides Escrow services to secure transactions. We act as a neutral third party. Funds are released only upon mutual agreement or dispute resolution outcome. We are not liable for the quality of goods or services exchanged.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
                    <p>
                        All content, trademarks, and data on this platform are the property of Ez Search or its licensors. You may not use them without our prior written permission.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Ez Search shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">6. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent activity.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">7. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">8. Contact Information</h2>
                    <p>
                        For questions about these Terms, please contact us at: <br />
                        <a href="mailto:legal@ezsearch.in" className="text-blue-400 hover:underline">legal@ezsearch.in</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
