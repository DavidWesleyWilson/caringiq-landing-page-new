'use client'

import { ArrowRight, Heart, Users, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-caring-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            You&apos;ve Been Caring Without Help
            <span className="text-caring-600 block">Long Enough</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Meet <strong>Cari</strong>, your intelligent care companion. CaringIQ helps family caregivers 
            coordinate care, organize tasks, and get the support they need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#waitlist"
              className="btn-primary inline-flex items-center justify-center"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#features"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Heart className="h-8 w-8 text-caring-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Families Helped</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-caring-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">AI Support</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-caring-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50%</h3>
              <p className="text-gray-600">Time Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 