import { useState, useEffect } from 'react';

const BusinessList = () => {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        // Mock data with verification statuses
        setTimeout(() => {
            setBusinesses([
                {
                    id: 1,
                    name: 'Tech Solutions Inc.',
                    category: 'IT Services',
                    description: 'Leading provider of software solutions.',
                    location: 'Bangalore',
                    isGoogleVerified: true,
                    isKYCVerified: true,
                    coordinates: { lat: 12.9716, lng: 77.5946 }
                },
                {
                    id: 2,
                    name: 'Green Earth Cafe',
                    category: 'Food & Beverage',
                    description: 'Organic and healthy food options.',
                    location: 'Mumbai',
                    isGoogleVerified: true,
                    isKYCVerified: false,
                    coordinates: { lat: 19.0760, lng: 72.8777 }
                },
                {
                    id: 3,
                    name: 'Urban Decor',
                    category: 'Home & Living',
                    description: 'Modern furniture and home accessories.',
                    location: 'Delhi',
                    isGoogleVerified: false,
                    isKYCVerified: true,
                    coordinates: { lat: 28.7041, lng: 77.1025 }
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="flex gap-6 h-[calc(100vh-100px)]">
            {/* Left Side: Business List */}
            <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Find Businesses</h1>
                    <button className="btn-primary">List Your Business</button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for businesses, services, or categories..."
                        className="input-field pl-12 w-full"
                    />
                    <span className="absolute left-4 top-3 text-gray-400">🔍</span>
                </div>

                {/* Business Grid */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    {loading ? (
                        <div className="text-center text-gray-400 py-12">Loading businesses...</div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {businesses.map((business) => (
                                <div
                                    key={business.id}
                                    className="card hover:border-blue-500 transition-all cursor-pointer group"
                                    onClick={() => setSelectedLocation(business)}
                                >
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                                            🏢
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                                        {business.name}
                                                    </h3>
                                                    {business.isGoogleVerified && (
                                                        <span title="Google Verified Business" className="text-blue-400">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600">
                                                    {business.category}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{business.description}</p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center text-gray-500 text-xs">
                                                    <span className="mr-2">📍 {business.location}</span>
                                                </div>

                                                {business.isKYCVerified && (
                                                    <div className="flex items-center gap-1 px-2 py-1 bg-green-900/30 border border-green-500/30 rounded text-green-400 text-xs font-medium">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        KYC Verified & Secure
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side: Map View */}
            <div className="w-1/3 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hidden lg:block relative">
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <div className="text-center p-6">
                        <div className="text-6xl mb-4">🗺️</div>
                        <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {selectedLocation
                                ? `Showing location for: ${selectedLocation.name}`
                                : "Select a business to view on map"}
                        </p>
                        {selectedLocation && (
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 inline-block text-left">
                                <div className="text-blue-400 font-bold mb-1">{selectedLocation.name}</div>
                                <div className="text-gray-400 text-xs">{selectedLocation.location}</div>
                                <div className="text-gray-500 text-xs mt-1">Lat: {selectedLocation.coordinates.lat}, Lng: {selectedLocation.coordinates.lng}</div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Overlay for "Google Maps" simulation */}
                <div className="absolute bottom-4 right-4 bg-white/90 text-black px-2 py-1 text-xs font-bold rounded shadow">
                    Google
                </div>
            </div>
        </div>
    );
};

export default BusinessList;
