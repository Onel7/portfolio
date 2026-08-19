import { Boxes, Braces, Database, Layers3, Wrench } from 'lucide-react'

export const navLinks = [
  { label: 'À propos', href: '#apropos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  { icon: Layers3, title: 'Frontend & Mobile', index: '01', items: ['Flutter', 'Dart', 'HTML / CSS', 'JavaScript'] },
  { icon: Braces, title: 'Backend', index: '02', items: ['Django / Python', 'API REST', 'Firebase'] },
  { icon: Database, title: 'Bases de données', index: '03', items: ['SQLite', 'PostgreSQL', 'Firebase / Firestore'] },
  { icon: Wrench, title: 'Outils', index: '04', items: ['Git / GitHub', 'VS Code', 'Android Studio', 'Figma'] },
  { icon: Boxes, title: 'Conception', index: '05', items: ['UML', 'Architecture logicielle', 'Clean Architecture / MVVM', 'Modélisation'] },
]
