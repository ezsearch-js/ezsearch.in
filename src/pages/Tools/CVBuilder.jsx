import { useState } from 'react';

const CVBuilder = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        fullName: 'Alex Morgan',
        email: 'alex.morgan@example.com',
        phone: '+91 98765 43210',
        summary: 'Experienced software developer with a focus on building scalable web applications. Passionate about clean code and user-centric design.',
        experience: [
            { role: 'Senior Developer', company: 'Tech Solutions Inc.', duration: '2020 - Present' }
        ],
        education: [
            { degree: 'B.Tech in Computer Science', school: 'Tech University', year: '2016 - 2020' }
        ],
        skills: ['React', 'Node.js', 'Tailwind CSS', 'SQL']
    });

    const tabs = [
        { id: 'personal', label: 'Personal Info' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' }
    ];

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">AI CV Builder</h1>
                    <p className="text-gray-400 text-sm">Create a professional resume in minutes with AI assistance</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary">Save Draft</button>
                    <button className="btn-primary">Download PDF</button>
                </div>
            </div>

            <div className="flex gap-6 flex-1 min-h-0">
                {/* Editor Section */}
                <div className="w-1/2 flex flex-col bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-700">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === tab.id
                                        ? 'text-blue-500 border-b-2 border-blue-500 bg-blue-500/5'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form Content */}
                    <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                        {activeTab === 'personal' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="input-field w-full"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-1">Email</label>
                                        <input
                                            type="email"
                                            className="input-field w-full"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-1">Phone</label>
                                        <input
                                            type="text"
                                            className="input-field w-full"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="block text-gray-400 text-sm">Professional Summary</label>
                                        <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                            ✨ Generate with AI
                                        </button>
                                    </div>
                                    <textarea
                                        className="input-field w-full h-32 resize-none"
                                        value={formData.summary}
                                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className="space-y-4">
                                {formData.experience.map((exp, index) => (
                                    <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 relative group">
                                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            🗑️
                                        </button>
                                        <h3 className="font-bold text-white">{exp.role}</h3>
                                        <p className="text-blue-400 text-sm">{exp.company}</p>
                                        <p className="text-gray-500 text-xs mt-1">{exp.duration}</p>
                                    </div>
                                ))}
                                <button className="w-full py-3 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2">
                                    <span>+</span> Add Experience
                                </button>
                            </div>
                        )}

                        {/* Placeholders for other tabs */}
                        {(activeTab === 'education' || activeTab === 'skills') && (
                            <div className="text-center py-10 text-gray-500">
                                <p>Section content coming soon...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Preview Section */}
                <div className="w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
                    <div className="bg-gray-100 border-b px-4 py-2 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Live Preview</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="flex-1 p-8 overflow-y-auto bg-white text-gray-800 font-sans">
                        <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide mb-2">{formData.fullName}</h1>
                            <div className="flex justify-center gap-4 text-sm text-gray-600">
                                <span>{formData.email}</span>
                                <span>•</span>
                                <span>{formData.phone}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Professional Summary</h2>
                            <p className="text-sm text-gray-700 leading-relaxed">{formData.summary}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Experience</h2>
                            <div className="space-y-4">
                                {formData.experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-gray-800">{exp.role}</h3>
                                            <span className="text-xs text-gray-500 font-medium">{exp.duration}</span>
                                        </div>
                                        <p className="text-sm text-blue-600 font-medium mb-1">{exp.company}</p>
                                        <p className="text-sm text-gray-600">Led development of core features and improved system performance by 40%.</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {formData.skills.map((skill, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVBuilder;
