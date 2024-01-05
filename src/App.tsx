import { BrowserRouter } from "react-router-dom";
import { MainComponent } from "./Components/MainComponent";
import { ContextApp } from "./Context/ContextApp";
import { Home, AboutMe, Skills, Resume, Experience, NoMatch } from "./Pages";
import { ContextTypeApp } from "./@types/@types.App";
import { HomeFragment } from "./Components/Fragments/HomeFragment";

const App = (): JSX.Element => {
  const routes = [
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
  const contexData: ContextTypeApp = {
    configuration: {
      name: "Armando",
      fullName: "Armando Salamanca",
      routes,
      homePresentation: <HomeFragment />,
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
