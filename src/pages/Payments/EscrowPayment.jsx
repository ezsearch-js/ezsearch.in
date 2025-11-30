import { useState } from 'react';

const EscrowPayment = () => {
    const [balance, setBalance] = useState({ available: 25000, inEscrow: 15000 });
    const [transactions, setTransactions] = useState([
        { id: 'TXN-1001', date: '2024-11-28', party: 'TechSolutions Pvt Ltd', amount: 10000, status: 'Held', type: 'Service' },
        { id: 'TXN-1002', date: '2024-11-25', party: 'Creative Design Studio', amount: 5000, status: 'Released', type: 'Product' },
        { id: 'TXN-1003', date: '2024-11-20', party: 'Global Systems', amount: 5000, status: 'Disputed', type: 'Service' },
    ]);
    const [activeTab, setActiveTab] = useState('overview'); // overview, create

    const handleRelease = (id) => {
        setTransactions(transactions.map(t =>
            t.id === id ? { ...t, status: 'Released' } : t
        ));
        // Logic to move funds from escrow to seller would go here
        alert(`Funds for ${id} released successfully!`);
    };

    const handleDispute = (id) => {
        setTransactions(transactions.map(t =>
            t.id === id ? { ...t, status: 'Disputed' } : t
        ));
        alert(`Transaction ${id} has been marked for dispute resolution.`);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="text-3xl">🛡️</span> Escrow Protection
                    </h1>
                    <p className="text-gray-400 text-sm">Secure payments for your peace of mind</p>
                </div>
                <button
                    onClick={() => setActiveTab('create')}
                    className="btn-primary flex items-center gap-2"
                >
                    <span>+</span> New Secure Transaction
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 border-l-4 border-l-green-500">
                    <div className="text-gray-400 text-sm mb-1">AVAILABLE BALANCE</div>
                    <div className="text-3xl font-bold text-white">₹{balance.available.toLocaleString()}</div>
                    <div className="text-green-500 text-xs mt-2 flex items-center gap-1">
                        <span>●</span> Ready to withdraw
                    </div>
                </div>
                <div className="card p-6 border-l-4 border-l-blue-500">
                    <div className="text-gray-400 text-sm mb-1">FUNDS IN ESCROW</div>
                    <div className="text-3xl font-bold text-white">₹{balance.inEscrow.toLocaleString()}</div>
                    <div className="text-blue-400 text-xs mt-2 flex items-center gap-1">
                        <span>●</span> Held safely
                    </div>
                </div>
                <div className="card p-6 border-l-4 border-l-purple-500">
                    <div className="text-gray-400 text-sm mb-1">TOTAL TRANSACTIONS</div>
                    <div className="text-3xl font-bold text-white">{transactions.length}</div>
                    <div className="text-purple-400 text-xs mt-2 flex items-center gap-1">
                        <span>●</span> Lifetime
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="card overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h2 className="text-lg font-bold text-white">Recent Transactions</h2>
                    <div className="flex gap-2">
                        <button className="text-sm text-gray-400 hover:text-white px-3 py-1 rounded bg-gray-800">All</button>
                        <button className="text-sm text-gray-400 hover:text-white px-3 py-1 rounded hover:bg-gray-800">Held</button>
                        <button className="text-sm text-gray-400 hover:text-white px-3 py-1 rounded hover:bg-gray-800">Released</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-800/50 text-gray-400 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Party</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {transactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-gray-800/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-blue-400">{txn.id}</td>
                                    <td className="px-6 py-4 text-white font-medium">{txn.party}</td>
                                    <td className="px-6 py-4 text-gray-400 text-sm">{txn.date}</td>
                                    <td className="px-6 py-4 text-white font-bold">₹{txn.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${txn.status === 'Held' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                txn.status === 'Released' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {txn.status === 'Held' && (
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleRelease(txn.id)}
                                                    className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded transition-colors"
                                                >
                                                    Release
                                                </button>
                                                <button
                                                    onClick={() => handleDispute(txn.id)}
                                                    className="text-xs bg-gray-700 hover:bg-red-600/80 text-gray-300 hover:text-white px-3 py-1.5 rounded transition-colors"
                                                >
                                                    Dispute
                                                </button>
                                            </div>
                                        )}
                                        {txn.status === 'Released' && (
                                            <span className="text-xs text-gray-500">Completed</span>
                                        )}
                                        {txn.status === 'Disputed' && (
                                            <span className="text-xs text-red-400">Under Review</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                    <h3 className="text-lg font-bold text-white mb-4">How Escrow Works</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                                <h4 className="text-white font-medium">Agree on Terms</h4>
                                <p className="text-gray-400 text-sm">Buyer and Seller agree on price and terms.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                                <h4 className="text-white font-medium">Secure Payment</h4>
                                <p className="text-gray-400 text-sm">Buyer pays Ez Search Escrow. Funds are held securely.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                                <h4 className="text-white font-medium">Release Funds</h4>
                                <p className="text-gray-400 text-sm">Funds are released to Seller only after Buyer approves.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
                    <h3 className="text-lg font-bold text-white mb-2">Ez Search Guarantee</h3>
                    <p className="text-gray-300 text-sm mb-6">
                        We protect every transaction. If you don't receive what you paid for, we'll help you get your money back.
                    </p>
                    <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium border border-white/10">
                        Read Protection Policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EscrowPayment;
