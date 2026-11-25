import { forwardRef, type ButtonHTMLAttributes } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function Button({ className = '', type = 'button', ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
      />
    )
  },
)
