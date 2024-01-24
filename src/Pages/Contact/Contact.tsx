import { useContext, useState } from "react";
import { Box, Container, Typography, Snackbar, Alert } from "@mui/material";
import { GeneralForm } from "../../Components/Form/Form";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";
import { setInitialValues, setValidations } from "../../utils/utils";
import { sendEmail } from "../../Api/apis";

export const Contact = (): JSX.Element => {
  const {
    configuration: { contactPage },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  const { formFields } = contactPage;
  const initialFieldsValues = setInitialValues(formFields);
  const validations = setValidations(formFields);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const position = {
    vertical: "top",
    horizontal: "center",
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };
  return (
    <Box className="container_form">
      <Typography variant="h1" className="title">
        Contact
      </Typography>
      <p>
        If you think I'm a good fit for your project, don't hesitate and send me
        a message, I'll response you as soon as possible.
      </p>
      <Container className="container-form">
        <GeneralForm
          formFields={formFields}
          className="contact-form"
          initialFieldsValues={initialFieldsValues}
          validationsSchema={validations}
          submitFunction={sendEmail}
          setOpenAlert={setOpenAlert}
          setIsSuccess={setIsSuccess}
        />
        <Box>
          <Snackbar
            open={openAlert}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            key={position.vertical + position.horizontal}
          >
            <Alert
              severity={isSuccess ? "success" : "error"}
              variant="filled"
              sx={{ width: "100%" }}
              onClose={handleClose}
            >
              {isSuccess ? "Success send Email" : "Opps!! try again later :("}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
};
