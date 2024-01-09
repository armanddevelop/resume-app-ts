import { SchoolRounded } from "@mui/icons-material";

interface IEducationProps {
  schoolName: string;
  degree: string;
}

export const Education = ({
  schoolName,
  degree,
}: IEducationProps): JSX.Element => {
  return (
    <>
      <div className="education">
        <SchoolRounded color="primary" fontSize="small" />
        <b>{schoolName}</b>
      </div>
      <p>{degree}</p>
    </>
  );
};
