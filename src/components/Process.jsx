import { Code2, Lightbulb, Rocket, SearchCheck } from 'lucide-react'

const steps = [
  { number: '01', title: 'Découverte & Analyse', description: 'Comprendre vos objectifs, vos utilisateurs et les contraintes du projet.', icon: SearchCheck },
  { number: '02', title: 'Conception', description: 'Définir l’expérience, l’architecture et un plan d’exécution clair.', icon: Lightbulb },
  { number: '03', title: 'Développement', description: 'Construire une solution propre, performante et testable par itérations.', icon: Code2 },
  { number: '04', title: 'Déploiement & Suivi', description: 'Livrer, mesurer les résultats et accompagner les améliorations.', icon: Rocket },
]

export default function Process() {
  return <section id="process" className="border-y border-white/[0.06] bg-[#06090d] py-24" data-reveal><div className="container-page">
    <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Comment je travaille</p><h2 className="section-title">Méthodologie de <span className="text-cyan-400">Travail.</span></h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">Une approche structurée en 4 étapes pour garantir la réussite de vos projets, de l’idée au déploiement.</p></div>
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ number, title, description, icon: Icon }) => <article key={number} className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] hover:shadow-[0_18px_50px_rgba(0,255,180,.08)]"><span className="absolute right-4 top-2 font-display text-6xl font-bold text-white/[0.025] transition group-hover:text-cyan-400/[0.08]">{number}</span><div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-black/20 text-cyan-400 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan-400/30"><Icon size={20}/></div><p className="relative mt-8 font-mono text-[10px] text-cyan-400">ÉTAPE {number}</p><h3 className="relative mt-3 text-lg font-semibold text-white">{title}</h3><p className="relative mt-3 text-sm leading-6 text-slate-500 transition group-hover:text-slate-400">{description}</p></article>)}</div>
  </div></section>
}
