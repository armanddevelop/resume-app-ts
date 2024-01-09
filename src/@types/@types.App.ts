export interface IRoute {
  path: string;
  name: string;
  element: JSX.Element;
}
export interface IIcons {
  name: string;
  iconComponent: JSX.Element;
  href?: string;
}
export interface IExperience {
  companyName: string;
  position: string;
  period: string;
  activities: JSX.Element[];
}
export interface IEducation {
  schoolName: string;
  degree: string;
}
interface IConfiguration {
  name: string;
  homePage: {
    fullName?: string;
    routes: IRoute[];
    homePresentation: JSX.Element;
  };
  footerPage: {
    footerIcons: IIcons[];
  };
  aboutPage: {
    aboutPresentation: JSX.Element;
  };
  skillsPage: {
    skillsIcons: IIcons[];
  };
  resumePage: {
    experience: IExperience[];
    education: IEducation[];
  };
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
