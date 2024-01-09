import { Divider, Typography } from "@mui/material";
import { QueryBuilderTwoTone } from "@mui/icons-material";
import { Activities } from "../Activities/Activities";

interface IJobProps {
  position: string;
  period: string;
  companyName: string;
  activities: JSX.Element[];
}

export const Job = ({
  companyName,
  position,
  period,
  activities,
}: IJobProps): JSX.Element => {
  return (
    <div>
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
          <Activities activities={activities} />
        </ul>
      </div>
      <Divider sx={{ marginBottom: "10px" }} />
    </div>
  );
};
