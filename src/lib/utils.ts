import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('92')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  if (cleaned.startsWith('0')) {
    return `+92 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
  }
  return phone
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const formatted = cleaned.startsWith('92') ? cleaned : `92${cleaned.replace(/^0/, '')}`
  return `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`
}

export function getCalendlyUrl(): string {
  return 'https://calendly.com/scansavvy/discovery-call'
}

export const VENUE_TYPES = [
  { value: 'restaurant', label: 'Restaurant / Fine Dining' },
  { value: 'cafe', label: 'Cafe / Coffee Shop' },
  { value: 'food-truck', label: 'Food Truck / Street Food' },
  { value: 'bakery', label: 'Bakery / Dessert Shop' },
  { value: 'cafeteria', label: 'Cafeteria / Food Court' },
  { value: 'hotel', label: 'Hotel Restaurant' },
  { value: 'other', label: 'Other' },
] as const

export const LOCATION_OPTIONS = [
  { value: '1', label: '1 Location' },
  { value: '2-5', label: '2–5 Locations' },
  { value: '6-20', label: '6–20 Locations' },
  { value: '20+', label: '20+ Locations' },
] as const

export const PAIN_POINTS = [
  { value: 'reprinting', label: 'High reprinting costs' },
  { value: 'outdated', label: 'Menus often outdated' },
  { value: 'no-photos', label: 'No photos on menu' },
  { value: 'hard-to-update', label: 'Hard to update items/prices' },
  { value: 'language', label: 'Need Urdu/English support' },
  { value: 'other', label: 'Other' },
] as const