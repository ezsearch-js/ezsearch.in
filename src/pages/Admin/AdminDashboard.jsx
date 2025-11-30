import { useState } from 'react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data
    const stats = [
        { label: 'Total Users', value: '12,345', change: '+12%', icon: '👥' },
        { label: 'Total Businesses', value: '843', change: '+5%', icon: '🏢' },
        { label: 'Active Jobs', value: '156', change: '+8%', icon: '💼' },
        { label: 'Total Revenue', value: '₹45.2L', change: '+15%', icon: '💰' },
    ];

    const users = [
        { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'User', status: 'Active', joined: '2025-11-01' },
        { id: 2, name: 'Priya Singh', email: 'priya@techsol.com', role: 'Business', status: 'Verified', joined: '2025-10-28' },
        { id: 3, name: 'Amit Verma', email: 'amit@decor.com', role: 'Business', status: 'Pending', joined: '2025-11-15' },
        { id: 4, name: 'Sneha Gupta', email: 'sneha@example.com', role: 'User', status: 'Active', joined: '2025-11-20' },
    ];

    const dbStats = [
        { table: 'users', count: 12345, size: '45 MB', lastUpdated: '2 mins ago' },
        { table: 'businesses', count: 843, size: '12 MB', lastUpdated: '5 mins ago' },
        { table: 'jobs', count: 156, size: '2 MB', lastUpdated: '1 hour ago' },
        { table: 'transactions', count: 5678, size: '128 MB', lastUpdated: '30 secs ago' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                    <p className="text-gray-400">Manage your platform, users, and database.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700">
                        Settings
                    </button>
                    <button className="btn-primary">Download Report</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="card p-6 flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <span className="text-green-400 text-xs font-medium">{stat.change} vs last month</span>
                        </div>
                        <div className="text-3xl opacity-80">{stat.icon}</div>
                    </div>
                ))}
            </div>

            {/* Main Content Tabs */}
            <div className="flex gap-6 border-b border-gray-700">
                {['overview', 'users', 'database'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-2 capitalize font-medium transition-colors ${activeTab === tab
                                ? 'text-blue-400 border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="card p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <p className="text-gray-300 text-sm">
                                            <span className="font-bold text-white">New User Registration</span> - Rahul Sharma joined as a candidate.
                                        </p>
                                        <span className="ml-auto text-xs text-gray-500">2m ago</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card p-6">
                            <h3 className="text-xl font-bold text-white mb-4">System Health</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-300">Server CPU Usage</span>
                                        <span className="text-green-400">12%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-300">Memory Usage</span>
                                        <span className="text-yellow-400">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-300">Database Storage</span>
                                        <span className="text-blue-400">28%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="card overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-800 text-gray-400 text-sm uppercase">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Joined</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="p-4">
                                            <div>
                                                <div className="font-medium text-white">{user.name}</div>
                                                <div className="text-xs text-gray-500">{user.email}</div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-300">{user.role}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' || user.status === 'Verified'
                                                    ? 'bg-green-900/30 text-green-400'
                                                    : 'bg-yellow-900/30 text-yellow-400'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-400 text-sm">{user.joined}</td>
                                        <td className="p-4">
                                            <button className="text-blue-400 hover:text-blue-300 text-sm">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'database' && (
                    <div className="space-y-6">
                        <div className="card overflow-hidden">
                            <h3 className="text-xl font-bold text-white p-6 pb-2">Database Tables</h3>
                            <table className="w-full text-left">
                                <thead className="bg-gray-800 text-gray-400 text-sm uppercase">
                                    <tr>
                                        <th className="p-4">Table Name</th>
                                        <th className="p-4">Record Count</th>
                                        <th className="p-4">Size</th>
                                        <th className="p-4">Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {dbStats.map((stat, index) => (
                                        <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                                            <td className="p-4 font-mono text-blue-300">{stat.table}</td>
                                            <td className="p-4 text-white">{stat.count.toLocaleString()}</td>
                                            <td className="p-4 text-gray-400">{stat.size}</td>
                                            <td className="p-4 text-gray-500 text-sm">{stat.lastUpdated}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card p-6 text-center border-green-500/30 border">
                                <div className="text-green-400 text-4xl mb-2">✓</div>
                                <h4 className="text-white font-bold">Connection Status</h4>
                                <p className="text-gray-400 text-sm">Connected to SQLite</p>
                            </div>
                            <div className="card p-6 text-center border-blue-500/30 border">
                                <div className="text-blue-400 text-4xl mb-2">⟳</div>
                                <h4 className="text-white font-bold">Last Backup</h4>
                                <p className="text-gray-400 text-sm">Today, 04:00 AM</p>
                            </div>
                            <div className="card p-6 text-center border-yellow-500/30 border">
                                <div className="text-yellow-400 text-4xl mb-2">⚠</div>
                                <h4 className="text-white font-bold">Slow Queries</h4>
                                <p className="text-gray-400 text-sm">0 Detected</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
