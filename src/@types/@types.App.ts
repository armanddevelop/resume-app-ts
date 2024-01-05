export interface IRoute {
  path: string;
  name: string;
  element: JSX.Element;
}

interface IConfiguration {
  fullName?: string;
  name: string;
  routes: IRoute[];
  homePresentation: JSX.Element;
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
