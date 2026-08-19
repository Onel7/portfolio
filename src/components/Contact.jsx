import { useState } from 'react'
import { CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'onelsegbozo@gmail.com'

export default function Contact() {
  const year = new Date().getFullYear()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Envoi impossible')
      form.reset()
      setStatus('success')
      setMessage('Merci ! Ton message a bien été envoyé.')
    } catch {
      setStatus('error')
      setMessage('Envoi impossible. Réessaie ou contacte-moi par e-mail.')
    }
  }

  const inputClass = 'mt-2 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10'

  return <footer id="contact" className="scroll-mt-16 border-t border-white/[0.06] pt-24">
    <div className="container-page" data-reveal>
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div><p className="eyebrow">// Contact</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Parlons de ton prochain projet.</h2><p className="mt-5 text-sm leading-6 text-slate-400">Une application Flutter, une collaboration technique ou une opportunité en ingénierie logicielle ? Écris-moi directement ici.</p><a href={`mailto:${contactEmail}`} className="mt-7 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"><Mail size={17}/>{contactEmail}</a></div>
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 text-left sm:p-8">
          <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-medium text-slate-300">Nom<input className={inputClass} type="text" name="name" placeholder="Ton nom" required minLength="2" /></label>
            <label className="text-xs font-medium text-slate-300">E-mail<input className={inputClass} type="email" name="email" placeholder="nom@email.com" required /></label>
          </div>
          <label className="mt-5 block text-xs font-medium text-slate-300">Sujet<input className={inputClass} type="text" name="subject" placeholder="Parlons d’une application Flutter" required minLength="3" /></label>
          <label className="mt-5 block text-xs font-medium text-slate-300">Message<textarea className={`${inputClass} min-h-32 resize-y`} name="message" placeholder="Décris-moi ton idée, tes objectifs ou ton besoin…" required minLength="10" /></label>
          <div className="mt-6 flex flex-wrap items-center gap-4"><button disabled={status === 'loading'} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60">{status === 'loading' ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}{status === 'loading' ? 'Envoi…' : 'Envoyer le message'}</button>{message && <p role="status" className={`flex items-center gap-2 text-xs ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>{status === 'success' && <CheckCircle2 size={15}/>} {message}</p>}</div>
        </form>
      </div>
      <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] py-7 sm:flex-row"><p className="font-mono text-[11px] text-slate-600">© {year} O’nel SEGBOZO — Développeur logiciel & mobile.</p><div className="flex gap-2"><a href="https://github.com/Onel7" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/[0.07] p-2.5 text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-300"><Github size={17}/></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/[0.07] p-2.5 text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-300"><Linkedin size={17}/></a><a href={`mailto:${contactEmail}`} aria-label="E-mail" className="rounded-lg border border-white/[0.07] p-2.5 text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-300"><Mail size={17}/></a></div></div>
    </div>
  </footer>
}
