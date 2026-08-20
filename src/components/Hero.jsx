import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const profilePhoto = `${import.meta.env.BASE_URL}onel-iloris-segbozo-developpeur.png`

export default function Hero() {
  return (
    <section id="accueil" className="container-page relative flex min-h-screen items-center pb-16 pt-36">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="hero-enter">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />Disponible pour de nouveaux projets</div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[.22em] text-slate-500">Bonjour, je suis</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[82px]">O’nel iloris<br/><span className="text-cyan-400">SEGBOZO</span></h1>
          <p className="mt-5 font-display text-xl font-semibold text-white sm:text-2xl">Développeur Mobile Flutter & Dart</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">Je conçois des applications mobiles performantes et intuitives, soutenues par de solides fondations en systèmes d’exploitation, C et algorithmique.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projets" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300">Voir mes projets <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]">Me contacter <ArrowUpRight size={17} /></a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/[0.08] pt-7"><div><b className="font-display text-2xl text-white">2+</b><p className="mt-1 text-[11px] text-slate-500">Projets réalisés</p></div><div><b className="font-display text-2xl text-white">100%</b><p className="mt-1 text-[11px] text-slate-500">Passion mobile</p></div><div><b className="font-display text-2xl text-cyan-400">∞</b><p className="mt-1 text-[11px] text-slate-500">Curiosité technique</p></div></div>
        </div>
        <div className="hero-enter-delay relative mx-auto w-full max-w-[560px] lg:block">
          <div className="absolute inset-x-8 inset-y-12 rounded-full bg-cyan-400/[0.14] blur-[90px]" />
          <img src={profilePhoto} alt="O’nel iloris SEGBOZO, développeur logiciel et mobile Flutter" width="466" height="535" className="relative mx-auto h-auto w-full object-contain object-bottom drop-shadow-[0_28px_35px_rgba(0,0,0,.45)] transition duration-500 hover:-translate-y-2 hover:scale-[1.02]" fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
