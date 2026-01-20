import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import EmailIcon from "./../public/assets/icons/email.svg";
import WhatsappIcon from "./../public/assets/icons/whatsapp.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    { name: "HTML5", icon: "/assets/tech/html5.svg", link: "https://html.spec.whatwg.org/" },
    { name: "CSS3", icon: "/assets/tech/css3.svg", link: "https://www.w3.org/Style/CSS/" },
    { name: "JavaScript", icon: "/assets/tech/javascript.svg", link: "https://262.ecma-international.org/" },
    { name: "TypeScript", icon: "/assets/tech/typescript.svg", link: "https://www.typescriptlang.org/" },
    { name: "C#", icon: "/assets/tech/csharp.svg", link: "https://docs.microsoft.com/dotnet/csharp/" },
    { name: "Java", icon: "/assets/tech/java.svg", link: "https://www.java.com/" },
    { name: "Python", icon: "/assets/tech/python.svg", link: "https://www.python.org/" },
  ],
  frameworks: [
    { name: "ASP.NET Core", icon: "/assets/tech/aspnet-core.svg", link: "https://docs.microsoft.com/aspnet/core/" },
    { name: "Entity Framework", icon: "/assets/tech/efcore.svg", link: "https://docs.microsoft.com/ef/" },
    { name: "Angular", icon: "/assets/tech/angular.svg", link: "https://angular.io/" },
    { name: "Bootstrap", icon: "/assets/tech/bootstrap.svg", link: "https://getbootstrap.com/" },
  ],
  libraries: [
    { name: "JWT (JSON Web Tokens)", icon: "/assets/tech/jwt.svg", link: "https://jwt.io/" },
    { name: "SignalR", icon: "/assets/tech/SignalRCreate.svg", link: "https://dotnet.microsoft.com/apps/aspnet/signalr" },
    { name: "RxJS", icon: "/assets/tech/rxjs.svg", link: "https://rxjs.dev/" },
  ],
  tools: [
    { name: "Visual Studio", icon: "/assets/tech/visual-studio.svg", link: "https://visualstudio.microsoft.com/" },
    { name: "VS Code", icon: "/assets/tech/vscode.svg", link: "https://code.visualstudio.com/" },
    { name: "Git", icon: "/assets/tech/git.svg", link: "https://git-scm.com/" },
    { name: "GitHub", icon: "/assets/icons/github.svg", link: "https://github.com/" },
    { name: "Postman", icon: "/assets/tech/postman.svg", link: "https://www.postman.com/" },
    { name: "Docker", icon: "/assets/tech/docker.svg", link: "https://www.docker.com/" },
  ],
  environments: [
    { name: ".NET SDK", icon: "/assets/tech/dotnet.svg", link: "https://dotnet.microsoft.com/download" },
    { name: "Node.js", icon: "/assets/tech/nodejs.svg", link: "https://nodejs.org/" },
    { name: "Yarn", icon: "/assets/tech/yarn.svg", link: "https://yarnpkg.com/" },
    { name: "Azure CLI", icon: "/assets/tech/azure-cli.svg", link: "https://docs.microsoft.com/cli/azure/" },
    { name: "Microsoft SQL Server", icon: "/assets/tech/microsoft-sql-server.svg", link: "https://www.microsoft.com/sql-server" },
    { name: "Microservices Architecture", icon: "/assets/tech/microservices.svg", link: "https://docs.microsoft.com/azure/architecture/guide/architecture-styles/microservices" },
  ],
  databases: [
    { name: "SQL Server", icon: "/assets/tech/sql-server.svg", link: "https://www.microsoft.com/sql-server" },
    { name: "PostgreSQL", icon: "/assets/tech/postgresql.svg", link: "https://www.postgresql.org/" },
    { name: "MongoDB", icon: "/assets/tech/mongodb.svg", link: "https://www.mongodb.com/" },
    { name: "Redis", icon: "/assets/tech/redis.svg", link: "https://redis.io/" },
    { name: "Azure Cosmos DB", icon: "/assets/tech/cosmosdb.svg", link: "https://azure.microsoft.com/services/cosmos-db/" },
  ],
  deployment: [
    { name: "Azure App Service", icon: "/assets/tech/azure.svg", link: "https://azure.microsoft.com/services/app-service/" },
    { name: "Azure Functions", icon: "/assets/tech/azure-functions.svg", link: "https://azure.microsoft.com/services/functions/" },
    { name: "Kubernetes", icon: "/assets/tech/kubernetes.svg", link: "https://kubernetes.io/" },
    { name: "CI/CD (GitHub Actions)", icon: "/assets/tech/github-actions.svg", link: "https://docs.github.com/actions" },
  ],
};

const experiences = [
  {
    title: ".NET Backend Developer",
    company_name: "Newulm Medical",
    icon: "/assets/company/Newulm.ico",
    iconBg: "#E6DEDD",
    date: "Dec 2025 - Present",
    points: [
      "Contribute to a healthcare booking platform connecting users with licensed providers.",
      "Develop and maintain Azure-based microservices with reliable API contracts and event-driven communication.",
      "Work with SQL and NoSQL persistence and implement idempotent delivery patterns in distributed workflows.",
    ],
  },
  {
    title: "Full-Stack .NET Instructor",
    company_name: "Information Technology Institute (ITI)",
    icon: "/assets/company/Iti-Icon.ico",
    iconBg: "#E6DEDD",
    date: "Jul 2025 - Present",
    points: [
      "Teaching C#, .NET fundamentals, databases and frontend technologies (HTML, CSS, JS, Angular).",
      "Designed hands-on sessions and guided students through practical projects using Visual Studio and SQL Server.",
    ],
  },
  {
    title: "Full-Stack .NET Software Engineer",
    company_name: "New Vision Systems Canada",
    icon: "/assets/company/erasebg-transformed.png",
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Present",
    points: [
      "Designed and implemented full-stack .NET solutions using ASP.NET Core and Entity Framework.",
      "Built responsive frontends with Angular, HTML5 and CSS3.",
    ],
  },
  {
    title: "Full-stack .Net Web Development (Internship)",
    company_name: "Information Technology Institute (ITI)",
    icon: "/assets/company/Iti-Icon.ico",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Mar 2025",
    points: [
      "Intensive 4-month full-stack .NET web development program (ICC / ITP).",
      "Worked on ASP.NET, Web API, and frontend integration topics during the intensive code camp.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Store Management System",
    description:
      "Developed a system to manage products and orders with CRUD operations, inventory tracking, and Excel integration.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Windows Forms", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
      { name: "Desktop Application", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/InventoryAndSales.jpg",
    source_code_link: "https://github.com/RouQandel/InventoryAndSales",
    deployed_link: "#",
  },
  {
    name: "ClayHaven E-commerce Platform",
    description:
      "Online platform for handmade clay products with user registration, role-based access, and Stripe payment integration.",
    tags: [
      { name: "ASP.NET MVC", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "Entity Framework", color: "pink-text-gradient" },
      { name: "Stripe", color: "pink-text-gradient" },
      { name: "Stripe Payments", color: "green-text-gradient" },
      { name: "Role-Based Access", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/clay.png",
    source_code_link: "https://github.com/Mohamedmahdy404/ClayHaven#",
    deployed_link: "http://clayhaven.runasp.net/",
  },
  {
    name: "Pharmacy E-Commerce Platform",
    description:
      "Platform for pharmacy owners to create online shops; includes partial/fuzzy search to help users find nearest pharmacies with required products.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "ASP.NET Web API", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
      { name: "RESTful APIs", color: "blue-text-gradient" },
      { name: "Fuzzy Search", color: "green-text-gradient" },
      { name: "Full-Stack Application", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/PharmaHub.png",
    source_code_link: "https://github.com/PharmaHub-Ecommerce-Angular-WebAPI",
    deployed_link: "#",
  },
  {
  name: "Ayah Online – Quran & Arabic Academy",
  description:
    "Clean and responsive landing page for an online academy teaching Quran recitation and Arabic grammar to children. Designed with a family-friendly UI to showcase services, values, and contact options.",
  tags: [
    { name: "HTML", color: "blue-text-gradient" },
    { name: "CSS", color: "green-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
    { name: "Responsive Design", color: "blue-text-gradient" },
    { name: "EmailJs", color: "yellow-text-gradient" },
  ],
  image: "/assets/projects/ayah-online.png",
  source_code_link: "https://github.com/Mohamedmahdy404/Ayah-Online",
  deployed_link: "https://ayah-online.vercel.app/",
},
{
  name: "Middle East Company Platform",
  description:
    "Full-stack web platform featuring a public-facing website and a secure admin dashboard. The dashboard supports full CRUD operations for managing content and services, with image uploads stored securely in cloud storage, enabling dynamic and easy website management.",
  tags: [
    { name: "Angular", color: "blue-text-gradient" },
    { name: "ASP.NET Web API", color: "green-text-gradient" },
    { name: "SQL Server", color: "pink-text-gradient" },
    { name: "Admin Dashboard", color: "blue-text-gradient" },
    { name: "CRUD Operations", color: "green-text-gradient" },
    { name: "Cloud Storage", color: "pink-text-gradient" },
  ],
  image: "/assets/projects/middle-east-seven.png",
  source_code_link: "#",
  deployed_link: "https://middle-east-seven.vercel.app/",
},

];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Mohamedmahdy404",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/mohamedmahdy9/",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    link: "mailto:mohamedmahdy3162@gmail.com",
  },
  {
    id: "whatsapp",
    icon: <WhatsappIcon />,
    link: "https://wa.me/201069033838",
  },
];

const heroTexts = [
  "Software Engineer",
  500,
  "Full-Stack .NET Developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
