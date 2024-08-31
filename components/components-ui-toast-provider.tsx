'use client'

import { ToastProvider as ToastProviderPrimitive } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast" 
import { Button } from "./ui/button"

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastProviderPrimitive>
      {children}
    </ToastProviderPrimitive>
  )
}

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Ride Booked",
          description: "You have successfully booked the ride.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}