import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: 'Higher Profits',
            description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
            imageUrl: 'https://printify.com/pfh/assets/legacy/higher-profits.svg'
        },
        {
            id: 2,
            title: 'Robust Scaling',
            description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
            imageUrl: 'https://printify.com/pfh/assets/legacy/robust-scaling.svg'
        },
        {
            id: 3,
            title: 'Best Selection',
            description: 'With 900+ products and top quality brands, you can choose the best products for your business.',
            imageUrl: 'https://printify.com/pfh/assets/legacy/best-selection.svg'
        },
    ];


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 mt-10">
                {/* <h2 className="text-3xl lg:text-4xl font-medium text-center mb-12"></h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature) => (
                    <div
                    key={feature.id}
                    className="relative text-center p-6 rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
                        radial-gradient(circle 200px at 60% 60%, rgba(22, 163, 74, 0.1), transparent)
                        `,
                        backgroundSize: '6rem 4rem, 6rem 4rem, 100% 100%',
                        backgroundPosition: 'center',
                    }}
                    >
                    <img 
                        src={feature.imageUrl}  
                        className="h-32 w-32 object-contain mx-auto mb-4" 
                        alt={feature.title} 
                    />
                    <h3 className="text-xl font-semibold mb-2 font-noto">{feature.title}</h3>
                    <p className="text-gray-600 font-roboto text-center">{feature.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Features;