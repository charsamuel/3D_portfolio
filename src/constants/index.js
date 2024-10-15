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
  wayaap,
  geeks,
  larseng,
  delisa,
  todo,
  promptopia,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "React/Next Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
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
];

const experiences = [

  {
    title: "Full Stack Developer",
    company_name: "Geek Republiq",
    icon: geeks,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Developing and maintaining full-stack web applications for car listings and customer management, utilizing React.js for the front-end and Node.js/Express for the backend.",
      "Integrated AWS services (S3, EC2) for handling image uploads and hosting the backend infrastructure.",
      "Implemented secure user authentication using JWT and OAuth, ensuring a robust and secure customer login experience.",
      "Improved site performance by 30% through effective database indexing and load balancing techniques.",
      "Collaborated with cross-functional teams to develop new features, achieving a 20% increase in monthly active users.",
      "Staying updated with the latest industry trends and technologies to continually improve my skill set.",
      "Debugging and troubleshooting issues to ensure optimal application performance",
      
    ]
},
  {
    title: "Frontend Developer",
    company_name: "Wayaap NGO,",
    icon: wayaap,
    iconBg: "#383E56",
    date: "Feb 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Optimizing application performance and load times for better user experience.",
      "Creating documentation to facilitate onboarding and maintain code clarity.",
      "Collaborating in agile development environments, participating in sprint planning and retrospectives.",
      "Building reusable components and libraries to streamline development processes."

    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Larseng Group",
    icon: larseng,
    iconBg: "#383E56",
    date: "Aug 2020 - Oct 2020",
    points: [
      "Developed engaging user interfaces using React.js and Tailwind CSS, ensuring excellent user experiences across multiple devices.",
      "Collaborated with the back-end team to implement RESTful APIs, improving data synchronization between front-end and back-endrating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilized GitHub for version control and collaborated with developers in an Agile environment to ship features within sprints.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilizing version control systems like Git for efficient project collaboration"
    ],
  },

   
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Charity proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Charity does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Charity optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant",
    description: "A full-stack web application for managing restaurant operations, including menu management and table reservations. Built with the MERN stack, it offers a seamless user experience and dynamic data handling.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: delisa,
    source_code_link: "https://restaurant-lgoi.onrender.com/",
  },
  {
    name: "Todo-app",
    description:"Web application that allows users to manage their tasks, mark them as completed,filter the completed tasks and the incompleted ones,it also has a search where you can find your to-do tasks easily. It uses Redux Toolkit for state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
  
    ],
    image: todo,
    source_code_link: "https://todo-app-iota-three-35.vercel.app/",
  },
  {
    name: "Promptopia",
    description: "A full-stack web application designed for generating, sharing, and exploring AI prompts. It features a user-friendly interface and utilizes Next.js for optimized performance and server-side rendering.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "googleauthentication",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://promptopia-ai-prompts-mu.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
