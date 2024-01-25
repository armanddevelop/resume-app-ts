import { SchoolRounded } from "@mui/icons-material";
import { IEducation } from "../../@types/@types.App";

interface IEducationProps {
  education: IEducation[];
}

export const Education = ({ education }: IEducationProps): JSX.Element => {
  return (
    <>
      {education.map(({ schoolName, degree }, idx) => {
        return (
          <div key={idx}>
            <div className="education">
              <SchoolRounded color="primary" fontSize="small" />
              <b>{schoolName}</b>
            </div>
            <p>{degree}</p>
          </div>
        );
      })}
    </>
  );
};
