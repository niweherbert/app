import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FireSafety Pro</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner in fire safety solutions for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-red-400 transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#safety" className="hover:text-red-400 transition-colors">Safety Tips</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Installation</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Inspection</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Stay updated with fire safety tips and news
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} FireSafety Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
