'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { cn } from '@/lib/utils'
import { VENUE_TYPES, LOCATION_OPTIONS, PAIN_POINTS } from '@/lib/utils'
import { CheckCircle, Loader2, AlertCircle, MessageCircle } from 'lucide-react'

interface FormData {
  venueName: string
  yourRole: string
  venueType: string
  locations: string
  painPoints: string[]
  whatsapp: string
  email: string
  message: string
}

const initialFormData: FormData = {
  venueName: '',
  yourRole: '',
  venueType: '',
  locations: '',
  painPoints: [],
  whatsapp: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateField = (name: keyof FormData, value: string | string[]): string | undefined => {
    const strValue = typeof value === 'string' ? value : ''
    switch (name) {
      case 'venueName':
        if (!strValue.trim()) return 'Venue name is required'
        break
      case 'yourRole':
        if (!strValue.trim()) return 'Your role is required'
        break
      case 'venueType':
        if (!value || (Array.isArray(value) ? value.length === 0 : !strValue)) return 'Please select your venue type'
        break
      case 'locations':
        if (!value || (Array.isArray(value) ? value.length === 0 : !strValue)) return 'Please select number of locations'
        break
      case 'whatsapp':
        if (!strValue.trim()) return 'WhatsApp number is required'
        if (!/^(\+92|0)?3\d{9}$/.test(strValue.replace(/\s/g, ''))) return 'Enter a valid Pakistan mobile number'
        break
      case 'email':
        if (strValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(strValue)) return 'Enter a valid email address'
        break
      case 'message':
        if (!strValue.trim()) return 'Message is required'
        if (strValue.trim().length < 20) return 'Please tell us more (at least 20 characters)'
        break
    }
    return undefined
  }

  const handleChange = (name: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors(prev => {
      if (error === undefined) {
        const { [name]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [name]: error }
    })
  }

  const handlePainPointChange = (value: string) => {
    const painPoints = formData.painPoints.includes(value)
      ? formData.painPoints.filter(p => p !== value)
      : [...formData.painPoints, value]
    handleChange('painPoints', painPoints)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    let hasErrors = false

    ;(Object.keys(initialFormData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
        hasErrors = true
      }
    })

    if (formData.painPoints.length === 0) {
      newErrors.painPoints = 'Select at least one pain point'
      hasErrors = true
    }

    if (formData.painPoints.length === 0) {
      newErrors.painPoints = 'Select at least one pain point'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    setSubmitStatus('submitting')
    setErrorMessage('')

    try {
      // Submit to Formspree
      const formSpreeEndpoint = 'https://formspree.io/f/your-form-id' // Replace with actual Formspree endpoint

      const formPayload = {
        ...formData,
        painPoints: formData.painPoints.join(', '),
        _subject: `New Lead: ${formData.venueName} (${formData.venueType})`,
        _next: '/contact?success=true',
      }

      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or WhatsApp us directly.')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-brand-teal" aria-hidden="true" />
        </div>
        <h3 className="text-display-sm font-bold text-dark mb-3">Thanks for Reaching Out!</h3>
        <p className="text-body-lg text-gray-600 mb-6 max-w-md mx-auto">
          We&apos;ve received your details and will contact you on WhatsApp within 2 hours to schedule your free menu audit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" asChild>
            <a href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%20just%20submitted%20the%20form%20and%20would%20like%20to%20chat">Continue on WhatsApp</a>
          </Button>
          <Button variant="outline" onClick={() => setSubmitStatus('idle')}>
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Venue Info */}
      <fieldset className="space-y-6">
        <legend className="font-display font-semibold text-heading-md text-dark">Venue Details</legend>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Venue Name *"
            placeholder="e.g., The Spice Route"
            value={formData.venueName}
            onChange={(e) => handleChange('venueName', e.target.value)}
            error={errors.venueName}
            required
            autoComplete="organization"
          />
          <Select
            label="Your Role *"
            options={[
              { value: 'owner', label: 'Owner / Founder' },
              { value: 'operations', label: 'Operations Manager' },
              { value: 'marketing', label: 'Marketing Head' },
              { value: 'it', label: 'IT / Tech Lead' },
              { value: 'other', label: 'Other' },
            ]}
            value={formData.yourRole}
            onChange={(e) => handleChange('yourRole', e.target.value)}
            error={errors.yourRole}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Select
            label="Venue Type *"
            options={VENUE_TYPES}
            value={formData.venueType}
            onChange={(e) => handleChange('venueType', e.target.value)}
            error={errors.venueType}
            required
          />
          <Select
            label="Number of Locations *"
            options={LOCATION_OPTIONS}
            value={formData.locations}
            onChange={(e) => handleChange('locations', e.target.value)}
            error={errors.locations}
            required
          />
        </div>
      </fieldset>

      {/* Pain Points */}
      <fieldset className="space-y-4">
        <legend className="font-display font-semibold text-heading-md text-dark">Current Menu Pain Points *</legend>
        <p className="text-body-sm text-gray-500">Select all that apply</p>
        <div className="grid sm:grid-cols-2 gap-3" role="group" aria-label="Pain points">
          {PAIN_POINTS.map((pain) => (
            <label
              key={pain.value}
              className={cn(
                'flex items-center gap-3 p-4 rounded-brand border-2 transition-all duration-brand cursor-pointer',
                formData.painPoints.includes(pain.value)
                  ? 'border-brand-teal bg-brand-teal/5'
                  : 'border-gray-200 hover:border-brand-teal/50'
              )}
            >
              <input
                type="checkbox"
                value={pain.value}
                checked={formData.painPoints.includes(pain.value)}
                onChange={() => handlePainPointChange(pain.value)}
                className="w-4 h-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal focus:ring-2"
                aria-describedby={`${pain.value}-desc`}
              />
              <span className="font-medium text-body text-dark">{pain.label}</span>
            </label>
          ))}
        </div>
        {errors.painPoints && (
          <p className="text-body-sm text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle className="w-4 h-4" />
            {errors.painPoints}
          </p>
        )}
      </fieldset>

      {/* Contact Info */}
      <fieldset className="space-y-6">
        <legend className="font-display font-semibold text-heading-md text-dark">Contact Information</legend>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="WhatsApp Number *"
            placeholder="+92 300 123 4567"
            value={formData.whatsapp}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            error={errors.whatsapp}
            required
            type="tel"
            autoComplete="tel"
            helperText="We'll contact you here first"
          />
          <Input
            label="Email (Optional)"
            placeholder="you@venue.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            type="email"
            autoComplete="email"
          />
        </div>
      </fieldset>

      {/* Message */}
      <Textarea
        label="What would success look like in 90 days? *"
        placeholder="e.g., Reduce menu printing costs by 50%, enable WhatsApp ordering for 3 locations, launch Urdu menu for tourist traffic..."
        value={formData.message}
        onChange={(e) => handleChange('message', e.target.value)}
        error={errors.message}
        required
        rows={5}
        helperText="The more detail, the better we can prepare for our call"
      />

      {/* Submit */}
      <div className="pt-4">
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 rounded-brand bg-red-50 border border-red-200 flex items-start gap-3 text-red-700" role="alert">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-body-sm">{errorMessage}</p>
          </div>
        )}

        <Button type="submit" variant="primary" size="xl" fullWidth loading={submitStatus === 'submitting'} className="group">
          {submitStatus === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              Book Free Discovery Call
              <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </>
          )}
        </Button>

        <p className="mt-4 text-center text-body-sm text-gray-500">
          Or <a href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%27d%20like%20a%20demo" className="font-medium text-brand-teal hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp us directly</a> · <a href="https://calendly.com/scansavvy/discovery-call" className="font-medium text-brand-teal hover:underline" target="_blank" rel="noopener noreferrer">Book a 15-min slot</a>
        </p>
      </div>
    </form>
  )
}