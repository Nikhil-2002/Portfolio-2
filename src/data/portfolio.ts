const pub = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export type Skill = {
  name: string;
  level: number;
  color: string;
};

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, color: 'from-orange-500 to-pink-500' },
  { name: 'CSS3 / Tailwind', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
  { name: 'TypeScript', level: 80, color: 'from-blue-500 to-indigo-500' },
  { name: 'React / Vite', level: 85, color: 'from-cyan-400 to-violet-500' },
  { name: 'Node.js', level: 78, color: 'from-emerald-400 to-teal-500' },
  { name: 'MongoDB / MySQL', level: 85, color: 'from-fuchsia-500 to-purple-600' },
  { name: 'Express.js', level: 80, color: 'from-rose-500 to-amber-500' },
];

export type Certificate = {
  title: string;
  category: string;
  date: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Scientist Day Certificate',
    category: 'NASA',
    date: '09 May 2021',
    image: pub('/img/work-1.jpg'),
  },
  {
    title: 'Digital Marketing',
    category: 'Google',
    date: '12 June 2021',
    image: pub('/img/work-2.jpg'),
  },
  {
    title: 'Communication Skills',
    category: 'TCS iON',
    date: '23 June 2021',
    image: pub('/img/work-3.jpg'),
  },
  {
    title: 'Web Development',
    category: 'ShapeAI',
    date: '18 July 2021',
    image: pub('/img/work-4.jpg'),
  },
  {
    title: 'Web Competition',
    category: 'Tech Tantra',
    date: '11 Aug 2021',
    image: pub('/img/work-5.jpg'),
  },
  {
    title: 'Coding Internship',
    category: 'Web Design',
    date: '18 Sep 2017',
    image: pub('/img/work-6.jpg'),
  },
  {
    title: 'Python with Tkinter',
    category: 'Training',
    date: '18 Sep 2018',
    image: pub('/img/work-7.jpg'),
  },
  {
    title: 'C++ Programming',
    category: 'Udemy',
    date: '18 Sep 2018',
    image: pub('/img/work-8.jpg'),
  },
  {
    title: 'Coding Competition',
    category: 'Coding',
    date: '18 Sep 2017',
    image: pub('/img/work-11.jpeg'),
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  source?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Portfolio v2',
    description:
      'This very site — built from scratch with React, TypeScript, Tailwind, Framer Motion, MUI and Swiper.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: pub('/img/work-9.png'),
    // Embed the same origin so the preview is always live.
    demo: '/',
    source: 'https://github.com/Nikhil-2002',
    featured: true,
  },
  {
    title: 'FoodShare',
    description:
      'Every day thousands of meals are wasted while millions go hungry. FoodShare connects restaurants, NGOs, and volunteers to save food and serve communities.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: pub('/img/work-6.jpg'),
    demo: 'https://nikhil-2002.github.io/FoodShare/',
    source: 'https://github.com/Nikhil-2002/FoodShare',
  },
  {
    title: 'ParkEasy',
    description:
      'Reserve parking spaces instantly and eliminate the stress of searching for parking. Discover, reserve, navigate and park — all before you leave.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: pub('/img/work-5.jpg'),
    demo: 'https://nikhil-2002.github.io/ParkEasyy/',
    source: 'https://github.com/Nikhil-2002/ParkEasyy',
  },
  {
    title: 'Landing Page Collection',
    description:
      'A series of pixel-perfect landing pages with modern layouts, animations, and accessibility.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    image: pub('/img/work-2.jpg'),
    demo: 'https://nikhil-2002.github.io/landing-pages/',
    source: 'https://github.com/Nikhil-2002',
  },
  {
    title: 'Restaurant Billing System',
    description:
      'Desktop billing app for restaurants with menu, order management, tax calculation and printable receipts.',
    tech: ['Python', 'Tkinter', 'SQLite'],
    image: pub('/img/work-7.jpg'),
    // No live demo (desktop app) — falls back to image preview.
    source: 'https://github.com/Nikhil-2002',
    featured: true,
  },
  {
    title: 'Web Competition Site',
    description:
      'Award-winning competition site built under a time-boxed challenge with Bootstrap and jQuery.',
    tech: ['HTML', 'CSS', 'jQuery'],
    image: pub('/img/work-10.jpg'),
    demo: 'https://nikhil-2002.github.io/competition-site/',
    source: 'https://github.com/Nikhil-2002',
  },
];

export const profile = {
  name: 'Nikhil Falke',
  brand: 'BLACK_WOLF',
  role: 'Full-Stack Web Developer',
  location: 'Amravati, Maharashtra, India',
  email: 'nikhilfalke11@gmail.com',
  phone: '+91 7499105910',
  resume: pub('/img/Nikhil Resume22.pdf'),
  avatar: pub('/img/newPic.jpeg'),
  socials: {
    github: 'https://github.com/Nikhil-2002',
    linkedin: 'https://www.linkedin.com/in/nikhil-falke-1a3639200/',
    instagram: 'https://www.instagram.com/black_wolf__15/',
    facebook: 'https://www.facebook.com/nikhilfalke.11/',
  },
  bio: [
    "Hi, I'm Nikhil Falke from Amravati. I hold a Bachelor's degree in Computer Science & Engineering from Dr. Rajendra Gode Institute of Technology and Research Centre, Amravati.",
    'I build clean, responsive interfaces and ship real product features — comfortable across the stack with HTML, CSS, Tailwind, JavaScript, TypeScript, React, PHP, and MySQL.',
    'I have completed three internships in web development, where I learned to work on live projects, collaborate using Git & GitHub, and deliver under real-world constraints.',
    "I'm also fluent in C, C++, Core Java, and Python (Tkinter), and have built mini-projects ranging from a Restaurant Billing System to interactive landing pages.",
  ],
  roles: [
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'React + TypeScript',
    'UI / UX Enthusiast',
  ],
};
