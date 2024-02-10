import { useContext } from "react";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
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
    <Box className="experience-content">
      <h1>Experience</h1>
      <ImageList>
        {projects.map(({ url, title, img }) => (
          <ImageListItem key={img}>
            <img srcSet={img} src={img} alt={title} loading="lazy" />
            <ImageListItemBar
              title={title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
