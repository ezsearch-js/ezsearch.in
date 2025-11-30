import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobPosting = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        salaryMin: '',
        salaryMax: '',
        description: '',
        qualification: '',
        experience: '',
        skills: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Job Posted:', formData);
        alert('Job Posted Successfully!');
        navigate('/jobs');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Post a New Job</h1>
                <p className="text-gray-400">Find the perfect candidate by specifying your requirements.</p>
            </div>

            <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Job Details */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Job Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Job Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    placeholder="e.g. Senior React Developer"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    placeholder="Your Company Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    placeholder="e.g. Bangalore, Remote"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Job Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Min Salary (LPA)</label>
                                    <input
                                        type="number"
                                        name="salaryMin"
                                        value={formData.salaryMin}
                                        onChange={handleInputChange}
                                        className="input-field w-full"
                                        placeholder="e.g. 10"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Max Salary (LPA)</label>
                                    <input
                                        type="number"
                                        name="salaryMax"
                                        value={formData.salaryMax}
                                        onChange={handleInputChange}
                                        className="input-field w-full"
                                        placeholder="e.g. 20"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Job Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="input-field w-full h-32 resize-none"
                                    placeholder="Describe the role and responsibilities..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility Criteria */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Eligibility Criteria</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Minimum Qualification</label>
                                <select
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    required
                                >
                                    <option value="">Select Qualification</option>
                                    <option value="High School">High School</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelors">Bachelor's Degree (B.Tech, B.Sc, etc.)</option>
                                    <option value="Masters">Master's Degree (M.Tech, MBA, etc.)</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Experience Required</label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    required
                                >
                                    <option value="">Select Experience</option>
                                    <option value="Fresher">Fresher (0 years)</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5-8 Years">5-8 Years</option>
                                    <option value="8+ Years">8+ Years</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Required Skills</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    className="input-field w-full"
                                    placeholder="e.g. React, Node.js, TypeScript (Comma separated)"
                                    required
                                />
                            </div>
                        </div>
                    </section>

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
                            className="w-2/3 btn-primary py-3 shadow-lg shadow-blue-900/20"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobPosting;
