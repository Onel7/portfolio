import { useEffect } from 'react'

const translations = {
  'À propos': 'About', 'Compétences': 'Skills', 'Projets': 'Projects', 'Parcours': 'Background', 'Me contacter': 'Contact me',
  'Disponible pour de nouveaux projets': 'Available for new projects', 'Bonjour, je suis': 'Hello, I am', 'Développeur Mobile Flutter & Dart': 'Flutter & Dart Mobile Developer',
  'Je conçois des applications mobiles performantes et intuitives, soutenues par de solides fondations en systèmes d’exploitation, C et algorithmique.': 'I build fast, intuitive mobile applications backed by strong foundations in operating systems, C, and algorithms.',
  'Voir mes projets': 'View my projects', 'Projets réalisés': 'Projects built', 'Passion mobile': 'Mobile passion', 'Curiosité technique': 'Technical curiosity',
  'À propos de moi': 'About me', 'Je transforme des idées en': 'I turn ideas into', 'solutions concrètes.': 'real solutions.',
  'Développeur logiciel avec un intérêt particulier pour le mobile, le backend et les systèmes intelligents. J’aime comprendre les besoins réels, structurer des solutions simples et construire des applications utiles, maintenables et agréables à utiliser.': 'Software developer with a strong interest in mobile, backend, and intelligent systems. I focus on real user needs and build useful, maintainable, and enjoyable applications.',
  'Je souhaite approfondir les architectures mobiles modernes, les API robustes et l’intelligence appliquée aux produits numériques. Mon objectif : participer à des projets qui ont un impact mesurable sur leurs utilisateurs.': 'I want to deepen my expertise in modern mobile architectures, robust APIs, and intelligence applied to digital products. My goal is to contribute to projects with measurable user impact.',
  'Curiosité': 'Curiosity', 'Localisation à renseigner': 'Location to be added', 'Technologies & outils': 'Technologies & tools', 'Ma Stack': 'My Technical', 'Technique.': 'Stack.',
  'Un écosystème d’outils modernes et performants pour construire des solutions de bout en bout.': 'A modern, high-performance toolset for building complete end-to-end solutions.',
  'Bases de données': 'Databases', 'Outils': 'Tools', 'Conception': 'Design', 'Architecture logicielle': 'Software architecture', 'Modélisation': 'Modeling',
  'Ce que j’ai construit': 'What I have built', 'Mes': 'My', 'Projets récents.': 'Recent Projects.', 'Des réalisations qui répondent à des problèmes concrets avec une approche moderne et structurée.': 'Projects that solve real problems through a modern, structured engineering approach.',
  'Application mobile de tontine': 'Digital savings group mobile app', 'Digitaliser une gestion souvent manuelle et rendre les cotisations plus transparentes.': 'Digitize a commonly manual process and make contributions more transparent.',
  'Application Flutter pour gérer les membres, cotisations, échéances et l’historique des transactions d’une tontine.': 'Flutter application for managing members, contributions, due dates, and transaction history for a savings group.',
  'Gestion des membres': 'Member management', 'Calendrier des cotisations': 'Contribution calendar', 'Gestion des tours': 'Turn management',
  'Détection de transactions suspectes': 'Suspicious transaction detection', 'Aider à identifier les opérations atypiques dans un flux de transactions.': 'Help identify unusual operations within a transaction stream.',
  'Système d’analyse orienté règles permettant d’étudier et de signaler les comportements potentiellement suspects.': 'Rule-based analysis system designed to examine and flag potentially suspicious behavior.',
  'Moteur de règles': 'Rule engine', 'Analyse des opérations': 'Transaction analysis', 'Signalement': 'Flagging', 'Historique': 'History',
  'Centraliser les tâches quotidiennes dans une expérience mobile claire et rapide.': 'Centralize daily tasks in a clear and fast mobile experience.',
  'Application de productivité avec interface personnalisée, navigation intuitive et gestion d’état réactive.': 'Productivity application with a custom interface, intuitive navigation, and reactive state management.',
  'Création de tâches': 'Task creation', 'Suivi des statuts': 'Status tracking', 'Filtres': 'Filters', 'Interface responsive': 'Responsive interface',
  'Mettre en pratique la logique algorithmique dans une interface interactive.': 'Apply algorithmic logic through an interactive interface.',
  'Jeu mobile avec validation en temps réel et retours visuels précis à chaque tentative.': 'Mobile game with real-time validation and clear visual feedback for every attempt.',
  'Logique de jeu': 'Game logic', 'Validation instantanée': 'Instant validation', 'Nouvelle partie': 'New game', 'Le besoin': 'The challenge', 'Voir le projet': 'View project',
  'Mon parcours': 'My background', 'Expérience': 'Professional', 'Professionnelle.': 'Experience.', 'Une pratique du développement mobile renforcée par des bases solides en ingénierie informatique.': 'Mobile development experience supported by strong computer engineering foundations.',
  'Aujourd’hui': 'Today', 'Développeur Mobile Flutter': 'Flutter Mobile Developer', 'Projets personnels & collaborations': 'Personal projects & collaborations',
  'Conception d’applications mobiles multiplateformes, création d’interfaces sur mesure et mise en œuvre d’une gestion d’état maintenable avec Dart.': 'Building cross-platform mobile applications, custom interfaces, and maintainable state management with Dart.',
  'Parcours universitaire': 'University background', 'Computer Science & Recherche': 'Computer Science & Research', 'Formation académique': 'Academic education',
  'Travaux sur les systèmes d’exploitation, le langage C, les structures de données et l’évaluation des moteurs de règles RETE et PHReAK.': 'Work on operating systems, C, data structures, and the evaluation of RETE and PHReAK rule engines.',
  'Comment je travaille': 'How I work', 'Méthodologie de': 'Work', 'Travail.': 'Process.', 'Une approche structurée en 4 étapes pour garantir la réussite de vos projets, de l’idée au déploiement.': 'A structured four-step approach to take your project from idea to successful deployment.',
  'ÉTAPE': 'STEP', 'Découverte & Analyse': 'Discovery & Analysis', 'Comprendre vos objectifs, vos utilisateurs et les contraintes du projet.': 'Understand your goals, users, and project constraints.',
  'Définir l’expérience, l’architecture et un plan d’exécution clair.': 'Define the experience, architecture, and a clear execution plan.', 'Développement': 'Development',
  'Construire une solution propre, performante et testable par itérations.': 'Build a clean, high-performance, testable solution through iterations.', 'Déploiement & Suivi': 'Deployment & Follow-up',
  'Livrer, mesurer les résultats et accompagner les améliorations.': 'Deliver, measure results, and support continuous improvements.', '// Recherche académique': '// Academic research', 'Au-delà de l’interface.': 'Beyond the interface.',
  'Mon parcours universitaire explore les fondations qui rendent les logiciels fiables : évaluation de moteurs de règles, architecture des systèmes et protocoles de sécurité.': 'My academic background explores the foundations of reliable software: rule engine evaluation, systems architecture, and security protocols.',
  'Mes recherches autour des algorithmes': 'My research on the', 'nourrissent une approche analytique de la performance, de la mémoire et de la prise de décision logicielle.': 'algorithms supports an analytical approach to performance, memory, and software decision-making.',
  'Moteurs de règles': 'Rule engines', 'Architecture bas niveau': 'Low-level architecture', 'et': 'and', 'Formation': 'Education', 'Parcours informatique': 'Computer science background',
  'Ajoute ici ton diplôme actuel, ton établissement, tes années d’études et ta spécialité.': 'Add your current degree, institution, study years, and specialization here.', 'Dates à renseigner': 'Dates to be added',
  'Certifications': 'Certifications', 'Formations complémentaires': 'Additional training', 'Cette section accueillera uniquement tes certifications réelles : Flutter, Python, Git, UML ou autres.': 'This section will only feature your verified certifications: Flutter, Python, Git, UML, or others.',
  'Aucune certification non confirmée n’est affichée.': 'No unverified certification is displayed.', 'Curriculum vitæ': 'Résumé', 'Envie d’en savoir plus sur mon parcours ?': 'Want to learn more about my background?',
  'Consultez la version complète de mon profil professionnel.': 'View the complete version of my professional profile.', 'Télécharger mon CV': 'Download my résumé',
  'Parlons de ton prochain projet.': 'Let’s discuss your next project.', 'Une application Flutter, une collaboration technique ou une opportunité en ingénierie logicielle ? Écris-moi directement ici.': 'A Flutter application, a technical collaboration, or a software engineering opportunity? Send me a message directly.',
  'Nom': 'Name', 'E-mail': 'Email', 'Sujet': 'Subject', 'Envoyer le message': 'Send message', 'Envoi…': 'Sending…',
  'Merci ! Ton message a bien été envoyé.': 'Thank you! Your message has been sent.', 'Envoi impossible. Réessaie ou contacte-moi par e-mail.': 'Unable to send. Try again or contact me by email.',
  'Développeur logiciel & mobile.': 'Software & mobile developer.', "O'nel iloris SEGBOZO — Développeur logiciel & mobile.": "O'nel iloris SEGBOZO — Software & mobile developer.", 'Ouvrir le menu': 'Open menu', 'Fermer le menu': 'Close menu', 'Navigation principale': 'Main navigation', 'Choix de la langue': 'Language selection',
  'Nouveau message depuis le portfolio': 'New message from the portfolio',
}

const placeholders = {
  'Ton nom': 'Your name', 'nom@email.com': 'name@email.com', 'Parlons d’une application Flutter': 'Let’s discuss a Flutter application',
  'Décris-moi ton idée, tes objectifs ou ton besoin…': 'Tell me about your idea, goals, or needs…',
}

const originalTexts = new WeakMap()
const originalAttributes = new WeakMap()

function translateTextNode(node, language) {
  const raw = node.nodeValue
  const trimmed = raw.trim()
  if (!trimmed) return
  if (!originalTexts.has(node)) originalTexts.set(node, trimmed)
  const original = originalTexts.get(node)
  const translated = language === 'en' ? (translations[original] || original) : original
  if (trimmed !== translated) node.nodeValue = raw.replace(trimmed, translated)
}

function translateElement(element, language) {
  if (!(element instanceof HTMLElement)) return
  if (!originalAttributes.has(element)) originalAttributes.set(element, {})
  const originals = originalAttributes.get(element)
  for (const attribute of ['placeholder', 'aria-label', 'title', 'value']) {
    if (!element.hasAttribute(attribute)) continue
    if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute)
    const original = originals[attribute]
    const dictionary = attribute === 'placeholder' ? placeholders : translations
    const translated = language === 'en' ? (dictionary[original] || original) : original
    if (element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated)
  }
}

function translateTree(root, language) {
  if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root, language)
  if (!(root instanceof Element)) return
  translateElement(root, language)
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT)
  let node
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language)
    else translateElement(node, language)
  }
}

export default function usePageLanguage(language) {
  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? "O'nel iloris SEGBOZO — Software & mobile developer"
      : "O'nel iloris SEGBOZO — Développeur logiciel & mobile"
    translateTree(document.body, language)
    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') translateTextNode(mutation.target, language)
      mutation.addedNodes.forEach((node) => translateTree(node, language))
    }))
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })
    return () => observer.disconnect()
  }, [language])
}
