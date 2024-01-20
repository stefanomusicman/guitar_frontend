import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'
import { AuthProvider } from '@/auth/FirebaseContext'
import dynamic from 'next/dynamic'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guitar Directory',
  description: 'Directory of guitars for players, by players',
}

const NoSSR = dynamic(() => import('../components/navBar'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <NoSSR />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
