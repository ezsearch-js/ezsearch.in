const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                <p className="text-gray-400">Effective Date: November 30, 2025</p>
            </div>

            <div className="card p-8 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                    <p>
                        Ez Search ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform, in compliance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Personal Data:</strong> Name, Email, Phone Number, Address (collected for account creation and KYC).</li>
                        <li><strong>Business Data:</strong> GSTIN, PAN, Incorporation Certificate (for business verification).</li>
                        <li><strong>Transaction Data:</strong> Payment history and Escrow transaction details.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">3. Purpose of Processing</h2>
                    <p>We process your data for specific, lawful purposes:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>To provide and manage your account and services.</li>
                        <li>To verify your identity (KYC) as required by Indian laws.</li>
                        <li>To process payments and manage Escrow transactions.</li>
                        <li>To communicate with you regarding updates and support.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">4. Data Retention</h2>
                    <p>
                        We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law (e.g., tax laws requiring 7-year retention of financial records). Once the purpose is fulfilled, data will be securely deleted or anonymized.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">5. Your Rights (DPDP Act)</h2>
                    <p>Under the DPDP Act, you have the following rights:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Right to Access:</strong> Request a summary of your personal data being processed.</li>
                        <li><strong>Right to Correction:</strong> Request correction of inaccurate or misleading data.</li>
                        <li><strong>Right to Erasure:</strong> Request deletion of your data, subject to legal retention requirements.</li>
                        <li><strong>Right to Grievance Redressal:</strong> Contact our Data Protection Officer for any concerns.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">6. Data Breach Reporting</h2>
                    <p>
                        In the unlikely event of a personal data breach, we will notify the Data Protection Board of India and the affected users in accordance with the timelines and procedures prescribed under the DPDP Act.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">7. Cross-Border Transfer</h2>
                    <p>
                        We primarily process data within India. If we transfer data outside India, we ensure the destination country is not on the government's restricted list and that adequate safeguards are in place.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
                    <p>
                        For privacy-related queries or to exercise your rights, please contact our Data Protection Officer at: <br />
                        <a href="mailto:privacy@ezsearch.in" className="text-blue-400 hover:underline">privacy@ezsearch.in</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
