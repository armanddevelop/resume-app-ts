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
export interface ICourses {
  nameCourse: string;
  linkCourse?: string;
}
interface IValidation {
  type: string;
  errorMessage: string;
  errorMessageField?: string;
  value?: number;
}
export interface IFormFields {
  field: string;
  type: string;
  id: string;
  name: string;
  value: string;
  label?: string;
  isText?: boolean;
  placeholder?: string;
  validations?: Array<IValidation>;
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
    coursesList: ICourses[];
  };
  contactPage: {
    formFields: IFormFields[];
  };
}

export type ContextTypeApp = {
  configuration: IConfiguration;
};
