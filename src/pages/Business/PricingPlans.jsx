const PricingPlans = () => {
    const plans = [
        {
            name: 'Basic',
            price: '₹499',
            period: '/month',
            description: 'Essential features for small businesses starting out.',
            features: [
                'Basic Business Listing',
                '5 Job Postings / month',
                'Standard Support',
                'Basic Analytics'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Premium',
            price: '₹999',
            period: '/month',
            description: 'Advanced tools to grow your business presence.',
            features: [
                'Priority Business Listing',
                'Unlimited Job Postings',
                'Priority Support',
                'Advanced Analytics',
                'Verified Badge'
            ],
            cta: 'Upgrade Now',
            popular: true
        },
        {
            name: 'Business',
            price: '₹2499',
            period: '/month',
            description: 'Complete solution for established enterprises.',
            features: [
                'Featured Business Listing',
                'Unlimited Job Postings',
                'Dedicated Account Manager',
                'Custom Analytics Reports',
                'API Access',
                'AI-Powered Insights'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="py-10">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-white mb-4">Choose the Right Plan for Your Business</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Unlock powerful tools to manage your listings, post jobs, and grow your reach with our flexible pricing options.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`card relative flex flex-col p-8 transition-transform hover:-translate-y-2 ${plan.popular ? 'border-2 border-blue-500 shadow-blue-500/20 shadow-lg scale-105 z-10' : 'border border-gray-700'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                        </div>

                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            <span className="text-gray-500">{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="text-green-500 mt-0.5">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                            }`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-500 text-sm">
                    Need a custom enterprise solution? <a href="#" className="text-blue-400 hover:underline">Contact our sales team</a>
                </p>
            </div>
        </div>
    );
};

export default PricingPlans;
