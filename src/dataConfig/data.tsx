import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  ICourses,
  IEducation,
  IExperience,
  IIcons,
} from "../@types/@types.App";
import {
  AboutMe,
  Experience,
  Home,
  NoMatch,
  Resume,
  Skills,
  Contact,
} from "../Pages";
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
    path: "/contactme",
    name: "Contact",
    element: <Contact />,
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
    iconComponent: <GitHub fontSize="large" />,
    href: "https://github.com/armanddevelop",
  },
  {
    name: "linkedIn",
    iconComponent: <LinkedIn fontSize="large" />,
    href: "https://www.linkedin.com/in/armando-salamanca-44973a80/",
  },
  {
    name: "email",
    iconComponent: <Email fontSize="large" />,
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
      <>
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
      </>,
      <>
        Developed dynamic and responsive websites using <b>HTML</b>, <b>CSS</b>,
        <b>SASS</b>, <b>JavaScript</b>, and <b>React</b>
      </>,
      <>
        Technical domumentation and tickets review at <b>Jira.</b>
      </>,
      <>
        Experience in <b>Agile</b> methodologies.
      </>,
      <>
        Support <b>MFOL</b> team in Europe markets to develop new migration of
        method of payments.
      </>,
      <>
        Create new components to implement new payment methods called like
        Applepay, Braintree and Adyen.
      </>,
      <>
        Work with API rest to consume the Braintree and Applepay library to
        process the purchase of the constumer.
      </>,
      <>
        Making Unit testing in <b>Jest</b> to keep in 80% the coverage of the
        appcation.
      </>,
      <>Make code review to my teammates.</>,
      <>
        Deploy the branches to differents environments to complete the test to
        QA team.
      </>,
      <>
        Make the documentacion at <b>Confluence</b> to track important
        informacion about the develop of the application.
      </>,
      <>
        Support the stakeholders of the new requirements necessaries to complete
        the develop.
      </>,
      <>
        Support the backend teammates of other projects inside ticket master in{" "}
        <b>React</b> development.
      </>,
      <>
        Keep in contant with the program manager to track the advace of the task
        assigned.
      </>,
      <>
        Use the klarna library to implemenmt this payment method into UK market.
      </>,
      <>
        Collaborate with differents team to complete the develop of the new
        pages and payment methods.
      </>,
    ],
  },
  {
    companyName: "Softtek",
    position: "UI frontend Developer - Herbalife",
    period: "Aug 2018 - Agus 2021",
    activities: [
      <>
        Assinged to my account team like UI developer at{" "}
        <Link
          href="https://www.herbalife.com/"
          target="_blank"
          underline="hover"
        >
          <b>Herbalife</b>.
        </Link>
      </>,
      <>
        Troubleshot and bugs fixed, issues in the Front-end to ensure smooth
        operation of the applications working in the stack <b>JavaScript</b>,{" "}
        <b>JQuery</b> and <b>.NET.</b>
      </>,
      <>
        Develop new Features in JavaScript, jQuery, SASS like referral program
        project.
      </>,
      <>
        Working under <b>Agiles methodologies.</b>
      </>,
      <>
        Implement <b>React and React context</b> to develop a new page called
        2KQualificationsTracker, where the user can track the points need to
        reach more discounts in the herbalife products.
      </>,
      <>
        Working in referral program project when a user can come back to
        purchase or sell herbalife products working with{" "}
        <b>Kendo UI library.</b>
      </>,
      <>
        Deploy the branches in QA enviroments to complete the test for QA team.
      </>,
      <>
        Implement unit testing using <b>Jest</b> in all my account projects to
        track the coverage of all the fronted pages.
      </>,
      <>
        Configuration the <b>sonarQube</b> tool to show the coverage of the
        differents projects in <b>Team Foundacion Services.</b>
      </>,
      <>fix the pipelines to ensure the correct deployment of a branch.</>,
      <>
        Teach others teammates about <b>React</b> and features to use this
        library.
      </>,
      <>
        Collaborate with differents teams to complete the develop of new
        features in the pages and also ensure the safe deployment to produccion.
      </>,
    ],
  },
  {
    companyName: "Radio Movil Dispa",
    position: "Analista de Equipo Terminal - Telcel",
    period: "Feb 2012 - Aug 2018",
    activities: [
      <>
        Working on one of the most important telecomunications company here in
        mexico{" "}
        <Link href="https://www.telcel.com/" target="_blank" underline="hover">
          <b>Telcel</b>.
        </Link>
      </>,
      <>Manage the warranties of the smartphones to final customer</>,
      <>
        Implement a new page to keep track the process of warranties of IPhones
        using a form where the teammates enter the information about the
        costumer , this form were developed with <b>JavaScript</b> and{" "}
        <b>JQuery.</b>
      </>,
      <>
        Give support to the final customer with the configuration and use of the
        smartphones.
      </>,
    ],
  },
];
export const education: Array<IEducation> = [
  {
    schoolName: "Centro de enseñanza tecnica industrial CETI",
    degree: "Bachelor degree of Electronic engineering in manufacturing",
  },
];

export const coursesList: Array<ICourses> = [
  {
    nameCourse: "Good Practice of programming",
    linkCourse:
      "https://www.linkedin.com/in/armando-salamanca-44973a80/overlay/1635478099059/single-media-viewer/?profileId=ACoAABExzPkBU6-TBWAlm4CK2UIqyJ_7Chy69gI",
  },
  {
    nameCourse: "ReactJS from Zero",
    linkCourse:
      "https://www.linkedin.com/in/armando-salamanca-44973a80/overlay/1635463944978/single-media-viewer/?profileId=ACoAABExzPkBU6-TBWAlm4CK2UIqyJ_7Chy69gI",
  },
  {
    nameCourse: "ReactJS advance",
    linkCourse:
      "https://platzi.com/p/socrasky.salamanca/curso/1601-react-avanzado/diploma/detalle/",
  },
  {
    nameCourse: "Types advance and functions typeScript",
    linkCourse:
      "https://platzi.com/p/socrasky.salamanca/curso/2879-typescript-tipos-avanzados/diploma/detalle/",
  },
  {
    nameCourse: "Graphql Basic",
    linkCourse:
      "https://platzi.com/p/socrasky.salamanca/curso/1512-graphql/diploma/detalle/",
  },
];
