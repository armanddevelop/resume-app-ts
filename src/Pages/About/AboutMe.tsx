import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const AboutMe = (): JSX.Element => {
  const {
    configuration: {
      aboutPage: { aboutPresentation },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <Box className="about-content">
      <Typography variant="h1" className="title">
        About.
      </Typography>
      {aboutPresentation}
    </Box>
  );
};
