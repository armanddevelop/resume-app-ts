import { Container, Box } from "@mui/material";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextApp } from "../Context/ContextApp";
import { ContextTypeApp } from "../@types/@types.App";
import { NavBar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const MainComponent = (): JSX.Element => {
  const {
    configuration: { routes },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <Container maxWidth="lg">
      <Box>
        <NavBar />
        <Router>
          <Routes>
            {routes.map(({ element, path, name }) => {
              return <Route path={path} element={element} key={name} />;
            })}
          </Routes>
        </Router>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
};
