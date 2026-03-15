import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardShowcase from './components/CardShowcase'
import {
  Products,
  AppPreview,
  Features,
  Ecosystem,
  Security,
  CTA,
  Footer,
} from './components/Sections'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <CardShowcase />
        <Products />
        <AppPreview />
        <Features />
        <Ecosystem />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
