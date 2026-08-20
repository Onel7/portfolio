import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react'

const experiences = [
  {
    period: 'Aujourd’hui',
    title: 'Développeur Mobile Flutter',
    organization: 'Projets personnels & collaborations',
    description: 'Conception d’applications mobiles multiplateformes, création d’interfaces sur mesure et mise en œuvre d’une gestion d’état maintenable avec Dart.',
    icon: BriefcaseBusiness,
    tags: ['Flutter', 'Dart', 'REST API'],
  },
  {
    period: 'Parcours universitaire',
    title: 'Computer Science & Recherche',
    organization: 'Formation académique',
    description: 'Travaux sur les systèmes d’exploitation, le langage C, les structures de données et l’évaluation des moteurs de règles RETE et PHReAK.',
    icon: GraduationCap,
    tags: ['C', 'Algorithms', 'Rule Engines'],
  },
]

export default function Experience() {
  return <section id="experience" className="container-page scroll-mt-24 py-16 sm:py-20 lg:py-24" data-reveal>
    <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
      <div><p className="eyebrow">Mon parcours</p><h2 className="section-title">Expérience<br/><span className="text-cyan-400">Professionnelle.</span></h2><p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">Une pratique du développement mobile renforcée par des bases solides en ingénierie informatique.</p></div>
      <div className="relative space-y-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:to-transparent">
        {experiences.map(({ period, title, organization, description, icon: Icon, tags }) => <article key={title} className="glass group relative ml-3 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(0,255,180,.08)] sm:p-8">
          <div className="absolute -left-[21px] top-8 h-4 w-4 rounded-full border-4 border-ink bg-cyan-400 shadow-[0_0_18px_rgba(0,255,180,.7)]"/>
          <div className="flex items-start justify-between gap-4"><div className="flex gap-4"><span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400 transition duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon size={21}/></span><div><p className="text-xs font-medium uppercase tracking-wider text-cyan-400">{period}</p><h3 className="mt-2 text-xl font-semibold text-white">{title}</h3><p className="mt-1 text-sm text-slate-500">{organization}</p></div></div><ArrowUpRight className="text-slate-700 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" size={18}/></div>
          <p className="mt-5 text-sm leading-6 text-slate-400">{description}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="tech-tag transition hover:border-cyan-400/30 hover:text-cyan-300">{tag}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>
}
