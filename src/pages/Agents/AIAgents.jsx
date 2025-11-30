import { useState, useRef, useEffect } from 'react';

const AIAgents = () => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! I am your Ez Search AI Assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Workflow State
    const [workflow, setWorkflow] = useState(null); // 'b2b-lead', 'd2c-lead', 'email-draft', 'payment-check'
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI processing time
        setTimeout(() => {
            let botResponse = "";

            if (workflow) {
                botResponse = handleWorkflowStep(input);
            } else {
                botResponse = determineWorkflow(input);
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    const determineWorkflow = (query) => {
        const q = query.toLowerCase();

        // Payment Monitoring Trigger
        if (q.includes('payment') || q.includes('escrow') || q.includes('transaction')) {
            setWorkflow('payment-check');
            setStep(1);
            return "I can help you track your Escrow payments. Please provide the **Transaction ID** (e.g., TXN-1001).";
        }

        // B2B Lead Gen Trigger (Premium)
        if (q.includes('b2b') && (q.includes('lead') || q.includes('generate'))) {
            setWorkflow('b2b-lead');
            setStep(1);
            return "I can help you generate **Premium B2B leads**. First, what **industry** are you targeting? (e.g., IT, Manufacturing, Retail)";
        }

        // D2C Lead Gen Trigger (Premium)
        if (q.includes('d2c') && (q.includes('lead') || q.includes('generate'))) {
            setWorkflow('d2c-lead');
            setStep(1);
            return "For **Premium D2C lead generation**, understanding your audience is key. What is your target **demographic**? (e.g., Millennials, Parents, Students)";
        }

        // Lead Conversion (Email Draft) Trigger
        if (q.includes('email') || q.includes('draft') || q.includes('convert')) {
            setWorkflow('email-draft');
            setStep(1);
            return "I can help you draft a high-converting cold email. Who is the **recipient persona**? (e.g., CEO, HR Manager, Homeowner)";
        }

        // Standard Responses (Indian Context)
        if (q.includes('gst') || q.includes('tax')) return "I can help you with Indian GST compliance. You can use our GST Calculator for CGST/SGST breakdowns or the Invoice Generator for HSN-compliant invoices. Remember to file GSTR-1 by the 11th and GSTR-3B by the 20th of every month.";
        if (q.includes('job') || q.includes('hiring')) return "Looking to hire in India? You can post a new job listing from the Dashboard. We support salary ranges in LPA (Lakhs Per Annum) and major Indian cities.";
        if (q.includes('business') || q.includes('list')) return "To list your business, go to the 'Businesses' tab. Our plans start from ₹499/month. Ensure your GSTIN is updated for tax benefits on the subscription.";

        return "I can assist with **Payment Monitoring**, **Premium Lead Gen**, GST tools, or business listings. Try asking: 'Check payment status' or 'Generate B2B leads'.";
    };

    const handleWorkflowStep = (input) => {
        const currentData = { ...formData };

        // Payment Monitoring Workflow
        if (workflow === 'payment-check') {
            if (step === 1) {
                // Mock lookup
                const mockStatus = input.toUpperCase() === 'TXN-1001' ? 'Held in Escrow' :
                    input.toUpperCase() === 'TXN-1002' ? 'Released to Seller' : 'Not Found';
                setWorkflow(null);
                setStep(0);
                return `Transaction **${input.toUpperCase()}** status: **${mockStatus}**.\n\n${mockStatus === 'Held in Escrow' ? 'Funds are secure. You can release them from the Payments dashboard once you are satisfied.' : ''}`;
            }
        }

        // B2B Workflow (Premium)
        if (workflow === 'b2b-lead') {
            if (step === 1) {
                setFormData({ ...currentData, industry: input });
                setStep(2);
                return "Got it. What is the target **location**? (e.g., Bangalore, Mumbai, Pan-India)";
            }
            if (step === 2) {
                setWorkflow(null);
                setStep(0);
                setFormData({});
                return `Searching for **${currentData.industry}** businesses in **${input}** (Premium Database)...\n\nHere are 3 high-value leads:\n1. **TechSolutions Pvt Ltd** - Whitefield, Bangalore (IT Services) - *Verified Contact*\n2. **Innovate Corp** - Koramangala, Bangalore (SaaS Product) - *Recent Funding*\n3. **Global Systems** - Electronic City, Bangalore (Consulting) - *Hiring Aggressively*\n\nWould you like to export this list to CSV?`;
            }
        }

        // D2C Workflow (Premium)
        if (workflow === 'd2c-lead') {
            if (step === 1) {
                setFormData({ ...currentData, demographic: input });
                setStep(2);
                return "Understood. What is their primary **interest** or behavior? (e.g., Online Shoppers, Fitness Enthusiasts)";
            }
            if (step === 2) {
                setWorkflow(null);
                setStep(0);
                setFormData({});
                return `Targeting **${currentData.demographic}** interested in **${input}**.\n\nPremium Strategy Suggestion:\n- **Channel**: Instagram Reels & YouTube Shorts\n- **Ad Copy Focus**: "Upgrade your lifestyle with our premium collection."\n- **Estimated Reach**: 1.2M users in India.\n- **CAC Estimate**: ₹150-₹200 per user.\n\nShall I draft a marketing SMS or Email for this campaign?`;
            }
        }

        // Email Draft Workflow
        if (workflow === 'email-draft') {
            if (step === 1) {
                setFormData({ ...currentData, recipient: input });
                setStep(2);
                return "What is your core **value proposition** or offer? (e.g., AI Recruitment Tool, 20% Discount)";
            }
            if (step === 2) {
                setWorkflow(null);
                setStep(0);
                setFormData({});
                return `Here is a draft for the **${currentData.recipient}**:\n\n**Subject**: Transform your workflow with our solution\n\nHi [Name],\n\nI noticed you are leading initiatives at [Company]. As a ${currentData.recipient}, you likely face challenges with efficiency.\n\nWe offer **${input}** that can streamline your operations effectively.\n\nWould you be open to a 10-minute call next Tuesday?\n\nBest,\n[Your Name]`;
            }
        }

        return "I didn't catch that. Let's start over.";
    };

    const suggestions = [
        "Check Payment Status",
        "Generate B2B Leads",
        "Find D2C Audience",
        "Draft Cold Email"
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-100px)]">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">AI Agents</h1>
                <p className="text-gray-400">Your intelligent assistant for business operations</p>
            </div>

            <div className="flex-1 bg-gray-900/50 rounded-xl border border-gray-700 flex flex-col overflow-hidden">
                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-6 py-4 ${msg.type === 'user'
                                ? 'bg-blue-600 text-white rounded-br-none'
                                : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                                }`}>
                                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-800 rounded-2xl rounded-bl-none px-6 py-4 border border-gray-700 flex gap-2 items-center">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                    {/* Suggestions */}
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setInput(s)}
                                className="whitespace-nowrap px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded-full transition-colors border border-gray-600"
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything about your business..."
                            className="flex-1 bg-gray-900 border border-gray-600 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 rounded-xl font-medium transition-colors flex items-center gap-2"
                        >
                            <span>Send</span>
                            <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgents;
