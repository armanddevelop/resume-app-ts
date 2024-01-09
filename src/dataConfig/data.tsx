import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { IEducation, IExperience, IIcons } from "../@types/@types.App";
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
import Link from "@mui/material/Link";

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
export const experience: Array<IExperience> = [
  {
    companyName: "Globant",
    position: "UI frontend Developer - Ticket Master",
    period: "Sep 2021 - PRESENT",
    activities: [
      <li>
        Support the client{" "}
        <Link
          href="https://www.ticketmaster.com/"
          target="_blank"
          underline="hover"
        >
          <b>TicketMaster</b>
        </Link>{" "}
        in all activities related to frontend and also backend develompent,
        working in the stack <b>React</b>, <b>Reflux</b>, <b>SASS</b> and{" "}
        <b>PHP.</b>
      </li>,
      <li>
        Technical domumentation and tickets review at <b>Jira.</b>
      </li>,
      <li>
        Experience in <b>Agile</b> methodologies.
      </li>,
      <li>
        Support <b>MFOL</b> team in Europe markets to develop new migration of
        method of payments.
      </li>,
      <li>
        Create new components to implement new payment method called Braintree.
      </li>,
      <li>
        Work with API rest to consume the Braintree library to process the
        purchase of the constumer.
      </li>,
      <li>
        Making Unit testing in <b>Jest</b> to keep in 80% the coverage of the
        appcation.
      </li>,
      <li>Make code review to my teammates.</li>,
      <li>
        Deploy the branches to differents environments to complete the test to
        QA team.
      </li>,
      <li>
        Make the documentacion at <b>Confluence</b> to track important
        informacion about the develop of the application.
      </li>,
      <li>
        Support the stakeholders of the cent about the new requirements
        necessary to complete the develop.
      </li>,
      <li>
        Support the backend teammates of other projects inside ticket master in{" "}
        <b>React</b> development.
      </li>,
      <li>
        Keep in contant with the program manager to track the advace of the task
        assigned.
      </li>,
      <li>
        Use the klarna library to implemenmt this payment method into UK market.
      </li>,
      <li>
        Collaborate with differents team to complete the develop of the new
        pages and payment methods.
      </li>,
    ],
  },
  {
    companyName: "Softtek",
    position: "UI frontend Developer - Herbalife",
    period: "Aug 2018 - Agus 2021",
    activities: [
      <li>
        Assinged to my account team like UI developer at{" "}
        <Link
          href="https://www.herbalife.com/"
          target="_blank"
          underline="hover"
        >
          <b>Herbalife</b>.
        </Link>
      </li>,
      <li>
        Troubleshot and bugs fixed, issues in the Front-end to ensure smooth
        operation of the applications working in the stack <b>JavaScript</b>,{" "}
        <b>JQuery</b> and <b>.NET.</b>
      </li>,
      <li>
        Develop new Features in JavaScript, jQuery, SASS like referral program
        project.
      </li>,
      <li>
        Working under <b>Agiles methodologies.</b>
      </li>,
      <li>
        Implement <b>React and React context</b> to develop a new page called
        2KQualificationsTracker, where the user can track the points need to
        reach more discounts in the herbalife products.
      </li>,
      <li>
        Working in referral program project when a user can come back to
        purchase or sell herbalife products working with{" "}
        <b>Kendo UI library.</b>
      </li>,
      <li>
        Deploy the branches in QA enviroments to complete the test for QA team.
      </li>,
      <li>
        Implement unit testing using <b>Jest</b> in all my account projects to
        track the coverage of all the fronted pages.
      </li>,
      <li>
        Configuration the <b>sonarQube</b> tool to show the coverage of the
        differents projects in <b>Team Foundacion Services.</b>
      </li>,
      <li>fix the pipelines to ensure the correct deployment of a branch.</li>,
      <li>
        Teach others teammates about <b>React</b> and features to use this
        library.
      </li>,
      <li>
        Collaborate with differents teams to complete the develop of new
        features in the pages and also ensure the safe deployment to produccion.
      </li>,
    ],
  },
  {
    companyName: "Radio Movil Dispa",
    position: "Analista de Equipo Terminal - Telcel",
    period: "Feb 2012 - Aug 2018",
    activities: [
      <li>
        Working on one of the most important telecomunications company here in
        mexico{" "}
        <Link href="https://www.telcel.com/" target="_blank" underline="hover">
          <b>Telcel</b>.
        </Link>
      </li>,
      <li>Manage the warranties of the smartphones to final customer</li>,
      <li>
        Implement a new page to keep track the process of warranties of IPhones
        using a form where the teammates enter the information about the
        costumer , this form were developed with <b>JavaScript</b> and{" "}
        <b>JQuery.</b>
      </li>,
      <li>
        Give support to the final customer with the configuration and use of the
        smartphones.
      </li>,
    ],
  },
];
export const education: Array<IEducation> = [
  {
    schoolName: "Centro de enseñanza tecnica industrial CETI",
    degree: "Bachelor of Electronic engineering in manufacturing",
  },
];
