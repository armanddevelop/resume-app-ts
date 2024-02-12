import { useContext } from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const Experience = (): JSX.Element => {
  const {
    configuration: {
      experiencePage: { projects },
    },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <Container className="containter-experience">
      <h1>Experience</h1>
      <ImageList>
        {projects.map(({ url, title, img }) => (
          <ImageListItem key={img}>
            <img srcSet={img} src={img} alt={title} loading="lazy" />
            <ImageListItemBar
              title={title}
              actionIcon={
                <Link
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  href={url}
                  target="_blank"
                  underline="hover"
                >
                  <InfoIcon fontSize="medium" />
                </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};
