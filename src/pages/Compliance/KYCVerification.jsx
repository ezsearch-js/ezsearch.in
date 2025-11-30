import { useState } from 'react';

const KYCVerification = () => {
    const [userType, setUserType] = useState('individual'); // 'individual' or 'business'
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        pan: '',
        aadhar: '',
        gstin: '',
        msme: '',
        incorporationDate: '',
        consent: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission logic
        alert('KYC Documents Submitted Successfully! Verification pending.');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2">KYC Verification</h1>
                <p className="text-gray-400">Complete your verification to unlock full platform access</p>
            </div>

            <div className="card p-8">
                {/* User Type Selection */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setUserType('individual')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${userType === 'individual'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        Individual
                    </button>
                    <button
                        onClick={() => setUserType('business')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${userType === 'business'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        Business (MSME/GST)
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                {userType === 'business' ? 'Business Name' : 'Full Name (as per PAN)'}
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder={userType === 'business' ? 'e.g., TechSolutions Pvt Ltd' : 'e.g., Rahul Sharma'}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">PAN Number</label>
                            <input
                                type="text"
                                name="pan"
                                value={formData.pan}
                                onChange={handleInputChange}
                                className="input-field w-full uppercase"
                                placeholder="ABCDE1234F"
                                maxLength={10}
                                required
                            />
                        </div>
                    </div>

                    {/* Individual Specific */}
                    {userType === 'individual' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Aadhar Number</label>
                            <input
                                type="text"
                                name="aadhar"
                                value={formData.aadhar}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder="1234 5678 9012"
                                maxLength={12}
                                required
                            />
                        </div>
                    )}

                    {/* Business Specific */}
                    {userType === 'business' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">GSTIN</label>
                                    <input
                                        type="text"
                                        name="gstin"
                                        value={formData.gstin}
                                        onChange={handleInputChange}
                                        className="input-field w-full uppercase"
                                        placeholder="29ABCDE1234F1Z5"
                                        maxLength={15}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Udyam Aadhar / MSME No.</label>
                                    <input
                                        type="text"
                                        name="msme"
                                        value={formData.msme}
                                        onChange={handleInputChange}
                                        className="input-field w-full uppercase"
                                        placeholder="UDYAM-KR-03-0000000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Date of Incorporation</label>
                                <input
                                    type="date"
                                    name="incorporationDate"
                                    value={formData.incorporationDate}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Document Upload Placeholders */}
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-300 font-medium">Upload Supporting Documents</p>
                        <p className="text-gray-500 text-sm mt-1">
                            {userType === 'business'
                                ? 'Incorporation Certificate, GST Certificate, PAN Card'
                                : 'Aadhar Card (Front & Back), PAN Card'}
                        </p>
                        <button type="button" className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-blue-400 rounded-lg text-sm transition-colors">
                            Browse Files
                        </button>
                    </div>

                    {/* DPDP Consent */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                                required
                            />
                            <div className="text-sm text-gray-300">
                                <span className="font-bold text-white">Data Consent (DPDP Act 2023):</span> I hereby consent to the collection and processing of my personal data for KYC verification purposes only. I understand my rights to access, correct, and withdraw this consent as per the Privacy Policy.
                            </div>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!formData.consent}
                        className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit for Verification
                    </button>
                </form>
            </div>
        </div>
    );
};

export default KYCVerification;
