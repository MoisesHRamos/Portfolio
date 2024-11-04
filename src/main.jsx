import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Botao from './components/Botao'
import About from './components/About'
import ContactSection from './components/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Herosection/>
    <About/>
    <ContactSection/>
  </StrictMode>,
)
