import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const Skills = (): JSX.Element => {
  const {
    configuration: {
      skillsPage: { skillsIcons },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <Box className="skills-content">
      <Typography variant="h1" className="title">
        Skills.
      </Typography>
      <div>
        <p>
          Here are some of the technologies that I feel confident working on
        </p>
      </div>
      <div className="content-skills">
        <ul>
          {skillsIcons.map(({ name, iconComponent }) => (
            <li key={name}>
              {iconComponent} {name}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};
