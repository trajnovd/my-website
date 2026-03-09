import {
  Monitor,
  Code2,
  Smartphone,
  Database,
  Brain,
  TrendingUp,
} from 'lucide-react'

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'cyan',
    skills: [
      { name: 'React', main: true },
      { name: 'React Native', main: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'violet',
    skills: [
      { name: 'Python', main: true },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'Kotlin' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'cyan',
    skills: [
      { name: 'React Native', main: true },
      { name: 'Flutter' },
      { name: 'Kotlin' },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'violet',
    skills: [
      { name: 'PostgreSQL', main: true },
      { name: 'Supabase' },
      { name: 'FastAPI' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'cyan',
    skills: [
      { name: 'GPT-4 / LLMs' },
      { name: 'Multi-Agent Systems' },
      { name: 'TensorFlow' },
    ],
  },
  {
    title: 'Business Skills',
    icon: TrendingUp,
    color: 'violet',
    skills: [
      { name: 'Marketing' },
      { name: 'Sales' },
      { name: 'Product Strategy' },
    ],
  },
]
