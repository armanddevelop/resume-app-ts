import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { IIcons } from "../@types/@types.App";
import { AboutMe, Experience, Home, NoMatch, Resume, Skills } from "../Pages";
import {
  SiNodedotjs,
  SiTypescript,
  SiApollographql,
  SiGithub,
  SiSass,
  SiRedux,
  SiCss3,
  SiGitlab,
  SiReact,
  SiJavascript,
  SiPhp,
  SiJquery,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiHtml5,
} from "react-icons/si";
import { FaGears } from "react-icons/fa6";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/aboutme",
    name: "About",
    element: <AboutMe />,
  },
  {
    path: "/skills",
    name: "Skills",
    element: <Skills />,
  },
  {
    path: "/resume",
    name: "Resume",
    element: <Resume />,
  },
  {
    path: "/experience",
    name: "Experience",
    element: <Experience />,
  },
  {
    path: "*",
    name: "notMatch",
    element: <NoMatch />,
  },
];

export const footerIcons: Array<IIcons> = [
  {
    name: "github",
    iconComponent: <GitHub />,
    href: "https://github.com/armanddevelop",
  },
  {
    name: "linkedIn",
    iconComponent: <LinkedIn />,
    href: "https://www.linkedin.com/in/armando-salamanca-44973a80/",
  },
  {
    name: "email",
    iconComponent: <Email />,
    href: "mailto:asalamanca.ayon@gmail.com",
  },
];
export const skillsIcons: Array<IIcons> = [
  {
    name: "javaScript",
    iconComponent: <SiJavascript />,
  },
  {
    name: "React",
    iconComponent: <SiReact />,
  },

  {
    name: "Redux",
    iconComponent: <SiRedux />,
  },
  {
    name: "Node",
    iconComponent: <SiNodedotjs />,
  },
  {
    name: "TypeScript",
    iconComponent: <SiTypescript />,
  },
  {
    name: "Graphql",
    iconComponent: <SiApollographql />,
  },
  {
    name: "Github",
    iconComponent: <SiGithub />,
  },
  {
    name: "Sass",
    iconComponent: <SiSass />,
  },

  {
    name: "CSS3",
    iconComponent: <SiCss3 />,
  },
  {
    name: "HTML5",
    iconComponent: <SiHtml5 />,
  },
  {
    name: "Gitlab",
    iconComponent: <SiGitlab />,
  },
  {
    name: "php",
    iconComponent: <SiPhp />,
  },
  {
    name: "JQuery",
    iconComponent: <SiJquery />,
  },
  {
    name: "mongoDB",
    iconComponent: <SiMongodb />,
  },
  {
    name: "mongoose",
    iconComponent: <SiMongoose />,
  },
  {
    name: "JWT",
    iconComponent: <SiJsonwebtokens />,
  },
  {
    name: "API REST",
    iconComponent: <FaGears />,
  },
];
