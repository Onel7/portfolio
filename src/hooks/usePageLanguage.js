import { useEffect } from 'react'

const translations = {
  'À propos': 'About', 'Compétences': 'Skills', 'Projets': 'Projects', 'Parcours': 'Background', 'Me contacter': 'Contact me',
  'Disponible pour de nouveaux projets': 'Available for new projects', 'Bonjour, je suis': 'Hello, I am', 'Développeur Mobile Flutter & Dart': 'Flutter & Dart Mobile Developer',
  'Voir mes projets': 'View my projects', 'Projets réalisés': 'Projects built', 'Passion mobile': 'Mobile passion', 'Curiosité technique': 'Technical curiosity',
  'À propos de moi': 'About me', 'Je transforme des idées en': 'I turn ideas into', 'solutions concrètes.': 'real solutions.',
  'Technologies & outils': 'Technologies & tools', 'Ma Stack': 'My Technical', 'Technique.': 'Stack.', 'Ce que j’ai construit': 'What I have built',
  'Projets Récents.': 'Recent Projects.', 'Le besoin': 'The challenge', 'Voir le projet': 'View project', 'Mon parcours': 'My background',
  'Expérience': 'Professional', 'Professionnelle.': 'Experience.', 'Comment je travaille': 'How I work', 'Méthodologie de': 'Work', 'Travail.': 'Process.',
  'Formation': 'Education', 'Parcours informatique': 'Computer science background', 'Formations complémentaires': 'Additional training',
  'Curriculum vitæ': 'Résumé', 'Envie d’en savoir plus sur mon parcours ?': 'Want to learn more about my background?', 'Télécharger mon CV': 'Download my résumé',
  'Parlons de ton prochain projet.': 'Let’s discuss your next project.', 'Envoyer le message': 'Send message', 'Nom': 'Name', 'Sujet': 'Subject',
}

const originalTexts = new WeakMap()

export default function usePageLanguage(language) {
  useEffect(() => {
    document.documentElement.lang = language
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    let node
    while ((node = walker.nextNode())) {
      const raw = node.nodeValue
      const trimmed = raw.trim()
      if (!trimmed) continue
      if (!originalTexts.has(node)) originalTexts.set(node, trimmed)
      const original = originalTexts.get(node)
      node.nodeValue = raw.replace(trimmed, language === 'en' ? (translations[original] || original) : original)
    }
    const placeholders = { 'Ton nom': 'Your name', 'nom@email.com': 'name@email.com', 'Parlons d’une application Flutter': 'Let’s discuss a Flutter application', 'Décris-moi ton idée, tes objectifs ou ton besoin…': 'Tell me about your idea, goals or needs…' }
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((element) => {
      if (!element.dataset.frPlaceholder) element.dataset.frPlaceholder = element.placeholder
      element.placeholder = language === 'en' ? (placeholders[element.dataset.frPlaceholder] || element.dataset.frPlaceholder) : element.dataset.frPlaceholder
    })
  }, [language])
}
