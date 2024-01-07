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
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
