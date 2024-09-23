import React from 'react';

const Incentives = () => {
    return (
        <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                <div className="flow-root">
                    <img className="mx-auto w-40 h-40" src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="Free Shipping Icon" />
                </div>
                </div>
                <div className="ml-16 mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0 text-left">
                <h3 className="text-xl font-poppins font-semibold capitalize text-green-600">CREATE</h3>
                <h3 className="text-xl font-poppins font-semibold text-gray-900">custom products</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
                </div>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                <div className="flow-root">
                    <img className="mx-auto w-40 h-40" src="https://printify.com/pfh/assets/legacy/your-products.png" alt="Customer Support Icon" />
                </div>
                </div>
                <div className="ml-16 mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0 text-left">
                <h3 className="text-xl font-poppins font-semibold capitalize text-green-600">SELL</h3>
                <h3 className="text-xl font-poppins font-semibold text-gray-900">on your terms</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">You choose the products, sale price, and where to sell</p>
                </div>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                <div className="flow-root">
                    <img className="mx-auto w-40 h-40" src="https://printify.com/pfh/assets/legacy/fullfillment.png" alt="Fast Checkout Icon" />
                </div>
                </div>
                <div className="ml-16 mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0 text-left">
                <h3 className="text-xl font-poppins font-semibold capitalize text-green-600">WE HANDLE</h3>
                <h3 className="text-xl font-poppins font-semibold text-gray-900">fulfillment</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto"> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
                </div>
            </div>
            
            </div>
        </div>
        </div>
    );
    };

export default Incentives;