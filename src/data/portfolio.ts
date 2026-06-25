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
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Router'],
    image: pub('/img/work-9.png'),
    demo: 'https://nikhil-2002.github.io/Portfolio-2/',
    source: 'https://github.com/Nikhil-2002/Portfolio-2',
    featured: true,
  },
  {
    title: 'FoodShare',
    description:
      'Every day thousands of meals are wasted while millions go hungry. FoodShare connects restaurants, NGOs, and volunteers to save food and serve communities.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Router'],
    image: pub('/img/work-6.jpg'),
    demo: 'https://nikhil-2002.github.io/FoodShare/',
    source: 'https://github.com/Nikhil-2002/FoodShare',
  },
  {
    title: 'ParkEasy',
    description:
      'Reserve parking spaces instantly and eliminate the stress of searching for parking. Discover, reserve, navigate and park — all before you leave.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Router'],
    image: pub('/img/work-5.jpg'),
    demo: 'https://nikhil-2002.github.io/ParkEasyy/',
    source: 'https://github.com/Nikhil-2002/ParkEasyy',
  },
  {
    title: 'JoinTours',
    description:
      'A modern social platform for discovering travel partners, joining group trips, splitting costs, and exploring the world together.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Router'],
    image: pub('/img/work-2.jpg'),
    demo: 'https://nikhil-2002.github.io/JoinTours/',
    source: 'https://github.com/Nikhil-2002/JoinTours',
  },
  {
    title: 'Gaurakshan Website',
    description:
      'A dedicated web presence for a Gaurakshan organisation — raising awareness, sharing information, and connecting supporters to cow welfare initiatives.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: pub('/img/work-7.jpg'),
    demo: 'https://nikhil-2002.github.io/Gaurakshan-Web/',
    source: 'https://github.com/Nikhil-2002/Gaurakshan-Web',
  },
  {
    title: 'ScribblePad',
    description:
      'A lightweight, interactive drawing app with crayon, pen, and highlighter tools. Supports color picker, eraser, clear canvas, and export as PNG/JPEG — all in a responsive React + Fabric.js UI.',
    tech: ['React', 'Fabric.js', 'Tailwind CSS'],
    image: pub('/img/work-10.jpg'),
    demo: 'https://nikhil-2002.github.io/ScribblePad/',
    source: 'https://github.com/Nikhil-2002/ScribblePad',
    featured: true,
  },
];

export const profile = {
  name: 'Nikhil Falke',
  brand: 'BLACK_WOLF',
  role: 'Front-End Developer',
  location: 'Amravati, Maharashtra, India',
  email: 'nikhilfalke11@gmail.com',
  phone: '+91 7499105910',
  logo: pub('/img/blackwolf-wolf.svg'),
  resume: pub('/img/Nikhil Resume22.pdf'),
  avatar: pub('/img/newPic.jpeg'),
  socials: {
    github: 'https://github.com/Nikhil-2002',
    linkedin: 'https://www.linkedin.com/in/nikhil-falke-1a3639200/',
    instagram: 'https://www.instagram.com/black_wolf__15/',
    facebook: 'https://www.facebook.com/nikhilfalke.11/',
  },
  bio: [
    "I'm a Front-End Developer currently working as a MERN Stack Developer at Lifemine Technologies Pvt. Ltd., specializing in building scalable, high-performance, and user-centric web applications.",
    'My core strength lies in frontend UI development — crafting intuitive, responsive, and visually engaging interfaces using React.js, TypeScript, JavaScript, Material UI (MUI), Tailwind CSS, and TanStack (React Query & TanStack Table).',
    'I am experienced in working with REST APIs, API integration and testing using Postman, and have a solid understanding of full-stack workflows. I also work with Git, Jira, and Google Analytics to enhance performance, tracking, and usability.',
    'I am committed to writing clean, maintainable code and continuously improving my skills to stay aligned with evolving frontend ecosystems — transforming ideas into impactful digital experiences that deliver real value to users.',
  ],
  roles: [
    'Front-End Developer',
    'MERN Stack Developer',
    'React + TypeScript',
    'MUI / Tailwind CSS',
    'UI / UX Enthusiast',
  ],
};
