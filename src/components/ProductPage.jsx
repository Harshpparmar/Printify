import React from 'react';

const ProductPage = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 font-roboto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:order-last lg:pl-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl font-noto">
                Easily add your design to a wide range of products
              </h2>
              <p className="mt-10 text-lg leading-8 text-gray-500">
                With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className=" font-semibold text-green-600 flex items-center cursor-pointer hover:text-green-500 transition-colors duration-200">
                    All Products
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <img 
            src="https://printify.com/pfh/assets/animations/images/img_5.png" 
            alt="Product screenshot" 
            className="mt-3 mx-auto w-full max-w-lg rounded-xl shadow-green-500 shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:ax-w-sm sm:mr-4" 
            width="500" 
            height="500" 
            
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;