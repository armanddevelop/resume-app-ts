import { useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";
import { Education } from "../../Components/Education/Education";
import { Job } from "../../Components/Job/Job";

export const Resume = (): JSX.Element => {
  const {
    configuration: {
      resumePage: { experience, education },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <Box className="resume-content">
      <Typography variant="h1" className="title">
        Resume
      </Typography>
      <Typography className="experience-title" variant="h5">
        Experience
      </Typography>
      <div className="resume">
        {experience.map((props) => (
          <Job {...props} />
        ))}
      </div>
      <div className="education-content">
        <Typography className="experience-title" variant="h5">
          Education
        </Typography>
        {education.map((props) => (
          <Education {...props} />
        ))}
      </div>
      <Divider sx={{ marginBottom: "10px" }} />
      <div className="courses-content">
        <Typography className="experience-title" variant="h5">
          Courses
        </Typography>
        <div className="courses">
          <ul></ul>
        </div>
      </div>
    </Box>
  );
};
