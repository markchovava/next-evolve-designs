import ProjectContextProvider from "@/context/ProjectContext"

export const metadata = {
  title: 'Evolve Designs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ProjectContextProvider>
            {children}
        </ProjectContextProvider>
        </body>
    </html>
  )
}