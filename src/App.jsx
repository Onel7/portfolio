import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Process from './components/Process'
import Research from './components/Research'
import Education from './components/Education'
import Contact from './components/Contact'
import useReveal from './hooks/useReveal'
import usePageLanguage from './hooks/usePageLanguage'

export default function App() {
  const [language, setLanguage] = useState('fr')
  useReveal()
  usePageLanguage(language)
  return <div className="relative min-h-screen overflow-hidden bg-ink"><div className="pointer-events-none fixed inset-0 z-0 grid-overlay"/><div className="pointer-events-none fixed -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.08] blur-[120px]"/><div className="relative z-10"><Header language={language} onLanguageChange={setLanguage}/><main><Hero/><About/><Skills/><Projects/><Experience/><Process/><Research/><Education/></main><Contact/></div></div>
}
