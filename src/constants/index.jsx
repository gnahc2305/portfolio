export const projects = [
  {
    title: "HCF Representaciones S.A.C",
    gif: "/project_gif/project1.gif",
    description: "Website for the company HCF Representaciones S.A.C",
    description_es: "Página para la empresa HCF Representaciones S.A.C",
    stack: ["NextJs", "Typescript", "Tailwind"],
    code: "https://github.com/gnahc2305/hcfrepresentaciones",
    live: "https://hcf-representaciones.com/",
    direction: "",
  },
  {
    title: "Gym Tracker",
    gif: "/project_gif/project2.gif",
    description: "Workout tracking website that logs workouts and saves them to your account. CS50 Final project",
    description_es: "Página para guardar rutinas de ejercicios. Proyecto final de CS50",
    stack: ["NextJs", "TypeScript", "Prisma", "NeonDB"],
    code: "https://github.com/gnahc2305/gym-tracker",
    live: "https://gym-tracker-adzb0h5se-gnahc2305.vercel.app/",
    direction: "md:flex-row-reverse",
  },
  {
    title: "E-Commerce",
    gif: "/project_gif/project3.gif",
    description: "Mock e-commerce website with sanity as a CMS",
    description_es: "Demo de una tienda online, usa sanity como un CMS",
    stack: ["NextJs", "Sanity", "Stripe"],
    code: "https://github.com/gnahc2305/ecommerce",
    live: "https://ecommerce-f4zn357eu-gnahc2305.vercel.app/",
    direction: "",
  },
];

export const skills = [
  {
    name: "JavaScript",
    img: "/skills_img/js.png",
  },
  {
    name: "TypeScript",
    img: "/skills_img/typescript.png",
  },
  {
    name: "NextJs",
    img: "/skills_img/nextjs.png",
  },
  {
    name: "HTML",
    img: "/skills_img/html.png",
  },
  {
    name: "CSS",
    img: "/skills_img/css.png",
  },
  {
    name: "React",
    img: "/skills_img/react.png",
  },
  {
    name: "Prisma",
    img: "/skills_img/prisma.png",
  },
  {
    name: "PostgreSQL",
    img: "/skills_img/postgresql.png",
  },
  {
    name: "Git",
    img: "/skills_img/git.png",
  },
  {
    name: "Tailwind",
    img: "/skills_img/tailwind.png",
  },
  {
    name: "NPM",
    img: "/skills_img/npm.png",
  },
  {
    name: "Jest",
    img: "/skills_img/jest.png",
  },
];

export const toolTipStyles =
  "relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible";

export const aboutEn = (
  <>
    <h2 className="mb-5">I'm a passionate web developer from Peru.</h2>
    <p>Ever since I was a kid I've always been amazed by tech and how it works. I am constantly learning new technologies and methods to improve myself and create awesome things.</p>
  </>
)

export const aboutEs = (
  <>
    <h2 className="mb-5">Soy un web developer apasionado de Perú.</h2>
    <p>Desde pequeño siempre me han asombrado las computadoras y como funcionan. Estoy constantemente aprendiendo nuevas tecnologías y métodos para mejorarme a mi mismo y crear cosas geniales.</p>
  </>
)

export const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className=""
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

export const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className=""
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);
