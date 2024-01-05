import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { IfooterIcons } from "../@types/@types.App";
import { AboutMe, Experience, Home, NoMatch, Resume, Skills } from "../Pages";

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

export const footerIcons: Array<IfooterIcons> = [
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
