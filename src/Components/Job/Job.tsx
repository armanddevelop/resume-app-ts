import { Divider, Typography } from "@mui/material";
import { QueryBuilderTwoTone } from "@mui/icons-material";
import { Activitieslist } from "../Activities/Activities";
import { IExperience } from "../../@types/@types.App";

interface IJobProps {
  experience: IExperience[];
}

export const Job = ({ experience }: IJobProps): JSX.Element => {
  return (
    <>
      {experience.map(({ companyName, position, period, activities }, idx) => {
        return (
          <div key={idx}>
            <Typography className="company-title" variant="h5">
              {companyName}
            </Typography>
            <div className="position">{position}</div>
            <div className="period-of-time">
              <QueryBuilderTwoTone color="primary" fontSize="small" />
              {period}
            </div>
            <div className="activities-position">
              <ul>
                <Activitieslist activities={activities} />
              </ul>
            </div>
            <Divider sx={{ marginBottom: "10px" }} />
          </div>
        );
      })}
    </>
  );
};
