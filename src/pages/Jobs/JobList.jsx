import { useState, useEffect } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data for now
        setTimeout(() => {
            setJobs([
                { id: 1, title: 'Senior React Developer', company: 'Tech Solutions Inc.', location: 'Bangalore', type: 'Full-time', salary: '₹15L - ₹25L' },
                { id: 2, title: 'Marketing Manager', company: 'Green Earth Cafe', location: 'Mumbai', type: 'Full-time', salary: '₹8L - ₹12L' },
                { id: 3, title: 'Interior Designer', company: 'Urban Decor', location: 'Delhi', type: 'Contract', salary: '₹5L - ₹8L' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Search Jobs</h1>
                <button
                    onClick={() => window.location.href = '/jobs/post'}
                    className="btn-primary"
                >
                    Post a Job
                </button>
            </div>

            {/* Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Job title or keyword" className="input-field" />
                <input type="text" placeholder="Location" className="input-field" />
                <select className="input-field text-gray-400">
                    <option>Job Type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                </select>
            </div>

            {/* Job List */}
            {loading ? (
                <div className="text-center text-gray-400 py-12">Loading jobs...</div>
            ) : (
                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="card flex flex-col md:flex-row justify-between items-start md:items-center p-6 hover:border-blue-500 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                                    💼
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                                    <p className="text-blue-400 text-sm">{job.company}</p>
                                    <div className="flex gap-4 mt-2 text-xs text-gray-400">
                                        <span>📍 {job.location}</span>
                                        <span>💰 {job.salary}</span>
                                        <span>⏰ {job.type}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => window.location.href = `/jobs/apply/${job.id}`}
                                className="mt-4 md:mt-0 px-4 py-2 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobList;
