import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobApplication = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        aadhar: '',
        pan: '',
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
        // Mock submission
        console.log('Application Submitted:', { jobId, ...formData });
        alert('Application Submitted Successfully! KYC Verification Pending.');
        navigate('/jobs');
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Job Application</h1>
                <p className="text-gray-400">Complete your profile and KYC to apply for Job ID: #{jobId}</p>
            </div>

            <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Personal Details */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Personal Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    placeholder="As per Aadhar"
                                    required
                                />
                            </div>
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
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* KYC Verification */}
                    <div className="space-y-4 pt-4">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">KYC Verification (Mandatory)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-4 pt-4">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Resume / CV</h3>
                        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center bg-gray-800/30">
                            <div className="text-4xl mb-2">📄</div>
                            <p className="text-gray-300 font-medium">Upload your Resume</p>
                            <p className="text-gray-500 text-sm mt-1">PDF, DOCX (Max 5MB)</p>
                            <button type="button" className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-blue-400 rounded-lg text-sm transition-colors border border-gray-600">
                                Browse File
                            </button>
                        </div>
                    </div>

                    {/* DPDP Consent */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
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
                                <span className="font-bold text-white">Data Consent (DPDP Act 2023):</span> I hereby consent to the collection and processing of my personal data (including Aadhar/PAN) for employment verification and job application purposes. I understand my rights under the Privacy Policy.
                            </div>
                        </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/jobs')}
                            className="w-1/3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.consent}
                            className="w-2/3 btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplication;
