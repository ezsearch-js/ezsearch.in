import { Link } from 'react-router-dom';

const Dashboard = () => {
    const stats = [
        { label: 'Cache Hit Rate', value: '89%', subtext: 'Last 24 hours' },
        { label: 'Avg Response Time', value: '245ms', subtext: 'Global average' },
        { label: 'SEO Score', value: '94', subtext: 'On-page optimization' },
        { label: 'Optimizations', value: '18', subtext: 'Pending review' },
    ];

    const quickActions = [
        { name: 'Search Jobs', icon: '💼', path: '/jobs', color: 'bg-blue-600' },
        { name: 'Find Businesses', icon: '🏢', path: '/businesses', color: 'bg-indigo-600' },
        { name: 'Make Payment', icon: '💳', path: '/payments', color: 'bg-green-600' },
        { name: 'GST Tools', icon: '📄', path: '/tools/gst', color: 'bg-purple-600' },
        { name: 'AI Agents', icon: '🤖', path: '/agents', color: 'bg-pink-600' },
        { name: 'Admin', icon: '🛡️', path: '/admin', color: 'bg-gray-700' },
        { name: 'Compliance', icon: '📊', path: '/compliance', color: 'bg-teal-600' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">Welcome to EZ SEARCH</h1>
                <p className="text-gray-400 mt-2">Find Jobs, Businesses & Services in India</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="card hover:border-blue-500 transition-colors cursor-pointer">
                        <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                        <p className="text-gray-500 text-xs mt-2">{stat.subtext}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {quickActions.map((action, index) => (
                        <Link key={index} to={action.path} className="card flex flex-col items-center justify-center p-6 hover:bg-gray-800 transition-all hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3 ${action.color} bg-opacity-20 text-${action.color.replace('bg-', '')}`}>
                                {action.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-300">{action.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* AI Job Recommendations */}
            <div className="card bg-gradient-to-r from-gray-800 to-gray-900 border-blue-900/30">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            <span className="text-blue-400">✨</span> AI Job Recommendations
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">AI-powered job matching based on your skills and experience</p>
                    </div>
                    <button className="btn-primary text-sm">Find AI Matches</button>
                </div>

                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="text-gray-500 max-w-md">Discover jobs perfectly matched to your profile using AI. Complete your profile to get started.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
