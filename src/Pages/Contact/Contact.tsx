import { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import { GeneralForm } from "../../Components/Form/Form";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";

export const Contact = (): JSX.Element => {
  const {
    configuration: { contactPage },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  const { formFields } = contactPage;
  return (
    <Box className="container_form">
      <Typography variant="h1" className="title">
        Contact
      </Typography>
      <Container className="container-form">
        <GeneralForm formFields={formFields} className="contact-form" />
      </Container>
    </Box>
  );
};
