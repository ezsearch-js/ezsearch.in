import { useState } from 'react';

const GSTCalculator = () => {
    const [amount, setAmount] = useState('');
    const [gstRate, setGstRate] = useState(18);
    const [type, setType] = useState('exclusive'); // exclusive or inclusive

    const calculateGST = () => {
        const principal = parseFloat(amount) || 0;
        let gstAmount = 0;
        let totalAmount = 0;
        let netAmount = 0;

        if (type === 'exclusive') {
            gstAmount = (principal * gstRate) / 100;
            totalAmount = principal + gstAmount;
            netAmount = principal;
        } else {
            gstAmount = principal - (principal * (100 / (100 + gstRate)));
            netAmount = principal - gstAmount;
            totalAmount = principal;
        }

        return {
            net: netAmount.toFixed(2),
            gst: gstAmount.toFixed(2),
            total: totalAmount.toFixed(2)
        };
    };

    const result = calculateGST();

    return (
        <div className="card max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🧮</span> GST Calculator
            </h2>

            <div className="space-y-6">
                {/* Tax Type Toggle */}
                <div className="flex bg-gray-800 p-1 rounded-lg">
                    <button
                        className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${type === 'exclusive' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setType('exclusive')}
                    >
                        GST Exclusive
                    </button>
                    <button
                        className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${type === 'inclusive' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setType('inclusive')}
                    >
                        GST Inclusive
                    </button>
                </div>

                {/* Amount Input */}
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Amount (₹)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="input-field w-full text-xl"
                        placeholder="Enter amount"
                    />
                </div>

                {/* GST Rate Selection */}
                <div>
                    <label className="block text-gray-400 text-sm mb-2">GST Rate (%)</label>
                    <div className="grid grid-cols-4 gap-3">
                        {[5, 12, 18, 28].map((rate) => (
                            <button
                                key={rate}
                                onClick={() => setGstRate(rate)}
                                className={`py-2 rounded-lg border transition-colors ${gstRate === rate
                                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                                    }`}
                            >
                                {rate}%
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 space-y-4 mt-8">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Net Amount</span>
                        <span className="text-white font-mono text-lg">₹{result.net}</span>
                    </div>

                    <div className="bg-gray-900/50 p-3 rounded-lg space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">CGST ({gstRate / 2}%)</span>
                            <span className="text-blue-400 font-mono">₹{(result.gst / 2).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">SGST ({gstRate / 2}%)</span>
                            <span className="text-blue-400 font-mono">₹{(result.gst / 2).toFixed(2)}</span>
                        </div>
                        <div className="h-px bg-gray-700 my-1"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Total GST ({gstRate}%)</span>
                            <span className="text-blue-400 font-mono text-lg">+ ₹{result.gst}</span>
                        </div>
                    </div>

                    <div className="h-px bg-gray-700 my-2"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-white font-bold">Total Amount</span>
                        <span className="text-green-400 font-mono text-2xl font-bold">₹{result.total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GSTCalculator;
