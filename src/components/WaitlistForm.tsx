'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { waitlistSchema, type WaitlistFormData } from '@/lib/validations'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Waitlist submission:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-caring-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              You're on the List!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for joining our waitlist. We'll notify you as soon as CaringIQ is available in your area.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Join Another Person
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 bg-caring-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be Among the First to Experience CaringIQ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to Cari, your intelligent care companion. 
            Plus, receive special founding member benefits.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  {...register('firstName')}
                  type="text"
                  id="firstName"
                  className="input-field"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  {...register('lastName')}
                  type="text"
                  id="lastName"
                  className="input-field"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="careRole" className="block text-sm font-medium text-gray-700 mb-2">
                Your Care Role *
              </label>
              <select
                {...register('careRole')}
                id="careRole"
                className="input-field"
              >
                <option value="">Select your role</option>
                <option value="primary-caregiver">Primary Caregiver</option>
                <option value="secondary-caregiver">Secondary Caregiver</option>
                <option value="family-coordinator">Family Coordinator</option>
                <option value="healthcare-advocate">Healthcare Advocate</option>
                <option value="other">Other</option>
              </select>
              {errors.careRole && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.careRole.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700 mb-2">
                How urgent is your need? *
              </label>
              <select
                {...register('urgencyLevel')}
                id="urgencyLevel"
                className="input-field"
              >
                <option value="">Select urgency level</option>
                <option value="immediate">Immediate - Need help now</option>
                <option value="soon">Soon - Within the next few months</option>
                <option value="planning">Planning - Preparing for future needs</option>
                <option value="curious">Curious - Just exploring options</option>
              </select>
              {errors.urgencyLevel && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.urgencyLevel.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Joining Waitlist...' : 'Join the Waitlist'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By joining our waitlist, you'll receive updates about CaringIQ's launch and exclusive early access.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
} 