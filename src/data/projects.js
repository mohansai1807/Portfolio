export const projects = [
  {
    id: 'alex-voice-assistant',
    title: 'Alex — AI Voice Assistant',
    category: 'AI / GENERATIVE AI APPLICATION',
    group: 'Frontend',
    desc: 'An AI-powered web-based voice assistant that enables natural conversational interaction with Generative AI through voice input and speech synthesis.',
    tech: ['React', 'JavaScript', 'Google Gemini API', 'CSS', 'Netlify'],
    github: '',
    demo: 'https://6a9b9bc3843f2ce2fddf8d9f--mohanasaivoiceassistant.netlify.app/',
    image: '',
    featured: true,
    overview: 'Alex is a web-based AI voice assistant that explores a more natural way of interacting with Generative AI through voice. It combines speech recognition, AI-powered response generation, and text-to-speech into a single seamless conversational experience.',
    problem: 'Traditional AI chat interfaces require typing, which breaks the natural flow of conversation and limits accessibility for voice-first interaction patterns.',
    solution: 'Engineered a full voice interaction pipeline — Voice Input → Speech Recognition → Google Gemini API → AI Response → Speech Synthesis — creating a hands-free, conversational AI experience in the browser.',
    features: [
      'Voice-based interaction using browser-native Speech Recognition API',
      'Generative AI-powered responses via Google Gemini API',
      'Real-time speech-to-text processing and transcription',
      'Text-to-speech output for natural AI voice responses',
      'Environment-based API configuration for secure key management',
      'Responsive and interactive conversational interface',
      'Production deployment on Netlify',
    ],
    challenges: 'Synchronizing asynchronous speech recognition events with Gemini API response streaming while maintaining a smooth, uninterrupted conversational UX across different browsers.',
    learnings: 'Gained practical experience integrating Generative AI with browser-native voice technologies, focusing on interface design, real-time API integration, and production deployment pipelines.',
  },

  {
    id: 'kailasa',
    title: 'Kailasa Retreats',
    category: 'FULL STACK / MERN',
    group: 'Full Stack',
    desc: 'Online vacation rental booking system with property listings, bookings, reviews, and payments.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Mapbox', 'Joi'],
    github: '',
    demo: 'https://kailasa-retreats-an-online-vacation.onrender.com/',
    image: '/images/kailasa-retreats.jpg',
    featured: true,
    overview: 'Full-stack accommodation booking platform developed using MVC architecture, RESTful APIs, MongoDB, and server-side rendering with EJS.',
    problem: 'Travelers often struggle to find authentic local vacation listings with transparent pricing and real-time location mapping.',
    solution: 'Engineered an end-to-end full stack web application featuring Mapbox geolocation search, Cloudinary media management, dynamic reviews, and server-side validation using Joi.',
    features: [
      'Interactive location-based listing search with Mapbox API',
      'Secure image uploads and optimization via Cloudinary',
      'User authentication, authorization, and CRUD operations',
      'Server-side schema validation using Joi'
    ],
    challenges: 'Managing asynchronous media upload streams alongside relational date availability queries in MongoDB.',
    learnings: 'Mastered production session security, RESTful routing architectural patterns, and third-party API integration.'
  },

  {
    id: 'virtual-meet',
    title: 'Virtual Meeting Portal',
    category: 'REAL-TIME FULL STACK APPLICATION',
    group: 'Full Stack',
    desc: 'Real-time video conferencing platform with peer-to-peer video streaming, chat, and screen sharing.',
    tech: ['MongoDb', 'Express.js', 'Node.js', 'React.js', 'Socket.IO', 'WebRTC', 'JWT'],
    github: '',
    demo: 'https://virtual-meeting-portal-2.onrender.com/',
    image: '/images/virtual-meeting-portal.png',
    imagePosition: 'object-center',
    featured: true,
    overview: 'Full-stack real-time video conferencing platform enabling users to securely create, join, and manage virtual meetings with JWT-based authentication.',
    problem: 'Traditional video conferencing platforms require heavy installations and high-latency handshake protocols.',
    solution: 'Integrated WebRTC and Socket.IO for low-latency video/audio communication, real-time text chat, screen sharing, and multi-participant collaboration.',
    features: [
      'Low-latency peer-to-peer video & audio streaming via WebRTC',
      'Real-time text chat and multi-participant signaling with Socket.IO',
      'One-click screen sharing and room link management',
      'JWT-based user authentication and meeting room access controls'
    ],
    challenges: 'Handling peer connection renegotiation and ICE candidate exchanges during network switches.',
    learnings: 'Deepened understanding of real-time web protocols, WebRTC media constraints, and Socket.IO event signaling.'
  },
  {
    id: 'velour',
    title: 'Velour — Live Luxury',
    category: 'FULL STACK E-COMMERCE',
    group: 'Full Stack',
    desc: 'Premium luxury fashion e-commerce platform with editorial product browsing, gender-split collections, and a cinematic shopping experience.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'Next.js', 'Cloudinary', 'JWT', 'insforge'],
    github: '',
    demo: 'https://28r7uqbj.insforge.site/',
    image: '/images/velour-luxury.jpg',
    featured: true,
    overview: 'Velour is a full-stack luxury fashion e-commerce platform built with the MERN stack. It delivers a cinematic, editorial shopping experience with separate Women\'s and Men\'s collections, curated seasonal drops, and a high-performance storefront designed to reflect premium brand identity.',
    problem: 'Most e-commerce platforms prioritize utility over brand immersion, resulting in a generic shopping experience that fails to reflect the premium quality of luxury fashion labels.',
    solution: 'Built a bespoke full-stack storefront with an editorial hero section, smooth scroll-driven product reveals, gender-split catalog navigation, secure cart and checkout flow, and Cloudinary-managed high-resolution product imagery.',
    features: [
      'Editorial full-screen hero with seasonal campaign imagery',
      'Gender-split product collections: Women & Men',
      'JWT-secured user authentication and session management',
      'Dynamic shopping cart with real-time quantity updates',
      'Cloudinary-powered high-resolution product image management',
      'Responsive, mobile-first layout with premium typography'
    ],
    challenges: 'Achieving sub-second image load times for high-resolution fashion photography while maintaining a cinematic visual fidelity across all device sizes.',
    learnings: 'Deepened expertise in full-stack e-commerce architecture, editorial UI design principles, and performance optimization for media-heavy luxury storefronts.'
  },
  {
    id: 'Weather-App',
    title: 'Weather Application',
    category: 'FRONTEND APPLICATION',
    group: 'Frontend',
    desc: 'A simple and interactive weather application for retrieving location-specific weather information.',
    tech: ['react.js', 'Tailwind.css'],
    github: '',
    demo: 'https://6a8dbebc1253900a149bc928--tourmaline-sorbet-9a8aaa.netlify.app/',
    image: '/images/weather-image.png',
    featured: true,
    overview: 'The application allows users to search for a location and retrieve relevant weather information through a simple and interactive interface.',
    problem: 'Users often need a quick and easy way to check the weather for their current location or any other location they are interested in.',
    solution: 'Built a responsive weather application using React.js and Tailwind.css that fetches real-time weather data based on user input and displays it in an intuitive interface.',
    features: [
      'Real-time weather data with current temperature and conditions',
      'Location-based weather search with city and country support',
      'Detailed forecasts including humidity, wind speed, and visibility',
      'Responsive weather dashboard optimized for desktop and mobile devices',
      'Dynamic weather visuals that adapt to current conditions',
      'Clean, intuitive interface with modern typography and responsive layouts'
    ],

    challenges: 'Handling real-time weather data and API responses reliably while maintaining a fast, responsive experience across different devices and network conditions.',

    learnings: 'Deepened expertise in API integration, asynchronous data handling, responsive UI development, and building user-friendly applications around real-time data.'
  },

  {
  id: 'Password-Generator',
  title: 'Password Generator',
  category: 'FRONTEND APPLICATION',
  group: 'Frontend',
  desc: 'A secure and interactive password generator for creating strong, customizable passwords quickly and efficiently.',
  tech: ['react.js', 'Tailwind.css'],
  github: '',
  demo: 'https://6a8c8d285740c829068a3bf9--earnest-cuchufli-1619f0.netlify.app/',
  image: '/images/password-generator.png',
  featured: true,

  overview: 'The application provides users with a simple and intuitive interface for generating secure passwords based on their preferred password requirements.',

  problem: 'Creating strong and unique passwords manually can be time-consuming, while weak or predictable passwords can increase the risk of unauthorized access.',

  solution: 'Built a responsive password generator using React.js and Tailwind.css that enables users to quickly generate strong passwords through an interactive and easy-to-use interface.',

  features: [
    'Instant generation of strong and randomized passwords',
    'Customizable password generation based on user requirements',
    'Interactive and intuitive password generation interface',
    'Responsive design optimized for desktop and mobile devices',
    'One-click password generation for a faster user experience',
    'Clean and modern UI with responsive typography and layout'
  ],

  challenges: 'Designing a simple password-generation workflow while ensuring reliable randomization, responsive behavior, and a smooth user experience across different screen sizes.',

  learnings: 'Deepened expertise in React.js state management, interactive UI development, responsive design with Tailwind.css, and building practical client-side utility applications.'
}
]

