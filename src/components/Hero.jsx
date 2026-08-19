import { ArrowDownRight, ArrowUpRight, Cpu, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="container-page relative flex min-h-screen items-center pb-16 pt-36">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <div className="hero-enter">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />Disponible pour de nouveaux projets</div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[.22em] text-slate-500">Bonjour, je suis</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[82px]">Onel iloris<br/><span className="text-cyan-400">SEGBOZO</span></h1>
          <p className="mt-5 font-display text-xl font-semibold text-white sm:text-2xl">Développeur Mobile Flutter & Dart</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">Je conçois des applications mobiles performantes et intuitives, soutenues par de solides fondations en systèmes d’exploitation, C et algorithmique.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projets" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300">Voir mes projets <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]">Me contacter <ArrowUpRight size={17} /></a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/[0.08] pt-7"><div><b className="font-display text-2xl text-white">2+</b><p className="mt-1 text-[11px] text-slate-500">Projets réalisés</p></div><div><b className="font-display text-2xl text-white">100%</b><p className="mt-1 text-[11px] text-slate-500">Passion mobile</p></div><div><b className="font-display text-2xl text-cyan-400">∞</b><p className="mt-1 text-[11px] text-slate-500">Curiosité technique</p></div></div>
        </div>
        <div className="hero-enter-delay relative hidden lg:block">
          <div className="absolute -inset-12 rounded-full bg-cyan-400/[0.07] blur-3xl" />
          <div className="glass relative mx-auto w-[350px] animate-float rounded-[36px] p-3 shadow-2xl shadow-black/60">
            <div className="code-window overflow-hidden rounded-[27px] border border-white/[0.06] bg-[#080d14]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-400/70"/><span className="h-2 w-2 rounded-full bg-amber-400/70"/><span className="h-2 w-2 rounded-full bg-emerald-400/70"/></div><Smartphone size={15} className="text-cyan-400" /></div>
              <div className="space-y-5 p-6 font-mono text-[12px] leading-6"><p><span className="text-violet-400">class</span> <span className="text-cyan-300">MobileEngineer</span> {'{'}</p><p className="pl-4 text-slate-500">// Build. Measure. Optimize.</p><p className="pl-4"><span className="text-violet-400">final</span> stack = [<br/><span className="pl-5 text-emerald-300">'Flutter'</span>, <span className="text-emerald-300">'Dart'</span>,<br/><span className="pl-5 text-emerald-300">'Core Systems'</span><br/>];</p><p className="pl-4"><span className="text-violet-400">bool</span> get ready =&gt; <span className="text-amber-300">true</span>;</p><p>{'}'}</p></div>
              <div className="mx-5 mb-5 flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4"><span className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400"><Cpu size={18}/></span><div><p className="text-xs font-medium text-white">System status</p><p className="mt-0.5 font-mono text-[10px] text-emerald-400">● READY TO BUILD</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
