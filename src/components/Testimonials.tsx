'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Daughter & Primary Caregiver',
    content: 'CaringIQ has been a game-changer for our family. Cari helps me coordinate care between my siblings and keeps track of all my mom&apos;s appointments and medications. I finally feel like I&apos;m not doing this alone.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Son & Care Coordinator',
    content: 'The AI assistant is incredibly intuitive. It understands the context of our situation and provides relevant suggestions. The document organization feature has saved us hours of searching for important papers.',
    avatar: '/avatars/michael.jpg',
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    role: 'Daughter & Healthcare Advocate',
    content: 'As someone who manages my father&apos;s complex medical care, CaringIQ has been invaluable. The scheduling features and communication tools help keep everyone in the loop without overwhelming anyone.',
    avatar: '/avatars/lisa.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Families Like Yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CaringIQ is helping real families navigate the challenges of caregiving 
            with confidence and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card relative">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-caring-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-caring-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-caring-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Families Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 