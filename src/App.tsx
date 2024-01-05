import { BrowserRouter } from "react-router-dom";
import { MainComponent } from "./Components/MainComponent";
import { ContextApp } from "./Context/ContextApp";
import { ContextTypeApp } from "./@types/@types.App";
import { HomeFragment } from "./Components/Fragments/HomeFragment";
import { AboutFragment } from "./Components/Fragments/AboutFragment";
import { footerIcons, routes } from "./dataConfig/data";

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
