'use client'

import { forwardRef, ButtonHTMLAttributes, Children, cloneElement, isValidElement } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonOwnProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  asChild?: boolean
  disabled?: boolean
}

type ButtonProps = ButtonOwnProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export const Button = forwardRef<any, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, fullWidth, asChild, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-display font-medium transition-all duration-brand rounded-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-brand-teal text-white hover:bg-brand-teal-dark active:bg-brand-teal-dark shadow-brand hover:shadow-brand-lg',
      secondary: 'bg-dark text-white hover:bg-gray-800 active:bg-gray-900',
      outline: 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/5 active:bg-brand-teal/10',
      ghost: 'text-dark hover:bg-gray-100 active:bg-gray-200',
      coral: 'bg-brand-coral text-white hover:bg-brand-coral-dark active:bg-brand-coral-dark shadow-coral',
    }

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-body-sm gap-1.5',
      md: 'px-6 py-3 text-body gap-2',
      lg: 'px-8 py-4 text-body-lg gap-2',
      xl: 'px-10 py-5 text-heading-sm gap-2.5',
    }

    const mergedClassName = cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)

    // When asChild is set, merge our styles onto the existing child element
    // instead of rendering an extra wrapper (which would create a nested <Link>
    // with an undefined href and crash Next.js).
    if (asChild) {
      return (
        <>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return child
            return cloneElement(child as any, {
              className: cn(mergedClassName, (child as any).props.className),
              ...props,
            })
          })}
        </>
      )
    }

    const BaseElement: any = 'button'

    return (
      <BaseElement
        ref={ref}
        className={mergedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </BaseElement>
    )
  }
)

Button.displayName = 'Button'
