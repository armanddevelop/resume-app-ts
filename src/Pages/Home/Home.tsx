import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const Home = (): JSX.Element => {
  const {
    configuration: {
      name,
      homePage: { homePresentation },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);

  return (
    <Box className="container_home">
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: "45px",
          margin: "0px",
          padding: "0px",
        }}
      >
        Hi, <br />
        I'm {name}.
      </Typography>
      <div className="content-home">{homePresentation}</div>
    </Box>
  );
};
