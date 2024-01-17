import './globals.css'
import { Albert_Sans } from 'next/font/google'

const albert_sans = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Microdesafio 1',
  description: 'Primer microdesafio con Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albert_sans.className}>{children}</body>
    </html>
  )
}
