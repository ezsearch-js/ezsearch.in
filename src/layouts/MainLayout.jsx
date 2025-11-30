import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'Jobs', path: '/jobs', icon: '💼' },
        { name: 'Business', path: '/businesses', icon: '🏢' },
        { name: 'Payments', path: '/payments', icon: '💳' },
        { name: 'Profile', path: '/profile', icon: '👤' },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar (Desktop) */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} hidden md:block`}>
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                    <span className="text-xl font-bold text-blue-500">EZ SEARCH</span>
                </div>
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                        >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 md:hidden z-50">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center justify-center w-full h-full ${location.pathname === item.path ? 'text-blue-500' : 'text-gray-400'}`}
                        >
                            <span className="text-xl mb-1">{item.icon}</span>
                            <span className="text-xs">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''} p-4 md:p-8 mb-16 md:mb-0`}>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
