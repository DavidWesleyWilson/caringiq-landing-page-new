'use client'

import { Brain, MessageCircle, Calendar, FileText, Shield, Users } from 'lucide-react'

const features = [
  {
    id: 'ai-assistant',
    title: 'AI Care Companion',
    description: 'Cari understands your unique caregiving situation and provides personalized support, reminders, and guidance.',
    icon: Brain,
  },
  {
    id: 'communication',
    title: 'Family Coordination',
    description: 'Keep everyone in your care circle updated with real-time messaging, photo sharing, and task assignments.',
    icon: MessageCircle,
  },
  {
    id: 'scheduling',
    title: 'Smart Scheduling',
    description: 'Never miss important appointments, medication times, or care tasks with intelligent reminders.',
    icon: Calendar,
  },
  {
    id: 'documents',
    title: 'Document Organization',
    description: 'Securely store and organize medical records, legal documents, and important care information.',
    icon: FileText,
  },
  {
    id: 'security',
    title: 'Privacy & Security',
    description: 'Your family\'s sensitive information is protected with enterprise-grade security and HIPAA compliance.',
    icon: Shield,
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Get help whenever you need it with round-the-clock AI assistance and human support when required.',
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Care Better
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CaringIQ combines AI intelligence with human-centered design to make caregiving 
            less overwhelming and more effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-caring-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-caring-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Caregiving Experience?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of families who are already using CaringIQ to care better.
          </p>
          <a href="#waitlist" className="btn-primary">
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  )
} 