
import MainContextProvider from '@/context/MainContext'
import './globals.css'
import SWRProvider from '@/swr/SWRProvider'


export const metadata = {
  title: 'Evolve Designs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <SWRProvider>
          <MainContextProvider>
            {children}
          </MainContextProvider>
        </SWRProvider>
        </body>
    </html>
  )
}
