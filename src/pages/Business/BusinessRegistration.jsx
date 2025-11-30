import { useState } from 'react';

const BusinessRegistration = () => {
    const [businessType, setBusinessType] = useState('individual'); // 'individual', 'company'
    const [hasGST, setHasGST] = useState(false); // Only for individual
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        pan: '',
        aadhar: '',
        gstin: '',
        cin: '', // Corporate Identity Number
        address: '',
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
        console.log('Registration Data:', { businessType, hasGST, ...formData });
        alert('Business Registration Submitted! Pending Verification.');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Register Your Business</h1>
                <p className="text-gray-400">Join thousands of businesses on Ez Search. Complete KYC to get started.</p>
            </div>

            <div className="card p-8">
                {/* Business Type Selection */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <button
                        onClick={() => setBusinessType('individual')}
                        className={`px-6 py-3 rounded-xl font-medium transition-all border ${businessType === 'individual'
                                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20'
                                : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        <div className="text-lg mb-1">👤 Individual / Sole Proprietor</div>
                        <div className="text-xs opacity-75">Freelancers, Small Shop Owners</div>
                    </button>
                    <button
                        onClick={() => setBusinessType('company')}
                        className={`px-6 py-3 rounded-xl font-medium transition-all border ${businessType === 'company'
                                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20'
                                : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        <div className="text-lg mb-1">🏢 Registered Company</div>
                        <div className="text-xs opacity-75">Pvt Ltd, LLP, Partnership</div>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* GST Selection for Individuals */}
                    {businessType === 'individual' && (
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center justify-between">
                            <span className="text-gray-300">Do you have a GST Number?</span>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasGST"
                                        checked={hasGST}
                                        onChange={() => setHasGST(true)}
                                        className="text-blue-600 focus:ring-blue-500 bg-gray-700 border-gray-600"
                                    />
                                    <span className="text-white">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasGST"
                                        checked={!hasGST}
                                        onChange={() => setHasGST(false)}
                                        className="text-blue-600 focus:ring-blue-500 bg-gray-700 border-gray-600"
                                    />
                                    <span className="text-white">No</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Fields */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                {businessType === 'company' || hasGST ? 'Registered Business Name' : 'Shop / Business Name (Optional)'}
                            </label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder={businessType === 'company' ? 'e.g., TechSolutions Pvt Ltd' : 'e.g., Sharma General Store'}
                                required={businessType === 'company' || hasGST}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Owner / Director Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder="Full Name as per PAN"
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

                        {/* Conditional Fields */}
                        {(businessType === 'company' || hasGST) && (
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
                        )}

                        {businessType === 'company' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">CIN (Corporate Identity Number)</label>
                                <input
                                    type="text"
                                    name="cin"
                                    value={formData.cin}
                                    onChange={handleInputChange}
                                    className="input-field w-full uppercase"
                                    placeholder="U12345KA2024PTC123456"
                                    maxLength={21}
                                    required
                                />
                            </div>
                        )}

                        {businessType === 'individual' && !hasGST && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Aadhar Number (KYC)</label>
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

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="input-field w-full"
                                placeholder="+91 98765 43210"
                                maxLength={13}
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Registered Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="input-field w-full h-24 resize-none"
                                placeholder="Full business address with Pincode"
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Document Upload Section */}
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center bg-gray-800/30">
                        <div className="text-4xl mb-2">📂</div>
                        <h3 className="text-white font-medium mb-1">Upload Required Documents</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            {businessType === 'company'
                                ? 'Certificate of Incorporation, GST Certificate, PAN Card'
                                : hasGST
                                    ? 'GST Certificate, PAN Card'
                                    : 'Aadhar Card (Front & Back), PAN Card'}
                        </p>
                        <button type="button" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-blue-400 rounded-lg text-sm transition-colors border border-gray-600">
                            Select Files
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
                                <span className="font-bold text-white">Data Consent (DPDP Act 2023):</span> I hereby consent to the collection and processing of my personal and business data for registration and KYC verification purposes. I confirm that the information provided is accurate.
                            </div>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!formData.consent}
                        className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                    >
                        Complete Registration
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BusinessRegistration;
