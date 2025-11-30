import { useState } from 'react';

const InvoiceGenerator = () => {
    const [invoiceData, setInvoiceData] = useState({
        invoiceNo: 'INV-001',
        date: new Date().toISOString().split('T')[0],
        supplierName: 'Ez Search Business',
        supplierAddress: '123 Business Hub, Bangalore, Karnataka',
        supplierGstin: '29ABCDE1234F1Z5',
        clientName: '',
        clientAddress: '',
        clientGstin: '',
        placeOfSupply: 'Karnataka',
        isInterState: false,
        items: [{ description: '', hsn: '', quantity: 1, price: 0, gstRate: 18 }]
    });

    const [showPreview, setShowPreview] = useState(false);

    const addItem = () => {
        setInvoiceData({
            ...invoiceData,
            items: [...invoiceData.items, { description: '', hsn: '', quantity: 1, price: 0, gstRate: 18 }]
        });
    };

    const updateItem = (index, field, value) => {
        const newItems = [...invoiceData.items];
        newItems[index][field] = value;
        setInvoiceData({ ...invoiceData, items: newItems });
    };

    const removeItem = (index) => {
        const newItems = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData({ ...invoiceData, items: newItems });
    };

    const calculateTotals = () => {
        let taxableValue = 0;
        let totalTax = 0;

        invoiceData.items.forEach(item => {
            const amount = item.quantity * item.price;
            taxableValue += amount;
            totalTax += (amount * item.gstRate) / 100;
        });

        return {
            taxableValue,
            totalTax,
            grandTotal: taxableValue + totalTax
        };
    };

    const totals = calculateTotals();

    if (showPreview) {
        return (
            <div className="bg-white text-black p-8 max-w-3xl mx-auto rounded-lg shadow-xl min-h-[800px] font-sans">
                <div className="flex justify-between items-start mb-6 border-b-2 border-gray-800 pb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">TAX INVOICE</h1>
                        <p className="text-gray-500 mt-1">#{invoiceData.invoiceNo}</p>
                    </div>
                    <div className="text-right">
                        <h2 className="font-bold text-xl">{invoiceData.supplierName}</h2>
                        <p className="text-gray-600 text-sm max-w-xs ml-auto">{invoiceData.supplierAddress}</p>
                        <p className="text-gray-800 font-medium text-sm mt-1">GSTIN: {invoiceData.supplierGstin}</p>
                    </div>
                </div>

                <div className="flex justify-between mb-8">
                    <div className="w-1/2 pr-4">
                        <h3 className="text-gray-500 font-bold text-xs uppercase mb-2">Bill To</h3>
                        <p className="font-bold text-lg">{invoiceData.clientName || 'Client Name'}</p>
                        <p className="text-gray-600 text-sm whitespace-pre-wrap mb-1">{invoiceData.clientAddress || 'Client Address'}</p>
                        {invoiceData.clientGstin && <p className="text-gray-800 text-sm font-medium">GSTIN: {invoiceData.clientGstin}</p>}
                        <p className="text-gray-800 text-sm mt-1">Place of Supply: <span className="font-semibold">{invoiceData.placeOfSupply}</span></p>
                    </div>
                    <div className="text-right">
                        <div className="mb-2">
                            <span className="text-gray-500 font-bold text-xs uppercase block">Invoice Date</span>
                            <span className="font-medium">{invoiceData.date}</span>
                        </div>
                    </div>
                </div>

                <table className="w-full mb-8 text-sm">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-300">
                            <th className="text-left py-2 px-2">Description</th>
                            <th className="text-center py-2 px-2">HSN/SAC</th>
                            <th className="text-right py-2 px-2">Qty</th>
                            <th className="text-right py-2 px-2">Rate</th>
                            <th className="text-right py-2 px-2">Taxable Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.items.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-2 px-2">{item.description}</td>
                                <td className="text-center py-2 px-2">{item.hsn}</td>
                                <td className="text-right py-2 px-2">{item.quantity}</td>
                                <td className="text-right py-2 px-2">₹{item.price}</td>
                                <td className="text-right py-2 px-2">₹{(item.quantity * item.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-end">
                    <div className="w-72">
                        <div className="flex justify-between py-1 border-b border-gray-200 text-sm">
                            <span className="font-medium">Taxable Amount</span>
                            <span>₹{totals.taxableValue.toFixed(2)}</span>
                        </div>

                        {invoiceData.isInterState ? (
                            <div className="flex justify-between py-1 border-b border-gray-200 text-sm">
                                <span className="font-medium">IGST</span>
                                <span>₹{totals.totalTax.toFixed(2)}</span>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between py-1 border-b border-gray-200 text-sm">
                                    <span className="font-medium">CGST</span>
                                    <span>₹{(totals.totalTax / 2).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-gray-200 text-sm">
                                    <span className="font-medium">SGST</span>
                                    <span>₹{(totals.totalTax / 2).toFixed(2)}</span>
                                </div>
                            </>
                        )}

                        <div className="flex justify-between py-2 text-xl font-bold mt-2 border-t-2 border-gray-800">
                            <span>Total</span>
                            <span>₹{totals.grandTotal.toFixed(2)}</span>
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">
                            (Amount in Words: {convertNumberToWords(Math.round(totals.grandTotal))} Rupees Only)
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-sm mb-2">Terms & Conditions:</h4>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>Goods once sold will not be taken back.</li>
                        <li>Interest @ 18% p.a. will be charged if payment is not made within the due date.</li>
                        <li>Subject to Bangalore Jurisdiction only.</li>
                    </ul>
                </div>

                <div className="mt-8 flex justify-center gap-4 print:hidden">
                    <button onClick={() => window.print()} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Print / Save PDF</button>
                    <button onClick={() => setShowPreview(false)} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Edit Invoice</button>
                </div>
            </div>
        );
    }

    return (
        <div className="card max-w-4xl mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-4xl">📄</span> GST Invoice Generator
                </h2>
                <button onClick={() => setShowPreview(true)} className="btn-primary">Preview Invoice</button>
            </div>

            {/* Supplier Details (Auto-filled usually, but editable here) */}
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
                <h3 className="text-sm font-bold text-blue-400 uppercase mb-3">Supplier Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">Your Business Name</label>
                        <input
                            type="text"
                            value={invoiceData.supplierName}
                            onChange={(e) => setInvoiceData({ ...invoiceData, supplierName: e.target.value })}
                            className="input-field w-full text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">Your GSTIN</label>
                        <input
                            type="text"
                            value={invoiceData.supplierGstin}
                            onChange={(e) => setInvoiceData({ ...invoiceData, supplierGstin: e.target.value })}
                            className="input-field w-full text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Invoice & Client Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Invoice Number</label>
                    <input
                        type="text"
                        value={invoiceData.invoiceNo}
                        onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNo: e.target.value })}
                        className="input-field w-full"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Date</label>
                    <input
                        type="date"
                        value={invoiceData.date}
                        onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
                        className="input-field w-full"
                    />
                </div>

                <div className="md:col-span-2 border-t border-gray-700 pt-4 mt-2">
                    <h3 className="text-sm font-bold text-blue-400 uppercase mb-3">Client Details</h3>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-2">Client Name</label>
                    <input
                        type="text"
                        value={invoiceData.clientName}
                        onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
                        className="input-field w-full"
                        placeholder="Enter client name"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Client GSTIN (Optional)</label>
                    <input
                        type="text"
                        value={invoiceData.clientGstin}
                        onChange={(e) => setInvoiceData({ ...invoiceData, clientGstin: e.target.value })}
                        className="input-field w-full"
                        placeholder="29..."
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-gray-400 text-sm mb-2">Client Address</label>
                    <textarea
                        value={invoiceData.clientAddress}
                        onChange={(e) => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })}
                        className="input-field w-full h-20 resize-none"
                        placeholder="Enter client address"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Place of Supply</label>
                    <input
                        type="text"
                        value={invoiceData.placeOfSupply}
                        onChange={(e) => setInvoiceData({ ...invoiceData, placeOfSupply: e.target.value })}
                        className="input-field w-full"
                        placeholder="State"
                    />
                </div>
                <div className="flex items-end mb-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={invoiceData.isInterState}
                            onChange={(e) => setInvoiceData({ ...invoiceData, isInterState: e.target.checked })}
                            className="w-5 h-5 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-white text-sm">Inter-State Supply (IGST)</span>
                    </label>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Items</h3>
                <div className="space-y-4">
                    {invoiceData.items.map((item, index) => (
                        <div key={index} className="flex flex-wrap md:flex-nowrap gap-4 items-start bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                            <div className="w-full md:flex-1">
                                <label className="block text-gray-500 text-xs mb-1">Description</label>
                                <input
                                    type="text"
                                    value={item.description}
                                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                                    className="input-field w-full"
                                    placeholder="Item description"
                                />
                            </div>
                            <div className="w-1/3 md:w-24">
                                <label className="block text-gray-500 text-xs mb-1">HSN/SAC</label>
                                <input
                                    type="text"
                                    value={item.hsn}
                                    onChange={(e) => updateItem(index, 'hsn', e.target.value)}
                                    className="input-field w-full"
                                    placeholder="HSN"
                                />
                            </div>
                            <div className="w-1/3 md:w-20">
                                <label className="block text-gray-500 text-xs mb-1">Qty</label>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                                    className="input-field w-full"
                                />
                            </div>
                            <div className="w-1/3 md:w-28">
                                <label className="block text-gray-500 text-xs mb-1">Price</label>
                                <input
                                    type="number"
                                    value={item.price}
                                    onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value) || 0)}
                                    className="input-field w-full"
                                />
                            </div>
                            <div className="w-1/3 md:w-24">
                                <label className="block text-gray-500 text-xs mb-1">GST %</label>
                                <select
                                    value={item.gstRate}
                                    onChange={(e) => updateItem(index, 'gstRate', parseFloat(e.target.value))}
                                    className="input-field w-full"
                                >
                                    <option value={5}>5%</option>
                                    <option value={12}>12%</option>
                                    <option value={18}>18%</option>
                                    <option value={28}>28%</option>
                                </select>
                            </div>
                            <button
                                onClick={() => removeItem(index)}
                                className="mt-6 p-2 text-gray-500 hover:text-red-400 transition-colors"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    onClick={addItem}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2"
                >
                    <span>+</span> Add Item
                </button>
            </div>

            <div className="border-t border-gray-700 pt-6 flex justify-end">
                <div className="text-right">
                    <p className="text-gray-400 text-sm">Taxable Value: ₹{totals.taxableValue.toFixed(2)}</p>
                    <p className="text-gray-400 text-sm">Total Tax: ₹{totals.totalTax.toFixed(2)}</p>
                    <p className="text-3xl font-bold text-white mt-2">₹{totals.grandTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

// Helper function for amount in words (Simplified)
const convertNumberToWords = (amount) => {
    return amount; // Placeholder: In a real app, use a library like 'number-to-words'
};

export default InvoiceGenerator;
