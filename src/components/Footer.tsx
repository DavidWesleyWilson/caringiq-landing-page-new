'use client'

import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-caring-400 mb-4">
              CaringIQ
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering families with AI-powered caregiving support. Meet Cari, your intelligent 
              care companion designed to make caregiving less overwhelming and more effective.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-caring-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-caring-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-caring-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-caring-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-caring-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-gray-300 hover:text-caring-400 transition-colors">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-caring-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-caring-400 mr-3" />
                <a href="mailto:hello@caringiq.com" className="text-gray-300 hover:text-caring-400 transition-colors">
                  hello@caringiq.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-caring-400 mr-3" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-caring-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-caring-400 mr-3" />
                <span className="text-gray-300">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CaringIQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-caring-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-caring-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-caring-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for caregivers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 