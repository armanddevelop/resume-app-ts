import { useContext } from "react";
import { Typography } from "@mui/material";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const AboutMe = (): JSX.Element => {
  const {
    configuration: {
      aboutPage: { aboutPresentation },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <div className="about-content">
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: "45px",
          margin: "0px",
          padding: "0px",
        }}
      >
        About.
      </Typography>
      {aboutPresentation}
    </div>
  );
};
