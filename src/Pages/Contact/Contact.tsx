import { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import { GeneralForm } from "../../Components/Form/Form";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.App";
import { setInitialValues, setValidations } from "../../utils/utils";
import { sendEmail } from "../../Api/apis";
import { AlertMessage } from "../../Components/Alert/Alert";
import { useAlertMessage } from "../../Hooks/useAlertMessage";

export const Contact = (): JSX.Element => {
  const {
    configuration: { contactPage },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  const { formFields } = contactPage;
  const initialFieldsValues = setInitialValues(formFields);
  const validations = setValidations(formFields);
  const { setOpenAlert, setIsSuccess, handleClose, isSuccess, openAlert } =
    useAlertMessage();
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
        <AlertMessage
          openAlert={openAlert}
          isSuccess={isSuccess}
          handleClose={handleClose}
        />
      </Container>
    </Box>
  );
};
