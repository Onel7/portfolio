import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const profilePhoto = `${import.meta.env.BASE_URL}onel-iloris-segbozo-developpeur.png`

export default function Hero() {
  return (
    <section id="accueil" className="container-page relative flex min-h-0 items-start pb-12 pt-24 sm:pb-16 sm:pt-28 lg:min-h-screen lg:items-center lg:pt-36">
      <div className="grid min-w-0 w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-12">
        <div className="hero-enter min-w-0 max-w-full">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-[11px] font-medium text-cyan-300 sm:mb-7 sm:text-xs"><span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyan-400" />Disponible pour de nouveaux projets</div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[.2em] text-slate-500 sm:text-sm sm:tracking-[.22em]">Bonjour, je suis</p>
          <h1 className="w-full max-w-4xl text-[clamp(2rem,11.5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-0.055em] text-white lg:text-[82px]"><span className="block max-w-full whitespace-nowrap">O’nel iloris</span><span className="block max-w-full whitespace-nowrap text-cyan-400">SEGBOZO</span></h1>
          <p className="mt-5 max-w-full font-display text-lg font-semibold leading-snug text-white sm:text-2xl">Développeur Mobile Flutter & Dart</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">Je conçois des applications mobiles performantes et intuitives, soutenues par de solides fondations en systèmes d’exploitation, C et algorithmique.</p>
          <div className="mt-8 grid gap-3 min-[400px]:flex min-[400px]:flex-wrap sm:mt-9">
            <a href="#projets" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300">Voir mes projets <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]">Me contacter <ArrowUpRight size={17} /></a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-2 border-t border-white/[0.08] pt-6 sm:mt-12 sm:gap-3 sm:pt-7"><div><b className="font-display text-xl text-white sm:text-2xl">2+</b><p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px]">Projets réalisés</p></div><div><b className="font-display text-xl text-white sm:text-2xl">100%</b><p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px]">Passion mobile</p></div><div><b className="font-display text-xl text-cyan-400 sm:text-2xl">∞</b><p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px]">Curiosité technique</p></div></div>
        </div>
        <div className="hero-enter-delay relative mx-auto min-w-0 w-full max-w-[min(400px,calc(100vw-2rem))] sm:max-w-[480px] lg:max-w-[560px]">
          <div className="absolute inset-x-8 inset-y-12 rounded-full bg-cyan-400/[0.14] blur-[90px]" />
          <img src={profilePhoto} alt="O’nel iloris SEGBOZO, développeur logiciel et mobile Flutter" width="466" height="535" className="relative mx-auto block h-auto max-w-full object-contain object-bottom drop-shadow-[0_28px_35px_rgba(0,0,0,.45)] transition duration-500 lg:hover:-translate-y-2 lg:hover:scale-[1.02]" fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
