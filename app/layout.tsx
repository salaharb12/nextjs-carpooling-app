// app/layout.tsx
import { ToastProvider } from "@/components/components-ui-toast-provider" 
import "./globals.css"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}