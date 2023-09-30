import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { MainComponent } from "./Components/MainComponent";
import { ContextApp } from "./Context/ContextApp";
import { Home, AboutMe, Skills, Resume, Experience, NoMatch } from "./Pages";

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
  return (
    <ContextApp.Provider
      value={{
        configuration: {
          namePage: "Armando Salamanca Ayon",
          routes,
        },
      }}
    >
      <BrowserRouter>
        <ProSidebarProvider>
          <MainComponent />
        </ProSidebarProvider>
      </BrowserRouter>
    </ContextApp.Provider>
  );
};

export default App;
