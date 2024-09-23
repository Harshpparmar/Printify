import React from 'react';


const CtaSection = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-between flex-col lg:flex-row"
                >
                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                    <h2
                        className="font-manrope text-2xl text-white font-semibold mb-5 lg:mb-2"
                    >
                        Are you a large business looking 
                    </h2>
                    <h2
                        className="font-manrope text-2xl text-white font-semibold mb-5 lg:mb-2"
                    >
                        for custom solutions?
                    </h2>
                    </div>
                    <a
                    href="#"
                    className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-green-600 font-semibold py-4 px-8 transition-all duration-500"
                    >Talk to sales
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;