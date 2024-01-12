import { ICourses } from "../../@types/@types.App";
import { Activitieslist } from "../Activities/Activities";

interface ICoursesProps {
  courses: ICourses[];
}

export const Course = ({ courses }: ICoursesProps): JSX.Element => {
  return (
    <ul className="courses">
      <Activitieslist courses={courses} />
    </ul>
  );
};
