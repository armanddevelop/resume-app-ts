import { Container, Box, Divider, Typography } from "@mui/material";
import { sidebarClasses } from "react-pro-sidebar";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ContextApp } from "../Context/ContextApp";
import { ContextTypeApp } from "../@types/@types.App";
import { NavBar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { useProviderSideBar } from "../Hooks/useProviderSideBar";

export const MainComponent = (): JSX.Element => {
  const {
    configuration: { routes, fullName },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  const { toggled, breakpoint, setToggle, setBreakPoint } =
    useProviderSideBar();
  const fullNameTitle = fullName && (
    <Typography variant="h2" className="title_page">
      {fullName}
    </Typography>
  );
  return (
    <>
      <Container className="application-container">
        <Box className="header-box">
          <NavBar
            transitionDuration={800}
            className="navbar-content"
            customBreakPoint="800px"
            routes={routes}
            toggled={toggled}
            breakpoint={breakpoint}
            setToggle={setToggle}
            setBreakPoint={setBreakPoint}
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "aliceblue",
              },
            }}
          />
          {fullNameTitle}
        </Box>
        <Box className="info-container">
          {" "}
          <Routes>
            {routes.map(({ element, path, name }) => {
              return <Route path={path} element={element} key={name} />;
            })}
          </Routes>
        </Box>
        <Divider />
        <Box>
          <Footer />
        </Box>
      </Container>
    </>
  );
};
