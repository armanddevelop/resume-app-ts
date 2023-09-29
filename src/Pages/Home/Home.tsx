import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const Home = (): JSX.Element => {
  const {
    configuration: { namePage },
  } = useContext(ContextApp) || ({} as ContextTypeApp);

  return (
    <Box>
      <Typography variant="h3">
        Hi, <br />
        I'm {namePage}.
      </Typography>
      <div>
        <p>
          I'm a Front end developer, trying to become a fullstack developer,
          this page is made that people know more about my work
        </p>
      </div>
    </Box>
  );
};
