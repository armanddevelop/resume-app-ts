export interface IRoute {
  path: string;
  name: string;
  element: JSX.Element;
}
export interface IfooterIcons {
  name: string;
  iconComponent: JSX.Element;
  href: string;
}
interface IConfiguration {
  name: string;
  homePage: {
    fullName?: string;
    routes: IRoute[];
    homePresentation: JSX.Element;
  };
  footerPage: {
    footerIcons: IfooterIcons[];
  };
  aboutPage: {
    aboutPresentation: JSX.Element;
  };
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
