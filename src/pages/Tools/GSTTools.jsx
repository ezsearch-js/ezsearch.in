import { useState } from 'react';
import GSTCalculator from './GSTCalculator';
import InvoiceGenerator from './InvoiceGenerator';

const GSTTools = () => {
    const [view, setView] = useState('dashboard'); // dashboard, calculator, invoice

    const renderDashboard = () => (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-white">Compliance Dashboard</h1>

            {/* Compliance Score Card */}
            <div className="card p-6">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-1">Overall Compliance Score</h2>
                        <p className="text-gray-400 text-sm">Based on your GST filings and regulatory adherence</p>
                    </div>
                    <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
                        Excellent
                    </div>
                </div>

                <div className="mb-2 flex justify-between items-end">
                    <span className="text-4xl font-bold text-white">94%</span>
                    <span className="text-gray-400 text-sm mb-1">+2.5% from last month</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '94%' }}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">FILINGS DUE</div>
                        <div className="text-xl font-bold text-white">0</div>
                        <div className="text-green-500 text-xs mt-1">All caught up</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">PENDING ACTIONS</div>
                        <div className="text-xl font-bold text-white">3</div>
                        <div className="text-yellow-500 text-xs mt-1">Requires attention</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">NEXT DUE DATE</div>
                        <div className="text-xl font-bold text-white">Nov 20</div>
                        <div className="text-blue-400 text-xs mt-1">GSTR-3B</div>
                    </div>
                </div>
            </div>

            {/* Tools Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    onClick={() => setView('calculator')}
                    className="card p-8 flex flex-col items-center justify-center text-center hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                    <div className="text-4xl mb-4 text-blue-500 group-hover:scale-110 transition-transform">🧮</div>
                    <h3 className="text-xl font-bold text-white mb-2">GST Calculator</h3>
                    <p className="text-gray-400">Calculate tax amounts accurately</p>
                </div>
                <div
                    onClick={() => setView('invoice')}
                    className="card p-8 flex flex-col items-center justify-center text-center hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                    <div className="text-4xl mb-4 text-blue-500 group-hover:scale-110 transition-transform">📄</div>
                    <h3 className="text-xl font-bold text-white mb-2">Generate Invoice</h3>
                    <p className="text-gray-400">Create GST compliant invoices</p>
                </div>
            </div>

            {/* Detailed GST Card */}
            <div className="card p-6 border-l-4 border-l-blue-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl">
                            🏛️
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">GST Compliance</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <span>GSTIN: 29ABCDE1234F1Z5</span>
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                <span className="text-green-500 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary">Manage GST</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-gray-700 border-b mb-4">
                    <div>
                        <div className="text-gray-400 text-xs mb-1">STATUS</div>
                        <div className="text-white font-medium flex items-center gap-2">
                            <span className="text-green-500">●</span> Compliant
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-xs mb-1">LAST FILED</div>
                        <div className="text-white font-medium">Oct 20, 2024</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-xs mb-1">FILING FREQUENCY</div>
                        <div className="text-white font-medium">Monthly</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-xs mb-1">JURISDICTION</div>
                        <div className="text-white font-medium">Karnataka</div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View History</button>
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">Download Certificates</button>
                </div>
            </div>

            {/* Checklist Section */}
            <div className="card">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Compliance Checklist</h2>
                    <button className="text-sm text-gray-400 hover:text-white">View All</button>
                </div>

                <div className="space-y-3">
                    {[
                        { title: 'GST Registration', status: 'Compliant', desc: 'Valid GSTIN active', icon: '✅', color: 'green' },
                        { title: 'Data Localization', status: 'Compliant', desc: 'Data stored in India', icon: '✅', color: 'green' },
                        { title: 'KYC Verification', status: 'Pending', desc: '234 users pending', icon: '⚠️', color: 'yellow' },
                        { title: 'Professional Tax', status: 'Due Soon', desc: 'Payment due in 5 days', icon: '📅', color: 'blue' }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <span className="text-xl">{item.icon}</span>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-medium text-white">{item.title}</h4>
                                        <span className={`px-2 py-0.5 bg-${item.color}-500/10 text-${item.color}-500 text-[10px] rounded-full border border-${item.color}-500/20 uppercase tracking-wider`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {view !== 'dashboard' && (
                <button
                    onClick={() => setView('dashboard')}
                    className="mb-6 text-gray-400 hover:text-white flex items-center gap-2"
                >
                    <span>←</span> Back to Dashboard
                </button>
            )}

            {view === 'dashboard' && renderDashboard()}
            {view === 'calculator' && <GSTCalculator />}
            {view === 'invoice' && <InvoiceGenerator />}
        </div>
    );
};

export default GSTTools;
