interface IActivitiesProps {
  activities: JSX.Element[];
}

export const Activities = ({ activities }: IActivitiesProps): JSX.Element => (
  <>{activities.map((element) => element)}</>
);
