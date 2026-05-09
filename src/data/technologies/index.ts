import figmaLogo from "./logos/figma.png";
import threejsLogo from "./logos/threejs.png";
import pythonLogo from "./logos/python.png";
import htmlLogo from "./logos/html.png";
import cssLogo from "./logos/css.png";
import javascriptLogo from "./logos/javascript.png";
import nextLogo from "./logos/nextjs.png";
import reactLogo from "./logos/react.png";
import reactRouterLogo from "./logos/react-router.png";
import reduxLogo from "./logos/redux.png";
import typescriptLogo from "./logos/typescript.png";
import tailwindLogo from "./logos/tailwind.svg";
import bootstrapLogo from "./logos/bootstrap.png";
import gitLogo from "./logos/git.png";
import prismaLogo from "./logos/prisma.png";
import sassLogo from "./logos/sass.png";
import supabaseLogo from "./logos/supabase.png";
import npmLogo from "./logos/npm.png";
import axiosLogo from "./logos/axios.png";
import emailJsLogo from "./logos/emailjs.png";
import formikLogo from "./logos/formik.png";
import framerMotionLogo from "./logos/framer-motion.png";
import reactGoogleLoginLogo from "./logos/react-google-login.png";
import reactIconsLogo from "./logos/react-icons.svg";
import reactSelectLogo from "./logos/react-select.png";
import swiperLogo from "./logos/swiper.svg";
import syncfusionLogo from "./logos/syncfusion.png";
import tmdbLogo from "./logos/tmdb.png";
import expressLogo from "./logos/express.png";
import mongodbLogo from "./logos/mongodb.png";
import nodeLogo from "./logos/node.png";

import { TechRecordType } from "@/types/TechnologyType";

export const ALL_TECH = {
   // MAIN SKILLS
   html: {
      name: "HTML5",
      logo: htmlLogo,
      category: "main",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
   },
   css: {
      name: "CSS3",
      logo: cssLogo,
      category: "main",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
   },
   javascript: {
      name: "JavaScript",
      logo: javascriptLogo,
      category: "main",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   },
   react: {
      name: "React",
      logo: reactLogo,
      category: "main",
      link: "https://reactjs.org/",
   },
   nextjs: {
      name: "Next.js",
      logo: nextLogo,
      category: "main",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   },
   reactRouter: {
      name: "React Router",
      logo: reactRouterLogo,
      category: "main",
      link: "",
   },
   typescript: {
      name: "TypeScript",
      logo: typescriptLogo,
      category: "main",
      link: "https://www.typescriptlang.org/",
   },
   redux: {
      name: "Redux",
      logo: reduxLogo,
      category: "main",
      link: "",
   },
   tailwind: {
      name: "Tailwind CSS",
      logo: tailwindLogo,
      category: "main",
      link: "https://tailwindcss.com/",
   },
   framerMotion: {
      name: "Framer Motion",
      logo: framerMotionLogo,
      category: "main",
      link: "",
   },
   sass: {
      name: "Sass",
      logo: sassLogo,
      category: "secondary",
      link: "",
   },
   git: {
      name: "Git",
      logo: gitLogo,
      category: "secondary",
      link: "",
   },
   bootstrap: {
      name: "Bootstrap",
      logo: bootstrapLogo,
      category: "main",
      link: "https://getbootstrap.com/",
   },
   npm: {
      name: "NPM",
      logo: npmLogo,
      category: "main",
      link: "",
   },

   // SECONDARY SKILLS
   nodejs: {
      name: "Node.js",
      logo: nodeLogo,
      category: "secondary",
      link: "",
   },
   express: {
      name: "Express",
      logo: expressLogo,
      category: "secondary",
      link: "",
   },
   mongodb: {
      name: "MongoDB",
      logo: mongodbLogo,
      category: "secondary",
      link: "",
   },
   supabase: {
      name: "Supabase",
      logo: supabaseLogo,
      category: "secondary",
      link: "",
   },
   prisma: {
      name: "Prisma",
      logo: prismaLogo,
      category: "secondary",
      link: "",
   },

   // IN PROGRESS / LEARNING
   python: {
      name: "Python",
      logo: pythonLogo,
      category: "inProgress",
      link: "https://www.python.org/",
   },
   figma: {
      name: "Figma",
      logo: figmaLogo,
      category: "inProgress",
      link: "https://www.figma.com/",
   },
   threejs: {
      name: "Three.js",
      logo: threejsLogo,
      category: "inProgress",
      link: "https://threejs.org/",
   },

   // OTHER / UTILITIES (Linked to Projects but hidden from main Skills list)

   axios: {
      name: "Axios",
      logo: axiosLogo,
      category: "other",
      link: "",
   },
   emailjs: {
      name: "EmailJS",
      logo: emailJsLogo,
      category: "other",
      link: "",
   },
   formik: {
      name: "Formik",
      logo: formikLogo,
      category: "other",
      link: "",
   },
   reactGoogleLogin: {
      name: "React Google Login",
      logo: reactGoogleLoginLogo,
      category: "other",
      link: "",
   },
   reactIcons: {
      name: "React Icons",
      logo: reactIconsLogo,
      category: "other",
      link: "",
   },
   reactSelect: {
      name: "React Select",
      logo: reactSelectLogo,
      category: "other",
      link: "",
   },
   swiper: {
      name: "Swiper",
      logo: swiperLogo,
      category: "other",
      link: "",
   },
   syncfusion: {
      name: "Syncfusion",
      logo: syncfusionLogo,
      category: "other",
      link: "",
   },
   tmdb: {
      name: "TMDB API",
      logo: tmdbLogo,
      category: "other",
      link: "",
   },
} satisfies TechRecordType;
