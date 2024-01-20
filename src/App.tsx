import { BrowserRouter } from "react-router-dom";
import { MainComponent } from "./Components/MainComponent";
import { ContextApp } from "./Context/ContextApp";
import { ContextTypeApp } from "./@types/@types.App";
import { HomeFragment, AboutFragment } from "./Components";
import {
  footerIcons,
  routes,
  skillsIcons,
  experience,
  education,
  coursesList,
  formFieldsConfig,
} from "./dataConfig/data";

const App = (): JSX.Element => {
  const contexData: ContextTypeApp = {
    configuration: {
      name: "Armando",
      homePage: {
        fullName: "Frontend developer",
        routes,
        homePresentation: <HomeFragment />,
      },
      aboutPage: {
        aboutPresentation: <AboutFragment />,
      },
      footerPage: {
        footerIcons,
      },
      skillsPage: {
        skillsIcons,
      },
      resumePage: {
        experience,
        education,
        coursesList,
      },
      contactPage: {
        formFields: formFieldsConfig,
      },
    },
  };
  return (
    <ContextApp.Provider value={contexData}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </ContextApp.Provider>
  );
};

export default App;
