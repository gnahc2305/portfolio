export const projects = [
  {
    title: "Modern landing page",
    gif: "/project_gif/project1.gif",
    description: "Modern demo website with animations on scroll",
    stack: ["Next 13", "Framer Motion", "Tailwind"],
    code: "https://github.com/gnahc2305/demo-website",
    live: "https://demo-website-ivory.vercel.app/",
    direction: "",
  },
  {
    title: "Etch a Sketch",
    gif: "/project_gif/project2.gif",
    description: "Website simulating an etch a sketch toy",
    stack: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/gnahc2305/etch-a-sketch",
    live: "https://gnahc2305.github.io/etch-a-sketch/",
    direction: "md:flex-row-reverse",
  },
  {
    title: "Simple Calculator",
    gif: "/project_gif/project3.gif",
    description: "Capable of adding, subtracting, multiplying, and dividing",
    stack: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/gnahc2305/calculator",
    live: "https://gnahc2305.github.io/calculator/",
    direction: "",
  },
];

export const skills = [
  {
    name: "JavaScript",
    img: "/skills_img/js.png",
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
    name: "Git",
    img: "/skills_img/git.png",
  },
  {
    name: "Webpack",
    img: "/skills_img/webpack.png",
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

export const aboutEn =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid omnis necessitatibus doloremque beatae totam vel vitae consequatur non at, provident autem nostrum itaque fugit.";

export const aboutEs =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid omnis necessitatibus doloremque beatae totam vel vitae consequatur non at, provident autem nostrum itaque fugit.";

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
