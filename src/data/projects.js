const BASE = import.meta.env.BASE_URL

export const projects = [
  {
    id: 'the-road-home',
    title: 'The Road Home',
    description:
      'A 14-week structured recovery program platform with guided video lessons, trigger logging, commitment tracking, and progress monitoring. Features secure payments, demo mode, and automated email sequences.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Paddle', 'Vimeo API'],
    github: 'https://github.com/trajnovd/TheRoadHome',
    image: `${BASE}images/theroadhome.png`,
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'revalu8',
    title: 'Revalu8',
    description:
      'AI-powered real estate valuation platform using a 6-agent pipeline (Legal → Geo → Market → HBU → Valuation → Report) for automated property appraisals compliant with international valuation standards.',
    tech: ['Python', 'FastAPI', 'Supabase', 'AI/ML', 'Pydantic'],
    github: 'https://github.com/trajnovd/revalu8',
    image: `${BASE}images/revalu8.png`,
    featured: true,
    category: 'ai',
  },
  {
    id: 'safeplate',
    title: 'SafePlate',
    description:
      'AI-powered FSMA compliance platform for small food producers. Automates HACCP plan creation, FSMA 204 traceability, daily CCP monitoring, QR-code lot tracking, and audit preparation.',
    tech: ['React', 'Supabase', 'AI/ML', 'QR Codes', 'Resend'],
    image: `${BASE}images/safeplate.png`,
    featured: true,
    category: 'ai',
  },
  {
    id: 'ai-agent-stock',
    title: 'AI Agent – Stock Market',
    description:
      'Multi-agent AI system for intelligent money management and investing. Features budget goals, savings challenges, smart spending suggestions, and GPT-4 powered market analysis.',
    tech: ['Python', 'GPT-4', 'Multi-Agent', 'Finance'],
    github: 'https://github.com/trajnovd/sb-aiagents',
    image: `${BASE}images/ai-agent-stock-market.png`,
    category: 'ai',
  },
  {
    id: 'wild-oasis',
    title: 'The Wild Oasis',
    description:
      'Full-featured hotel booking and management system with authentication, cabin management, booking workflows, role-based access, and real-time data synchronization.',
    tech: ['React', 'Supabase', 'React Query', 'Styled Components'],
    github: 'https://github.com/trajnovd/the-wild-oasis',
    image: `${BASE}images/Hotel-Booking-System.png`,
    category: 'fullstack',
  },
  {
    id: 'lifedrop',
    title: 'Life Drop – Drone System',
    description:
      'Emergency response system for remote areas using autonomous drones with satellite connectivity, real-time GPS tracking, and Smart First Aid Kit delivery.',
    tech: ['IoT', 'Drones', 'GPS', 'Satellite'],
    github: 'https://github.com/bojan-eftimoski/LifeDrop',
    image: `${BASE}images/LifeDrop.png`,
    category: 'iot',
  },
  {
    id: 'pulse-eco',
    title: 'Pulse Eco Device',
    description:
      'Arduino-based environmental monitoring device with ESP8266 WiFi, RGB LED indicators, 7-segment display, and real-time air quality data reporting.',
    tech: ['Arduino', 'ESP8266', 'IoT', 'Sensors'],
    github: 'https://github.com/trajnovd/code-leap',
    image: `${BASE}images/pulse-eco_mockup.png`,
    category: 'iot',
  },
  {
    id: 'unifinance',
    title: 'UniFinance',
    description:
      'Student banking app with AI-powered financial advice, image-based bill scanning, smart budget suggestions, weekly/monthly insights, and expense tracking.',
    tech: ['Python', 'AI/ML', 'Finance', 'OCR'],
    github: 'https://github.com/dokicaaa/UniFinance',
    image: `${BASE}images/Student-Banking.png`,
    category: 'ai',
  },
  {
    id: 'autismgames',
    title: 'AutismGames',
    description:
      'Educational mobile app for children on the autism spectrum. Gamified learning for cognitive skills, social interaction, emotional regulation, and daily living skills.',
    tech: ['React Native', 'Supabase', 'Mobile', 'Education'],
    github: 'https://github.com/trajnovd/AutismGames',
    image: `${BASE}images/autismgames.png`,
    category: 'mobile',
  },
  {
    id: 'beaware',
    title: 'BeAware',
    description:
      'AI-powered pedestrian safety app using on-device AI models for noise detection, emergency alerts, hearing impairment assistance, and community safety mapping.',
    tech: ['Android', 'Kotlin', 'AI/ML', 'TensorFlow'],
    github: 'https://github.com/trajnovd/BeAware',
    image: `${BASE}images/BeAware.png`,
    category: 'mobile',
  },
]
