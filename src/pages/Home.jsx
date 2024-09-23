import React from 'react';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ProductPage from '../components/ProductPage';
import Incentives from '../components/Incentives';
import ClientSection from '../components/ClientSection';
import CtaSection from '../components/CtaSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div className="home">
            <section className="hero bg-gray-100 py-16 bg-cover bg-center">
                <div className="container mx-auto px-4 h-full flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center mx-10 my-20">
                        <div className="hero-content text-center lg:text-left lg:w-1/2 lg:mr-44">
                            <h1 className="text-4xl lg:text-6xl text-left font-medium mb-4 font-noto">Create and sell</h1>
                            <h1 className="text-4xl lg:text-6xl text-left font-medium mb-4 font-noto">custom products</h1>
                            <div className='mt-7'>
                                <p className="text-lg font-roboto mb-1 flex  items-center justify-left lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600 mr-2">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    100% Free to use
                                </p>
                                <p className="text-lg font-roboto mb-1 flex items-center justify-left lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600 mr-2">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    900+ High-Quality Products
                                </p>
                                <p className="text-lg font-roboto mb-1 flex items-center justify-left lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600 mr-2">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    Largest global print network
                                </p>
                            </div>
                            
                            <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
                                <button className="hero-button bg-green-500 text-white font-medium font-roboto py-2 px-8 rounded hover:bg-green-600 
                                    text-sm lg:text-base">
                                    Start for free
                                </button>
                                <button className="hero-button bg-transparent text-black border border-black font-medium font-roboto py-2 px-8 rounded flex items-center 
                                    text-sm lg:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        className="w-4 h-4 mr-2 lg:w-5 lg:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                                    How it works?
                                </button>
                            </div>


                            <p className="text-lg text-green-600 mt-4 font-roboto">Trusted by over 8M sellers around the world</p>
                        </div>

                        {/* Image Section */}
                        <div className="illustration lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                            <img src="/undraw_Art_lover_re_fn8g.png" 
                                alt="Illustration" 
                                className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" 
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Feature section */}
            <Features />
                < ProductPage />
                
                <Incentives />
                <ClientSection />

                
                <CtaSection />

                <Testimonials />
                
                <PricingSection />


            {/* Footer */}
            <Footer />

            
        </div>
    );
};

export default Home;
