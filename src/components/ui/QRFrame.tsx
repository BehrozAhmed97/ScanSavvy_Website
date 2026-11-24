'use client'

import { cn } from '@/lib/utils'

interface QRFrameProps {
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showLogo?: boolean
  logoSrc?: string
}

const sizes = {
  sm: 'w-40 h-40',
  md: 'w-56 h-56',
  lg: 'w-72 h-72',
  xl: 'w-96 h-96',
}

export function QRFrame({ src, alt = 'ScanSavvy QR Code', size = 'md', className, showLogo = true, logoSrc }: QRFrameProps) {
  return (
    <div
      className={cn(
        'qr-frame relative inline-block bg-white rounded-brand border-2 border-brand-teal shadow-brand',
        sizes[size],
        className
      )}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-[10px]"
        loading="lazy"
        decoding="async"
      />
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1/3 h-1/3 max-w-[80px] max-h-[80px] bg-white rounded-lg shadow-lg p-1 flex items-center justify-center">
            {logoSrc ? (
              <img src={logoSrc} alt="" className="w-full h-full object-contain" />
            ) : (
              <LogoMark className="w-full h-full text-brand-teal" />
            )}
          </div>
        </div>
      )}
      {/* Brand accent dot */}
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brand-coral" aria-hidden="true" />
    </div>
  )
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={cn('text-brand-teal', className)}
      fill="none"
      aria-hidden="true"
    >
      {/* QR Finder Patterns */}
      <rect x="6" y="6" width="18" height="18" fill="currentColor" />
      <rect x="8" y="8" width="14" height="14" fill="white" />
      <rect x="10" y="10" width="10" height="10" fill="currentColor" />
      <rect x="12" y="12" width="6" height="6" fill="white" />

      <rect x="40" y="6" width="18" height="18" fill="currentColor" />
      <rect x="42" y="8" width="14" height="14" fill="white" />
      <rect x="44" y="10" width="10" height="10" fill="currentColor" />
      <rect x="46" y="12" width="6" height="6" fill="white" />

      <rect x="6" y="40" width="18" height="18" fill="currentColor" />
      <rect x="8" y="42" width="14" height="14" fill="white" />
      <rect x="10" y="44" width="10" height="10" fill="currentColor" />
      <rect x="12" y="46" width="6" height="6" fill="white" />

      {/* Smartphone */}
      <rect x="38" y="6" width="20" height="32" rx="3" fill="white" />
      <rect x="40" y="10" width="16" height="24" rx="2" fill="currentColor" />
      <rect x="44" y="14" width="8" height="2" rx="1" fill="white" />
      <rect x="44" y="20" width="8" height="2" rx="1" fill="white" />
      <rect x="44" y="26" width="8" height="2" rx="1" fill="white" />
    </svg>
  )
}

interface QRCodePlaceholderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function QRCodePlaceholder({ size = 'md', className }: QRCodePlaceholderProps) {
  return (
    <div
      className={cn(
        'qr-frame relative inline-block bg-white rounded-brand border-2 border-brand-teal shadow-brand flex items-center justify-center',
        sizes[size],
        className
      )}
      role="img"
      aria-label="ScanSavvy QR Code Preview"
    >
      <div className="w-full h-full relative">
        {/* Simulated QR pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNGM0Y0RjYiLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMUYyOTM3Ii8+PHJlY3QgeD0iMTYiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxRjI5MzciLz48cmVjdCB4PSIwIiB5PSIxNiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzFGMjEzNyIvPjwvc3ZnPg==')] opacity-30" />
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <LogoMark className="w-1/3 h-1/3 max-w-[60px] max-h-[60px]" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brand-coral" aria-hidden="true" />
    </div>
  )
}