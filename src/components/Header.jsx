import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Header({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-[max(.5rem,env(safe-area-inset-top))] z-50 px-2 sm:top-[max(1rem,env(safe-area-inset-top))] sm:px-4">
      <nav className="relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#05080c]/90 px-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:h-16 sm:px-5 lg:px-7" aria-label="Navigation principale">
        <a href="#accueil" className="shrink-0 font-mono text-xs font-semibold tracking-tight text-white sm:text-sm"><span className="text-cyan-400">&lt;</span>O'nel.dev <span className="text-cyan-400">/&gt;</span></a>
        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navLinks.map(({ label, href }) => <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
          <div className="flex rounded-lg border border-white/10 bg-white/5 p-1" aria-label="Choix de la langue"><button onClick={() => onLanguageChange('fr')} className={`rounded-md px-2 py-1 text-[10px] font-bold transition ${language === 'fr' ? 'bg-cyan-400 text-black' : 'text-slate-400 hover:text-white'}`}>FR</button><button onClick={() => onLanguageChange('en')} className={`rounded-md px-2 py-1 text-[10px] font-bold transition ${language === 'en' ? 'bg-cyan-400 text-black' : 'text-slate-400 hover:text-white'}`}>EN</button></div>
          <a href="#contact" className="rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300">Me contacter</a>
        </div>
        <div className="ml-auto mr-1 flex rounded-lg border border-white/10 p-0.5 sm:mr-2 sm:p-1 lg:hidden"><button onClick={() => onLanguageChange('fr')} className={`rounded px-1.5 py-1 text-[9px] font-bold sm:px-2 sm:text-[10px] ${language === 'fr' ? 'bg-cyan-400 text-black' : 'text-slate-400'}`}>FR</button><button onClick={() => onLanguageChange('en')} className={`rounded px-1.5 py-1 text-[9px] font-bold sm:px-2 sm:text-[10px] ${language === 'en' ? 'bg-cyan-400 text-black' : 'text-slate-400'}`}>EN</button></div><button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-300 lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {open && <div id="mobile-navigation" className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/[0.08] bg-[#05080c]/95 px-5 py-3 shadow-2xl backdrop-blur-xl lg:hidden">{navLinks.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[0.05] py-3 text-sm text-slate-300 last:border-0">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-black">Me contacter</a></div>}
    </header>
  )
}
