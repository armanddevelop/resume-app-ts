import { MainComponent } from "./Components/MainComponent";
import { ContextApp } from "./Context/ContextApp";
import { Home, AboutMe, Skills, Resume, Experience, NoMatch } from "./Pages";

const App = (): JSX.Element => {
  const routes = [
    {
      path: "/",
      name: "home",
      element: <Home />,
    },
    {
      path: "/aboutme",
      name: "about",
      element: <AboutMe />,
    },
    {
      path: "/skills",
      name: "skills",
      element: <Skills />,
    },
    {
      path: "/resume",
      name: "resume",
      element: <Resume />,
    },
    {
      path: "/experience",
      name: "experience",
      element: <Experience />,
    },
    {
      path: "*",
      name: "notMatch",
      element: <NoMatch />,
    },
  ];
  return (
    <ContextApp.Provider
      value={{
        configuration: {
          namePage: "Armando Salamanca Ayon",
          routes,
        },
      }}
    >
      <MainComponent />
    </ContextApp.Provider>
  );
};

export default App;
