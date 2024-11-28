import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
          About Us
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          SPHA SOLUTIONS offers reliable IT and mobile phone repair services to local communities and schools. 
          Our expertise ensures smooth operations and quality support for your technological needs. 
          Our Solid Web Development Services Enables Us to Provide Solutions Within Any Industry.
        </p>
        <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-green-500">
          <p className="text-sm text-gray-300 font-bold">
            Disclaimer: This content is for educational purposes as part of the SALGA Tech Games projects.
          </p>
        </div>
      </div>
    </section>
  );
}