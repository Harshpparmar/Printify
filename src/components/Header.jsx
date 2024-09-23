import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle dropdown on click
    const handleDropdownClick = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const navItems = [
        { name: 'Catalog', dropdownItems: [] },
        { name: 'How it works', dropdownItems: ['How Printify Works', 'Print On Demand', 'Printify Quality Promise', 'What to Sell?'] },
        { name: 'Pricing', dropdownItems: [] },
        { name: 'Blog', dropdownItems: [] },
        { name: 'Services', dropdownItems: ['Printify Studio', 'Printify Express Delivery', 'Transfer Products', 'Order In Bulk', 'Experts Program'] },
        { name: 'Use-cases', dropdownItems: ['Merch for Fans', 'Merch for eCommerce', 'Merch for Enterprises', 'Grow Your Store'] },
        { name: 'Need help?', dropdownItems: ['Help Center', 'Contacts', 'My Requests'] }
    ];

    const navItems2 = [
        'Catalog',
        'How it works',
        'Pricing',
        'Blog',
        'Services',
        'Use-cases',
        'Need help?',
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-3 py-3">
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="flex items-center mr-20">
                        <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="Logo" className="h-12 w-36" />
                    </div>

                    {/* Navigation */}
                    <nav className="flex space-x-6 font-roboto">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative dropdown">
                            <a
                                href="/#"
                                className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center"
                                onClick={(e) => {
                                e.preventDefault();
                                if (item.dropdownItems.length > 0) {
                                    handleDropdownClick(index);
                                }
                                }}
                            >
                                {item.name}
                                {item.dropdownItems.length > 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                                )}
                            </a>
                            
                            {item.dropdownItems.length > 0 && (
                                <div className={`absolute left-0 bg-white shadow-md rounded-md mt-2 p-2 w-48 transition-opacity duration-300 ease-in-out ${openDropdown === index ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                    <a key={dropdownIndex} href="#" className="block px-4 py-2 text-base hover:bg-gray-100 rounded transition-colors duration-200">
                                    {dropdownItem}
                                    </a>
                                ))}
                                </div>
                            )}
                            </div>
                        ))}
                    </nav>

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-4 ml-20 font-roboto">
                        <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded text-sm hover:text-green-500 transition-colors duration-200">
                            Log in
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                            Sign up
                        </button>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                        <img src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg" alt="Logo" className="h-10 w-10 ml-2" />
                    </div>
                    <div className="flex items-center space-x-4 ml-20 font-roboto">
                        <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded text-sm hover:text-green-500 transition-colors duration-200">
                        Log in
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                        Sign up
                        </button>
                    </div>
                    </div>
                </div>

            {/* Mobile Sidebar Menu  */}
            <div
                className={`font-roboto fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <nav className="p-4 space-y-4">
                    {navItems.map((item, index) => (
                    <div key={index} className="relative dropdown">
                        <a
                        href="/#"
                        className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            if (item.dropdownItems.length > 0) {
                            handleDropdownClick(index);
                            }
                        }}
                        >
                        {item.name}
                        {item.dropdownItems.length > 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                        )}
                        </a>
                        
                        {item.dropdownItems.length > 0 && (
                        <div className={`bg-white shadow-md rounded-md mt-2 p-2 w-48 transition-opacity duration-300 ease-in-out ${openDropdown === index ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <a key={dropdownIndex} href="#" className="block px-4 py-2 hover:bg-gray-100 rounded transition-colors duration-200">
                                {dropdownItem}
                            </a>
                            ))}
                        </div>
                        )}
                    </div>
                    ))}
                </nav>
            </div>

        </header>
    );
};

export default Header;
