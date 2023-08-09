import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Car hub',
  description: 'Disover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar/>
      <body className='relative'>{children}</body>
    <Footer/>
    </>
  )
}
