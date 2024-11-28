import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
          Contact
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-green-500" />
              <span className="text-lg text-gray-300">061 079 3813</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-green-500" />
              <a href="mailto:V.khumalo@yahoo.com" className="text-lg text-green-500 hover:text-green-400">
                V.khumalo@yahoo.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="h-6 w-6 text-green-500" />
              <span className="text-lg text-gray-300">@sphakhumz</span>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="h-6 w-6 text-green-500" />
              <a 
                href="https://web.facebook.com/?_rdc=1&_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-green-500 hover:text-green-400"
              >
                Visit our Facebook page
              </a>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-xl font-semibold mb-4 text-white">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-zinc-800 border-green-500 text-white shadow-sm focus:border-green-400 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-zinc-800 border-green-500 text-white shadow-sm focus:border-green-400 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-zinc-800 border-green-500 text-white shadow-sm focus:border-green-400 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}