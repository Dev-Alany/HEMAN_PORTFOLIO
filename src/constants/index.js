import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  mcbTechnologies,
  westPokotCounty,
  freelance,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  csharp,
  python,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "MCB Technologies",
    icon: mcbTechnologies,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining software applications using C#, ASP.NET, React.js, and Next.js.",
      "Engaged in database administration and ensuring efficient data management.",
      "Collaborating with cross-functional teams to meet project requirements and deadlines.",
      "Applied Dart programming with Flutter for mobile development.",
      "Participating in system engineering and DevOps practices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developed and maintained web applications using React.js, Node.js, and other full-stack technologies.",
      "Designed and implemented responsive user interfaces and ensured cross-browser compatibility.",
      "Worked on mobile app development using Flutter and Dart.",
      "Engaged in code reviews and provided feedback to improve code quality and maintainability.",
    ],
  },
  // {
  //   title: "Finance Intern",
  //   company_name: "West Pokot County",
  //   icon: westPokotCounty,
  //   iconBg: "#E6DEDD",
  //   date: "Oct 2023 - Dec 2023",
  //   points: [
  //     "Assisted in data analysis, reconciliation, and financial report generation.",
  //     "Participated in budget planning and financial reporting.",
  //     "Collaborated with cross-functional teams to implement financial strategies.",
  //     "Developed financial models for budgeting and forecasting.",
  //   ],
  // },
  // {
  //   title: "Economic and Budget Officer (Attachment)",
  //   company_name: "West Pokot County",
  //   icon: westPokotCounty,
  //   iconBg: "#383E56",
  //   date: "Oct 2022 - Jan 2023",
  //   points: [
  //     "Led economic analyses for strategic financial planning, including drafting CIDP 2023-2027.",
  //     "Managed budget planning and alignment with organizational goals.",
  //     "Conducted data analysis to optimize budget allocations for fiscal efficiency.",
  //     "Collaborated with cross-functional teams to implement innovative financial strategies.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Heman proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Heman does.",
    name: "James Mabiokeg",
    designation: "CEO",
    company: "MCB Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Heman optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Building an AirBnB Clone",
    description:
      "This project is the initial stage of building a web-based platform that allows users to manage property listings, bookings, and other essential tasks. It implements a backend interface for creating, updating, and managing data through console commands, with persistent storage using JSON serialization/deserialization.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Shell",
        color: "blue-text-gradient",
      },
      {
        name: "Puppet",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dev-Alany/AirBnB_clone_v2",
  },
  {
    name: "Legal Management System",
    description:
      "A web-based platform designed to streamline legal case management, enabling users to track case progress, manage client details, schedule appointments, and store legal documents securely. The system improves efficiency for law firms and legal professionals by automating administrative tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Dev-Alany/Webstack---Portfolio-Project",
    video_link:
      "https://www.youtube.com/watch?v=qec3YXIsAdA&t=86s&ab_channel=HemanAlany",
  },
  {
    name: "Finsight",
    description:
      "A comprehensive financial analytics tool designed for progressive FinTechs. FinSights processes MPESA and bank statements, providing insights such as credit scores, spending habits, and other relevant financial information. These insights help users and businesses make informed financial decisions and enhance their operations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    video_link: "https://finsights.mcb.co.ke/",
  },
];

export { services, technologies, experiences, testimonials, projects };
