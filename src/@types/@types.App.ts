export interface IRoute {
  path: string;
  name: string;
  element: JSX.Element;
}

interface IConfiguration {
  namePage: string;
  routes: IRoute[];
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
