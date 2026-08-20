import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Header({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#05080c]/85 px-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-7" aria-label="Navigation principale">
        <a href="#accueil" className="font-mono text-sm font-semibold tracking-tight text-white"><span className="text-cyan-400">&lt;</span>O’nel.dev <span className="text-cyan-400">/&gt;</span></a>
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map(({ label, href }) => <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
          <div className="flex rounded-lg border border-white/10 bg-white/5 p-1" aria-label="Choix de la langue"><button onClick={() => onLanguageChange('fr')} className={`rounded-md px-2 py-1 text-[10px] font-bold transition ${language === 'fr' ? 'bg-cyan-400 text-black' : 'text-slate-400 hover:text-white'}`}>FR</button><button onClick={() => onLanguageChange('en')} className={`rounded-md px-2 py-1 text-[10px] font-bold transition ${language === 'en' ? 'bg-cyan-400 text-black' : 'text-slate-400 hover:text-white'}`}>EN</button></div>
          <a href="#contact" className="rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300">Me contacter</a>
        </div>
        <div className="ml-auto mr-2 flex rounded-lg border border-white/10 p-1 md:hidden"><button onClick={() => onLanguageChange('fr')} className={`rounded px-2 py-1 text-[10px] font-bold ${language === 'fr' ? 'bg-cyan-400 text-black' : 'text-slate-400'}`}>FR</button><button onClick={() => onLanguageChange('en')} className={`rounded px-2 py-1 text-[10px] font-bold ${language === 'en' ? 'bg-cyan-400 text-black' : 'text-slate-400'}`}>EN</button></div><button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-300 md:hidden" aria-expanded={open} aria-label="Ouvrir le menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {open && <div className="border-t border-white/[0.06] bg-ink/95 px-5 py-4 md:hidden">{navLinks.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[0.05] py-3 text-sm text-slate-300">{label}</a>)}</div>}
    </header>
  )
}
