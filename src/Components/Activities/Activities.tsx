import { Link } from "@mui/material";
import { ICourses } from "../../@types/@types.App";

interface IActivitiesProps {
  activities?: JSX.Element[];
  courses?: ICourses[];
}

export const Activitieslist = ({
  activities,
  courses,
}: IActivitiesProps): JSX.Element => {
  let listToRender = <></>;
  if (activities) {
    listToRender = (
      <>
        {activities.map((element, idx) => (
          <li key={idx}>{element}</li>
        ))}
      </>
    );
  } else if (courses) {
    listToRender = (
      <>
        {courses.map(({ nameCourse, linkCourse }, idx) => {
          return (
            <li key={idx}>
              <Link href={linkCourse} target="_blank" underline="hover">
                <b>{nameCourse}</b>
              </Link>
            </li>
          );
        })}
      </>
    );
  }
  return listToRender;
};
