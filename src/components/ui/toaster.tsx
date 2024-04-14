'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && (
                <ToastTitle
                  className={
                    title === 'SUCCESS'
                      ? 'font-extrabold text-green-500 text-xl'
                      : 'font-extrabold text-red-600'
                  }
                >
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className='text-xl'>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}